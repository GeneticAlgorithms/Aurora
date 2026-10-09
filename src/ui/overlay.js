import { state } from '../state.js';
import { labelFor } from '../intro/director.js';

export function createOverlay() {
  const actEl = document.getElementById('actlabel');
  const wordmark = document.getElementById('wordmark');
  const loadEl = document.getElementById('loading');
  const toastEl = document.getElementById('toast');

  function hideLoading() {
    if (!loadEl) return;
    loadEl.style.opacity = '0';
    setTimeout(() => loadEl.remove(), 650);
  }

  function toast(m, hold = 3200) {
    toastEl.textContent = m;
    toastEl.style.opacity = '1';
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { toastEl.style.opacity = '0'; }, hold);
  }

  function update() {
    const name = state.phase.name;
    actEl.textContent = labelFor(name);
    actEl.style.opacity = (name === 'pde' || name === 'core' || name === 'glass') ? '0' : '0.75';
    wordmark.style.opacity = name === 'pde' ? '1' : '0';
  }

  return { hideLoading, toast, update };
}
