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

## Seedance 2.0 director grammar — studied 2026-07-05

For ultra-realistic film scenes (the "AI short film" workflow: an LLM writes the
shot list, Seedance renders it in 4K):

1. **Write technical shot lists, not prose.** Subject + action + shot type +
   camera movement + lighting. Prose gets you stock footage; shot lists get cinema.
2. **Camera direction is mandatory** — omitting it defaults to a static fixed
   angle ("surveillance footage"). Use: dolly, rack focus, tracking, POV, handheld.
3. **Reserve the last 15–20 words for lighting + camera**, e.g. "— backlit
   silhouette, camera slowly pans right."
4. **Reference files are the consistency engine:** text alone ≈ 60–70% character
   consistency; reference images push it above 90%. Seedance accepts up to 12
   files; call them explicitly: `@Character1` (face lock), `@Video1` (motion
   transfer), `@Audio1` (beat sync).
5. **At 4K, call out detail**: "ultra-sharp detail", "crisp texture" — macro,
   product, skin-texture and nature shots benefit most.

Our production-pack b-roll prompts already follow rules 1–3; add the @tags when
rendering in Seedance/Higgsfield.

## Open-source stack — adopt/watch list (studied 2026-07-05)

| Tool | What it is | Status for us |
|---|---|---|
| **Piper TTS** (rhasspy/piper) | Fast local neural text-to-speech, CPU-only, free | ⚡ ADOPT — gives our videos REAL voiceover with no cloud service. Installs here (`pip install piper-tts`) but voice-model download is 403-blocked in this sandbox: run in an open environment once, or commit the ~60MB `.onnx` voice into the repo, then wire into the video-render skill. |
| **Kokoro-82M** | Apache-2.0 TTS, 82M params, runs on CPU | Watch — quality alternative to Piper |
| **Remotion** | React-based programmatic video rendering | Watch — the "grown-up" version of our seek(t) pipeline; adopt if compositions get complex |
| **OpenMontage** | Open-source agentic video production system (12 pipelines, FFmpeg+Remotion+Piper, AGPL-3.0) | Study — it formalizes exactly our architecture; mine its pipelines for upgrades |
| **awesome-seedance-2-prompts** (GitHub) | 2,000+ curated cinematic prompts + consistency guides | Use as prompt reference when rendering film scenes |

## LTX (Lightricks) — verified integration path (2026-07-05)

What's REAL: **LTX-2.3** text-to-video (HD/4K, custom fps/duration) with open
weights on HuggingFace, a commercial **REST API** (ltx.io/model/api, key from your
LTX account's API Keys page), and **LTX-Desktop** (open-source local app; NVIDIA
GPU for local mode, API mode otherwise).
What's NOT real: the `@lightricks/ltx-mcp` npm package seen in circulating config
snippets — verified 404 on npm; do not add it to any `.mcp.json` (a nonexistent
package breaks server startup on every session).

