# AI Business Academy — project memory

Static multi-page site (no build step). Futuristic dark theme. Every tool exports
spreadsheets and can email them. Deep audio narration everywhere via Web Speech API.

## Conventions (follow these)

- **Design tokens** live at the top of `assets/css/style.css`. Never introduce ad-hoc
  colors; chart series MUST use `--series-1..6` (validated for dark surface #0b1020:
  lightness band, chroma floor, CVD ΔE 19.2, contrast ≥3:1). Re-run the dataviz palette
  validator if series colors ever change.
- **Agents are canon.** Any agent named in lessons, movies, playbooks or UI must exist
  in `assets/js/data/agents.js` (the roster is the single source of truth). Check before
  naming one.
- **Counts must be computed, not hardcoded.** Scene/agent/movie counts in hero badges
  drifted from reality once already. Derive from `AI_FAMILY.length`, `LESSONS`, `MOVIES`
  at runtime, or verify with grep before writing a number into copy.
- **Narration is the product.** Movie/lesson scenes target ~95–110 spoken words each
  (~150 wpm at rate 0.95). Movies speak deeper/slower (pitch ≤0.78) than lessons.
  Sentence-chunk all speech so pause/stop stays responsive.
- **localStorage is always try/catch-wrapped** — the site must survive sandboxed
  iframes (the artifact preview) and private browsing.
- **Email pipeline**: `Sheets.emailReport` POSTs to `SITE.emailEndpoint` when set,
  otherwise downloads the file + opens a mailto draft. Keep mailto bodies ≤ ~1500 chars.
- **Nav is duplicated across every page** — adding a page means a sed/replace across
  all HTML files (anchor on the `academy.html` link) + bundle.js PAGES list.

## Verification ritual (what "done" means here)

1. Serve **from the repo root**: `python3 -m http.server 8090`.
2. Headless Chromium via Playwright with
   `chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })`
   (the npm-installed Playwright wants a browser rev that isn't installed — always
   pass executablePath in this environment).
3. Load every page; fail on console/page errors (ignore `net::ERR_CONNECTION_RESET`
   from Google Fonts — headless bypasses the proxy; fonts degrade gracefully).
4. Exercise the flows, not just loads: full DNA quiz, audit calc, profit calc, forge,
   family search, player open/advance, radar render, wall render.
5. Screenshot key screens and actually look at them — the caption/cast-card overlap
   was only caught by eyeballing a screenshot, not by the DOM checks.
6. Rebuild the artifact preview (`scratchpad/bundle.js`) after page changes and
   re-verify inside the bundled iframe shell too.

## Lessons log — locked in

