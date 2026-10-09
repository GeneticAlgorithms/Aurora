/** Depth-map displacement. Requires a precomputed depth texture per image (Phase 2). */
export function createDepth() {
  return {
    texture: null,
    offset: 1.0,
    apply() {},
  };
}
