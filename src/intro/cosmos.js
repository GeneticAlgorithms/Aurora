import * as THREE from 'three';
import { state } from '../state.js';

/** Central bloom sprite for star / supernova. Galaxy distribution lives on the particle substrate. */
export function createCosmos(scene) {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const c = canvas.getContext('2d');
  const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,250,236,1)');
  g.addColorStop(0.22, 'rgba(255,236,202,0.55)');
  g.addColorStop(1, 'rgba(255,220,180,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(3.2, 3.2, 1);
  sprite.visible = false;
  scene.add(sprite);

  function update() {
    const b = state.centerBloom;
    sprite.visible = b > 0.02;
    if (!sprite.visible) return;
    const s = 1.4 + b * 3.2;
    sprite.scale.set(s, s, 1);
    mat.opacity = Math.min(1, b);
  }

  return { sprite, update };
}
