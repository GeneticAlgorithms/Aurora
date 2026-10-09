# Aurora — Artistic Progression

_Last updated: 2026-09-19_

How the look evolved through nine canvas passes, what those choices mean now that the engine is Three.js, and where the art is allowed to go that 2D canvas could not.

This is not a changelog. It is the through-line.

---

## 1. What look-dev actually discovered

The canvas opening sequence (v0 → v8) was not a demo of features. It was a search for **one substance** that could be math, a body, a catastrophe, and a room of light.

| Pass | Artistic move | What it proved |
|---|---|---|
| v0 | One morphing particle field through the whole cosmic arc, landing on Floyd-Steinberg cyan | The dissolve *is* the medium. Cuts are a lie. |
| v1 | Mic + synthetic breath; pointer as a local weather | The field is alive before anyone “starts the show.” Silence is not stillness. |
| v2 | Equations sit *inside* a luminous orb; click-to-enter | Genesis is present from the first frame. Entry is a rite, not a play button. |
| v3 | A track can replace the mic | The piece is a instrument. File:// is allowed; the room is optional. |
| v4 | Quiet enter (pulse, no wordmark shout) | Luxury is less chrome. The picture is the invitation. |
| v5 | Orb high, equations strictly below, slower holds | Hierarchy: body first, theorem as caption. Time to *read*. |
| v6 | Perlin wireframe under the particles; `aurora` wordmark in the prologue | There is a *mesh* (form) and a *dust* (matter). The name is a whisper. |
| v7 | Faster wobble, colour-cycling sphere, frosted-glass finale | The orb is a living spectrum. After the cyan storm, the weather clears. |
| v8 | Every equation point finds a particle | No leftover dust in the glyphs. Completeness is elegance. |

The destination look did not change: **a bright source carving form out of a dark room, crushed through error diffusion into a tight cyan family.** Everything else is how matter gets there.

---

## 2. The three truths of the picture

Production should keep treating these as separate layers that happen to share a clock:

1. **Mesh** — the pnoise icosphere. This is *form*: a body with a surface, a front and a back, a spin. In canvas it was a line drawing. In Three.js it is a real displaced solid in camera space (already in `intro/orb.js`).
2. **Particles** — the morphing substrate. This is *matter*: the same dust that will later be lyrics, an image, a galaxy. Canvas did 7k on the CPU. Production starts at 9k instanced quads and should climb toward Imbrizi’s tens of thousands, then GPU targets.
3. **Dither field** — the *light*, or rather the way light is allowed to exist in this world. Sequential Floyd-Steinberg on a downscaled buffer is the photographic process. It is not a filter on top of a pretty render; it is the print.

When those three disagree, the piece looks like a tech demo. When they agree, it looks like one organism.

The prologue is the thesis: the wireframe body hangs in the upper third, the heat equation captions the print process that will finish every later frame, the particles are already the same dust that will become the galaxy.

---

## 3. What v7–v8 added that the original vision did not name

The 2026-09-18 vision ended at **Act 4 — dissolution into dithering → interactive core**.

Look-dev found a fifth movement:

**Act 5 — Frosted glass.** After the cyan dither core has been *seen*, the palette lifts, saturation falls, the field becomes milky and ridged. It is not a new scene. It is the same error-diffusion print, developed in a different chemistry.

Artistically this is the inhale after the storm — a clearing that makes room for lyrics, paintings, and the “real special effects” without abandoning the process that made the room. In production it should stop being “a paler ramp” and become **Hung’s reeded-glass refraction** over the same field: the cyan world seen through a physical surface. Palette shift is the sketch; refraction is the painting.

The original vision’s interactive core still begins at the dither. Glass is the *second* register of that core, not a replacement for it.

---

## 4. Extrapolation — what Three.js is for

Canvas look-dev was a pencil study. The production engine exists to do the things the pencil could only indicate.

### 4.1 Gravity becomes an optical event

The canvas black hole was a hole punched in a point cloud plus a bright ring. In WebGL, Act 2–3 should **bend the starfield** — a screen-space lensing pass before dither, so spacetime is something you see, not a missing texture. The Einstein caption in the prologue only pays off if the collapse actually warps the picture.

