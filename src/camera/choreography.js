import { state } from '../state.js';

/** Timed auto-camera. Phase 0: gentle mouse-follow + per-act framing. */
export function createChoreography(camera) {
  const target = { x: 0, y: 0.15, z: 7 };
  const look = { x: 0, y: 0, z: 0 };

  function update(dt) {
    const ph = state.phase.name;
    const px = (state.pointer.x - 0.5) * 0.8;
    const py = (state.pointer.y - 0.5) * 0.45;

    if (ph === 'pde') { target.x = 0; target.y = 0.35; target.z = 6.4; look.y = 0.35; }
    else if (ph === 'orb') { target.x = 0; target.y = 0.1; target.z = 6.2; look.y = 0; }
    else if (ph === 'accretion' || ph === 'blackhole') {
      target.x = 0.15; target.y = 1.15; target.z = 6.8; look.y = -0.15;
    } else if (ph === 'star' || ph === 'nova') {
      target.x = 0; target.y = 0; target.z = 5.4; look.y = 0;
    } else if (ph === 'galaxy') {
      target.x = 0.4; target.y = 1.4; target.z = 7.2; look.y = -0.2;
    } else {
      target.x = 0; target.y = 0.15; target.z = 7; look.y = 0;
    }

    const k = 1 - Math.pow(0.08, dt * 60);
    camera.position.x += (target.x + px - camera.position.x) * k;
    camera.position.y += (target.y - py - camera.position.y) * k;
    camera.position.z += (target.z - camera.position.z) * k;
    camera.lookAt(look.x, look.y, look.z);

    if (state.audio.beat > 0.7 && (ph === 'accretion' || ph === 'galaxy')) {
      camera.position.z -= 0.04 * state.audio.beat;
    }
  }

  return { update };
}
