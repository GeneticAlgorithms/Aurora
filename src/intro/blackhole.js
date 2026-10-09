import * as THREE from 'three';
import { state } from '../state.js';

/** Dark core + additive ring. Screen-space lensing is the next intro pass. */
export function createBlackhole(scene) {
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 32, 24),
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
  );
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.38, 0.62, 64),
    new THREE.MeshBasicMaterial({
      color: 0xffc878,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  ring.rotation.x = Math.PI * 0.62;
  const group = new THREE.Group();
  group.add(core, ring);
  group.visible = false;
  scene.add(group);

  function update() {
    const ph = state.phase.name;
    group.visible = ph === 'blackhole' || (ph === 'accretion' && state.phase.lt > 4.5);
    if (!group.visible) return;
    const pr = ph === 'blackhole' ? Math.min(1, state.phase.lt / 6) : 0.15;
    core.scale.setScalar(0.7 + 0.5 * pr);
    ring.material.opacity = (0.25 + 0.45 * state.diskFlick) * (0.4 + 0.6 * pr);
    group.rotation.z = state.spin * 0.15;
  }

  return { group, update };
}
