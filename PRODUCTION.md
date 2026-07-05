# 🎬 Production Studio Guide — real scenes, real avatars, real voices

How to turn the Screening Room's films into full production video with photoreal
avatars, cinematic b-roll and professional voices. Researched July 2026.

## The stack (what the research says)

| Layer | Best tool | Why | Alternative |
|---|---|---|---|
| **Avatar presenters** | HeyGen (Avatar IV) | Most expressive avatars, strongest lip-sync, 40+ languages, high-volume friendly (~$29/mo) | Synthesia — the enterprise pick for long training videos (up to 4 hrs), top scores for commercial licensing & ease |
| **Cinematic b-roll** | Google Veo 3.x | Best pure generative quality & physics | Runway, Kling, Luma |
| **Voices** | HeyGen stock voices / ElevenLabs voice library | Professional, deep "trailer" voices — **licensed & consented** | Play.ht, WellSaid |
| **Motion-graphics scenes** | This repo's own pipeline (below) | Free, exact brand match, fully scriptable | HeyGen HyperFrames (from claude.ai chat) |
| **Full-body characters & cinematic suite** | Higgsfield 2.0 | Identity anchoring (3–5 reference images lock a character), camera presets, multi-model workspace (Sora/Kling/Veo/Seedance under one roof) | Use its presets with this repo's b-roll prompts |
| **Assembly** | CapCut / Descript | Free-tier friendly, text-based editing | DaVinci Resolve |

Sources: Synthesia & HeyGen 2026 comparisons, G2 and independent 2026 tool roundups
(see the Future Radar page's briefing links; full URLs in the repo history).

## ⚖️ The voice rule (non-negotiable)

**Never clone a real actor's or any real person's voice from online material.**
Voice cloning requires the documented consent of the voice's owner — legally
(right of publicity, ELVIS-style statutes) and ethically. What we use instead:

- **HeyGen stock voices** — licensed professional voice actors, cleared for commercial use.
- **ElevenLabs Voice Library** — voices shared by consenting creators with revenue share.
- **Your own voice** — you can clone yourself (HeyGen/ElevenLabs) for narration; that's
  your consent to give.

Deep "movie trailer" voices exist in both libraries — search "deep", "narrator",
"cinematic". Same gravitas, zero legal risk.

## Pipeline A — motion-graphics scenes rendered in this repo (proven ✅)

The trailer at `assets/video/meet-the-family-trailer.mp4` was produced entirely
by this pipeline, no external services:

1. **Author** a seekable composition (`scratchpad/trailer.html`): every animation is a
   pure function of time — `window.seek(t)` renders the exact frame state.
2. **Capture** frame-by-frame in headless Chromium (Playwright, JPEG, 24 fps).
3. **Score** synthesized with ffmpeg `aevalsrc` (drone + riser + scene-change hits).
4. **Assemble**: `ffmpeg -framerate 24 -i frames/%05d.jpg -i score.wav … -c:v libx264`.

Reuse `scratchpad/render-trailer.js` as the template. ffmpeg comes from
`@ffmpeg-installer/ffmpeg` (npm) — `ffmpeg-static`'s download fails in this sandbox.

## Pipeline B — avatar scenes with HeyGen (your account, ~1 evening per film)

1. Download a film's **Production pack** (button on each Screening Room poster) —
   it contains the scene-by-scene script, avatar direction, and b-roll prompts.
2. In HeyGen: pick ONE licensed avatar per film role (a "host" for the feature;
   optionally a second avatar as "Sam" for the Chronicles) + one deep licensed voice.
   Consistency matters more than variety — same avatar, same voice, all scenes.
3. Paste each scene's narration → generate the avatar clip (1080p).
4. Generate b-roll for non-presenter scenes with Veo/Runway using the pack's prompts
   (all prompts specify: dark navy #0b1020, neon cyan/violet/magenta glow, letterboxed,
   no on-screen text — text is added in assembly so it stays crisp).
5. Assemble in CapCut/Descript: avatar clips + b-roll + the pack's on-screen text
   as titles. Export MP4 (H.264, 1080p).
6. Drop files into `assets/video/` and wire them in (see below).

> ⚡ Shortcut: the **HeyGen connector on claude.ai** (chat, not this coding
> environment — its compose tool is chat-only, verified) can generate full
> HyperFrames videos from a prompt. Paste a scene's script + style block from the
> production pack into a claude.ai chat with the HeyGen connector enabled.

## Wiring finished videos into the site

- Trailer: already embedded on `movies.html` (`assets/video/meet-the-family-trailer.mp4`).
- Full films: add `videoUrl: "assets/video/<file>.mp4"` support per movie — planned
  next step in `player.js` (play real MP4 in the cinema shell, keep chapters as
  timestamps). Until then, link rendered films from the poster cards.
- Keep files ≤ ~50 MB each for smooth GitHub Pages delivery; 1080p H.264 CRF 21–23.

## Long-form & character consistency — the studied rules (July 2026)

Character consistency is THE central challenge of long-form AI video: models have
no memory between clips. The rules that solve it:

1. **Anchor scene first.** Generate the most important shot (clean close-up) before
   anything else; it becomes the visual reference for every other scene.
2. **Identity block in every prompt.** Repeat the character's key features (hair,
   clothing, distinguishing details) verbatim in every scene prompt. In Higgsfield 2.0,
   upload 3–5 reference images to hard-lock identity.
