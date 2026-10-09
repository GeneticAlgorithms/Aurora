# Aurora — prototypes

Look-dev prototypes (canvas/JS, dependency-light) to dial in the aesthetic before the
production Three.js/WebGL build. The palette, Floyd-Steinberg parameters and flow math
transfer directly into the real engine. Open any file in a browser.

## Files
- **aurora-opening-sequence.html** — the whole opening arc on one morphing particle
  substrate, stitched fluidly (no hard cuts), landing on the approved dither look:
  PDE prologue → Genesis orb → accretion disk → black hole → star → supernova → galaxy
  → dissolution into the Floyd-Steinberg cyan field (interactive core placeholder).
  MathJax is inlined, so it runs fully offline. ~60s arc, then the dither core holds/loops.
  Controls: `space` pause · `←`/`→` scrub by act · `r` restart · move cursor to stir the core.
- **aurora-lookdev-02-pde-prologue.html** — Act 0 in isolation (real LaTeX equations
  assembling from particles, holding with their significance caption, dispersing).
- **aurora-lookdev-01.html** — the first dither-look study (flowing field → FS dither),
  the Act 4 destination look. (Sibling file, earlier iteration.)

## Palette (sampled from the reference frames)
navy #091017 · dark teal #2a5561 · cyan #5798a6 · pale cyan #9bc4c3 · warm-white #eef0da

## Known refinements queued for next pass
- Orb: push pastel colour drift a touch further; add subtle front/back depth shading.
- Galaxy: larger central bulge, denser star scatter in the arms.
- Black hole: add screen-space lensing distortion (currently a darkened core + ring).
- Dither finale: seed it *from* the galaxy so the dissolve reads as the stars breaking
  into dither, rather than a crossfade.
- Timing: per-act durations are first-pass; tune to music once audio is wired.
