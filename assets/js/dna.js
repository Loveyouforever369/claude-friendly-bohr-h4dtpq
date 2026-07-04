/* ============================================================
   BUSINESS DNA SCAN — 12 questions · 6 strands · archetypes
   Produces: DNA code, strand chart, gap analysis, agent matches,
   downloadable + emailable DNA report spreadsheet.
   ============================================================ */

(function () {
  const STRANDS = [
    { key: "V", name: "Vision & Strategy", color: "#08a2c4", agents: ["Atlas", "Nova", "Meridian"], fix: "Build your strategy spine: 3-year picture, 12-month map, weekly scorecard." },
    { key: "O", name: "Operations & Systems", color: "#9085e9", agents: ["Forge", "Relay", "Assembly"], fix: "Document your top 5 processes as SOPs, then automate the 2 most repetitive." },
    { key: "M", name: "Marketing & Brand", color: "#d55181", agents: ["Echo", "Prism", "Orbit"], fix: "Install the weekly content engine and claim your AI-search shelf space." },
    { key: "S", name: "Sales & Revenue", color: "#c98500", agents: ["Compass", "Script", "Encore"], fix: "Define pipeline stages + follow-up cadence; mine existing customers first." },
    { key: "F", name: "Finance & Data", color: "#199e70", agents: ["Stream", "Hawk", "Margin"], fix: "Run the 13-week cash forecast and profit-per-hour ranking this week." },
    { key: "I", name: "Innovation & Adaptability", color: "#3987e5", agents: ["Spark", "Probe", "Crucible"], fix: "Keep one small experiment always running with clear kill/go criteria." }
  ];

  const QUESTIONS = [
    { s: "V", q: "If your team was asked 'where is this business going in 3 years?', they would…", opts: ["Have no idea — it lives in my head (if anywhere)", "Give vague, different answers", "Describe the broad direction correctly", "Recite the vision and their part in it"] },
    { s: "V", q: "Your big decisions this year were made…", opts: ["Reacting to whatever was on fire", "On gut feel, in the moment", "With some analysis when time allowed", "Against a written strategy with criteria"] },
    { s: "O", q: "If you disappeared for 3 weeks, the business would…", opts: ["Stop — everything routes through me", "Limp along, then pile up", "Run mostly fine with some hiccups", "Run to standard; I'd return to a report, not a fire"] },
    { s: "O", q: "Your core processes (delivery, onboarding, billing) are…", opts: ["In my head only", "Partly written down, mostly outdated", "Documented for the important ones", "Documented, followed, and improved regularly"] },
    { s: "M", q: "Qualified strangers discover your business…", opts: ["Rarely — it's almost all word of mouth luck", "In bursts, when I remember to market", "Steadily from 1-2 channels", "Weekly, from a system that runs without me"] },
    { s: "M", q: "Your brand voice and message are…", opts: ["Whatever I type that day", "Recognizable but inconsistent", "Defined and mostly consistent", "Codified — anyone (or any AI) can write in our voice"] },
    { s: "S", q: "Your sales pipeline is…", opts: ["A feeling and a phone", "A list somewhere, follow-up when I remember", "Tracked with stages, follow-up is manual", "Staged, scored, with automatic follow-up rhythms"] },
    { s: "S", q: "Revenue from existing customers (repeat, upsell, referral)…", opts: ["Happens by accident", "We ask occasionally", "Some systems exist (reviews, reorders)", "Engineered: renewal, upsell and referral all have triggers"] },
    { s: "F", q: "You know your profit per offer / service / product…", opts: ["No — I watch the bank balance", "Roughly, at year end via my accountant", "Yes for the big ones, refreshed sometimes", "Yes, including my time cost, reviewed monthly"] },
    { s: "F", q: "Cash flow surprises hit you…", opts: ["Regularly, and they hurt", "A few times a year", "Rarely — I watch a simple forecast", "Almost never — 13-week forecast, updated weekly"] },
    { s: "I", q: "When a new tool/trend appears in your industry, you…", opts: ["Ignore it until forced", "Read about it, rarely act", "Test the promising ones eventually", "Run a small experiment within weeks, with kill criteria"] },
    { s: "I", q: "In the last 6 months, you deliberately killed or changed…", opts: ["Nothing — same playbook for years", "One thing, under pressure", "A couple of things after review", "Several things — we prune and reinvest on schedule"] }
  ];

  const ARCHETYPES = [
    { code: "V", name: "The Pathfinder", desc: "Vision-led. You see the mountain clearly — now build the machine that climbs it." },
    { code: "O", name: "The Systems Architect", desc: "Process-strong. Your machine runs clean — now point it at bolder targets." },
    { code: "M", name: "The Signal Tower", desc: "Attention-strong. The market hears you — now convert and keep more of them." },
    { code: "S", name: "The Rainmaker", desc: "Revenue-led. You can sell — now systemize so growth stops depending on your hustle." },
    { code: "F", name: "The Vault Keeper", desc: "Numbers-strong. You see the money clearly — now take more shots with that clarity." },
    { code: "I", name: "The Alchemist", desc: "Change-strong. You adapt fast — now anchor it with systems so pivots compound." }
  ];

  let answers = [], qi = 0;

  const $ = id => document.getElementById(id);

  window.DNA = {
    start() {
      answers = []; qi = 0;
      $("dna-intro").style.display = "none";
      $("dna-result").style.display = "none";
      $("dna-quiz").style.display = "block";
      render();
    },

    answer(v) {
      answers.push(v);
      qi++;
      if (qi >= QUESTIONS.length) finish(); else render();
    }
  };

  function render() {
    const q = QUESTIONS[qi];
    const strand = STRANDS.find(s => s.key === q.s);
    $("dna-quiz").innerHTML = `
      <div class="quiz-progress">${QUESTIONS.map((_, i) =>
        `<div class="qseg ${i < qi ? "done" : ""}"></div>`).join("")}</div>
      <span class="quiz-strand-tag" style="color:${strand.color}">🧬 Strand ${qi + 1}/12 · ${strand.name}</span>
      <div class="quiz-q">${q.q}</div>
      ${q.opts.map((o, i) =>
        `<button class="quiz-opt" onclick="DNA.answer(${i + 1})"><b style="color:${strand.color}">${String.fromCharCode(65 + i)}.</b> ${o}</button>`).join("")}
      <p class="muted mt-1">Answer for the business you have today — not the one you're planning.</p>`;
  }

  function finish() {
    $("dna-quiz").style.display = "none";
    $("dna-result").style.display = "block";

    // Score strands: 2 questions each, 1-4 points → 0-100 scale
    const scores = STRANDS.map((s, si) => {
      const a1 = answers[si * 2], a2 = answers[si * 2 + 1];
      const raw = a1 + a2;                      // 2..8
      const pct = Math.round((raw - 2) / 6 * 100);
      const lvl = raw <= 3 ? "Dormant" : raw <= 5 ? "Emerging" : raw <= 7 ? "Active" : "Evolved";
      const lvlNum = raw <= 3 ? 1 : raw <= 5 ? 2 : raw <= 7 ? 3 : 4;
      return { ...s, raw, pct, lvl, lvlNum };
    });

    const sorted = [...scores].sort((a, b) => b.pct - a.pct);
    const top = sorted[0], gaps = sorted.slice(-2).reverse();
    const arch = ARCHETYPES.find(a => a.code === top.key);
    const code = scores.map(s => s.key + s.lvlNum).join("·");
    const avg = Math.round(scores.reduce((a, s) => a + s.pct, 0) / scores.length);

    $("dna-code").textContent = code;
    $("dna-archetype").textContent = arch.name;
    $("dna-arch-desc").textContent = arch.desc;
    $("dna-avg").textContent = avg + "/100";
    Charts.strands($("dna-strands"), scores.map(s => ({ name: s.name, score: s.pct, color: s.color, note: s.lvl })));

    $("dna-gaps").innerHTML = gaps.map(g => `
      <div class="card" style="border-left:3px solid ${g.color}">
        <h3 style="color:${g.color}">⚠ Gap detected: ${g.name} — ${g.lvl} (${g.pct}/100)</h3>
        <p>${g.fix}</p>
        <p class="mt-1"><strong>Deploy from the AI Family:</strong> ${g.agents.map(a => `<a href="family.html">${a}</a>`).join(" · ")}</p>
      </div>`).join("");

    const helix = $("dna-helix");
    helix.innerHTML = scores.flatMap((s, i) => [0, 1].map(j => {
      const y = (i * 2 + j) * 21;
      const delay = ((i * 2 + j) * 0.28).toFixed(2);
      return `<div class="rung" style="top:${y}px;background:${s.color};animation-delay:-${delay}s"></div>`;
    })).join("");

    // Persist for profile page
    try {
      localStorage.setItem("aba_dna", JSON.stringify({
        code, archetype: arch.name, avg, date: new Date().toISOString().slice(0, 10),
        strands: scores.map(s => ({ name: s.name, pct: s.pct, lvl: s.lvl }))
      }));
    } catch (e) { /* private mode */ }

    window._dnaReport = { code, arch, avg, scores, gaps };
    $("dna-result").scrollIntoView({ behavior: "smooth" });

    if (window.Narrator) {
      const script = `Scan complete. Your business DNA code is ${code.replaceAll("·", ", ")}. ` +
        `Your dominant archetype is ${arch.name}. ${arch.desc} ` +
        `Your overall DNA vitality is ${avg} out of one hundred. ` +
        `Your two priority gaps are ${gaps[0].name}, currently ${gaps[0].lvl}, and ${gaps[1].name}, currently ${gaps[1].lvl}. ` +
        `${gaps[0].fix} Deploy ${gaps[0].agents.join(", ")} from the AI Family to begin repairing this strand this week.`;
      $("dna-narrate").onclick = () => Narrator.speak(script, $("dna-narrate"));
    }
  }

  function reportRows() {
    const r = window._dnaReport;
    const rows = [
      ["AI BUSINESS ACADEMY — BUSINESS DNA REPORT"],
      ["Date", new Date().toLocaleDateString()],
      ["DNA Code", r.code],
      ["Archetype", r.arch.name],
      ["Overall Vitality", r.avg + "/100"],
      [],
      ["Strand", "Score (0-100)", "Level", "Recommended AI Agents", "Prescription"]
    ];
    r.scores.forEach(s => rows.push([s.name, s.pct, s.lvl, s.agents.join(", "), s.fix]));
    rows.push([]);
    rows.push(["PRIORITY GAPS"]);
    r.gaps.forEach(g => rows.push([g.name, g.pct, g.lvl, g.agents.join(", "), g.fix]));
    rows.push([]);
    rows.push(["Next step", "Deploy one agent against your weakest strand, re-scan in 90 days."]);
    return rows;
  }

  window.dnaDownload = function () {
    if (!window._dnaReport) return toast("Run the scan first");
    Sheets.downloadXLS("business-dna-report.xls", [{ name: "DNA Report", rows: reportRows() }]);
  };

  window.dnaEmail = function () {
    if (!window._dnaReport) return toast("Run the scan first");
    const to = $("dna-email-to").value.trim();
    if (!/.+@.+\..+/.test(to)) return toast("Enter a valid email address first");
    Sheets.emailReport({
      to,
      subject: "Your Business DNA Report — " + window._dnaReport.arch.name + " (" + window._dnaReport.code + ")",
      intro: "Here is your Business DNA report from AI Business Academy.\nArchetype: " + window._dnaReport.arch.name + "\nDNA Code: " + window._dnaReport.code,
      filename: "business-dna-report.csv",
      rows: reportRows()
    });
  };
})();
