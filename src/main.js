import * as THREE from 'three';
import { state } from './state.js';
import { hsl2rgb, buildDitherPalette } from './palette.js';
import { updateAnalyser } from './audio/analyser.js';
import { updateBeat } from './audio/beat.js';
import { createExcitation } from './audio/excitation.js';
import { createFieldSource } from './sources/fieldSource.js';
import { createSourceManager } from './sources/sourceManager.js';
import { createDither } from './post/dither.js';
import { createComposer } from './post/composer.js';
import { createParticles } from './particles/particles.js';
import { createOrb } from './intro/orb.js';
import { createDirector } from './intro/director.js';
import { createLatex } from './intro/latex.js';
import { createBlackhole } from './intro/blackhole.js';
import { createCosmos } from './intro/cosmos.js';
import { createStarfield } from './intro/starfield.js';
import { createOverlay } from './ui/overlay.js';
import { createEnterGate } from './ui/enterGate.js';
import { createControls } from './ui/controls.js';
import { createChoreography } from './camera/choreography.js';
import { createLight } from './relight/light.js';

const glCanvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({
  canvas: glCanvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
camera.position.set(0, 0.15, 7);

const field = createFieldSource();
const sources = createSourceManager(field);
const dither = createDither();
const composer = createComposer(dither.canvas, glCanvas);
const excitation = createExcitation();
const particles = createParticles(scene);
const orb = createOrb(scene);
const blackhole = createBlackhole(scene);
const cosmos = createCosmos(scene);
const stars = createStarfield(scene);
const light = createLight(scene);
const director = createDirector();
const latex = createLatex();
const overlay = createOverlay();
const choreography = createChoreography(camera);
const palette = [[9, 16, 23], [42, 85, 97], [87, 152, 166], [155, 196, 195], [238, 240, 218]];

createControls({ director, particles, toast: overlay.toast });
const gate = createEnterGate({ toast: overlay.toast });

function resize() {
  state.width = innerWidth;
  state.height = innerHeight;
  state.dpr = Math.min(devicePixelRatio || 1, 2);
  camera.aspect = state.width / state.height;
  camera.updateProjectionMatrix();
  renderer.setSize(state.width, state.height, false);
  composer.resize();
  const { W, H } = sources.resize(state.width, state.height);
  dither.resize(W, H);
}

addEventListener('resize', resize);

const clock = new THREE.Clock();
let last = 0;

function loop() {
  const now = clock.getElapsedTime();
  const dt = Math.min(0.05, now - (last || now));
  last = now;
  const t = now;
  state.time = t;

  updateAnalyser(t);
  updateBeat(t);
  excitation.paint();

  buildDitherPalette(palette, t, state.audio, state.glassMode);
  dither.setPalette(palette);
  state.meshRGB = hsl2rgb((t * 42 + state.audio.high * 170) % 360, 0.62, 0.62);

  const { ph } = director.step(dt);

  particles.update(dt, t, (ei, l) => latex.update(ei, l));
  if (ph.name !== 'pde') latex.update(-1, 0);

  orb.update(t);
  blackhole.update();
  cosmos.update();
  stars.update();
  light.update();
  choreography.update(dt);
  overlay.update();

  if (state.ditherMix > 0.001) {
    const buf = sources.evaluate(t);
    dither.quantize(buf);
  }
  composer.present();
  renderer.render(scene, camera);

  if (state.flash > 0.001) {
    state.flash *= 0.90;
    renderer.domElement.style.boxShadow = `inset 0 0 ${80 * state.flash}px rgba(255,244,220,${state.flash * 0.45})`;
  } else {
    renderer.domElement.style.boxShadow = 'none';
  }

  requestAnimationFrame(loop);
}

resize();
overlay.hideLoading();
gate.reveal();
try { window.__aurora = { scene, camera, particles, orb, cosmos, blackhole, stars, director, state }; } catch { /* ignore */ }
requestAnimationFrame(loop);
