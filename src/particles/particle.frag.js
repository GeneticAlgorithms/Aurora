export const particleFrag = /* glsl */ `
precision highp float;
varying vec3 vColor;
varying float vAlpha;
varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float d = length(p);
  float core = 1.0 - smoothstep(0.0, 0.42, d);
  float halo = 1.0 - smoothstep(0.18, 1.0, d);
  float a = (core * 0.95 + halo * 0.22) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}
`;
