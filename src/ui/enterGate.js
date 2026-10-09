import { state } from '../state.js';
import { initMic } from '../audio/analyser.js';

export function createEnterGate({ toast, onEnter }) {
  const enterEl = document.getElementById('enter');
  let entered = false;

  async function enterExperience() {
    if (entered) return;
    entered = true;
    state.entered = true;
    enterEl.classList.remove('show');
    enterEl.classList.add('hide');
    setTimeout(() => enterEl.remove(), 1200);
    onEnter?.();
    const r = await initMic();
    if (r.ok) toast('listening to the room', 3500);
    else toast(
      r.reason === 'insecure'
        ? 'mic needs localhost/https — press O or drop a track'
        : (r.reason === 'NotAllowedError'
          ? 'mic denied — press O or drop a track'
          : 'mic unavailable — press O or drop a track'),
      6500,
    );
  }

  enterEl.addEventListener('click', enterExperience);

  function reveal() {
    enterEl.classList.add('show');
  }

  return { enterExperience, reveal };
}
