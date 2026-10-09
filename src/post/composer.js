import { state } from '../state.js';

/**
 * Two-layer present: dither canvas (chunky nearest-neighbour) under the
 * transparent WebGL canvas. Matches the look-dev compositing model.
 */
export function createComposer(ditherCanvas, glCanvas) {
  const view = document.getElementById('dither');
  const vctx = view.getContext('2d');

  function resize() {
    const w = innerWidth, h = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    view.width = w * dpr;
    view.height = h * dpr;
    view.style.width = w + 'px';
    view.style.height = h + 'px';
    vctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    vctx.imageSmoothingEnabled = false;
    glCanvas.style.width = w + 'px';
    glCanvas.style.height = h + 'px';
  }

  function present() {
    const w = innerWidth, h = innerHeight;
    const mix = state.ditherMix;
    vctx.globalCompositeOperation = 'source-over';
    if (mix > 0.001) {
      vctx.fillStyle = '#04070c';
      vctx.fillRect(0, 0, w, h);
      vctx.globalAlpha = mix;
      vctx.imageSmoothingEnabled = false;
      vctx.drawImage(ditherCanvas, 0, 0, ditherCanvas.width, ditherCanvas.height, 0, 0, w, h);
      vctx.globalAlpha = 1;
    } else {
      vctx.fillStyle = `rgba(4,7,12,${state.trailA})`;
      vctx.fillRect(0, 0, w, h);
    }
  }

  return { resize, present, view };
}
