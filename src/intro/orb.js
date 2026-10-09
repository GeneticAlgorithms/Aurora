import * as THREE from 'three';
import { PNOISE } from '../glsl/pnoise.js';
import { state } from '../state.js';

const vertexShader = /* glsl */ `
uniform float u_time; uniform float u_energy; uniform float u_low; uniform float u_mid; uniform float u_high; uniform float u_click;
varying float v_noise;
${PNOISE}
void main(){
  float t=u_time;
  vec3 dir1 = normalize(vec3(sin(t*0.61), cos(t*0.49), sin(t*0.37)));
  vec3 dir2 = normalize(vec3(cos(t*0.33), sin(t*0.53), cos(t*0.27)));
  vec3 domainWarp = vec3(
    sin(position.y*1.9 + t*0.8),
    sin(position.z*1.7 - t*0.6),
    sin(position.x*2.1 + t*0.7)
  ) * (0.45 + u_mid*0.55);
  vec3 pWarp = position + domainWarp;
  float n1=pnoise(pWarp*1.15+vec3(t*0.22),vec3(10.0));
  float n2=pnoise(pWarp*2.9+vec3(t*0.47),vec3(10.0));
  float n3=abs(pnoise(pWarp*4.4+vec3(t*0.63),vec3(10.0)));
  float n4=pnoise((pWarp + dir1*2.0)*6.2+vec3(t*0.91),vec3(10.0));
  float lobeA = pow(abs(dot(normalize(position), dir1)), 2.2) * (0.45 + u_high*0.9);
  float lobeB = pow(abs(dot(normalize(position), dir2)), 2.0) * (0.35 + u_mid*0.8);
  float ridge = sin(dot(position, dir1*5.5) + t*4.1) * (0.22 + u_low*0.8);
  float pulse=sin(t*4.8+length(position)*3.2)*(0.2+u_low*1.6);
  float d=n1*(0.28+u_energy*0.7)
    + n2*(0.16+u_mid*0.4)
    + n3*(0.10+u_high*0.35)
    + n4*(0.08+u_high*0.25)
    + lobeA*0.35 + lobeB*0.3 + ridge*0.35 + pulse*0.4 + u_click*0.35;
  vec3 normalOffset=normal*d*0.16;
  vec3 flowOffset = vec3(
    sin(position.y*2.5 + t*1.1),
    sin(position.z*2.2 - t*0.9),
    sin(position.x*2.8 + t*1.0)
  ) * (0.09 + u_mid*0.26 + u_click*0.2);
  vec3 twistOffset=vec3(normal.y-normal.z,normal.z-normal.x,normal.x-normal.y)*(0.1+u_mid*0.28+u_click*0.22);
  vec3 p=position+normalOffset+twistOffset+flowOffset;
  v_noise=n1+n2*0.6+n3*0.35+n4*0.25+lobeA*0.3+lobeB*0.2;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform vec3 u_color; uniform float u_time; uniform float u_energy; uniform float u_intensity; uniform float u_alpha;
varying float v_noise;
void main(){
  float shimmer=0.78+sin(u_time*3.4+v_noise*4.3)*0.16;
  float glow=0.62+v_noise*0.35+u_energy*0.75;
  gl_FragColor=vec4(u_color*shimmer*glow*u_intensity, u_alpha);
}
`;

/** Genesis orb — corgi_rave / Wael pnoise icosphere, audio-driven. */
export function createOrb(scene) {
  const uniforms = {
    u_time: { value: 0 },
    u_energy: { value: 0 },
    u_low: { value: 0 },
    u_mid: { value: 0 },
    u_high: { value: 0 },
    u_click: { value: 0 },
    u_color: { value: new THREE.Color(0.59, 0.80, 0.88) },
    u_intensity: { value: 1.0 },
    u_alpha: { value: 0.85 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    wireframe: true,
    transparent: true,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 4), mat);
  scene.add(mesh);

  function update(t) {
    const A = state.audio;
    const ph = state.phase.name;
    uniforms.u_time.value = t;
    uniforms.u_energy.value = A.energy;
    uniforms.u_low.value = A.low;
    uniforms.u_mid.value = A.mid;
    uniforms.u_high.value = A.high;
    uniforms.u_click.value = A.beat;
    const rgb = state.meshRGB;
    uniforms.u_color.value.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);

    const show = ph === 'pde' || ph === 'orb';
    mesh.visible = show && state.ditherMix < 0.85;
    if (ph === 'pde') {
      mesh.position.set(0, 0.55, 0);
      mesh.scale.setScalar(0.78);
      uniforms.u_alpha.value = 0.72;
    } else if (ph === 'orb') {
      mesh.position.set(0, 0, 0);
      const s = Math.min(1, state.phase.lt / 1.5);
      mesh.scale.setScalar(0.92 + 0.08 * s);
      uniforms.u_alpha.value = 0.88 * s;
    }
    mesh.rotation.y = state.spin * 0.35;
  }

  return { mesh, uniforms, update };
}
