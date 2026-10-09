export const particleVert = /* glsl */ `
attribute float instanceAlpha;
varying vec3 vColor;
varying float vAlpha;
varying vec2 vUv;
void main() {
  vUv = uv;
  vAlpha = instanceAlpha;
  #ifdef USE_INSTANCING_COLOR
    vColor = instanceColor;
  #else
    vColor = vec3(0.85, 0.93, 0.97);
  #endif
  #ifdef USE_INSTANCING
    float sx = length(instanceMatrix[0].xyz);
    vec4 world = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec4 mvPosition = modelViewMatrix * world;
    mvPosition.xy += position.xy * sx;
  #else
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  #endif
  gl_Position = projectionMatrix * mvPosition;
}
`;
