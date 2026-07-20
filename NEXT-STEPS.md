# Next steps — the owner's desk

One page that organizes where everything stands and exactly what to do next.
(Deep production detail lives in `PRODUCTION.md`; marketing kit in `MARKETING.md`.)

---

## 1 · What's live right now (nothing needed from you)

| Piece | Where |
|---|---|
| 10 narrated films — 5 chronicles + 5 Character Films | `movies.html` |
| Teaching layer: all **104 scenes** carry a 📚 lesson strip in the player | plays everywhere |
| Film Study shelf: 10 study cards (protocol · rule · 10-min drill · next move) | `movies.html` |
| Real key art on the five Character Film posters (rendered from the films) | `movies.html` |
| Production pack export per film (.xls: script + lessons + shot list + film study) | poster buttons |
| Viewing Path ladder (level 0 → 3, concern quick-picks) | `movies.html` |
| Playbooks deck, DNA scan, Time Audit, Profit Lab, AI Family roster | site-wide |
| Live preview artifact (same URL always) | https://claude.ai/code/artifact/850df931-c527-4ca3-a270-1e6986f09aa1 |

All of it is committed and pushed on branch `claude/ai-family-factory-run-8cy558`.
**To update the public Pages site:** merge that branch into the default branch
(say the word and a PR gets opened), then the gh-pages sync deploys it.

---

## 2 · Character voices — ElevenLabs (10 minutes of your time)

The pipeline is built and committed (`tools/voice-elevenlabs.mjs` +
`tools/voices.config.json`). It needs two things only you can do:

1. **Create an API key** in your ElevenLabs account (michaelparks011):
   Profile → API Keys → Create. **Never paste the key into chat or the repo** —
   put it in the Claude Code environment settings as `ELEVENLABS_API_KEY`
   (Environments → your environment → Environment variables). Note: this cloud
   sandbox's network policy currently blocks `api.elevenlabs.io` — either allow
   that host in the environment's network settings, or run the script on your
   own computer (Node 18+, zero installs, same command).
2. **Cast the six voices**: open `tools/voices.config.json`, and for each entry
   pick a Voice Library voice (search terms are included) or design one from the
   `direction` text — then paste its voice ID into the file. Voice IDs are safe
   to commit; only the API key is secret.

Then narration renders per film:

```
ELEVENLABS_API_KEY=...  node tools/voice-elevenlabs.mjs --movie mv-c1
node tools/voice-elevenlabs.mjs --movie mv-c1 --dry-run     # preview, no key, no cost
```

**Why I can't "just use the website":** this sandbox has no general web access
(all outside HTTPS is policy-blocked — verified with a control probe), and
logging into your account is a human-only step everywhere. The API key path
above is the working bridge — and it's better: scripted, repeatable, and it
feeds straight into the video pipeline.

**Casting policy (locked):** original synthetic voices from the ElevenLabs
library/designer only. Never clone a real person's voice or imitate an actor.

---

## 3 · Real AI-generated movie scenes — Higgsfield (copy-paste, your account)

Checked again this session: **Higgsfield has no API or connector an agent can
drive** — it works only through its web app, logged in as you. So the packs are
built to make your side trivial:

- `PRODUCTION.md` → *Character Films — AI generation packs*: per-film
  **identity blocks** (Rosa, Sal, Amara & Josef, Ben, Lena) + **3 hero shots
  per film** written in the exact prompt grammar — paste them straight into
  Higgsfield (or Veo/Kling) in your account.
- Every film's poster button exports the **production pack (.xls)** with a
  B-roll prompt per scene — that's the full shot list for a complete film.
- HeyGen avatars (presenter scenes): the HyperFrames connector only works from
  a claude.ai **chat** after you authorize it in Settings → Connectors — from
  there, avatar renders can be driven for you.
- Meanwhile, the in-repo pipeline already renders real MP4s without any
  external service (the Character Films teaser on `movies.html` was made
  entirely here) — more of those can be rendered on request.

---

## 4 · Fastest wins, in order

1. **Merge to the default branch** → the whole teaching layer goes live on Pages.
2. **Set `ELEVENLABS_API_KEY` + cast 6 voices** → films gain real character
   voiceover (the biggest single jump in production value available today).
3. **Paste one identity block + 3 hero shots into Higgsfield** → first
   photoreal scenes for one film; start with INBOX ZERO (Rosa).
4. **Authorize HyperFrames (HeyGen) in claude.ai connectors** → presenter
   avatar scenes become drivable from chat.
