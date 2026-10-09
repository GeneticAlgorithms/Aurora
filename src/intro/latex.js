import katex from 'katex';
import 'katex/dist/katex.min.css';
import { EQS, EQ_ASM, EQ_HOLD, EQ_DIS } from './director.js';
import { state } from '../state.js';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t) => t * t * (3 - 2 * t);

/** KaTeX overlay for Act 0. Glyph-as-particles comes in a later intro pass. */
export function createLatex() {
  const eqname = document.getElementById('eqname');
  const caption = document.getElementById('caption');
  const formula = document.getElementById('formula');
  let shown = -1;

  function show(i) {
    if (i === shown) return;
    shown = i;
    const e = EQS[i];
    eqname.textContent = e.name;
    caption.textContent = e.cap;
    formula.innerHTML = katex.renderToString(e.tex, {
      displayMode: true,
      throwOnError: false,
      output: 'html',
    });
  }

  function update(ei, l) {
    if (state.phase.name !== 'pde') {
      eqname.style.opacity = 0;
      caption.style.opacity = 0;
      formula.style.opacity = 0;
      shown = -1;
      return;
    }
    show(ei);
    let op = 0;
    if (l < EQ_ASM) op = smooth(clamp01((l / EQ_ASM - 0.25) / 0.75));
    else if (l < EQ_ASM + EQ_HOLD) op = 1;
    else op = 1 - smooth(clamp01(((l - EQ_ASM - EQ_HOLD) / EQ_DIS) / 0.75));
    eqname.style.opacity = String(op * 0.9);
    caption.style.opacity = String(op);
    formula.style.opacity = String(op);
  }

  function reset() { shown = -1; }

  return { update, reset, show };
}