**Went wrong (don't repeat):**
- Started the preview HTTP server from the scratchpad dir → site 404'd, tests reported
  0 posters. *Always start the server from the repo root and curl-check one real page
  before trusting test output.*
- Hardcoded scene counts in hero copy went stale the moment content grew. *Compute or
  grep-verify counts.*
- Player captions overlapped cast-card text on short viewports. *Any absolutely
  positioned overlay needs reserved clearance (slide padding-bottom) + its own
  max-height/scroll; verify visually at 16:9.*
- Playwright fresh-install expected browser rev 1228 vs installed 1194. *Use the
  preinstalled executablePath; never `playwright install` here.*
- First chart palette attempt failed the dark-mode lightness band (neon hues too
  light). *Validate BEFORE styling charts; snap to passing steps.*
- `actions/configure-pages` with `enablement: true` fails on user repos:
  GITHUB_TOKEN gets "Resource not accessible by integration" when creating the
  Pages site. *Deploy by force-syncing the default branch to `gh-pages` instead —
  confirmed working: pushing gh-pages auto-enabled Pages on this public repo.*
- Polled the public github.io URL for 12 minutes to confirm deploy — but this
  sandbox's proxy can't reach *.github.io AT ALL (curl 000, control site also 000),
  so the poll could never succeed. *Before trusting any poll, run a control probe
  against a known-good target. The real deploy signal here is GitHub's own
  "pages build and deployment" workflow run (visible via actions_list) — use that,
  not HTTP, as the source of truth for Pages deploys.*

**Video production — locked in (researched + tested July 2026):**
- HeyGen HyperFrames MCP `compose`/`render_video` are HARD-DISABLED for CLI/coding
  agents (verified by calling — returns a rejection). They work from claude.ai CHAT
  with the HeyGen connector. Don't retry from here; route avatar renders through
  the user's HeyGen account or a claude.ai chat.
- REAL MP4s can be rendered entirely in this repo: seekable HTML composition
  (`window.seek(t)`, all animation a pure function of t — never CSS animations),
  Playwright JPEG frames at 24fps (~1100 frames ≈ 51s capture), score synthesized
  via ffmpeg `aevalsrc` (drone + riser + exp-decay hits at scene changes), assembled
  with libx264. Template: `scratchpad/render-trailer.js`. ffmpeg via
  `@ffmpeg-installer/ffmpeg` (npm) — `ffmpeg-static`'s postinstall download FAILS here.
- VOICE CONSENT RULE: never clone a real actor's/person's voice from online material —
  consent required, full stop. Licensed sources: HeyGen stock voices, ElevenLabs
  Voice Library. Deep "trailer narrator" voices exist in both.
- Tool research (2026): HeyGen Avatar IV = best expressive avatars/lip-sync & volume;
  Synthesia = enterprise training pick (4-hr videos, top licensing scores);
  Veo 3.x = best generative b-roll quality. Full stack + pipeline in PRODUCTION.md.

**Long-form video craft — studied & locked (July 2026):**
- Character consistency is the central long-form challenge (models have no memory
  between clips). Rules: anchor scene first; identity block repeated in every prompt
  (Higgsfield 2.0: 3–5 reference images); ONE variable changed per generation;
  persistent presenter identity for spokesperson content; draft cheap (Kling/MiniMax),
  finish expensive (Veo/Seedance). Full playbook in PRODUCTION.md.
- Higgsfield/SocialClaw have NO MCP connectors (registry searched — nothing). Higgsfield
  is used via its web app; our production-pack b-roll prompts are written to paste
  straight into it.
- The Family Upgrades convention: agents must keep learning. Every study session
  appends entries to `assets/js/data/upgrades.js` (agent, new skill, what was
  learned, how to use it today) — rendered on family.html. Never let it go stale.
- Headless Playwright Chromium has NO H.264/AAC codecs — an MP4 that won't load
  metadata in tests plays fine in real browsers. Ship MP4 + WebM(VP9/Opus) dual
  sources; verify playback via the WebM.
- The stale-server trap, refined: `curl || start-server` passes on a 404 because
  curl exits 0 on any HTTP response. Guard on the STATUS CODE (expect 200 from a
  real page), not on connectivity.

**ROI Reel cycle (2026-07-05):**
- Right: the render pipeline is now a TEMPLATE — deriving render-roi.js from
  render-trailer.js via sed took one try; a 32s video rendered in ~35s total.
  Any new video = write a seekable HTML + derive the render script.
- Right: registry-check BEFORE promising tools (Gemini/Nano Banana 2 have no MCP —
  paste-ready prompts in PRODUCTION.md are the honest bridge).
- Wrong: `cd $SCRATCHPAD && cp … assets/video/` — relative path landed in the wrong
  tree. Use ABSOLUTE repo paths in every cross-directory copy.
- Data locked (2026 SMB surveys): 42% of SMBs use AI in ≥1 process (23% in 2024);
  68% use it regularly; adopters report 20+ hrs and $500–$2,000 saved monthly; 86%
  raising AI budgets. Use these in ROI content; sources on the Future Radar page.

**Study cycle 2026-07-05 (video HSON-SoFz7s + open-source hunt):**
- The video's topic (identified via web search — YouTube pages/oEmbed are
  proxy-blocked; search the video ID instead): LLM-as-director + Seedance 4K
  short films. Director grammar locked into PRODUCTION.md and the packs.
- Piper TTS: installs here, but voice-model downloads (HuggingFace tunnel) are
  403-blocked in this sandbox. Path: run in an open env once or commit the .onnx
  voice; then our videos get REAL local voiceover. Wire into the video-render skill.
- OpenMontage (AGPL) independently converged on our exact architecture
  (compositions + FFmpeg + Piper + agent skills) — validation + a mine for ideas.
- "Program yourself" mechanism that works: project skills in `.claude/skills/`
  (video-render is the first). Encode every proven pipeline as a skill so future
  sessions execute instead of rediscover.
