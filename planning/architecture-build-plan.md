# Aurora Visualizer — Architecture & Build Plan

_Last updated: 2026-09-19_

A professional, TouchDesigner-class audio-reactive scene in Three.js/WebGL. This is the spec we lock against before writing scene code.

---

## 1. Vision

Aurora Visualizer synthesizes three references into one system:

- **Party ceiling projection** → the *look*: a flowing, high-contrast field dissolved through heavy Floyd-Steinberg dithering into a tight cyan palette — a bright light-source carving form out of a dark room.
- **Imbrizi, "Interactive Particles with Three.js"** → the *engine*: instanced quads, one per pixel of a source texture, displaced and excited via an off-screen texture instead of per-particle CPU math.
- **Fojcik, "Relightning Images"** → the *depth & light*: a depth map gives particles real z-relief, and a dynamic light (driven by audio) shades that relief; optional Gaussian-splat playback for true volume.

Through-line: a **source texture** (generative field, image, or rasterized lyrics) is **particlized**, given **depth + reactive light**, **excited by audio**, and finished with the **Floyd-Steinberg cyan pass** under an **elegant serif UI**.

---

## 2. Module layout

```
aurora-visualizer/
  index.html
  src/
    main.js              # bootstrap, scene, composer, RAF loop, resize/dispose
    audio/
      analyser.js        # WebAudio graph, FFT -> low/mid/high/energy
      beat.js            # beat + drop detection (rolling thresholds)
      excitation.js      # paints audio into the off-screen excitation RT
    sources/
      fieldSource.js     # generative flowing-noise field -> RT (default source)
      imageSource.js     # uploaded image -> texture (+ paired depth map)
      lyricSource.js     # rasterize lyric text (canvas) -> texture
      sourceManager.js   # swap / crossfade between sources
    particles/
      geometry.js        # InstancedBufferGeometry, brightness-threshold discard
      particles.js       # RawShaderMaterial, uniform wiring
      particle.vert.js   # inline shader template strings
      particle.frag.js
    relight/
      depth.js           # depth map -> z-offset + normals
      light.js           # audio-driven light rig
    post/
      dither.js          # Floyd-Steinberg pass + cyan palette quantize
      composer.js        # EffectComposer chain
    ui/
      overlay.js         # Instrument Serif title / lyric overlay
      controls.js        # seamless integrated control surface
    camera/
      choreography.js    # timed auto-camera state machine (ported from old engine)
  planning/
    architecture-build-plan.md   # this file
  assets/                # optional images + precomputed depth / splat bakes
```

**Reuse from `corgi_rave`:** the `pnoise` GLSL (-> fieldSource), the low/mid/high/energy + beat/drop logic (-> audio/), the procedural nebula/starfield (-> optional backdrop), the camera choreography state machine. Everything model-loading (black-hole FBX, corgi, the eight "prophet" GLBs) is dropped.

---

## 3. Render-target chain

Ordered offscreen buffers, each frame:

1. **Source RT** — `fieldSource` renders the flowing noise field (or image / lyrics sampled). Output: `sourceTex`.
2. **Excitation RT** — audio painted to a low-res buffer (bands as regions, beat pulses). Output: `exciteTex`. *(Replaces Imbrizi's `uTouch` mouse trail.)*
3. **Particle pass** — instanced particles read `sourceTex` (brightness -> size/discard), `depthTex` (-> z), `exciteTex` (-> displacement/energy); shaded by the audio light rig. Renders to `sceneRT`.
4. **Dither pass** — `sceneRT` -> downscaled buffer -> Floyd-Steinberg error diffusion -> quantize to cyan 3-tone palette -> upscale to screen.
5. **UI overlay** — DOM (serif title / lyrics) composited over the canvas, reacting to `energy` / `high`.

Optional bloom may sit *before* the dither pass, but the dither is the dominant finish.

---

## 4. Real-time vs. precomputed

| Piece | Mode | Notes |
|---|---|---|
| Generative flowing field | Real-time | pnoise / curl FBM in shader |
| Particle field (instanced) | Real-time | tens of thousands at 60 fps |
| Audio analysis + excitation | Real-time | WebAudio + RT paint |
| Depth-displacement relighting | Real-time | requires a depth map per image |
| Floyd-Steinberg dither | Real-time | on a downscaled buffer |
| Serif UI / lyric overlay | Real-time | DOM + canvas raster |
| **Depth map from an image** | **Precomputed** | Depth-Anything in the cloud workspace, once per image |
| **Gaussian-splat reconstruction** | **Precomputed** | offline bake per image; loaded + audio-modulated live |
| **Timed lyric alignment (if from audio)** | **Precomputed** | Whisper / forced-align offline -> timed JSON |

Rule of thumb: anything that **reconstructs 3D or transcribes audio** is baked offline in the cloud workspace; everything that **plays and reacts** runs live in the browser.

---

## 5. Audio hooks

**Graph:** `MediaElementSource` (uploaded file) or `getUserMedia` (mic) -> `AnalyserNode` (fftSize 2048) -> `getByteFrequencyData`.

**Bands (from freq bins):** `low` (~20–160 Hz), `mid` (~160 Hz–2 kHz), `high` (~2–12 kHz), `energy` (overall RMS). Each smoothed with its own attack/decay.

**Beat:** rolling low-band average; fire when `low > avg * k` inside a refractory window.
**Drop:** sustained `high + energy` above threshold with a cooldown.

**Where each drives:**
- `low` / beat -> excitation-texture pulses, light-rig punch, particle z-kick, camera beat-spin.
- `mid` -> field domain-warp amount, particle displacement scale.
- `high` -> particle shimmer/sparkle, overlay glow, dither palette lift.
- `energy` -> global brightness / turbulence, (optional) bloom strength.
- drop -> camera zoom-out kick, palette flash, burst written into the excitation RT.

All exposed as shared uniforms (`u_low, u_mid, u_high, u_energy, u_click`) across passes — matching the old engine's naming so the ported shaders drop in.

---

## 6. Lyrics hooks

**Two ingestion modes:**
- **Timed file (default, reliable):** a `.lrc` / JSON of `{ time, line }`; the player clock selects the active line. Deterministic, no ML at runtime.
- **Live detection (stretch):** Whisper / forced-alignment run *offline* to produce that timed file. True in-browser real-time ASR is a later, heavier option.

**Rendering paths (not mutually exclusive):**
- **Particle source:** rasterize the active line to an offscreen canvas in a chosen font -> feed as `sourceTex` (optionally crossfading from the field), so words *coalesce out of the particle field and dissolve back*.
- **Serif overlay:** Instrument Serif (plus rotating display fonts) DOM layer for crisp legibility; glow driven by `high`.

Per-line font/weight can vary for the "different fonts" atmosphere.

---

## 7. Open locks & build order

**Decisions still needed:**
1. **Default particle source:** generative field *(recommended)* vs. image vs. lyric — and whether live-swappable between all three.
2. **Palette:** confirm navy -> teal -> cyan-white 3-tone, or supply exact hexes.
3. **Dither authenticity:** true sequential Floyd-Steinberg on a downscaled buffer *(recommended, matches the reference)* vs. Bayer/ordered for full-res 60 fps.
4. **Lyrics:** timed file *(recommended)* vs. live detection; and which fonts.
5. **Depth/relight scope:** ship real-time depth-displacement now; Gaussian splat as a later precomputed add-on.

**Phased build:**
- **Phase 0 — Look-dev slice:** flowing field → particlized → FS-dither in cyan. *Standing up 2026-09-19:* Vite/Three.js tree, v8 director, pnoise orb, CPU morph particles, authentic FS, enter-gate, analyser. See `vision points/build-progress.md`.
- **Phase 1 — Audio:** analyser + beat/drop + excitation RT wired into field/particles. *(analyser/beat exist; excitation texture not yet sampled.)*
- **Phase 2 — Depth & light:** depth-displacement + audio light rig (bake one depth map).
- **Phase 3 — Lyrics + UI:** timed lyric source + serif overlay + seamless controls.
- **Phase 4 — Polish & publish:** camera choreography, presets, publish as a persistent shareable page.

---

## 8. Reference links & tooling

**Reference works**
- **Imbrizi — _Interactive Particles with Three.js_** — the instanced particle engine. Code: `github.com/brunoimbrizi/interactive-particles`
- **Fojcik — _Relightning Images_ (Codrops)** — single-image depth relighting. Code: `github.com/DGFX/codrops-relightning-images`
- **Fojcik — glyph-field-over-relit-landscape frames** (`@fojciko`) — individual glowing letters rise and shimmer over a depth-relit painting. Direct reference for the lyric-as-glyph-particles look.

**Gaussian Splat tooling — SuperSplat** — `github.com/DGFX/supersplat` (fork of `playcanvas/supersplat`; live editor at `superspl.at/editor`)
- Free, open-source, **browser-based** tool to **inspect, edit, optimize, and publish 3D Gaussian Splats**. PlayCanvas / TypeScript stack, Node 18+ to build, OSS license. The DGFX fork is a near-vanilla personal copy of upstream.
- **Role in our pipeline** — this is the toolchain for the **precomputed Gaussian-splat path** (§4). Workflow:
  1. Bake a splat from a painting/image **offline** (image → depth / multi-view → 3DGS) in the cloud workspace.
  2. **Clean, crop, optimize, and relight-prep** the splat in SuperSplat.
  3. Export `.ply` / `.splat` / `.sog`.
  4. Load into the scene (PlayCanvas engine, or a Three.js splat loader) and **audio-modulate the playback** — splats are oriented particles, so band energy can drive scale/opacity/jitter just like the instanced field.
- Not real-time reconstruction: a **per-image bake** we then react to. Keeps the live scene at 60 fps.

**Glyph-field refinement (updates §6):** the reference shows lyrics as *individual glowing letters* materializing over the terrain, not just rasterized lines. The lyric particle-source should therefore support a **per-glyph mode** — each character its own particle cluster with independent drift, size, and font — alongside the whole-line raster. This is the "different fonts / atmospheric narration" look at its strongest, and it composites naturally over a depth-relit or splat backdrop.

---

## 9. Opening sequence (intro) — added modules

The end-product vision (`vision points/end-product-vision.md`) opens with a cinematic cold-open — **PDE prologue → orb → accretion disk → black hole → star → supernova → galaxy → dissolve into the dither field** — before the interactive core. It rides the **same particle substrate** as the core: every dissolve is the particles retargeting to a new position set. New modules:

```
  src/
    intro/
      director.js       # timeline sequencer: acts, easing, morph cues, effect lifecycle
      morphTargets.js   # position buffers (glyphs / orb / disk / star / galaxy) + GPU lerp
      latex.js          # KaTeX -> canvas -> texture (equations, then particlized)
      blackhole.js      # procedural gravitational lensing (screen-space) + accretion disk
      cosmos.js         # supernova burst velocities + spiral-galaxy distribution
    ui/
      enterGate.js      # click-to-enter: unlocks WebAudio + covers preload; skip-intro
```

- **director.js** drives the opening on a clock, handing morph targets to the particle system and sequencing the black-hole / cosmos effects and the LaTeX layer.
- **morphTargets.js** is the unified-substrate mechanism: each act is a target position set; the particle vertex shader interpolates current → target with per-particle easing. The core's field / image / lyric sources are simply more target sets.
- **Render-chain delta:** the black-hole lensing is a screen-space distortion inserted *before* the dither pass during Acts 2–3; the LaTeX texture feeds the same particle-source slot as `fieldSource` / `lyricSource`.
- **All real-time.** No new precomputed dependency — Gaussian splats remain the only offline path.

Cross-ref: act-by-act narrative and the PDE significance captions live in `vision points/end-product-vision.md`; this section is the module/tech delta only.

---

## 10. Audio-reactive scenes & transitions

**Feasibility: yes — proven in the prototype.** Mic input (Web Audio `getUserMedia` → `AnalyserNode` FFT) drives the dither hue/brightness, the orb, particle glow, galaxy spin, and a global bloom, with a **synthetic LFO fallback** so the scene keeps breathing when no mic is granted. In the production build the same analyser exposes `low / mid / high / energy` + `beat/onset` + a **spectral-centroid ("melodic brightness")**.

**Within-scene reactivity:**
- Orb: bass → displacement/pulse; energy → radius + brightness; beat → surface kick; centroid → hue.
- Nebula / dither: energy → turbulence + brightness; high-vs-low timbre → the fluctuating hue base; beat → excitation pulse; cursor → local stir.
- Particles: energy → glow scale; high → shimmer; beat → flash.
- Galaxy: spin speed scales with energy (and is faster overall).
- Global: energy/beat → a screen bloom tinted by the live hue.
- **Cursor**: a repel force disturbs particles in every scene; the cursor also stirs the dither field.

**Transition model** — a timeline scaffold modulated by audio, with event triggers, using two mechanics already in the engine:
1. **Morph transition** — particles retarget to the next scene's positions (continuous, no cut). Best for flow / melodic passages.
2. **Dissolve transition** — crossfade one layer out while the dither/nebula fades in. Best for section breaks / drops.

**Musical event → transition mapping:**
- **Bass / kick** (low-band onset): punchy morph-push, or a hard switch *quantized to the downbeat* via a beat clock.
- **Peak / climax** (sustained high energy over a threshold): a burst transition (supernova) or a fast crossfade into the next scene.
- **Wave / swell** (slow rising RMS): a slow crossfade — outgoing opacity down as incoming rises; matches a build.
- **Melodic** (spectral centroid / pitch): drives hue across scenes and can *select* the next scene — bright melodic → orb/galaxy, dark/heavy → black hole.

Transition **speed ∝ energy**; the beat clock quantizes switches to bars so changes land musically. A live **VJ override** (keys / MIDI) can trigger scenes on cue for the show. Because everything rides one particle substrate, every transition is just particles retargeting or a layer crossfade — cheap and continuous.
