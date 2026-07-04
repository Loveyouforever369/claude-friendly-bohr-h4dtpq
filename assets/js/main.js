/* ============================================================
   AI BUSINESS ACADEMY — core engine
   Starfield · nav · scroll reveal · counters · toast
   Narrator: deep audio narration via Web Speech API
   ============================================================ */

window.SITE = {
  name: "AI Business Academy",
  // Optional: set to a Formspree/Web3Forms-style endpoint to send
  // spreadsheets & messages by real email instead of a mail draft.
  // e.g. "https://formspree.io/f/XXXXXXXX"
  emailEndpoint: "",
  contactEmail: "hello@aibusinessacademy.example",
  chartPalette: ["#08a2c4", "#9085e9", "#d55181", "#c98500", "#199e70", "#3987e5"]
};

/* ---------- Starfield ---------- */
(function starfield() {
  const c = document.createElement("canvas");
  c.id = "starfield";
  document.body.prepend(c);
  const ctx = c.getContext("2d");
  let stars = [], w, h, raf;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = c.width = innerWidth;
    h = c.height = innerHeight;
    stars = Array.from({ length: Math.min(160, Math.floor(w * h / 14000)) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.4 + 0.2,
      s: Math.random() * 0.25 + 0.05,
      hue: Math.random() < 0.12 ? "rgba(167,139,250," : (Math.random() < 0.2 ? "rgba(34,211,238," : "rgba(255,255,255,")
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const st of stars) {
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fillStyle = st.hue + (0.25 + st.r / 2.2) + ")";
      ctx.fill();
      st.y -= st.s;
      if (st.y < -3) { st.y = h + 3; st.x = Math.random() * w; }
    }
    raf = requestAnimationFrame(draw);
  }
  addEventListener("resize", resize);
  resize();
  if (reduced) { draw(); cancelAnimationFrame(raf); } else draw();
})();

/* ---------- Nav ---------- */
(function nav() {
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
  }
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
})();

/* ---------- Scroll reveal ---------- */
(function reveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();

/* ---------- Animated counters ---------- */
(function counters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1400, t0 = performance.now();
      (function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
})();

/* ---------- Toast ---------- */
window.toast = function (msg, ms = 2600) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), ms);
};

/* ---------- Clipboard ---------- */
window.copyText = async function (text, note = "Copied to clipboard ✓") {
  try { await navigator.clipboard.writeText(text); toast(note); }
  catch { toast("Copy failed — select and copy manually"); }
};

/* ============================================================
   NARRATOR — deep audio narration engine
   - Prefers deep/low voices, pitch-shifted down for gravitas
   - data-narrate sections get a 🎧 Listen button automatically
   - Floating Audio Command Deck: pause/resume/stop, speed, voice
   ============================================================ */
