#!/usr/bin/env node
/* ============================================================
   CHARACTER FILMS TEASER — render pipeline (see .claude/skills/
   video-render). Renders tools/compositions/character-films-
   teaser.html to a real MP4 + WebM + poster.

   Deps (playwright, @ffmpeg-installer/ffmpeg) are NOT vendored in
   this repo; point RENDER_DEPS at a package.json whose
   node_modules has them:

     RENDER_DEPS=/path/to/deps/package.json \
       node tools/render-character-teaser.mjs --spot   # 6 stills
     RENDER_DEPS=... node tools/render-character-teaser.mjs        # full render

   Output: <workdir>/out/character-films-teaser.{mp4,webm} + poster,
   then copy to assets/video/ yourself (ABSOLUTE paths — see
   CLAUDE.md lessons). Headless Chromium at /opt/pw-browsers/chromium.
   ============================================================ */

import { createRequire } from "node:module";
import { mkdirSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import os from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const COMP = "file://" + join(here, "compositions", "character-films-teaser.html");
const WORK = process.env.RENDER_WORK || join(os.tmpdir(), "character-teaser");
const FRAMES = join(WORK, "frames");
const OUT = join(WORK, "out");
const FPS = 24;
const SPOT = process.argv.includes("--spot");

const require = createRequire(process.env.RENDER_DEPS || import.meta.url);
const { chromium } = require("playwright");
const FFMPEG = process.env.FFMPEG_BIN || require("@ffmpeg-installer/ffmpeg").path;

function ff(args) {
  const r = spawnSync(FFMPEG, args, { encoding: "utf8" });
  if (r.status !== 0) {
    console.error(r.stderr.slice(-1500));
    throw new Error("ffmpeg failed");
  }
}

async function openComp() {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto(COMP, { waitUntil: "load" });
  const DUR = await page.evaluate(() => window.DURATION);
  const HITS = await page.evaluate(() => window.ACT_TIMES);
  return { browser, page, DUR, HITS };
}

async function main() {
  mkdirSync(FRAMES, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  const { browser, page, DUR, HITS } = await openComp();
  console.log(`composition: ${DUR}s · hits at ${HITS.join(", ")}`);

  if (SPOT) {
    for (const t of [1.2, 4.0, 10.0, 25.0, 33.0, 40.5, 47.5]) {
      await page.evaluate(tt => window.seek(tt), t);
      await page.waitForTimeout(60);
      const p = join(OUT, `spot-${t.toFixed(1)}.png`);
      await page.screenshot({ path: p });
      console.log("spot", p);
    }
    await browser.close();
    return;
  }

  /* --stills: clean key-art frames per film (art mode strips text bands) */
  if (process.argv.includes("--stills")) {
    const HERO = [["mv-c1", 10.0], ["mv-c2", 17.5], ["mv-c3", 25.0], ["mv-c4", 33.5], ["mv-c5", 41.0]];
    await page.evaluate(() => window.setArtMode(true));
    for (const [id, t] of HERO) {
      await page.evaluate(tt => window.seek(tt), t);
      await page.waitForTimeout(60);
      const png = join(OUT, `art-${id}.png`);
      await page.screenshot({ path: png });
      ff(["-y", "-i", png, "-vf", "scale=860:-2", "-q:v", "4", join(OUT, `art-${id}.jpg`)]);
      console.log("key art", id);
    }
    await browser.close();
    return;
  }

  /* ---- frames ---- */
  const N = Math.round(DUR * FPS);
  console.log(`capturing ${N} frames @ ${FPS}fps …`);
  const t0 = Date.now();
  for (let i = 0; i < N; i++) {
    await page.evaluate(t => window.seek(t), i / FPS);
    await page.screenshot({
      path: join(FRAMES, String(i).padStart(5, "0") + ".jpg"),
      type: "jpeg", quality: 85
    });
    if (i % 240 === 0) console.log(`  frame ${i}/${N} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  }
  /* poster = full title card frame */
  const posterSrc = join(FRAMES, String(Math.round(4.0 * FPS)).padStart(5, "0") + ".jpg");
  copyFileSync(posterSrc, join(OUT, "character-films-poster.jpg"));
  await browser.close();
  console.log(`frames done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);

  /* ---- score: breathing drone + noise riser + exp-decay hits ---- */
  const hitExpr = HITS.map(T =>
    `gt(t\\,${T})*exp(-5*(t-${T}))*(0.20*sin(2*PI*196*t)+0.10*sin(2*PI*98*t))`
  ).join("+");
  const expr =
    `(0.75+0.25*sin(2*PI*t/8))*(0.13*sin(2*PI*55*t)+0.07*sin(2*PI*82.41*t))` +
    `+0.030*random(0)*pow(min(1\\,max(0\\,(t-${DUR - 10})/10))\\,2)` +
    `+${hitExpr}`;
  ff([
    "-y", "-f", "lavfi",
    "-i", `aevalsrc=${expr}:s=44100:d=${DUR}`,
    "-af", `alimiter=limit=0.85,afade=t=in:d=1.0,afade=t=out:st=${DUR - 1.6}:d=1.6`,
    join(OUT, "score.wav")
  ]);
  console.log("score synthesized");

  /* ---- assemble mp4 + webm ---- */
  ff([
    "-y", "-framerate", String(FPS), "-i", join(FRAMES, "%05d.jpg"),
    "-i", join(OUT, "score.wav"),
    "-c:v", "libx264", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    "-c:a", "aac", "-b:a", "160k", "-shortest",
    join(OUT, "character-films-teaser.mp4")
  ]);
  console.log("mp4 assembled");
  ff([
    "-y", "-i", join(OUT, "character-films-teaser.mp4"),
    "-c:v", "libvpx-vp9", "-b:v", "900k", "-c:a", "libopus", "-b:a", "96k",
    join(OUT, "character-films-teaser.webm")
  ]);
  console.log("webm twin done");
  console.log("outputs in", OUT);
}

main().catch(e => { console.error(e); process.exit(1); });
