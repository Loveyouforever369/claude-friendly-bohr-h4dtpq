/* ============================================================
   CINEMATIC PLAYER — video-style narrated training lessons
   Slides animate in sequence; narration drives auto-advance;
   captions, per-slide progress segments, keyboard controls.
   ============================================================ */

window.Player = (function () {
  let lesson = null, idx = 0, playing = false, overlay = null;
  const synth = window.speechSynthesis;

  function build() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.id = "player-overlay";
    overlay.innerHTML = `
      <div class="player-shell">
        <button class="player-close" title="Close (Esc)">✕</button>
        <div class="player-screen">
          <div id="player-slides"></div>
          <div class="player-caption" id="player-caption"></div>
        </div>
        <div class="player-bar">
          <button id="pl-prev" title="Previous slide">⏮</button>
          <button id="pl-play" class="big" title="Play / pause">▶</button>
          <button id="pl-next" title="Next slide">⏭</button>
          <div class="player-progress" id="pl-progress"></div>
          <button id="pl-cc" title="Toggle captions">CC</button>
        </div>
        <div class="player-meta">
          <span id="pl-title"></span>
          <span id="pl-count"></span>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    overlay.querySelector(".player-close").onclick = close;
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    overlay.querySelector("#pl-play").onclick = toggle;
    overlay.querySelector("#pl-prev").onclick = () => go(idx - 1);
    overlay.querySelector("#pl-next").onclick = () => go(idx + 1);
    overlay.querySelector("#pl-cc").onclick = () => {
      const cap = overlay.querySelector("#player-caption");
      cap.style.display = cap.style.display === "none" ? "flex" : "none";
    };
    document.addEventListener("keydown", e => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === " ") { e.preventDefault(); toggle(); }
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    });
  }

  function open(lessonId) {
    lesson = (window.LESSONS || []).find(l => l.id === lessonId);
    if (!lesson) return;
    build();
    if (window.Narrator) Narrator.stop();

    const slidesEl = overlay.querySelector("#player-slides");
    slidesEl.innerHTML = lesson.slides.map((s, i) => `
      <div class="player-slide" data-i="${i}">
        <div class="slide-kicker">${s.kicker}</div>
        <h3>${s.title}</h3>
        <ul>${s.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="slide-visual">${s.visual}</div>
      </div>`).join("");

    const prog = overlay.querySelector("#pl-progress");
    prog.innerHTML = lesson.slides.map((_, i) =>
      `<div class="seg" data-i="${i}"><div class="fill"></div></div>`).join("");
    prog.querySelectorAll(".seg").forEach(seg =>
      seg.addEventListener("click", () => go(parseInt(seg.dataset.i))));

    overlay.querySelector("#pl-title").textContent = lesson.phase + " — " + lesson.title;
    overlay.classList.add("open");
    idx = -1;
    playing = true;
    overlay.querySelector("#pl-play").textContent = "⏸";
    go(0);
  }

  function go(i) {
    if (!lesson) return;
    if (i < 0) i = 0;
    if (i >= lesson.slides.length) { stopNarration(); playing = false; overlay.querySelector("#pl-play").textContent = "▶"; return; }
    stopNarration();
    idx = i;

    overlay.querySelectorAll(".player-slide").forEach(el =>
      el.classList.toggle("active", parseInt(el.dataset.i) === idx));
    overlay.querySelectorAll("#pl-progress .seg .fill").forEach((f, j) =>
      f.style.width = j < idx ? "100%" : j === idx ? "8%" : "0%");
    overlay.querySelector("#pl-count").textContent = `Scene ${idx + 1} / ${lesson.slides.length}`;
    overlay.querySelector("#player-caption").textContent = lesson.slides[idx].narration;

    if (playing) narrate();
  }

  function narrate() {
    const slide = lesson.slides[idx];
    const fill = overlay.querySelectorAll("#pl-progress .seg .fill")[idx];

    if (!synth) { timedAdvance(slide, fill); return; }

    const chunks = slide.narration.match(/[^.!?]+[.!?]+["']?/g) || [slide.narration];
    let ci = 0;
    const sayNext = () => {
      if (!playing || !overlay.classList.contains("open")) return;
      if (ci >= chunks.length) {
        if (fill) fill.style.width = "100%";
        setTimeout(() => { if (playing) go(idx + 1); }, 700);
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[ci]);
      const st = window.Narrator ? Narrator.state : { rate: 0.95, pitch: 0.82, voice: null };
      if (st.voice) u.voice = st.voice;
      u.rate = st.rate; u.pitch = st.pitch;
      u.onend = () => {
        ci++;
        if (fill) fill.style.width = Math.round(ci / chunks.length * 100) + "%";
        sayNext();
      };
      u.onerror = () => timedAdvance(slide, fill);
      synth.speak(u);
    };
    sayNext();
  }

  /* Fallback when speech synthesis is unavailable: read-time based advance */
  function timedAdvance(slide, fill) {
    const ms = Math.max(6000, slide.narration.length * 55);
    const t0 = performance.now();
    (function tick(t) {
      if (!playing || !overlay.classList.contains("open")) return;
      const p = Math.min(1, (t - t0) / ms);
      if (fill) fill.style.width = (p * 100).toFixed(1) + "%";
      if (p < 1) requestAnimationFrame(tick);
      else go(idx + 1);
    })(t0);
  }

  function stopNarration() { if (synth) synth.cancel(); }

  function toggle() {
    playing = !playing;
    overlay.querySelector("#pl-play").textContent = playing ? "⏸" : "▶";
    if (playing) narrate(); else stopNarration();
  }

  function close() {
    playing = false;
    stopNarration();
    if (overlay) overlay.classList.remove("open");
  }

  return { open, close };
})();