- Cannot create YouTube/Facebook accounts (human identity/login required) — the
  honest bridge is MARKETING.md (full launch kit) + Zapier connector once the
  user links accounts. Never claim social posting ability without a connected path.

**Teaser + outreach cycle (2026-07-05, later):**
- Right: 3rd derivation of the render template (chronicles teaser, 42s) — zero
  failures; the video-render skill governed the whole run. Pipeline is mature.
- Right: verify counts durations of ALL videos on a page in one evaluate (46s+42s).
- Policy locked: movie characters' voices/images are NEVER source material — 
  copyrighted performances/likenesses. OpenMontage's voice layer is Piper TTS
  (synthetic), not extraction. Our originals from the Character Forge are the asset.
- 3D path vetted (three.js vendored, model-viewer, vanta) — implement the WebGL
  DNA helix next cycle; ship on Pages, static fallback in the artifact preview.
- Social truth: no posting APIs without the user's connected accounts. Deliverable
  = SOCIAL-POSTS.md (14 finished posts) + MARKETING.md; Zapier once accounts link.
- The 8 "owner worries" (data leaks, hallucination, replacement, complexity, cost,
  customer distaste, generic output, churn fatigue) now have a permanent answered
  section on community.html — reuse them as content seeds everywhere.

**LTX wiring cycle (2026-07-05, later still):**
- User pasted an MCP config for `@lightricks/ltx-mcp` — package is a 404 on npm
  (hallucinated/template config; they circulate). *Rule: `npm view <pkg>` BEFORE
  adding anything to .mcp.json — a nonexistent command breaks every session start.*
- The REAL LTX path needs no MCP: LTX-2.3 REST API (key from the user's ltx.io
  account) called directly; open weights exist for self-hosting; LTX-Desktop for
  local GPU. Key goes in the environment settings as LTX_API_KEY — NEVER in this
  public repo, never echoed into files or logs.
- Placeholder keys in pasted configs ("your_..._here") = the user hasn't supplied
  a real credential; ask them to set the env var, don't fake-wire it.

**Review Station cycle (2026-07-11):**
- Wrong: one long `verify && git add && commit && push` chain got killed mid-run
  (exit 144, zero output) — commit state was unknowable until the next session ran
  `git status`. *Run verify, commit, and push as SEPARATE commands; a kill then
  leaves an obvious state. On any resume, `git status --short` before redoing work.*
- Right: push-then-check-the-Pages-run caught that the 2026-07-05 "pages build and
  deployment" had silently FAILED (site was stale for 6 days; ~2 of 9 of these
  GitHub-internal runs fail transiently). The next push healed it. *After EVERY
  push to the default branch, confirm the pages run concluded `success` via
  actions_get — never assume.*
- Right: rate-before-deliver gate as a page (review.html) — 14 posts, stars +
  notes → localStorage → .xls/email through the existing Sheets rails. New
  owner-workflow pages should reuse those rails, not grow new export code.
- review.html stays OUT of the artifact-preview bundle on purpose: sandboxed
  iframes don't persist localStorage, so ratings only work on the live Pages URL.
  Owner-only pages also stay out of the main nav (linked directly instead).

**Playbooks deck cycle (2026-07-12, cloud session):**
- Wrong: JS-injected cards carrying the `.reveal` class stay invisible forever —
  main.js's IntersectionObserver only binds to elements present at load time.
  DOM checks (locator counts) PASSED while the section rendered blank; only the
  screenshot eyeball caught it. *Rule: JS-rendered content never gets `.reveal`
  (family.js/future.js already follow this); and screenshot-eyeballing every new
  section is non-negotiable — counts lie.*
