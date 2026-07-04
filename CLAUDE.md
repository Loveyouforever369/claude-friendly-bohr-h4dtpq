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