**Setup (one time, by the owner):**
1. Get an API key from your LTX account (Help Center → API Keys).
2. Add it as environment variable `LTX_API_KEY` in the Claude Code **environment
   settings** (claude.ai → this environment's configuration). NEVER commit a key —
   this repository and its Pages site are PUBLIC.
3. Start a fresh session and say "render with LTX" — Claude calls the REST API
   with `$LTX_API_KEY` and drops generative b-roll into `assets/video/`.

**Where LTX slots in:** generative b-roll for the film scenes (our production
packs' prompts + the Seedance director grammar apply as-is), rendered clips
composited with the in-repo pipeline's title/caption layers. LTX-2.3 open weights
also join the open-source table below as the self-hostable option.

## Voices & likenesses — what OpenMontage is (and isn't) for

OpenMontage's voice layer is **Piper local TTS** — synthetic voices generated from
open models. It is NOT a tool for extracting movie characters' voices or images,
and we don't do that under any tool: film characters' voices and likenesses are
copyrighted performances and protected likenesses — recreating them for our
content is off-limits, full stop. Our better play (already built): **original
characters from the Character Forge** + licensed voices (HeyGen/ElevenLabs) or
Piper synthesis. Original characters are also a business advantage — we OWN them.

## 3D features — vetted open-source upgrade path (next cycle)

| Repo | What it gives us | Where it fits |
|---|---|---|
| **mrdoob/three.js** | The canonical WebGL 3D library (MIT) | True 3D DNA helix on the scan-results screen; 3D agent-card gallery |
| **google/model-viewer** | `<model-viewer>` web component — drop-in 3D/AR models (Apache-2.0) | Showcase a 3D "⬡" emblem / agent busts on the home page |
| **pmndrs/drei + react-three-fiber** | Helpers if we ever go React | Later, only with a framework move |
| **vantajs/vanta** | Animated 3D backgrounds (MIT) | Hero background upgrade — but validate perf on mobile first |

Constraints learned: the artifact preview blocks CDNs → **vendor the library into
`assets/js/vendor/`** (three.module.js ≈ 600KB — acceptable on Pages, heavy in the
artifact bundle; ship 3D on the live site, graceful static fallback in preview).
First target: replace the CSS DNA helix with a three.js helix built from the
user's six strand scores (color per strand, rotation speed = vitality).

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

## Character Films — AI generation packs (Higgsfield / Veo / Kling / HeyGen) · added 2026-07-13

The five Character Films (`mv-c1`–`mv-c5`) now have a rendered motion-graphics
teaser (`assets/video/character-films-teaser.mp4`, produced by
`tools/render-character-teaser.mjs` — the pipeline is committed, not
scratchpad-only). To upgrade any film into photoreal AI video, use these packs.
All five leads are **original characters** — no real person's likeness or voice,
ever (see the voice rule above). Workflow per the studied playbook: **anchor the
identity first (3–5 reference stills in Higgsfield), draft cheap (Kling/LTX),
finish expensive (Veo/Seedance), one variable changed per generation.**

> HeyGen note: the HyperFrames connector renders only from claude.ai chat after
> you authorize it in your connector settings — coding agents are blocked by
> design. Presenter scenes therefore go through your HeyGen account (Pipeline B).

### Identity blocks (paste VERBATIM into every prompt for that film)

- **ROSA** — `Rosa Delgado: mid-40s Latina tow-truck company owner, tired but commanding eyes, high-vis jacket over flannel, hair tied back, radio mic clipped to collar, night-shift face lit by dispatch screens`
- **SAL** — `Sal Buonanno: late-60s Italian-American master mechanic, silver stubble, forearms like cable, navy work shirt with embroidered name patch, reading glasses pushed up on forehead, walks with a cane after surgery`
- **AMARA & JOSEF** — `Amara Osei: 30s Ghanaian-British baker, flour-dusted apron over rolled sleeves, precise calm hands. Josef Lind: 40s Scandinavian baker, tall, quiet, lamination-scarred forearms, 3AM eyes`
- **BEN** — `Ben Ashworth: 50s structural engineer, wire-rim glasses, pressed shirt with mechanical pencil in pocket, stands like a man checking load paths, uncomfortable in conversation, precise in everything`
- **LENA** — `Lena Moreau: 50s ceramicist, clay-gray smock, silver-streaked bun, kiln-warmed complexion, hands that never stop turning an invisible pot, gallery-quiet voice`

### Hero shots (Seedance grammar: subject + action + shot + movement; lighting last)

**INBOX ZERO (mood: cold moonlight blue → cyan)**
1. ROSA alone in a dispatch office at 3:47 AM, six radio monitors glowing, she scrolls an endless email list — medium close-up, slow push-in past a coffee mug — sodium streetlight leaking through blinds, monitor cyan on her face, deep shadow.
2. A tow truck's amber beacons sweep an icy highway wreck at night — wide establishing, drone crane-down toward the truck — freezing rain streaks in headlights, cold blue night grade with amber accents.
3. ROSA at dawn approving drafted replies on a tablet, coffee in hand, calm — over-the-shoulder rack focus from screen to her face — first warm daylight through the depot window, cyan UI glow.

**THE KEYS (mood: amber workshop gold)**
1. SAL narrates into a phone propped on a toolbox while his hands rebuild a transmission — locked-off close-up on hands, slow tilt up to his face mid-sentence — single work lamp, deep amber chiaroscuro, dust motes.
2. Apprentice THEO alone in the bay, reading a step from a binder, then stopping mid-job at a faint sweet smell — medium shot, slow dolly-in on his decision — morning light through roll-up door, gold grade.
3. SAL on a cane, handing THEO a worn set of keys across the counter — two-shot, static frame held long — late-afternoon sun flare through the shop window, warm gold, backlit dust.

**THE FAMOUS LOAF (mood: hearth magenta/rose)**
1. JOSEF laminating dough alone at 3 AM, fold after fold — top-down shot transitioning to slow orbital — single pendant lamp over marble, rose-warm highlights, everything else black.
2. AMARA at the prep table at night, spreadsheet beside flour, the moment the number lands — extreme close-up on her eyes over the laptop glow, micro push-in — cool laptop light vs warm oven glow behind, magenta grade.
3. DOT at the counter telling a regular the truth about the new price, both laughing — handheld two-shot, gentle sway — Saturday-morning sun through the shopfront, golden rose, queue bokeh behind.

**NINETY WORDS (mood: violet blueprint)**
1. BEN at a drafting table at night, deleting a 4,000-address spam list, one keystroke — close-up on the hesitating finger, then the ALMOST folder sliding into frame — blue monitor wash, violet shadows, blueprint pinned behind.
2. The Route 9 bridge expansion joint in macro, frost in the gap — macro slider move along the joint, shallow focus — dawn fog, cold violet-blue, one bolt catching first light.
3. MARISOL VEGA reading a short email, a slow smile, typing four words back — medium close-up over her county-office monitor, static — fluorescent office softened by window daylight, violet-cyan grade.

**IN HER OWN VOICE (mood: kiln emerald/ember)**
1. LENA opening a kiln to forty crawled-glaze mugs, steam rising, her face unreadable then resolute — medium shot through the kiln mouth, heat shimmer, slow pull-back — ember orange interior against studio green-gray, dramatic rim light.
2. ZOE cross-legged on the studio floor reading eleven years of journals, pages fanned around her — overhead crane-down spiral — dusty afternoon shafts, emerald-tinted shadows, warm page highlights.
3. LENA photographing a "ruined" riverbed-texture mug like a jewel — macro on the crawl texture, focus breathing, then her thumb pressing Post — soft north light, deep green grade, one ember accent.

### Assembly recipe per film (≈1 evening each)
1. Higgsfield: lock the lead with the identity block + 3–5 generated reference stills (Soul ID). One variable per generation after that.
2. Draft all 9 scenes cheap (Kling/LTX 9:16 + 16:9); reshoot only keepers on Veo/Seedance via Higgsfield's workspace.
3. Presenter/host beats: HeyGen avatar (Pipeline B), narration = the film's exact `narration` strings from `assets/js/data/movies.js` (they're already paced ~95–125 words/scene).
4. VO: HeyGen/ElevenLabs licensed deep narrator (movies speak lower/slower — pitch ≤0.78 equivalent).
5. CapCut: assemble over the teaser's title-card style; captions from narration; export MP4 + WebM per the dual-source rule.
6. Wire into `movies.html` beside the film's poster; production pack (.xls) from the poster button carries the full per-scene script.

---

## Character voices — ElevenLabs pipeline (wired 2026-07-19)

The repo now renders real per-scene narration audio from your ElevenLabs
account. Everything is committed; only the credential and casting are yours.

**One-time setup (≈10 minutes):**
1. In your ElevenLabs account (the michaelparks011 subscription): Profile →
   API Keys → create a key.
2. Put it in the environment as `ELEVENLABS_API_KEY` — Claude Code → your
   environment → Settings → Environment variables. NEVER paste it into chat,
   files, or this public repo. (Note: the cloud sandbox's network policy
   currently blocks `api.elevenlabs.io`; either allow that host in the
   environment's network settings, or run the script on your own machine —
   it needs only Node 18+, zero installs.)
3. Cast the six voices: for each entry in `tools/voices.config.json`, pick a
   Voice Library voice (search terms included) or build one in Voice Design
   from the `direction` text, then paste its voice ID into the config.
   `node tools/voice-elevenlabs.mjs --list-voices` prints your account's
   voices with IDs.

**Render narration:**
```
ELEVENLABS_API_KEY=... node tools/voice-elevenlabs.mjs --movie mv-c1
```
→ one MP3 per scene + `manifest.json` (text, word counts, casting) in the
work dir. `--dry-run` previews the manifest with no key and no cost.
Chronicles (`mv-intro`, `mv-p1..p4`) use the Academy narrator casting;
each Character Film speaks in its own agent's voice.

**Casting policy (locked, non-negotiable):** voices are original synthetic
designs from the ElevenLabs Voice Library / Voice Design only. Never clone a
real person's voice, never imitate a named actor or movie character — the
Character Forge originals are the asset. Consent required, full stop.

**Where it plugs in:** the video-render skill's audio stage accepts these
MP3s in place of the synthesized score — concat scene files with 0.6 s gaps,
duck the drone under them, and master per the skill. That is the path from
"films with captions" to "films that speak in their characters' voices."
