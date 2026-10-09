/** Image source — Phase 2. Paired with a precomputed depth map. */
export function createImageSource() {
  return {
    ready: false,
    texture: null,
    depthTexture: null,
    load() {
      return Promise.resolve(null);
    },
  };
}
