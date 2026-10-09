# Aurora — Build Progress

_Last updated: 2026-09-19_

Companion to `end-product-vision.md` (what it should feel like) and `planning/architecture-build-plan.md` (how it is built). This is the running log of what exists in the production Three.js tree versus the canvas look-dev.

---

## Where we are

**Phase 0 of the production engine is standing up.** The canvas prototypes (`prototypes/aurora-opening-sequence.html`, locked at look-dev v8) remain the aesthetic reference. The production app lives at `aurora-visualizer/` and is a Vite + Three.js module graph matching the architecture spec.

Run it:

```
cd aurora-visualizer
npm install
npm run dev
```

Open `http://localhost:5173`. Click the pulse to enter. `O` / drop a track, `space` pause, `←` `→` scrub acts, `S` skip to the dither core, `R` restart.

---

## What shipped in this cut

| Module | Status | Notes |
|---|---|---|
| Vite bootstrap + `index.html` | **live** | Dual canvas: dither 2D under transparent WebGL |
| `src/state.js` + `src/palette.js` | **live** | Locked hexes + v8 live nebula / glass ramps |
| `audio/analyser.js` + `beat.js` | **live** | Mic, file, synthetic LFO; low/mid/high/energy/centroid; beat + drop |
| `audio/excitation.js` | **live, unwired to particles** | Off-screen band/beat/cursor texture. Ready for the Imbrizi `uTouch` slot |
| `sources/fieldSource.js` | **live** | CPU FBM + domain-warp + glass ridges, ported from v8 |
| `sources/imageSource.js` / `lyricSource.js` | stub | Phase 2 / 3 |
| `post/dither.js` | **live** | Sequential Floyd-Steinberg on the downscaled buffer |
| `particles/` | **live (CPU morph → Points)** | 9k additive points; act targets ported from v8 into world space. Instanced quads (Imbrizi) next |
| `intro/orb.js` | **live** | `pnoise` icosphere from corgi_rave / Wael, audio-displaced, colour-cycled |
| `intro/director.js` | **live** | v8 timeline including the frosted-glass act |
| `intro/latex.js` | **live (DOM)** | KaTeX overlay; glyph-as-particles not yet |
| `intro/blackhole.js` | **partial** | Dark core + ring. No screen-space lensing |
| `intro/cosmos.js` | **partial** | Star/nova bloom sprite. Galaxy is particles only |
| `camera/choreography.js` | **live (first pass)** | Per-act framing + mouse follow |
| `relight/depth.js` | stub | Phase 2 |
| `intro/morphTargets.js` | stub | GPU lerp slot; CPU still writes positions |

---

## Locked from look-dev (do not regress)

- Palette: `#091017` `#2a5561` `#5798a6` `#9bc4c3` `#eef0da`, with the v8 HSL wander on top
- True Floyd-Steinberg, not Bayer
- One particle substrate across the opening
- Enter-gate as the WebAudio gesture
- PDE as table of contents, equations below the genesis orb
- Dither core, then frosted glass, as the landing of the cold-open
- Synthetic audio fallback so the scene never sits still

---

## Honest gaps vs the vision

1. **PDE glyphs are KaTeX HTML, not particlized.** The morph substrate does not yet retarget to equation silhouettes. Next intro pass: rasterize KaTeX → sample → target buffer (the v8 technique, on the GPU).
2. **Morph is still CPU.** 9k particles lerp in JS. Production intent is DataTextures + vertex-shader lerp (`morphTargets.js`).
3. **Black-hole lensing is missing.** The canvas prototype faked a dark core + ring; the architecture wants screen-space distortion before the dither pass.
4. **Galaxy → dither is still a mix, not a seed.** Stars should break *into* the field, not crossfade against it.
5. **Excitation texture is not sampled** by the particle vertex shader yet.
6. **No lyric / image / depth-relight path** in this cut (Phase 2–3).

---

## Next production passes (in order)

1. **Phase 0 polish** — GPU field shader (same look, less CPU), wire `exciteTex` into particles, seed dither from galaxy luminance, raise particle count toward 30–50k.
2. **Intro fidelity** — KaTeX → particle glyphs; screen-space lensing; denser galaxy bulge; skip-intro remembered.
3. **Phase 1 complete** — excitation RT displaces the field the way Imbrizi’s touch texture did; beat-quantized director cues.
4. **Phase 2** — one depth-mapped painting, audio light rig actually shading relief.
5. **Phase 3** — timed lyrics as per-glyph particles over the dither / relit field; glass as a real refraction pass (Hung), not only a pale palette.
6. **Phase 4** — publish.

Artistic *why* for each of those lives in `artistic-progression.md`.
