---
name: video-render
description: Render a real MP4/WebM video for the academy using the in-repo pipeline (seekable HTML composition → frame-exact Playwright capture → synthesized or Piper-voiced audio → ffmpeg assembly). Use when asked to create, render, or master any video for this project.
---

# Video Render — the academy's proven pipeline

Every video this project ships was rendered with this exact procedure. Follow it;
don't reinvent it. Working templates: `scratchpad/render-trailer.js` (46s trailer)
and `scratchpad/render-roi.js` (32s ROI reel) — derive new render scripts from them.

## Procedure

1. **Author a seekable composition** (`<name>.html`, 1280×720):
   - ALL animation must be a pure function of time: `window.seek(t)` sets exact
     frame state. NEVER CSS animations (non-deterministic across screenshots).
   - House style: bg #05070f/#0b1020, neon cyan #22d3ee / violet #a78bfa /
     magenta #f472b6, letterbox bars, wide-tracked uppercase titles, caption band
     for VO text, per-scene crossfades (~0.55s), final fade to black.
   - Target ~150 spoken-words/min for caption pacing; source lines in small print.
2. **Spot-check stills first**: seek to 4–6 representative times, screenshot,
   LOOK at them (Read tool) before committing to a full capture.
3. **Capture**: Playwright chromium with
   `executablePath: '/opt/pw-browsers/chromium'`, JPEG quality 85, 24 fps.
4. **Audio**:
   - Score: ffmpeg `aevalsrc` — breathing low drone + noise riser +
     exp-decay hits at every scene-change time; `alimiter`, fade in/out.
   - Voiceover (when environment allows): Piper TTS (`pip install piper-tts`,
     `python3 -m piper.download_voices en_US-lessac-medium`) — NOTE: voice
     download is 403-blocked in the Claude Code cloud sandbox; run in an open
     environment or commit the .onnx voice to the repo once.
   - ffmpeg binary comes from `@ffmpeg-installer/ffmpeg` (npm). `ffmpeg-static`
     download FAILS here.
5. **Assemble**: libx264 CRF 20, yuv420p, +faststart, AAC 160k. Then ALWAYS
   transcode a WebM twin (libvpx-vp9 ~900k + libopus): headless Chromium has no
   H.264, so tests must verify playback via the WebM source.
6. **Verify**: load the page that embeds it; assert `loadedmetadata` duration;
   screenshot; eyeball. Use ABSOLUTE paths when copying into `assets/video/`.
7. **Ship**: `<video>` with poster + mp4 source + webm source + onerror hide.
   Commit, push (auto-deploys via gh-pages sync), update the artifact bundle.
8. **Lock lessons**: append what broke/worked to CLAUDE.md, and add any new
   craft the agents learned to `assets/js/data/upgrades.js`.
