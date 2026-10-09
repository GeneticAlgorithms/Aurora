import { state } from '../state.js';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = (h ^ (h >> 13)) * 1274126177 | 0;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}

function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x, y) {
  let s = 0, amp = 0.5, f = 1;
  for (let i = 0; i < 4; i++) {
    s += amp * vnoise(x * f, y * f);
    f *= 2;
    amp *= 0.5;
  }
  return s;
}

/**
 * Generative flowing-noise field — ported from look-dev 01 / opening-sequence v8.
 * Writes a scalar buffer that the dither pass quantizes.
 */
export function createFieldSource() {
  let W = 2, H = 2;
  let buf = new Float32Array(4);

  function resize(cssW, cssH, dot = 6) {
    W = Math.max(2, Math.min(240, Math.ceil(cssW / dot)));
    H = Math.max(2, Math.ceil(W * cssH / cssW));
    buf = new Float32Array(W * H);
    return { W, H };
  }

  function evaluate(t) {
    const A = state.audio;
    const scale = 3.4;
    const eB = A.energy * 0.10 + A.beat * 0.08;
    const aspect = (state.height / state.width) * (W / H);
    const bx = (0.5 + 0.36 * Math.sin(t * 0.5 + A.mid * 3.0) + 0.10 * Math.sin(t * 1.3)) * W;
    const by = (0.5 + 0.32 * Math.sin(t * 0.37 + 1.3 + A.low * 3.5) + 0.08 * Math.cos(t * 1.1)) * H;
    const bR2 = (0.005 + A.energy * 0.009) * W * W;
    const bI = 0.34 + A.energy * 0.5 + A.beat * 0.5;
    const glass = state.glassMode;
    const mx = state.pointer.active ? state.pointer.x : -9;
    const my = state.pointer.active ? state.pointer.y : -9;

    for (let y = 0; y < H; y++) {
      const ny = (y / H) * scale * aspect;
      for (let x = 0; x < W; x++) {
        const nx = (x / W) * scale;
        let v;
        if (glass) {
          const grad = fbm(nx * 0.6 + t * 0.05, ny * 0.6 + t * 0.03);
          const a1 = Math.abs(fbm(nx * 2.6 + t * 0.08, ny * 2.6) - 0.5);
          const a2 = Math.abs(fbm(nx * 5.4 - t * 0.05, ny * 5.4 + 3.0) - 0.5);
          v = clamp01(0.20 + grad * 0.58 + (1.0 - 2.2 * (a1 * 0.6 + a2 * 0.4)) * 0.32 + eB * 0.4);
        } else {
          const wx = fbm(nx * 1.2 + t * 0.15, ny * 1.2);
          const wy = fbm(nx * 1.2 + 5.2, ny * 1.2 - t * 0.12);
          v = fbm(nx + wx * 1.9 + t * 0.05, ny + wy * 1.9 - t * 0.04);
          v = 0.62 * v + 0.38 * fbm(nx * 2.3 - wy * 1.2, ny * 2.3 + wx * 1.2 + t * 0.1);
          v = Math.pow(clamp01((v - 0.28) * 1.30 + 0.36), 0.9) + (1 - y / H) * 0.10 + eB;
        }
        const dbx = x - bx, dby = y - by;
        v += (glass ? 0.3 : 1) * bI * Math.exp(-(dbx * dbx + dby * dby) / bR2);
        if (mx > -1) {
          const dx = x - mx * W, dy = y - my * H;
          v += (0.5 + A.energy * 0.4) * Math.exp(-(dx * dx + dy * dy) / (0.05 * W * W));
        }
        buf[y * W + x] = clamp01(v);
      }
    }
    return buf;
  }

  return {
    resize,
    evaluate,
    get size() { return { W, H }; },
    get buffer() { return buf; },
    fbm,
  };
}
