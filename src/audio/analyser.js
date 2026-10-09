import { state } from '../state.js';

let actx = null;
let analyser = null;
let freqData = null;
let audioEl = null;
let micStream = null;

function ensureCtx() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!actx) actx = new AC();
  if (actx.state === 'suspended') actx.resume();
  return actx;
}

function makeAnalyser() {
  analyser = actx.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.82;
  freqData = new Uint8Array(analyser.frequencyBinCount);
  return analyser;
}

/** Live microphone. Needs https or localhost. */
export async function initMic() {
  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      return { ok: false, reason: 'insecure' };
    }
    ensureCtx();
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const src = actx.createMediaStreamSource(micStream);
    makeAnalyser();
    src.connect(analyser);
    state.audio.active = true;
    return { ok: true };
  } catch (e) {
    state.audio.active = false;
    return { ok: false, reason: (e && e.name) || 'error' };
  }
}

/** Play and analyse a music file — works on file:// too. */
export function loadTrack(file) {
  try {
    ensureCtx();
    if (audioEl) {
      try { audioEl.pause(); } catch { /* ignore */ }
    }
    audioEl = new Audio();
    audioEl.src = URL.createObjectURL(file);
    audioEl.loop = true;
    const src = actx.createMediaElementSource(audioEl);
    makeAnalyser();
    src.connect(analyser);
    analyser.connect(actx.destination);
    audioEl.play();
    state.audio.active = true;
    return true;
  } catch {
    return false;
  }
}

export function resumeAudio() {
  if (actx && actx.state === 'suspended') actx.resume();
}

/**
 * FFT → low / mid / high / energy / spectral centroid.
 * Synthetic LFO fallback so the scene always breathes.
 */
export function updateAnalyser(t) {
  const A = state.audio;
  if (A.active && analyser && freqData) {
    analyser.getByteFrequencyData(freqData);
    const n = freqData.length;
    const loE = (n * 0.08) | 0;
    const miE = (n * 0.40) | 0;
    let lo = 0, mi = 0, hi = 0, mag = 0, cent = 0;
    for (let i = 0; i < loE; i++) lo += freqData[i];
    for (let i = loE; i < miE; i++) mi += freqData[i];
    for (let i = miE; i < n; i++) hi += freqData[i];
    for (let i = 0; i < n; i++) {
      mag += freqData[i];
      cent += freqData[i] * i;
    }
    lo /= (loE * 255);
    mi /= ((miE - loE) * 255);
    hi /= ((n - miE) * 255);
    A.low += (lo - A.low) * 0.3;
    A.mid += (mi - A.mid) * 0.3;
    A.high += (hi - A.high) * 0.35;
    A.energy += (((lo + mi + hi) / 3) - A.energy) * 0.25;
    A.centroid += ((mag > 1 ? cent / mag / n : 0.3) - A.centroid) * 0.2;
  } else {
    A.low = 0.30 + 0.28 * Math.abs(Math.sin(t * 1.15));
    A.mid = 0.26 + 0.22 * (0.5 + 0.5 * Math.sin(t * 2.3 + 1));
    A.high = 0.22 + 0.20 * (0.5 + 0.5 * Math.sin(t * 3.9 + 2));
    A.energy = Math.min(1, Math.max(0, 0.20 + 0.16 * Math.sin(t * 1.6) + 0.10 * Math.sin(t * 0.7)));
    A.centroid = 0.35 + 0.15 * Math.sin(t * 0.4);
  }
}
