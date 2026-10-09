# Aurora Visualizer — End-Product Vision

_Last updated: 2026-09-19_

This is the **experiential** vision — the story the site tells from the moment it loads to the point the interactive magic begins. Companion to `planning/architecture-build-plan.md` (the technical spec), `build-progress.md` (what is actually built), and `artistic-progression.md` (how the look evolved and where it goes next). The opening is a cosmic cold-open that culminates in the dithered, audio-reactive core — then a second register, frosted glass.

---

## The arc at a glance

**Load → enter → PDE prologue → Genesis orb → Accretion & collapse → Stellar rebirth → Dissolution into dithering → Interactive cyan core → Frosted glass (second register).**

Every transition is a *dissolve* — nothing hard-cuts. The whole opening should feel like one continuous breath of matter reorganizing itself.

---

## Act 0 — The PDE Prologue

Large LaTeX partial differential equations glow soft white on black, one at a time, each with a one-line note on its significance, then dissolve and fade into the dark. Ideally they **dissolve as particles**, quietly foreshadowing the substrate that runs the whole show.

The equations aren't decoration — each one foreshadows a later movement, so the prologue is really the **table of contents** of the experience:

| Equation | LaTeX | Foreshadows |
|---|---|---|
| Navier–Stokes | `\rho(\partial_t \mathbf{u} + \mathbf{u}\cdot\nabla\mathbf{u}) = -\nabla p + \mu\nabla^2\mathbf{u} + \mathbf{f}` | the fluid orb & accretion flow |
| Einstein field | `G_{\mu\nu} + \Lambda g_{\mu\nu} = \tfrac{8\pi G}{c^4} T_{\mu\nu}` | gravity, the black hole |
| Wave | `\partial_{tt}u = c^2\nabla^2 u` | audio reactivity |
| Heat / diffusion | `\partial_t u = \alpha\nabla^2 u` | the dithering (error diffusion) and every dissolve |
| Schrödinger | `i\hbar\,\partial_t\Psi = -\tfrac{\hbar^2}{2m}\nabla^2\Psi + V\Psi` | the quantum shimmer of the particle field |
| Gray–Scott (optional) | `\partial_t u = D_u\nabla^2 u - uv^2 + F(1-u)` | organic reaction–diffusion textures |

---

## Act 1 — Genesis Orb

A Perlin-noise displaced sphere appears, breathing and fluctuating, glowing white then drifting through pastel varieties (pale rose, lavender, cyan, amber). *Direct reuse of the `pnoise` mesh from the old engine.*

## Act 2 — Accretion & Collapse

The orb flattens and begins to spin, luminous matter spiraling into an **accretion disk**, then slowly dissolves into a **black hole** — gravitational lensing bending the starfield around a dark core.

## Act 3 — Stellar Rebirth

Out of the singularity, matter condenses into a single brilliant **star** — which detonates. A supernova burst throws particles outward that settle into the slow spiral of a **galaxy**.

## Act 4 — Dissolution into Dithering

The galaxy's stars break apart into the **Floyd-Steinberg dither field** — the cyan, high-contrast, particlized look. The stars should *become* the speckles (seed the field from galaxy luminance), not merely fade against it.

## Act 5 — Frosted Glass

Look-dev v7 found a fifth movement the original arc did not name. After the cyan core has been seen, the same print is developed in a different chemistry: high-key, low-saturation, milky, ridged. In production this should become real reeded-glass refraction over the field, not only a paler palette. It is the inhale after the storm — room for lyrics and relit paintings without leaving the process.

## The interactive core

The live system begins at Act 4 and continues through Act 5. See `planning/architecture-build-plan.md`. Particlized field / image / lyric sources, band-driven excitation, depth relight, glyph narration, cyan FS-dither finish, then glass as a second register, serif UI at the edges.

---

## The key idea that makes it all one piece

**Recommendation: one morphing particle substrate.** Rather than building six separate scenes and crossfading them, use a *single* GPU particle system whose target positions animate through each state:

> PDE glyphs → orb → accretion disk → black-hole shell → star → supernova → galaxy → dither field → frosted glass

Every "dissolve" in the story becomes, literally, the particles **retargeting** to a new position set. The PDE text, the cosmic forms, and later the lyrics are all just target-position buffers for the *same* particles. This unifies the entire arc, reuses one system end to end, and makes the transitions genuinely seamless instead of dip-to-black cuts.

