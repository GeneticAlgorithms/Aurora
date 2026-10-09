import * as THREE from 'three';
import { state } from '../state.js';

/**
 * Off-screen excitation texture. Replaces Imbrizi's uTouch:
 * audio bands painted as regions, beat pulses, cursor trail.
 */
export function createExcitation(size = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const trails = [];

  function paint() {
    const A = state.audio;
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, 0, size, size);

    ctx.globalCompositeOperation = 'lighter';
    const bands = [
      { y: 0.78, h: 0.22, v: A.low, c: '255,80,40' },
      { y: 0.38, h: 0.40, v: A.mid, c: '80,200,220' },
      { y: 0.00, h: 0.38, v: A.high, c: '220,240,255' },
    ];
    for (const b of bands) {
      const a = 0.12 + b.v * 0.55 + A.beat * 0.2;
      ctx.fillStyle = `rgba(${b.c},${a.toFixed(3)})`;
      ctx.fillRect(0, b.y * size, size, b.h * size);
    }

    if (A.beat > 0.4) {
      const r = (0.12 + A.beat * 0.22) * size;
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, r);
      g.addColorStop(0, `rgba(255,255,255,${(A.beat * 0.8).toFixed(3)})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
    }

    if (state.pointer.active) {
      trails.push({ x: state.pointer.x, y: state.pointer.y, a: 1 });
      if (trails.length > 18) trails.shift();
    }
    for (const tr of trails) {
      const g = ctx.createRadialGradient(
        tr.x * size, tr.y * size, 0,
        tr.x * size, tr.y * size, 0.12 * size,
      );
      g.addColorStop(0, `rgba(255,255,255,${(tr.a * 0.9).toFixed(3)})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(tr.x * size, tr.y * size, 0.12 * size, 0, Math.PI * 2);
      ctx.fill();
      tr.a *= 0.84;
    }
    ctx.globalCompositeOperation = 'source-over';
    texture.needsUpdate = true;
  }

  return { texture, paint, canvas };
}