### 4.2 The galaxy must die *as stars*, not as a fade

Vision + NOTES both flag this: the dissolve is currently a mix (`ditherMix`). Production should sample the galaxy’s luminance into the field buffer so the first dithered specks *are* the stars, breaking. Heat/diffusion was the prologue’s promise; this is where it is kept.

### 4.3 Form and dust on the same deform

The orb mesh and the particle shell already share a clock. They should share a **displacement field** — the same `pnoise` the vertex shader runs, sampled for particle targets — so the dust is not glued onto a separately wobbling cage. That is the 3D version of v7’s `eccentric()` sharing.

### 4.4 Fifty thousand glyphs, not five equations

KaTeX-as-DOM is legible and correct for the prologue’s *reading*. The substrate’s destiny is still Imbrizi: a source texture (equation, lyric, painting) becomes instances. Once morph targets are GPU buffers, the prologue glyphs, the later lyrics, and a depth-relit painting are the same trick at three scales. Per-glyph clusters (Fojcik) are how narration enters without leaving the dust.

### 4.5 The dither is a print process that can change chemistry

Cyan nebula and frosted glass are two developments of one negative. Three.js lets us add more chemistries without new scenes:

- **Core** — high-contrast cyan, wandering hue with spectral centroid (already)
- **Glass** — high-key, low-sat, then real flute refraction
- **Relight** — the print of a *painting* with a moving audio key light (Fojcik)
- **Splat** — optional volume, still dither-printed, never a raw photogram

The audience should feel one room whose lighting and paper change, not a playlist of looks.

### 4.6 Music as the director’s left hand

Look-dev proved the field can breathe without a track. Production should let **energy set transition speed** and **beats quantize act changes**, with arrow keys / MIDI as VJ override. The timeline stays the score; audio is the conductor. A swell holds the galaxy. A drop *is* the supernova.

### 4.7 Camera as a body, not a window

Canvas was orthographic dust. Perspective is new. The production camera already leans: high for accretion, close for the star, wide for the galaxy. Extrapolate that into a slow breathing dolly driven by `low`, and a horizon tilt during collapse — still elegant, never handheld-documentary. The party-ceiling reference is a room you occupy; the camera should feel seated under it.

---

## 5. The arc, revised

**Load → enter (gesture) → PDE prologue (mesh + theorem) → Genesis orb → accretion & collapse (lensing) → star / supernova / galaxy → stars break into dither → interactive cyan core → frosted glass (second register) → lyrics / relit sources over the same print.**

Every transition remains a retarget or a chemistry change. Nothing hard-cuts.

Duration stays first-pass until a track is locked. Skip-to-core (`S`) is for the people who already know the room.

---

## 6. Guardrails (so extrapolation does not become a different piece)

- Do not add a second particle system for lyrics or galaxies. One substrate.
- Do not replace Floyd-Steinberg with a full-res Bayer for convenience. Downscale, diffuse, upscale nearest.
- Do not put UI in the centre of the picture. Instrument Serif at the edges; the pulse to enter; nothing else.
- Do not start the user’s track *on top of* the prologue unless they dropped it. The prologue can breathe on LFOs. The track owns the core.
- Do not let bloom or lensing outrun the dither. Optical events happen *before* the print, then get crushed. That crush is the look.

---

## 7. Near-term artistic tests (use these, not feature checklists)

When a pass is “done,” it should survive these viewings:

1. **Silent.** No mic, no file. Does the orb still feel like a creature?
2. **One equation, held.** Can you read the caption without hunting? Is the body still the subject?
3. **Collapse.** Does the room *bend*, or did we just darken the middle?
4. **Supernova to galaxy.** Do you believe the arms are made of the same sparks?
5. **Dissolve.** Can you point to a star and watch it become a dither speckle?
6. **Glass.** After a minute of cyan, does the pale field feel like weather lifting, or like a preset?
7. **Track.** Drop something with a real kick. Does the print flinch with it?

Those seven are the artistic brief for the next production passes. Engineering tasks are listed in `build-progress.md`.
