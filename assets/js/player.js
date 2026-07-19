/* ============================================================
   CINEMATIC PLAYER — video-style narrated trainings & movies
   Lessons (LESSONS) and feature movies (MOVIES) share one player.
   Movie extras: title cards, cast cards, chapters, scene moods,
   letterboxing, deeper narration pitch.
   ============================================================ */

window.Player = (function () {
  let lesson = null, idx = 0, playing = false, overlay = null, isMovie = false;
  let autoNext = true, nextTimer = null;
  const synth = window.speechSynthesis;

  function catalog() {
    return [...(window.LESSONS || []), ...(window.MOVIES || [])];
  }

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
          <button id="pl-prev" title="Previous scene">⏮</button>
          <button id="pl-play" class="big" title="Play / pause">▶</button>
          <button id="pl-next" title="Next scene">⏭</button>
          <div class="player-progress" id="pl-progress"></div>
          <button id="pl-cc" title="Toggle captions">CC</button>
          <button id="pl-auto" title="Cinema mode: auto-play the next film">🍿</button>
        </div>
        <div class="player-meta">
          <span id="pl-title"></span>
          <span><span class="player-chapter" id="pl-chapter"></span> <span id="pl-count"></span></span>
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
    overlay.querySelector("#pl-auto").onclick = () => {
      autoNext = !autoNext;
      overlay.querySelector("#pl-auto").classList.toggle("off", !autoNext);
      clearNextTimer();
      if (window.toast) toast(autoNext ? "🍿 Cinema mode ON — films play back-to-back" : "Cinema mode off");
    };
    document.addEventListener("keydown", e => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === " ") { e.preventDefault(); toggle(); }
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    });
  }

  function slideHTML(s, i) {
    const mood = s.mood ? " mood-" + s.mood : "";
    const lesson = s.lesson ? `<div class="slide-lesson">📚 <b>The lesson:</b> ${s.lesson}</div>` : "";
    if (s.type === "title") {
      return `<div class="player-slide slide-title${mood}" data-i="${i}">
        <div class="slide-kicker">${s.kicker || ""}</div>
        <h3>${s.title}</h3>
        ${s.sub ? `<div class="title-sub">${s.sub}</div>` : ""}
        ${s.visual ? `<div class="slide-visual" style="position:static;margin-top:12px;opacity:.85">${s.visual}</div>` : ""}
        ${lesson}
      </div>`;
    }
    if (s.type === "cast") {
      return `<div class="player-slide${mood}" data-i="${i}">
        <div class="slide-kicker">${s.kicker || ""}</div>
        <h3>${s.title}</h3>
        <div class="cast-grid">${(s.cast || []).map(c => `
          <div class="cast-card">
            <div class="cast-ava">${c.avatar}</div>
            <div class="cast-name">${c.name}</div>
            <div class="cast-role">${c.role}</div>
            <div class="cast-line">${c.line}</div>
          </div>`).join("")}
        </div>
        ${lesson}
      </div>`;
    }
    return `<div class="player-slide${mood}" data-i="${i}">
      <div class="slide-kicker">${s.kicker || ""}</div>
      <h3>${s.title}</h3>
      <ul>${(s.bullets || []).map(b => `<li>${b}</li>`).join("")}</ul>
      ${lesson}
      ${s.visual ? `<div class="slide-visual">${s.visual}</div>` : ""}
    </div>`;
  }

  function open(id) {
    lesson = catalog().find(l => l.id === id);
    if (!lesson) return;
    isMovie = !!lesson.movie;
    build();
    if (window.Narrator) Narrator.stop();

    overlay.querySelector(".player-screen").classList.toggle("movie", isMovie);
    overlay.querySelector("#player-slides").innerHTML =
      lesson.slides.map((s, i) => slideHTML(s, i)).join("");

    const prog = overlay.querySelector("#pl-progress");
    prog.innerHTML = lesson.slides.map((_, i) =>
      `<div class="seg" data-i="${i}"><div class="fill"></div></div>`).join("");
    prog.querySelectorAll(".seg").forEach(seg =>
      seg.addEventListener("click", () => go(parseInt(seg.dataset.i))));

    overlay.querySelector("#pl-title").textContent =
      (lesson.phase ? lesson.phase + " — " : "") + lesson.title + (lesson.minutes ? ` · ~${lesson.minutes} min` : "");
    overlay.classList.add("open");
    idx = -1;
    playing = true;
    overlay.querySelector("#pl-play").textContent = "⏸";
    go(0);
  }

  function clearNextTimer() {
    if (nextTimer) { clearInterval(nextTimer); nextTimer = null; }
  }

  /* End of a movie: queue the next film with an on-screen countdown */
  function queueNext() {
    if (!isMovie || !autoNext || !window.MOVIES) return false;
    const order = window.MOVIES;
    const at = order.findIndex(m => m.id === lesson.id);
    const next = at >= 0 ? order[at + 1] : null;
    const cap = overlay.querySelector("#player-caption");
    if (!next) { cap.textContent = "🎬 The End — you've watched the whole saga. Now go run the play: scan your DNA, audit your time, hire agent #1."; return false; }
    let s = 6;
    const tick = () => {
      s--;
      if (s <= 0) { clearNextTimer(); open(next.id); return; }
      cap.textContent = `🍿 Up next: ${next.title} (~${next.minutes} min) — starting in ${s}… (press 🍿 to cancel)`;
    };
    cap.textContent = `🍿 Up next: ${next.title} — starting in 6…`;
    clearNextTimer();
    nextTimer = setInterval(tick, 1000);
    return true;
  }

  function go(i) {
    if (!lesson) return;
    clearNextTimer();
    if (i < 0) i = 0;
    if (i >= lesson.slides.length) {
      stopNarration(); playing = false; overlay.querySelector("#pl-play").textContent = "▶";
      queueNext();
      return;
    }
    stopNarration();
    idx = i;

    overlay.querySelectorAll(".player-slide").forEach(el =>
      el.classList.toggle("active", parseInt(el.dataset.i) === idx));
    overlay.querySelectorAll("#pl-progress .seg .fill").forEach((f, j) =>
      f.style.width = j < idx ? "100%" : j === idx ? "8%" : "0%");
    overlay.querySelector("#pl-count").textContent = `· Scene ${idx + 1} / ${lesson.slides.length}`;
    overlay.querySelector("#pl-chapter").textContent = lesson.slides[idx].chapter || "";
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
        setTimeout(() => { if (playing) go(idx + 1); }, isMovie ? 1000 : 700);
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[ci]);
      const st = window.Narrator ? Narrator.state : { rate: 0.95, pitch: 0.82, voice: null };
      if (st.voice) u.voice = st.voice;
      u.rate = st.rate * (isMovie ? 0.97 : 1);          // movies breathe a little slower
      u.pitch = isMovie ? Math.min(st.pitch, 0.78) : st.pitch; // and speak deeper
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
    clearNextTimer();
    stopNarration();
    if (overlay) overlay.classList.remove("open");
  }

  return { open, close };
})();
