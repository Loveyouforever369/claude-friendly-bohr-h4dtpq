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

**Solo-operator + consolidation cycle (2026-07-20):**
- EVERYTHING.md is now the ONE pasteable file (user asked for a single organized
  file): inventory + all 22 posts with real links inlined + YouTube metadata +
  outreach templates + calendar. When new posts/videos ship, update EVERYTHING.md
  too — it must never lag the per-topic docs it consolidates.
- Wrong: verify script + kit copy both said `radar.html` from memory — the page is
  `future.html` (and the DNA quiz is `dna.html`, not index). *`ls *.html` before
  referencing any page path in copy or tests; concept names drift from filenames.*
- movies.html never reaches Playwright `networkidle` (video preloads hold the
  network) — media-heavy pages need `waitUntil: 'load'` + a short timeout instead.
- WebSearch has a session quota (hit it mid-research) — Exa MCP (`web_search_exa`,
  `web_fetch_exa`) is the working fallback and its server-side fetch also reaches
  YouTube pages the sandbox proxy blocks.
- Zapier MCP "Tool permission stream closed" errors resolve on a single retry.
  VERIFIED 2026-07-20: the user's Zapier now has YouTube enabled with 7 actions —
  first real automated-posting path; drill in and confirm an upload action before
  ever promising a post. (Zapier `selected_api` values stay internal; show only
  app names to the user.)

**First real YouTube post (2026-07-20, same day):**
- SHIPPED: the trailer went live on the user's YouTube via Zapier
  (https://www.youtube.com/watch?v=hGd8ZSYPtWg). The working recipe: params =
  title + video (public URL) + description + privacy_status ONLY. The full param
  set (tags list, thumbnail, boolean strings) crashed Zapier's params-resolver
  with AI_NoObjectGeneratedError. *Keep Zapier write-action params minimal;
  add rich metadata afterward in YouTube Studio.*
- Zapier hydrates file params from public URLs server-side — the gh-pages video
  URL worked even though this sandbox can't reach *.github.io itself.
- Custom thumbnails fail with "doesn't have permissions" until the channel is
  phone-verified (youtube.com/verify) — YouTube-side gate, not a bug; don't retry.
- Respect our own cadence rule even when automation makes spamming easy: 1 video/
  day/platform — the other two videos wait for their calendar slot.

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
