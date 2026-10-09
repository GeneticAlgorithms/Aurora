import { state } from '../state.js';

export const EQS = [
  {
    name: 'Navier–Stokes',
    tex: '\\rho\\left(\\partial_t\\mathbf{u}+\\mathbf{u}\\cdot\\nabla\\mathbf{u}\\right)=-\\nabla p+\\mu\\nabla^2\\mathbf{u}+\\mathbf{f}',
    cap: 'The equations of fluid motion — momentum, pressure and viscosity braided into turbulence.',
  },
  {
    name: 'Einstein field equations',
    tex: 'G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}\\,T_{\\mu\\nu}',
    cap: 'Mass and energy tell spacetime how to curve — the geometry that collapses into a black hole.',
  },
  {
    name: 'Wave equation',
    tex: '\\partial_{tt}\\,u=c^2\\,\\nabla^2 u',
    cap: 'How a disturbance travels through a medium — the mathematics of sound.',
  },
  {
    name: 'Heat / diffusion equation',
    tex: '\\partial_t u=\\alpha\\,\\nabla^2 u',
    cap: 'How intensity spreads and averages across space — the same error diffusion that dithers every frame.',
  },
  {
    name: 'Schrödinger equation',
    tex: 'i\\hbar\\,\\partial_t\\Psi=-\\frac{\\hbar^2}{2m}\\nabla^2\\Psi+V\\Psi',
    cap: 'A quantum state evolving as a wave of probability — the shimmer beneath the particle field.',
  },
];

export const EQ_ASM = 2.6;
export const EQ_HOLD = 4.6;
export const EQ_DIS = 2.2;
export const EQ_CYCLE = EQ_ASM + EQ_HOLD + EQ_DIS;
export const PDE_TOTAL = EQ_CYCLE * EQS.length;

export const PHASES = [
  { n: 'pde', d: PDE_TOTAL },
  { n: 'orb', d: 10 },
  { n: 'accretion', d: 7 },
  { n: 'blackhole', d: 6 },
  { n: 'star', d: 4.5 },
  { n: 'nova', d: 2.6 },
  { n: 'galaxy', d: 9 },
  { n: 'dissolve', d: 6 },
  { n: 'core', d: 9 },
  { n: 'glass', d: 1e9 },
];

const CUM = [];
{
  let acc = 0;
  for (const p of PHASES) { CUM.push(acc); acc += p.d; }
}
export { CUM };
export const CORE_START = CUM[8];

const LABELS = {
  pde: '', orb: 'Genesis', accretion: 'Accretion', blackhole: 'Collapse',
  star: 'Rebirth', nova: 'Supernova', galaxy: 'Galaxy', dissolve: 'Dissolution',
  core: '', glass: 'Frosted Glass',
};

const SPIN = {
  pde: 1.6, orb: 1.9, accretion: 0.9, blackhole: 1.8, star: 0.2,
  nova: 0, galaxy: 1.15, dissolve: 0.1, core: 0.05, glass: 0.04,
};

export function labelFor(n) { return LABELS[n] || ''; }

export function phaseAt(t) {
  for (let i = PHASES.length - 1; i >= 0; i--) {
    if (t >= CUM[i]) return { i, name: PHASES[i].n, lt: t - CUM[i], dur: PHASES[i].d };
  }
  return { i: 0, name: 'pde', lt: 0, dur: PHASES[0].d };
}

export function createDirector() {
  let curEq = -1;

  function step(dt) {
    if (!state.paused) state.clock += dt;
    if (state.clock > CORE_START + 1e8) state.clock = CORE_START;
    const ph = phaseAt(state.clock);
    state.phase = ph;

    if (!state.paused) {
      state.spin += dt * (SPIN[ph.name] || 0) * (1 + state.audio.energy * 0.9);
    }

    state.centerBloom = 0;
    state.ditherMix = 0;
    state.glassMode = false;

    if (ph.name === 'pde') { state.haloMul = 1.15; state.coreMul = 0.58; state.trailA = 0.55; }
    else if (ph.name === 'orb') { state.haloMul = 2.6; state.coreMul = 0.95; state.trailA = 0.32; }
    else { state.haloMul = 3.3; state.coreMul = 1.0; state.trailA = 0.30; }

    if (ph.name === 'accretion' || ph.name === 'blackhole') {
      state.diskFlick = 0.74 + 0.26 * Math.sin(state.time * 24.0) + 0.12 * Math.sin(state.time * 10.5 + 1.7);
    } else state.diskFlick = 1;

    if (ph.name === 'core') state.ditherMix = 1;
    if (ph.name === 'glass') { state.ditherMix = 1; state.glassMode = true; }
    if (ph.name !== 'pde') curEq = -1;

    return { ph, curEq, setEq(i) { curEq = i; } };
  }

  function skip(dir) {
    const ph = phaseAt(state.clock);
    const next = Math.min(PHASES.length - 1, Math.max(0, ph.i + dir));
    state.clock = CUM[next];
    curEq = -1;
  }

  function restart() {
    state.clock = 0;
    state.spin = 0;
    curEq = -1;
    state.ditherMix = 0;
    state.flash = 0;
  }

  function skipToCore() {
    state.clock = CUM[8];
    curEq = -1;
  }

  return { step, skip, restart, skipToCore, get curEq() { return curEq; } };
}
