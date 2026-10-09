import * as THREE from 'three';
import { state } from '../state.js';

/** Audio-driven light rig. Full depth-displacement relight is Phase 2. */
export function createLight(scene) {
  const key = new THREE.PointLight(0xbfe8f0, 4, 20);
  key.position.set(2.2, 1.4, 3.5);
  const rim = new THREE.PointLight(0x7aa0ff, 1.4, 18);
  rim.position.set(-3, -0.5, -2);
  const amb = new THREE.AmbientLight(0x1a2830, 0.4);
  scene.add(key, rim, amb);

  function update() {
    const A = state.audio;
    key.intensity = 2.2 + A.energy * 4.5 + A.beat * 3.0;
    rim.intensity = 0.8 + A.high * 2.2;
    const rgb = state.meshRGB;
    key.color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
    key.position.x = 2.2 + Math.sin(state.time * 0.4) * 0.6;
  }

  return { key, rim, update };
}
