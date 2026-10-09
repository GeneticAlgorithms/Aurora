import * as THREE from 'three';
import { createParticleGeometry, createParticleMaterial, COUNT, ARMS } from './geometry.js';
import { PASTELS } from '../palette.js';
import { state } from '../state.js';

const rnd = () => Math.random();
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t) => t * t * (3 - 2 * t);

function easeCol(p, r, g, b, k) {
  p.cr += (r - p.cr) * k;
  p.cg += (g - p.cg) * k;
  p.cb += (b - p.cb) * k;
}

function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = (h ^ (h >> 13)) * 1274126177 | 0;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const uu = xf * xf * (3 - 2 * xf), vv = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * uu + (c - a) * vv + (a - b - c + d) * uu * vv;
}
function fbm(x, y) {
  let s = 0, amp = 0.5, f = 1;
  for (let i = 0; i < 4; i++) { s += amp * vnoise(x * f, y * f); f *= 2; amp *= 0.5; }
  return s;
}

function eccentric(vx, vy, vz, t, spin, audio) {
  const A = 0.10 + audio.low * 0.34 + audio.beat * 0.28;
  const nn = 1 + A * fbm(vx * 3.0 + t * 2.6, vy * 3.0 + vz * 3.0 + t * 2.1);
  let x = vx * nn, y = vy * nn, z = vz * nn;
  const c = Math.cos(spin), s = Math.sin(spin);
  const c2 = Math.cos(spin * 0.7), s2 = Math.sin(spin * 0.7);
  let X = x * c + z * s, Z = -x * s + z * c;
  const Y = y * c2 - Z * s2;
  Z = y * s2 + Z * c2;
  return { x: X, y: Y, z: Z };
}

/**
 * Unified particle substrate. CPU morph (Phase 0) → GPU instanced quads.
 * Target math is a 3D port of opening-sequence v8.
 */