---

## What this vision adds beyond the current architecture (gap analysis)

**Verdict: nothing here is impossible.** It's ambitious but firmly within real-time WebGL; the only heavy path (Gaussian splats) stays optional and precomputed. But the opening sequence introduces pieces the architecture plan doesn't yet cover. **New modules to add:**

1. **Scene director / timeline sequencer** — orchestrates the timed acts, easing, morph targets, and the lifecycle of each effect. *This is the biggest new piece* and the backbone of the intro.
2. **LaTeX → texture** — KaTeX (or MathJax) rendered to a canvas → texture, so equations can glow and then dissolve as particles; plus the significance-caption typography (Instrument Serif family).
3. **Morph-target system** — position buffers for the orb / disk / star / galaxy / glyph states with GPU interpolation between them (this *is* the unified-substrate idea above).
4. **Black-hole shader** — procedural gravitational lensing (screen-space distortion) + an accretion-disk shader. No external model needed — the old engine's black-hole assets can be retired.
5. **Explosion & galaxy dynamics** — a supernova burst (particle velocities) resolving into a spiral-galaxy distribution.
6. **Enter-gate + preloader** — a "click to enter" that both satisfies browser autoplay policy (unlocking WebAudio) and covers asset loading; plus a **skip-intro** for repeat visitors.

**Nothing is *lacking* in a blocking sense** — we already have the orb (pnoise), the particle engine (Imbrizi), the dither look, and the camera choreography. The work is mostly the *director* and the *morph system*, both of which also make the interactive core richer.

---

## Decisions this raises

1. **PDEs & copy** — confirm the equation set above and write the one-line significance captions (I can draft them).
2. **Intro audio** — silent, an ambient drone, or scored? And does the user's track start under the whole intro or kick in at Act 4?
3. **Morph substrate** — unified particle system *(recommended)* vs. separate crossfaded scenes.
4. **Intro length & skip** — target duration per act, and a skip control.
5. **Still open from the build plan** — dither authenticity (true Floyd-Steinberg vs. Bayer) and the exact cyan palette hexes.

---

## Feasibility verdict

Nothing blocks the vision. The main new build cost is the **timeline director** and the **morph-target system** — everything else reuses systems already speced. Recommended order is unchanged: **Phase 0 look-dev slice first** (validate the dither look against the reference frames), then layer the intro sequence on the same particle substrate, then the interactive systems.

---

## PDE prologue — significance captions (draft)

Each equation shows large, glows soft white, holds with its caption, then dissolves as particles.

- **Navier–Stokes** — _The equations of fluid motion: how momentum, pressure, and viscosity braid into turbulence. Everything that flows in this world obeys them._
- **Einstein field equations** — _Mass and energy tell spacetime how to curve. This is the geometry that will collapse into a black hole._
- **Wave equation** — _How a disturbance travels through a medium: the mathematics of sound, and of everything that will pulse to it._
- **Heat / diffusion equation** — _How intensity spreads and averages across space — the same error diffusion that will dither every frame._
- **Schrödinger equation** — _A quantum state evolving as a wave of probability: the shimmer beneath the particle field._
- **Gray–Scott reaction–diffusion (optional)** — _Two chemicals, reacting and diffusing, grow patterns on their own: organic texture from simple rules._

---

## Design rationale — why these additions

The biggest addition is a reason for the PDE prologue. Rather than equations as pretty set-dressing, I mapped each one to a later movement so the prologue becomes the table of contents of the whole experience — Navier–Stokes → the fluid orb & accretion, Einstein field equations → the black hole, the wave equation → audio reactivity, and (my favorite) the heat/diffusion equation → the dithering itself, since Floyd-Steinberg is error diffusion. The math literally foreshadows the visuals.

The second, more important addition is the one insight that makes your whole arc hang together: a single morphing particle substrate. Instead of building six separate scenes and dip-to-black between them, use one GPU particle system whose target positions animate through every state — PDE glyphs → orb → accretion disk → black hole → star → supernova → galaxy → dither field. Every "dissolve" you described becomes the particles retargeting. Same particles carry the equations, the cosmos, and later the lyrics. It's seamless by construction, and it reuses one engine end to end.
