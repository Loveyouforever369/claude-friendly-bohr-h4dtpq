# ⬡ AI Business Academy

**Decode your Business DNA. Deploy your AI Family. Command the future.**

A deep, futuristic, fully self-contained training website for business owners and
entrepreneurs: cinematic narrated trainings, interactive diagnostics, 118 hireable
AI agents, a brand-character forge, a future-signals radar, owner profiles and a
community wall — with every tool exporting real spreadsheets that can be emailed
straight from the site.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Futuristic landing hub, the 4-step system, free Starter Pack (3-tab spreadsheet, emailable) |
| `academy.html` | 8 cinematic training modules · 40 scenes with deep audio narration, captions, keyboard controls |
| `movies.html` | **The Screening Room** — a ~17-min feature film introducing all 13 AI Family departments (cast cards, chapters, deep-voice narration, 🍿 auto-play cinema mode, downloadable scripts) + the 90-Day Chronicles: four phase movies following one owner's transformation |
| `dna.html` | Business DNA Scan — 12 questions → 6 strand scores, archetype, DNA code, animated helix, gap prescriptions, report export/email |
| `time-audit.html` | Time Gap Analyzer — hours in, reclaimable hours/dollars out, stacked-bar chart, agent deployment plan, export/email |
| `profit.html` | Profit Lab — 5 AI profit levers, playbooks by business type, conservative ROI calculator with chart, export/email |
| `family.html` | The AI Family — 118 named agents in 13 departments, search + filters, copy-paste hire prompts, roster export |
| `characters.html` | Character Forge — brand characters that embody your business DNA: backstory, personality matrix, voice guide, activation system prompt |
| `top10.html` | The Owner's Top 10 — each move with steps, agents, KPI, 30-day quick win and classic mistake; tracker export |
| `future.html` | July 2026 AI briefing (sourced), **Future AI Tool Radar** (16 signals: what to watch → what it means → how it grows your business → your move), 2026→2030 timeline |
| `profile.html` | Business Profile hub — real photo, service preferences, goals; Owner Card auto-fed by DNA/audit results; direct line for ideas/feedback/complaints |
| `community.html` | Owners' Network — community wall of "what worked" stories, category filters, post your own, submit to be featured |

## Features

- **Deep audio narration** — every major page and all 40 lesson scenes are narrated
  via the Web Speech API. Floating "Audio Command Deck" controls voice, speed,
  pause/resume. Prefers deep voices, pitch-tuned for gravitas. No audio files, no CDN.
- **Cinematic lessons** — a custom video-style player (animated slides, synced
  narration, captions, per-scene progress bar, keyboard shortcuts) — self-contained,
  no video hosting needed.
- **Real spreadsheets, emailed from the site** — every tool generates CSV and
  multi-sheet Excel (`.xls` SpreadsheetML) files client-side. Email delivery works
  two ways (see below).
- **Charts** — dataviz-safe: the categorical palette was validated for the dark
  surface (lightness band, chroma floor, CVD ΔE 19.2, contrast ≥ 3:1 — all pass).
- **Privacy by default** — profile, photo, DNA/audit results and posts are stored
  in `localStorage` on the visitor's device only.
- **Zero build step** — pure HTML/CSS/JS. Host anywhere static files are served
  (GitHub Pages, Netlify, Cloudflare Pages…).

## Email delivery — two modes

Out of the box (static hosting, no backend): tools **download** the spreadsheet
and open a **pre-filled mail draft** so the visitor attaches and sends in one step.

To send real emails directly from the site, set an endpoint in
`assets/js/main.js`:

```js
window.SITE = {
  emailEndpoint: "https://formspree.io/f/YOUR_FORM_ID",  // or Web3Forms etc.
  contactEmail: "you@yourdomain.com",                    // where owner messages go
  ...
};
```

Any Formspree/Web3Forms-style endpoint that accepts JSON `{email, subject, message}`
works; the site automatically falls back to the draft flow if the endpoint fails.

## Community backend (optional)

The Owners' Network ships with seeded stories plus device-local posting, and a
"Submit to be featured" flow that emails stories to `contactEmail`. For a true
shared wall, wire the `wallPost` / `render` functions in `assets/js/community.js`
to a backend like Supabase (a `posts` table with name, biz, tag, text, worked,
photo_url, likes) — the render code already handles arbitrary post arrays.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Structure

```
├── index.html · academy.html · dna.html · time-audit.html · profit.html
├── family.html · characters.html · top10.html · future.html
├── profile.html · community.html
└── assets/
    ├── css/style.css            # futuristic dark design system
    └── js/
        ├── main.js              # starfield, nav, reveal, Narrator engine, chart helpers, SITE config
        ├── sheets.js            # CSV/XLS generation + email pipeline
        ├── player.js            # cinematic player: lessons + movies (title cards, cast cards, chapters, moods)
        ├── dna.js · audit.js · profit.js · family.js · forge.js
        ├── future.js            # Future AI Tool Radar data + render
        ├── profile.js · community.js
        └── data/
            ├── agents.js        # the AI Family (118 agents, 13 departments)
            ├── lessons.js       # 8 modules · 40 narrated scenes
            └── movies.js        # 10 movies · 104 scenes (feature + Chronicles + Character Films)
```

---
Educational content — not financial or legal advice. AI outputs always deserve
your review before they ship.
