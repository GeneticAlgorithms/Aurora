import * as THREE from 'three';
import { state } from '../state.js';

export function createStarfield(scene, n = 1800) {
  const pos = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const r = 8 + Math.random() * 22;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.cos(ph);
    pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    const b = 0.55 + Math.random() * 0.45;
    col[i * 3] = 0.75 * b;
    col[i * 3 + 1] = 0.84 * b;
    col[i * 3 + 2] = 1.0 * b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.035,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  function update() {
    const hide = state.ditherMix > 0.9;
    points.visible = !hide;
    mat.opacity = (1 - state.ditherMix) * 0.65;
    points.rotation.y = state.spin * 0.02;
  }

  return { points, update };
}
