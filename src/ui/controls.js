import { state } from '../state.js';
import { loadTrack } from '../audio/analyser.js';

export function createControls({ director, particles, toast }) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);

  function onFile(f) {
    if (f && loadTrack(f)) toast('reacting to ' + f.name.slice(0, 42));
    else toast('couldn’t play that file');
  }

  fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) onFile(e.target.files[0]);
  });
  addEventListener('dragover', (e) => e.preventDefault());
  addEventListener('drop', (e) => {
    e.preventDefault();
    const f = e.dataTransfer?.files?.[0];
    if (f) onFile(f);
  });

  addEventListener('pointermove', (e) => {
    state.pointer.x = e.clientX / innerWidth;
    state.pointer.y = e.clientY / innerHeight;
    state.pointer.active = true;
  });
  addEventListener('pointerleave', () => {
    state.pointer.active = false;
  });

  addEventListener('keydown', (e) => {
    if (e.code === 'Space') { state.paused = !state.paused; e.preventDefault(); }
    else if (e.code === 'ArrowRight') director.skip(1);
    else if (e.code === 'ArrowLeft') director.skip(-1);
    else if (e.key.toLowerCase() === 'r') { director.restart(); particles.reset(); }
    else if (e.key.toLowerCase() === 'o') fileInput.click();
    else if (e.key.toLowerCase() === 's') director.skipToCore();
  });

  return { onFile };
}
