/** Locked look-dev palette + the live nebula / glass ramps from opening-sequence v8. */

export const STATIC = [
  [9, 16, 23],     // #091017 navy
  [42, 85, 97],    // #2a5561 dark teal
  [87, 152, 166],  // #5798a6 cyan
  [155, 196, 195], // #9bc4c3 pale cyan
  [238, 240, 218], // #eef0da warm-white
];

export const PASTELS = [
  [255, 214, 224],
  [201, 184, 255],
  [155, 231, 255],
  [255, 199, 138],
  [224, 238, 235],
];

export function hsl2rgb(h, s, l) {
  h = ((h % 360) + 360) % 360 / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const f = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [
    Math.round(f(h + 1 / 3) * 255),
    Math.round(f(h) * 255),
    Math.round(f(h - 1 / 3) * 255),
  ];
}

/** Five-stop dither ramp. Mutates `out` in place (array of [r,g,b]). */
export function buildDitherPalette(out, t, audio, glassMode) {
  if (glassMode) {
    const gb = 200 + 26 * Math.sin(t * 0.1) + audio.high * 30;
    const gL = [0.38, 0.56, 0.72, 0.86, 0.97];
    const gS = [0.30, 0.30, 0.24, 0.16, 0.08];
    const gHO = [-16, -8, 0, 10, 20];
    for (let i = 0; i < 5; i++) out[i] = hsl2rgb(gb + gHO[i], gS[i], gL[i]);
    return out;
  }
  const base = 245 + 72 * Math.sin(t * 0.22) + 16 * Math.sin(t * 0.075 + 0.7)
    + audio.high * 46 - audio.low * 14;
  const L = [0.08, 0.22, 0.42, 0.68, 0.93];
  const S = [0.44, 0.58, 0.56, 0.36, 0.16];
  const HO = [-18, -9, 0, 10, 20];
  const sb = 1 + audio.energy * 0.12;
  for (let i = 0; i < 5; i++) {
    out[i] = hsl2rgb(base + HO[i], Math.min(0.82, S[i] * sb), L[i]);
  }
  return out;
}

export function rgb01(c) {
  return [c[0] / 255, c[1] / 255, c[2] / 255];
}
