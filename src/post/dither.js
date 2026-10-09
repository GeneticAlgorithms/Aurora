import { STATIC } from '../palette.js';

/**
 * Authentic sequential Floyd-Steinberg on a downscaled scalar buffer,
 * quantized to the live 5-stop cyan (or glass) ramp.
 */
export function createDither() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let img = null;
  let work = null;
  const palette = STATIC.map((c) => c.slice());

  function resize(W, H) {
    canvas.width = W;
    canvas.height = H;
    img = ctx.createImageData(W, H);
    work = new Float32Array(W * H);
  }

  function setPalette(stops) {
    for (let i = 0; i < 5; i++) palette[i] = stops[i];
  }

  function quantize(src) {
    const W = canvas.width, H = canvas.height, N = palette.length;
    work.set(src);
    const d = img.data;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = y * W + x;
        const ov = work[i];
        let lv = Math.round(ov * (N - 1));
        if (lv < 0) lv = 0; else if (lv > N - 1) lv = N - 1;
        const nv = lv / (N - 1);
        const e = ov - nv;
        if (x + 1 < W) work[i + 1] += e * 7 / 16;
        if (y + 1 < H) {
          if (x > 0) work[i + W - 1] += e * 3 / 16;
          work[i + W] += e * 5 / 16;
          if (x + 1 < W) work[i + W + 1] += e * 1 / 16;
        }
        const c = palette[lv];
        const p = i * 4;
        d[p] = c[0]; d[p + 1] = c[1]; d[p + 2] = c[2]; d[p + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  return { canvas, resize, setPalette, quantize, get palette() { return palette; } };
}
