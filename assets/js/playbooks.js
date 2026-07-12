/* ============================================================
   PLAYBOOKS — deployment blueprints for owners
   Renders blueprint cards + hours chart + opportunity map from
   data/playbooks.js, and builds an exportable week-one plan
   through the shared Sheets rails (download + email).
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);
  const P = window.PLAYBOOKS || [];
  const O = window.OPPORTUNITY_CHANNELS || [];

  /* ---------- computed counts (never hardcode) ---------- */
  function counts() {
    const crewNames = new Set();
    P.forEach(p => p.crew.forEach(c => crewNames.add(c.name)));
    if ($("pb-count")) $("pb-count").textContent = P.length;
    if ($("pb-agent-count")) $("pb-agent-count").textContent = crewNames.size;
    if ($("pb-channel-count")) $("pb-channel-count").textContent = O.length;
  }

  /* ---------- blueprint cards ---------- */
  function renderCards() {
    const el = $("pb-cards");
    if (!el) return;
    el.innerHTML = P.map((p, i) => `
      <details class="acc" id="${p.id}">
        <summary><span class="num">${p.icon}</span> ${p.name}
          <span class="pb-meta">${p.days} · ${p.hoursLow}–${p.hoursHigh}h/wk reclaimed</span>
          <span class="chev">▸</span></summary>
        <div class="acc-body">
          <p class="pb-pain">${p.pain}</p>
          <h4>The crew you hire</h4>
          <p>${p.crew.map(c => `<b>${c.name}</b> (${c.role})`).join(" · ")} — full hire prompts on the <a href="family.html">AI Family</a> page.</p>
          <h4>The moves</h4>
          <ul>${p.moves.map(m => `<li>${m}</li>`).join("")}</ul>
          <h4>You walk away with</h4>
          <p>${p.deliverable}</p>
          <p class="pb-kpi"><b>Scoreboard:</b> ${p.kpi}</p>
        </div>
      </details>`).join("");
  }

  /* ---------- hours chart (validated series tokens, fixed order) ---------- */
  function renderChart() {
    const el = $("pb-chart");
    if (!el || !window.Charts) return;
    Charts.hbars(el, {
      title: "Owner hours reclaimed per week, by playbook",
      subtitle: "Planning estimates for a typical owner-led business — conservative floor plus upside range. Not a guarantee; measure your own after 30 days.",
      series: [
        { name: "Conservative", color: "#08a2c4" },
        { name: "Upside range", color: "#9085e9" }
      ],
      rows: P.map(p => ({ label: p.icon + " " + p.name, values: [p.hoursLow, p.hoursHigh - p.hoursLow] })),
      fmt: v => v + "h"
    });
  }

  /* ---------- opportunity map ---------- */
  function renderChannels() {
    const el = $("pb-channels");
    if (!el) return;
    el.innerHTML = O.map(c => `
      <div class="card">
        <span class="icon">${c.icon}</span>
        <h3>${c.name}</h3>
        <p class="pb-where"><b>Where:</b> ${c.where}</p>
        <p>${c.why}</p>
        <p><b>First move:</b> ${c.firstMove}</p>
        <p class="pb-kpi"><b>Lead with:</b> ${c.sell}</p>
      </div>`).join("");
  }

  /* ---------- week-one plan builder + export ---------- */
  function fillSelect() {
    const sel = $("pb-select");
    if (!sel) return;
    sel.innerHTML = P.map(p => `<option value="${p.id}">${p.icon} ${p.name}</option>`).join("");
    sel.addEventListener("change", renderPlan);
    renderPlan();
  }

  function currentPlaybook() {
    const sel = $("pb-select");
    return P.find(p => p.id === sel.value) || P[0];
  }

  function renderPlan() {
    const p = currentPlaybook();
    const el = $("pb-plan");
    if (!p || !el) return;
    el.innerHTML = `
      <h3>${p.icon} ${p.name} — your week one</h3>
      <p class="pb-pain">${p.deliverable}</p>
      <ol>${p.moves.map(m => `<li>${m}</li>`).join("")}</ol>
      <p><b>Hire first:</b> ${p.crew.map(c => c.name).join(", ")} — copy their prompts from the <a href="family.html">AI Family</a>.</p>
      <p class="pb-kpi"><b>Scoreboard:</b> ${p.kpi} · <b>Estimated reclaim:</b> ${p.hoursLow}–${p.hoursHigh}h/wk (measure, don't assume)</p>`;
  }

  function planRows(p) {
    return [
      ["AI BUSINESS ACADEMY — DEPLOYMENT PLAYBOOK"],
      ["Playbook", p.name],
      ["Install window", p.days],
      ["Estimated hours reclaimed / week", p.hoursLow + "–" + p.hoursHigh + " (planning estimate, not a guarantee)"],
      ["Date", new Date().toLocaleDateString()], [],
      ["THE PAIN IT REMOVES"], [p.pain], [],
      ["CREW TO HIRE (prompts on the AI Family page)"],
      ...p.crew.map(c => [c.name, c.role]), [],
      ["WEEK-ONE MOVES"],
      ...p.moves.map((m, i) => ["Move " + (i + 1), m]), [],
      ["DELIVERABLE", p.deliverable],
      ["SCOREBOARD", p.kpi], [],
      ["Rule", "Agents draft. You approve. Nothing sends itself."]
    ];
  }

  window.playbookDownload = function () {
    const p = currentPlaybook();
    if (!p) return toast("Pick a playbook first");
    Sheets.downloadXLS(p.id + "-week-one.xls", [{ name: "Week One Plan", rows: planRows(p) }]);
  };

  window.playbookEmail = function () {
    const p = currentPlaybook();
    if (!p) return toast("Pick a playbook first");
    const to = $("pb-email-to").value.trim();
    if (!/.+@.+\..+/.test(to)) return toast("Enter a valid email address first");
    Sheets.emailReport({
      to,
      subject: "Your " + p.name + " week-one plan — AI Business Academy",
      intro: "Here is your " + p.name + " deployment plan. Crew, moves and scoreboard attached.",
      filename: p.id + "-week-one.csv",
      rows: [["Item", "Detail"],
        ["Playbook", p.name],
        ["Install window", p.days],
        ["Crew", p.crew.map(c => c.name).join(", ")],
        ["Deliverable", p.deliverable],
        ["Scoreboard", p.kpi]]
    });
  };

  counts();
  renderCards();
  renderChart();
  renderChannels();
  fillSelect();
})();