3. **One variable per generation.** New setting with same angle, OR new angle with
   same lighting — never both. Multi-variable changes are the #1 cause of drift.
4. **Persistent presenter.** For spokesperson content, one HeyGen avatar identity
   across ALL videos — same face, voice, mannerisms. Audiences bond with consistency.
5. **Draft cheap, finish expensive.** Iterate on fast models (Kling/MiniMax), spend
   premium credits (Veo/Seedance) only on publish-quality takes.
6. **Multi-model casting:** Seedance = multi-shot narrative + native audio ·
   Veo = scale/lighting · Kling = character+voice 4K · WAN = restyle/reshoot ·
   MiniMax = fast cheap concepts.

These rules are baked into every film's Production pack (Shot List columns) and
into the Family Upgrades feed (`assets/js/data/upgrades.js`) so the agents teach them.

## Poster & key art — Gemini / Nano Banana 2 prompts (paste-ready)

Google's Gemini image models ("Nano Banana 2") excel at typographic poster art and
photoreal stills — no connector exists for coding agents (registry-verified), so
paste these into the Gemini app / AI Studio directly. One prompt per film; keep the
identity block identical across regenerations:

**Identity block (append to every prompt):** `Style: cinematic sci-fi movie poster,
deep space-navy background #05070f, neon glow accents cyan #22d3ee violet #a78bfa
magenta #f472b6, futuristic thin uppercase sans-serif title with wide letter-spacing,
subtle hexagon ⬡ emblem, letterboxed composition, volumetric light, film grain.`

- **MEET THE FAMILY:** "Movie poster: a lone owner silhouetted before a giant glowing
  doorway of light, 118 faint glowing agent-card silhouettes rising beyond it like a
  constellation org-chart. Title: MEET THE FAMILY." + identity block
- **THE DIAGNOSIS:** "Poster: a glowing DNA double-helix scanned by a beam of cyan
  light over a small sign-shop storefront at midnight. Title: THE DIAGNOSIS." + block
- **THE LIBERATION:** "Poster: an hourglass shattering into glowing birds escaping a
  dark office window at dusk. Title: THE LIBERATION." + block
- **THE ENGINES:** "Poster: three interlocking luminous gear-rings (content, intel,
  council) turning above a city at dawn. Title: THE ENGINES." + block
- **THE COMPOUND:** "Poster: a vault door opening to warm golden light, coins rising
  as glowing graphs. Title: THE COMPOUND." + block

Save results to `assets/video/` as `<film>-poster.jpg` and set them as the poster
art on the Screening Room page.

## Order of production (recommended)

1. ✅ Trailer (done — rendered in-repo)
2. Feature "MEET THE FAMILY" — highest payoff, host-avatar + cast-card b-roll
3. Chronicles I→IV — one per week, same avatar cast
4. Per-industry cuts of the feature (restaurant / trades / e-commerce) — re-voice
   only the examples, reuse 80% of footage