export function createParticles(scene) {
  const { geo, pos, col, count } = createParticleGeometry(COUNT);
  const mat = createParticleMaterial();
  const mesh = new THREE.Points(geo, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);

  const P = new Array(count);
  for (let i = 0; i < count; i++) {
    const u = rnd(), v = rnd();
    const th = 2 * Math.PI * u, ph = Math.acos(2 * v - 1);
    P[i] = {
      x: (rnd() - 0.5) * 8, y: (rnd() - 0.5) * 5, z: (rnd() - 0.5) * 4,
      tx: 0, ty: 0, tz: 0, vx: 0, vy: 0, vz: 0,
      sx: Math.sin(ph) * Math.cos(th), sy: Math.cos(ph), sz: Math.sin(ph) * Math.sin(th),
      dA: rnd() * 2 * Math.PI, dR: Math.sqrt(rnd()),
      arm: Math.floor(rnd() * ARMS), aT: Math.pow(rnd(), 0.65),
      ph0: rnd() * 6.283, sz0: 0.7 + rnd() * 1.15,
      pr: PASTELS[i % PASTELS.length],
      orb: (i % 9 < 2),
      a: 0, cr: 210, cg: 236, cb: 246, hasT: false,
    };
  }

  let novaInit = false;

  function diskTarget(p, t, shrink) {
    const ang = p.dA + state.spin * (1.7 - p.dR * 0.6);
    const rr = (0.30 + p.dR * 1.0) * shrink;
    const dx = Math.cos(ang) * rr, dz = Math.sin(ang) * rr;
    const dy = (fbm(p.dR * 6 + t, p.dA) - 0.5) * 0.06;
    const TILT = 1.02;
    const Y = dy * Math.cos(TILT) - dz * Math.sin(TILT);
    const Z = dy * Math.sin(TILT) + dz * Math.cos(TILT);
    return { x: dx * 1.85, y: Y * 1.85, z: Z * 1.85, rr };
  }

  function galaxyTarget(p, t) {
    const R = 2.15;
    const bulge = p.aT < 0.14;
    let x, z, y;
    if (bulge) {
      const br = 0.05 + 0.11 * p.dR;
      x = p.sx * br; z = p.sz * br; y = p.sy * br * 0.5;
    } else {
      const base = p.arm * (2 * Math.PI / ARMS);
      const n1 = fbm(p.aT * 3.2 + p.arm * 7.0, t * 0.16 + p.arm);
      const n2 = fbm(p.aT * 5.0 + p.arm * 3.0 + 9.0, t * 0.13);
      const r = p.aT * (0.80 + 0.42 * n2);
      const theta = base + p.aT * 4.2 + state.spin * 0.5 + (n1 - 0.5) * 1.25;
      const th = 0.02 + 0.09 * (1 - p.aT);
      x = Math.cos(theta) * r + p.sx * th;
      z = Math.sin(theta) * r + p.sz * th;
      y = p.sy * 0.09 * (1 - p.aT);
    }
    const TILT = 1.05;
    const Y = y * Math.cos(TILT) - z * Math.sin(TILT);
    const Z = y * Math.sin(TILT) + z * Math.cos(TILT);
    return { x: x * R, y: Y * R, z: Z * R, bulge };
  }

  function orbBehind(p, t, oyc, R) {
    const q = eccentric(p.sx, p.sy, p.sz, t, state.spin, state.audio);
    p.tx = q.x * R; p.ty = oyc + q.y * R; p.tz = q.z * R;
    p.x += (p.tx - p.x) * 0.12;
    p.y += (p.ty - p.y) * 0.12;
    p.z += (p.tz - p.z) * 0.12;
    const rgb = state.meshRGB;
    easeCol(p, rgb[0], rgb[1], rgb[2], 0.06);
    return 0.5 + 0.5 * q.z;
  }

  function updatePDE(lt, t, onEq) {
    const EQ_ASM = 2.6, EQ_HOLD = 4.6, EQ_DIS = 2.2;
    const CYCLE = EQ_ASM + EQ_HOLD + EQ_DIS;
    const nEq = 5;
    let ei = Math.floor(lt / CYCLE);
    if (ei >= nEq) ei = nEq - 1;
    const l = lt - ei * CYCLE;
    onEq(ei, l, EQ_ASM, EQ_HOLD, EQ_DIS);
    const A = state.audio;
    const orbA = (0.8 + 0.6 * A.energy + A.beat * 0.35);
    const sh = 1 + A.high * 0.5 + A.beat * 0.4;
    const oyc = 0.55, R = 1.05;
    if (l < EQ_ASM) {
      const pr = l / EQ_ASM, k = 0.10 + 0.13 * pr, ain = smooth(clamp01(pr * 1.1));
      for (let i = 0; i < count; i++) {
        const p = P[i];
        if (p.orb) {
          const f = orbBehind(p, t, oyc, R);
          p.a = (0.16 + 0.22 * f) * orbA;
        } else {
          p.a = ain * 0.15;
          p.x += (p.tx - p.x) * k;
          p.y += (p.ty - p.y) * k;
        }
      }
    } else if (l < EQ_ASM + EQ_HOLD) {
      for (let i = 0; i < count; i++) {
        const p = P[i];
        if (p.orb) {
          const f = orbBehind(p, t, oyc, R);
          p.a = (0.18 + 0.24 * f) * orbA;
        } else {
          p.x = p.tx + Math.sin(t * 1.3 + p.ph0) * 0.02;
          p.y = p.ty + Math.cos(t * 1.1 + p.ph0) * 0.02;
          p.a = Math.min(1.2, (0.86 + 0.14 * Math.sin(t * 2.4 + p.ph0)) * sh) * 0.18;
        }
      }
    } else {
      const pr = (l - EQ_ASM - EQ_HOLD) / EQ_DIS, aout = 1 - smooth(pr);
      for (let i = 0; i < count; i++) {
        const p = P[i];
        if (p.orb) {
          const f = orbBehind(p, t, oyc, R);
          p.a = (0.18 + 0.24 * f) * orbA;
        } else {
          p.a = aout * 0.12;
        }
      }
    }
  }

  function updateOrb(lt, t) {
    const R = 1.35, pr = clamp01(lt / 2.6), amp = state.audio.energy;
    const rgb = state.meshRGB;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const q = eccentric(p.sx, p.sy, p.sz, t, state.spin, state.audio);
      p.tx = q.x * R; p.ty = q.y * R; p.tz = q.z * R;
      const k = 0.12 + 0.06 * pr;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k; p.z += (p.tz - p.z) * k;
      const front = 0.5 + 0.5 * q.z;
      p.a = Math.min(1, (0.16 + 0.72 * front)) * (0.7 + 0.3 * amp) * Math.min(1, lt / 1.2);
      easeCol(p, rgb[0], rgb[1], rgb[2], 0.06);
    }
  }

  function updateAccretion(t) {
    const A = state.audio;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const q = diskTarget(p, t, 1);
      p.tx = q.x; p.ty = q.y; p.tz = q.z;
      p.x += (p.tx - p.x) * 0.09; p.y += (p.ty - p.y) * 0.09; p.z += (p.tz - p.z) * 0.09;
      const front = 0.5 + 0.5 * (q.z / 1.85);
      const hot = 1 - clamp01(p.dR);
      easeCol(p, 255, 150 + 80 * (1 - hot), 70 + 120 * (1 - hot), 0.06);
      if (p.dR > 0.7) easeCol(p, 150, 180, 255, 0.04);
      p.a = Math.min(1, (0.4 + 0.6 * front)) * (0.85 + 0.3 * A.energy)
        * state.diskFlick * (0.62 + 0.38 * Math.sin(t * 16 + p.dA * 11 + p.ph0));
    }
  }

  function updateBlackhole(lt, t, dur) {
    const pr = clamp01(lt / dur), shrink = 1 - 0.82 * smooth(pr), holeR = 0.35;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const q = diskTarget(p, t, shrink);
      p.tx = q.x; p.ty = q.y; p.tz = q.z;
      const k = 0.10 + 0.10 * pr;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k; p.z += (p.tz - p.z) * k;
      const dc = Math.hypot(p.x, p.y);
      const ring = Math.exp(-Math.pow((dc - holeR) / 0.14, 2));
      if (dc < holeR) p.a *= 0.86;
      else p.a = Math.min(1, 0.35 + 0.65 * ring);
      p.a *= state.diskFlick * (0.62 + 0.38 * Math.sin(t * 17 + p.dA * 11 + p.ph0));
      easeCol(p, 255, 190 + 60 * ring, 120 + 80 * ring, 0.05);
    }
  }

  function updateStar(lt) {
    const pr = clamp01(lt / 4.5);
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const jx = Math.cos(p.ph0 + state.time) * 0.25 * (1 - pr);
      const jy = Math.sin(p.ph0 * 1.7 + state.time) * 0.25 * (1 - pr);
      p.tx = jx; p.ty = jy; p.tz = 0;
      const k = 0.12 + 0.12 * pr;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k; p.z += (p.tz - p.z) * k;
      p.a = Math.min(1, 0.6 + 0.4 * pr);
      easeCol(p, 255, 246, 224, 0.12);
    }
    state.centerBloom = 0.35 + 0.65 * pr + state.audio.energy * 0.2;
    novaInit = false;
  }

  function updateNova(lt, dt) {
    const pr = clamp01(lt / 2.6);
    if (!novaInit) {
      novaInit = true;
      state.flash = 1;
      for (let i = 0; i < count; i++) {
        const p = P[i];
        const a2 = Math.random() * 6.283;
        const sp = 4 + Math.random() * 16;
        p.vx = Math.cos(a2) * sp; p.vy = Math.sin(a2) * sp; p.vz = (Math.random() - 0.5) * 4;
      }
    }
    for (let i = 0; i < count; i++) {
      const p = P[i];
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.vx *= 0.985; p.vy *= 0.985; p.vz *= 0.985;
      p.a = Math.min(1, 1.0 - pr * 0.35);
      easeCol(p, 255, 240 - 40 * pr, 210 - 80 * pr, 0.08);
    }
    state.centerBloom = Math.max(0, 0.95 - pr * 1.3);
  }

  function updateGalaxy(lt, t) {
    const pr = clamp01(lt / 3.0);
    const A = state.audio;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const q = galaxyTarget(p, t);
      p.tx = q.x; p.ty = q.y; p.tz = q.z;
      const k = 0.05 + 0.07 * pr;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k; p.z += (p.tz - p.z) * k;
      const core = q.bulge ? 1 : 1 - clamp01(p.aT * 1.3);
      const front = 0.5 + 0.5 * (q.z / 2.15);
      const pas = p.pr;
      let cr, cg, cb;
      if (q.bulge) { cr = 255; cg = 228; cb = 185; }
      else {
        cr = (150 + 70 * core) * 0.75 + pas[0] * 0.25;
        cg = (182 + 30 * core) * 0.75 + pas[1] * 0.25;
        cb = (255 - 40 * core) * 0.75 + pas[2] * 0.25;
      }
      easeCol(p, cr, cg, cb, 0.06);
      p.a = Math.min(1, (0.32 + 0.68 * front)) * (q.bulge ? 1 : (0.5 + 0.5 * core))
        * (0.85 + 0.3 * A.energy) * (0.6 + 0.4 * Math.abs(Math.sin(t * 2.6 + p.ph0 * 4)));
    }
    state.centerBloom = A.beat * 0.4;
  }

  function updateDissolve(lt, t, dur) {
    const pr = clamp01(lt / dur);
    state.ditherMix = smooth(pr);
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const l = Math.hypot(p.x, p.y) || 1;
      p.x += (p.x / l) * 0.012;
      p.y += (p.y / l) * 0.008;
      p.x += Math.sin(t * 0.8 + p.ph0) * 0.004;
      p.a = Math.max(0, p.a * (1 - pr * 0.06) - 0.004);
    }
  }

  function stir(dt) {
    if (!state.pointer.active) return;
    const A = state.audio;
    const force = 2.4 * (1 + A.energy * 1.5) * dt * 60;
    const px = (state.pointer.x - 0.5) * 7.2;
    const py = (0.5 - state.pointer.y) * 4.2;
    const rad = 1.15, rad2 = rad * rad;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      if (p.a <= 0.02) continue;
      const dx = p.x - px, dy = p.y - py, d2 = dx * dx + dy * dy;
      if (d2 < rad2) {
        const d = Math.sqrt(d2) || 1;
        const f = (1 - d / rad) * force * 0.035;
        p.x += dx / d * f;
        p.y += dy / d * f;
      }
    }
  }

  function upload() {
    const pa = 1 - state.ditherMix;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      const a = Math.max(0, Math.min(1, p.a * pa));
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
      col[i * 3] = Math.min(1, (p.cr / 255) * a);
      col[i * 3 + 1] = Math.min(1, (p.cg / 255) * a);
      col[i * 3 + 2] = Math.min(1, (p.cb / 255) * a);
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
    const cosmic = state.phase.name !== 'pde';
    mat.size = (cosmic ? 0.12 : 0.06) * state.coreMul * (1 + state.audio.energy * 0.5);
  }

  function update(dt, t, onEq) {
    const ph = state.phase;
    if (ph.name === 'pde') updatePDE(ph.lt, t, onEq);
    else if (ph.name === 'orb') updateOrb(ph.lt, t);
    else if (ph.name === 'accretion') updateAccretion(t);
    else if (ph.name === 'blackhole') updateBlackhole(ph.lt, t, ph.dur);
    else if (ph.name === 'star') updateStar(ph.lt);
    else if (ph.name === 'nova') updateNova(ph.lt, dt);
    else if (ph.name === 'galaxy') updateGalaxy(ph.lt, t);
    else if (ph.name === 'dissolve') updateDissolve(ph.lt, t, ph.dur);
    else {
      for (let i = 0; i < count; i++) P[i].a *= 0.92;
    }
    stir(dt);
    upload();
  }

  function reset() {
    novaInit = false;
    for (let i = 0; i < count; i++) {
      const p = P[i];
      p.x = (rnd() - 0.5) * 8; p.y = (rnd() - 0.5) * 5; p.z = (rnd() - 0.5) * 4;
      p.a = 0;
    }
  }

  return { mesh, update, reset, P, count };
}
