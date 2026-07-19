#!/usr/bin/env node
/* ============================================================
   CHARACTER VOICES — ElevenLabs narration renderer.
   Turns any film's scene narrations (assets/js/data/movies.js)
   into per-scene MP3s using the casting in tools/voices.config.json.

     ELEVENLABS_API_KEY=...  node tools/voice-elevenlabs.mjs --movie mv-c1
     node tools/voice-elevenlabs.mjs --movie mv-c1 --dry-run   # manifest only, no key needed
     ELEVENLABS_API_KEY=...  node tools/voice-elevenlabs.mjs --list-voices

   The key comes ONLY from the environment — never commit it, never
   log it (see CLAUDE.md). Voice IDs are cast in voices.config.json.
   Output: <workdir>/<movie-id>/scene-NN.mp3 + manifest.json
   (workdir = VOICE_WORK env or os.tmpdir()/academy-voices).
   Chronicles films (mv-intro, mv-p*) use the "narrator" casting;
   character films use their agent's voice.

   NOTE: this sandbox's network policy blocks api.elevenlabs.io —
   run with a key from an open environment (your own machine works:
   Node 18+ only, no npm installs needed).
   ============================================================ */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..");
const WORK = process.env.VOICE_WORK || join(os.tmpdir(), "academy-voices");
const API = "https://api.elevenlabs.io/v1";

const arg = f => {
  const i = process.argv.indexOf(f);
  return i >= 0 ? process.argv[i + 1] : null;
};
const DRY = process.argv.includes("--dry-run");
const LIST = process.argv.includes("--list-voices");
const MOVIE = arg("--movie");

const key = process.env.ELEVENLABS_API_KEY;
const config = JSON.parse(readFileSync(join(here, "voices.config.json"), "utf8"));

/* movies.js is a browser data file — evaluate it with a window shim */
global.window = {};
const load = p => new Function("window", readFileSync(join(ROOT, p), "utf8"))(global.window);
load("assets/js/data/movies.js");
const MOVIES = global.window.MOVIES;

async function api(path, init = {}) {
  const res = await fetch(API + path, {
    ...init,
    headers: { "xi-api-key": key, "Content-Type": "application/json", ...(init.headers || {}) }
  });
  if (!res.ok) throw new Error(`ElevenLabs ${path} → HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res;
}

async function main() {
  if (LIST) {
    if (!key) throw new Error("Set ELEVENLABS_API_KEY to list your account's voices.");
    const { voices } = await (await api("/voices")).json();
    for (const v of voices) console.log(`${v.voice_id}  ${v.name}  (${v.category})`);
    return;
  }

  const m = MOVIES.find(x => x.id === MOVIE);
  if (!m) {
    console.error(`--movie required. One of: ${MOVIES.map(x => x.id).join(", ")}`);
    process.exit(1);
  }

  const cast = config.films[m.id] || config.narrator;
  const outDir = join(WORK, m.id);
  mkdirSync(outDir, { recursive: true });

  const manifest = {
    movie: m.id, title: m.title,
    voice: { label: cast.agent ? `${cast.agent} — ${cast.role}` : config.narrator.label,
             voice_id: cast.voice_id, model_id: config.model_id,
             settings: cast.voice_settings, direction: cast.direction },
    scenes: m.slides.map((s, i) => ({
      file: `scene-${String(i + 1).padStart(2, "0")}.mp3`,
      title: s.title, words: s.narration.split(/\s+/).length, text: s.narration
    }))
  };
  writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`${m.id}: ${manifest.scenes.length} scenes → ${outDir}`);
  console.log(`voice: ${manifest.voice.label}${cast.voice_id ? "" : "  (voice_id NOT CAST — fill tools/voices.config.json)"}`);

  if (DRY) { console.log("dry run — manifest written, no audio requested."); return; }
  if (!key) throw new Error("Set ELEVENLABS_API_KEY (environment settings, never the repo) or use --dry-run.");
  if (!cast.voice_id) throw new Error(`No voice_id cast for ${m.id} — pick/design the voice in your ElevenLabs account per the 'direction' text, then fill tools/voices.config.json.`);

  for (const [i, sc] of manifest.scenes.entries()) {
    const res = await api(`/text-to-speech/${cast.voice_id}`, {
      method: "POST",
      body: JSON.stringify({ text: sc.text, model_id: config.model_id, voice_settings: cast.voice_settings })
    });
    writeFileSync(join(outDir, sc.file), Buffer.from(await res.arrayBuffer()));
    console.log(`  ${sc.file}  (${sc.words} words)  ${i + 1}/${manifest.scenes.length}`);
  }
  console.log("done — pair with the video-render skill to master voiced films.");
}

main().catch(e => { console.error(e.message); process.exit(1); });