window.Narrator = (function () {
  const synth = window.speechSynthesis;
  const state = { voice: null, rate: 0.95, pitch: 0.82, current: null, btn: null, queue: [], speaking: false };

  const DEEP_HINTS = ["daniel", "google uk english male", "microsoft guy", "microsoft david", "alex", "fred", "male", "en-gb", "baritone"];

  function pickVoice() {
    const voices = synth ? synth.getVoices() : [];
    if (!voices.length) return null;
    const en = voices.filter(v => /^en/i.test(v.lang));
    const pool = en.length ? en : voices;
    for (const hint of DEEP_HINTS) {
      const hit = pool.find(v => (v.name + " " + v.lang).toLowerCase().includes(hint));
      if (hit) return hit;
    }
    return pool[0];
  }

  function ensureDock() {
    if (document.getElementById("audio-dock")) return;
    const dock = document.createElement("div");
    dock.id = "audio-dock";
    dock.innerHTML = `
      <div class="dock-title"><span>◉ Audio Command Deck</span><button id="dock-close" title="Hide">✕</button></div>
      <div class="dock-controls">
        <button id="dock-pause" title="Pause">⏸</button>
        <button id="dock-resume" title="Resume">▶</button>
        <button id="dock-stop" title="Stop">⏹</button>
      </div>
      <label>Narration speed <span id="dock-rate-val">0.95×</span></label>
      <input type="range" id="dock-rate" min="0.6" max="1.4" step="0.05" value="0.95">
      <label>Voice</label>
      <select id="dock-voice"></select>`;
    document.body.appendChild(dock);

    dock.querySelector("#dock-pause").onclick = () => synth.pause();
    dock.querySelector("#dock-resume").onclick = () => synth.resume();
    dock.querySelector("#dock-stop").onclick = () => Narrator.stop();
    dock.querySelector("#dock-close").onclick = () => dock.classList.remove("visible");
    dock.querySelector("#dock-rate").oninput = e => {
      state.rate = parseFloat(e.target.value);
      dock.querySelector("#dock-rate-val").textContent = state.rate.toFixed(2) + "×";
    };
    dock.querySelector("#dock-voice").onchange = e => {
      const voices = synth.getVoices();
      state.voice = voices.find(v => v.name === e.target.value) || state.voice;
    };
    fillVoices();
  }

  function fillVoices() {
    const sel = document.getElementById("dock-voice");
    if (!sel || !synth) return;
    const voices = synth.getVoices().filter(v => /^en/i.test(v.lang));
    sel.innerHTML = voices.map(v => `<option ${state.voice && v.name === state.voice.name ? "selected" : ""}>${v.name}</option>`).join("");
  }

  function speak(text, btn) {
    if (!synth) { toast("Audio narration isn't supported in this browser"); return; }
    stop();
    ensureDock();
    document.getElementById("audio-dock").classList.add("visible");
    state.btn = btn || null;
    if (btn) { btn.classList.add("speaking"); btn.innerHTML = `<span class="eq"><span></span><span></span><span></span></span> Narrating…`; }

    // Chunk long text at sentence boundaries so pause/stop stays responsive
    const chunks = text.match(/[^.!?]+[.!?]+["']?|\S+$/g) || [text];
    const groups = [];
    let buf = "";
    for (const s of chunks) {
      if ((buf + s).length > 260) { groups.push(buf); buf = s; } else buf += s;
    }
    if (buf.trim()) groups.push(buf);

    state.queue = groups;
    state.speaking = true;
    next();
  }

  function next() {
    if (!state.queue.length) { finish(); return; }
    const u = new SpeechSynthesisUtterance(state.queue.shift());
    if (!state.voice) state.voice = pickVoice();
    if (state.voice) u.voice = state.voice;
    u.rate = state.rate;
    u.pitch = state.pitch;
    u.onend = () => { if (state.speaking) next(); };
    u.onerror = () => finish();
    state.current = u;
    synth.speak(u);
  }

  function finish() {
    state.speaking = false;
    if (state.btn) { state.btn.classList.remove("speaking"); state.btn.innerHTML = "🎧 Listen to this section"; state.btn = null; }
  }

  function stop() {
    state.speaking = false;
    state.queue = [];
    if (synth) synth.cancel();
    finish();
  }

  // Auto-wire narrate buttons for any [data-narrate] section
  function init() {
    document.querySelectorAll("[data-narrate]").forEach(sec => {
      if (sec.querySelector(".narrate-btn")) return;
      const btn = document.createElement("button");
      btn.className = "narrate-btn";
      btn.innerHTML = "🎧 Listen to this section";
      btn.addEventListener("click", () => {
        if (state.btn === btn && state.speaking) { stop(); return; }
        const script = sec.getAttribute("data-narrate-script") || sec.innerText.replace(/🎧[^\n]*/g, "");
        speak(script, btn);
      });
      const anchor = sec.querySelector("h1, h2, h3");
      if (anchor) anchor.insertAdjacentElement("afterend", btn);
      else sec.prepend(btn);
    });
    if (synth) synth.onvoiceschanged = () => { if (!state.voice) state.voice = pickVoice(); fillVoices(); };
  }

  addEventListener("beforeunload", () => synth && synth.cancel());
  document.addEventListener("visibilitychange", () => { if (document.hidden && synth) synth.cancel(); });
  if (document.readyState !== "loading") init(); else addEventListener("DOMContentLoaded", init);

  return { speak, stop, state };
})();

/* ---------- Shared chart helpers (dataviz-compliant HTML marks) ---------- */
window.Charts = {
  palette: window.SITE.chartPalette,

  /* Horizontal grouped/stacked bar rows. series: [{name, color}], rows: [{label, values:[..]}] */
  hbars(el, { title, subtitle, series, rows, max, fmt }) {
    fmt = fmt || (v => v);
    max = max || Math.max(...rows.map(r => r.values.reduce((a, b) => a + b, 0)), 1);
    let html = "";
    if (title) html += `<div class="viz-title">${title}</div>`;
    if (subtitle) html += `<div class="viz-sub">${subtitle}</div>`;
    if (series.length > 1) {
      html += `<div class="viz-legend">` + series.map((s, i) =>
        `<span class="key"><span class="swatch" style="background:${s.color || this.palette[i]}"></span>${s.name}</span>`).join("") + `</div>`;
    }
    html += rows.map(r => {
      const total = r.values.reduce((a, b) => a + b, 0);
      const segs = r.values.map((v, i) =>
        `<div class="hbar-seg" style="width:${(v / max * 100).toFixed(2)}%;background:${series[i].color || this.palette[i]}" title="${series[i].name}: ${fmt(v)}"></div>`
      ).join("");
      return `<div class="hbar-row"><div class="hbar-label" title="${r.label}">${r.label}</div><div class="hbar-track">${segs}</div><div class="hbar-value">${fmt(total)}</div></div>`;
    }).join("");
    el.innerHTML = html;
  },

  /* Strand bars for DNA profile: rows [{name, score(0-100), color, note}] */
  strands(el, rows) {
    el.innerHTML = rows.map(r => `
      <div class="strand">
        <div class="strand-head"><span class="name">${r.name}</span><span class="lvl">${r.note || ""} · ${r.score}/100</span></div>
        <div class="strand-track"><div class="strand-fill" style="width:0%;background:${r.color}"></div></div>
      </div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.querySelectorAll(".strand-fill").forEach((f, i) => f.style.width = rows[i].score + "%");
    }));
  }
};