- Right: agent-canon enforcement as a script — node-require agents.js + the new
  data file and diff crew names AND roles against the roster (caught nothing this
  time because names were grep-verified first; keep the script, it's free).
- Right: killed a stale hardcoded count found in passing (index badge said "6
  tools that email spreadsheets"; 8 JS files already used Sheets). Reworded to a
  countless claim ("every tool emails you its spreadsheet") — copy that can't
  drift beats copy that must be maintained.
- Gap to fix: the artifact-preview bundle builder lived only in a session
  scratchpad and did NOT survive the machine change — a fresh clone cannot
  rebuild the preview. *Commit build tooling into the repo (tools/ dir), never
  leave it scratchpad-only.* Preview artifact not redeployed this cycle.
- New page pattern that worked: playbooks.html = blueprint accordions (data-driven
  from data/playbooks.js) + hbars range chart (conservative + upside as two fixed
  series, honest "not a guarantee" subtitle) + opportunity map + week-one plan
  export through the existing Sheets rails.

**Preview tooling cycle (2026-07-12, same session):**
- Gap CLOSED: the bundle builder now lives at `tools/build-preview.mjs` —
  `node tools/build-preview.mjs [outDir]` regenerates the whole artifact preview
  from any fresh clone (inlines CSS/JS, strips 30MB of video down to data-URI
  posters, strips Google Fonts links since artifact CSP blocks external hosts,
  injects the postMessage nav shim, excludes review.html).
- Wrong (caught by in-shell verification): plain `#anchor` links inside a srcdoc
  iframe NAVIGATE the frame away and blank it — they don't scroll. The shim must
  intercept hash links and scrollIntoView locally. *Verify inside the bundled
  shell, not just on the served site; srcdoc has its own navigation rules.*
- Right: `Artifact action:list` recovered the live preview URL from a brand-new
  cloud machine (it had only lived in a dead session's context) — same-URL
  redeploy worked. *The artifact list is the durable record of preview URLs;
  never assume a lost session means a lost link.*

**Character Films cycle (2026-07-13):**
- New anthology pattern that worked: five shorts, each starring ONE canon agent
  inside a NEW business with its own human supporting cast (humans are free
  inventions; agents in cast cards are canon-checked by matching "starring/cameo"
  roles against agents.js names AND roles). Every film ends on a title card
  pointing at its matching playbook + the family page — movies sell the tools.
- Word-count discipline, calibrated not assumed: before trimming narrations,
  measured the EXISTING films (avg 98–116, max 141) — the stated ~95–110 target
  is an ideal the canon itself exceeds. Trimmed only scenes ≥130 words. *Measure
  house practice before enforcing house rules.*
- Caught pre-existing drift while verifying: index badge said "99 narrated
  scenes"; computed truth was 98. Hardcoded counts rot silently — the node
  count script (movies+lessons+agents required together) is the cheap guard.
- Splice, don't hand-edit: appended 45 scenes to the 3,000-line movies.js via a
  python splice on the trailing `];` then re-required the file in node to prove
  it still parses. Zero bracket surgery.
- Poster/renderer split by id prefix (mv-p vs mv-c) kept chronicles and
  character films in separate shelves while cinema-mode binge order (MOVIES
  array order) kept working for free.
- Viewing Path pattern (user asked "from knowing nothing to knowing, extremely
  organized"): MOVIE_JOURNEY data maps every film to level (0–3) + concern +
  you-arrive + you-leave + next move, rendered as a ladder with concern
  quick-pick chips that open the matching film directly. Organization IS
  content here — each film row answers who it's for before it plays.

**Teaser render cycle (2026-07-13, same session):**
- The video pipeline is now COMMITTED: `tools/render-character-teaser.mjs` +
  `tools/compositions/character-films-teaser.html` (deps resolved via
  RENDER_DEPS=<any package.json with playwright + @ffmpeg-installer/ffmpeg>).
  The old render-trailer.js/render-roi.js templates died with the scratchpad —
  same failure as the bundle builder; same fix. 1,200 frames captured in 41s.
- Spot-stills-first caught the one layout bug (envelope rows overlapping the
  starring line in Act 1) before any full capture was wasted. The skill's
  "look at stills before committing" step earns its keep every single time.
- New verification wrinkle: headless page screenshots of a PLAYING <video>
  composite BLACK even when the webm decodes fine (separate render surface).
  Don't panic-debug the encode — extract frames from the file itself with
  ffmpeg (-ss T -frames:v 1) and Read those. Bitrate is also a tell: a black
  video would encode to a few kb/s; real content came out at 449 kb/s.
- Higgsfield/Veo/Kling still have no agent-side APIs; the honest bridge got
  stronger: PRODUCTION.md now carries per-film ORIGINAL-character identity
  blocks (Rosa/Sal/Amara+Josef/Ben/Lena) + 3 hero shots each in the Seedance
  grammar, so photoreal versions are one paste away in the user's accounts.
  HyperFrames connector = claude.ai chat only, after the user authorizes it.

**Teaching layer cycle (2026-07-19):**
- The teaching layer is DATA, not pages: a per-scene `lesson:` field (movies.js) +
  `window.FILM_STUDY` (protocol/rule/drill/sell per film) render everywhere through
  one player chip (`.slide-lesson`) and one accordion IIFE (movies.html renderStudy).
  Adding depth to a film = editing data only. Export rails picked both up for free
  (Lesson column in the Script sheet + a Film Study sheet).
- Wrong (check calibration): strict bounding-box overlap checks FAILED renders the
  eyeball called fine — the caption element's top is a transparent gradient, and the
  decorative `.slide-visual` is background art house style deliberately lets content
  cross. *Assert against opaque/critical regions only; demote decorative overlaps to
  info. And settle-wait longer than the .5s slide fade before screenshotting — a
  mid-fade shot shows ghost content from the previous slide and misleads the eyeball.*
- Real fixes the checks did earn: title-card chip needed clearance (title-slide
  visual shrunk via clamp, hidden below 600px viewport height — same pattern as the
  cast-line media query) and the chip needed an opaque backdrop + z-index 2 to stay
  readable over background art (still under the caption band at z6).
- Key-art pipeline: composition art-mode (setArtMode strips captions/letterbox) →
  `--stills` mode screenshots → 860px jpgs in assets/img/film-art/ → `poster.art`
  field → `.poster-art.has-art` (cover bg, gradient wash at .22, icon shrinks to a
  corner mark). Posters went from gradient+emoji to real frames from the film.
- Preview-builder gotcha: art paths live inside INLINED JS STRINGS (movies.js data),
  which the src/href leftover check never sees — the builder now sweeps the whole
  page text for `assets/img/film-art/...jpg` and data-URIs them. *Any asset
  referenced from JS data needs its own sweep; attribute-regex passes miss it.*
- Same session, teaching layer SATURATED: all 104 scenes across all 10 films now
  carry `lesson:` fields (59 chronicle lessons injected via narration-prefix
  anchors — the splice technique is 3-for-3), and FILM_STUDY covers every film.
  renderStudy now iterates window.MOVIES order (not Object.entries) so the shelf
  matches the viewing path. Chronicle study cards sell the TOOLS (dna/time-audit/
  profit/family), character cards sell the playbooks — every film ends in a next move.
- ElevenLabs wired (user has a subscription): `tools/voice-elevenlabs.mjs` +
  `tools/voices.config.json` (per-character voice DIRECTION, blank voice_id slots,
  consent policy in the config itself). Dry-run tested here; real synthesis needs
  ELEVENLABS_API_KEY in env settings AND api.elevenlabs.io allowed — this sandbox's
  gateway 403s ALL general HTTPS (control-probed example.com: also 403), so browsing
  to elevenlabs.io or any web app on the user's behalf is impossible from here, and
  account logins are human-only anyway. Script runs anywhere with Node 18+, zero
  installs. Voice IDs are not secrets (fine in repo); the API key is (env only).
- Higgsfield re-checked in the connector registry this session: still NO agent-side
  path. Don't re-promise it; the bridge stays PRODUCTION.md packs + user's web app.

**Went right (keep doing):**
- Role-card pattern for agents (identity/context/job/standards/boundaries) — reused
  across lessons, movies, family page; keeps all content consistent.
- One recurring protagonist (Sam Reyes, Summit Signs) across the four phase movies —
  narrative continuity made "deeper narration" real instead of just longer.
- Verify-then-ship loop: every commit was preceded by a scripted browser pass; both
  regressions this project has had were caught by it before push.
- Same-URL artifact redeploys for the live preview; users keep one link.
- base64-embedded per-page bundles + postMessage nav shim = whole multi-page site
  works inside a single sandboxed artifact.
- Applying this log works: the Screening Room expansion computed its scene badges
  from `MOVIES` data (no drift), and tested end-of-film auto-next + toggle-cancel
  in the browser before shipping. Cinema-mode countdown pattern: interval on the
  caption band, cleared by go()/close()/toggle — reuse it for any timed handoff.

**Always:** after finishing any feature, append what broke and what worked to this
log. Prefer a new approach over repeating one that's on the "went wrong" list.
