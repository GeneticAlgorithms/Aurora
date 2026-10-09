import { state } from '../state.js';

let lowAvg = 0;
let lastBeat = 0;
let energyHold = 0;
let lastDrop = -10;

export function updateBeat(t) {
  const A = state.audio;
  lowAvg = lowAvg * 0.92 + A.low * 0.08;
  A.beat *= 0.86;
  if (A.low > lowAvg * 1.32 + 0.04 && t - lastBeat > 0.16) {
    lastBeat = t;
    A.beat = 1;
  }

  if (A.energy > 0.62 && A.high > 0.45) energyHold += 1 / 60;
  else energyHold *= 0.85;
  A.drop *= 0.9;
  if (energyHold > 0.45 && t - lastDrop > 4.0) {
    lastDrop = t;
    A.drop = 1;
    energyHold = 0;
  }
}
