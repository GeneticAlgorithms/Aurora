/**
 * GPU morph-target buffers. Phase 0 still writes positions on the CPU
 * (see particles.js). This module is the slot the vertex-shader lerp
 * will consume once target sets are baked as DataTextures.
 */
export function createMorphTargets() {
  return {
    current: 'pde',
    lerp: 0,
    setTarget() {},
    uniforms: null,
  };
}
