/* ============================================================
   TIME GAP ANALYZER — find automatable hours, price them,
   chart them, export/email the audit spreadsheet.
   ============================================================ */

(function () {
  /* Default task book: [name, typical hrs/week, automation potential %, agents] */
  const TASKS = [
    ["Email triage & replies", 5.0, 70, "Slate"],
    ["Social media content", 4.0, 75, "Orbit, Remix, Echo"],
    ["Scheduling & calendar juggling", 2.0, 80, "Dawn, Relayr"],
    ["Invoicing, chasing payments", 2.0, 75, "Toll"],
    ["Reports & spreadsheets", 3.0, 70, "Lens, Beacon-Fi"],
    ["Customer questions & support", 4.0, 60, "Haven, Concierge, Beam"],
    ["Writing proposals & quotes", 2.5, 65, "Bridge"],
    ["Research (competitors, suppliers, ideas)", 2.5, 70, "Vantage, Pulse, Drift"],
    ["Meeting prep & follow-up notes", 2.0, 75, "Relayr, Dispatch"],
    ["Marketing emails & newsletters", 2.0, 70, "Whisper, Quill"],
    ["Bookkeeping & expense sorting", 2.0, 65, "Ledger, Hawk"],
    ["Hiring, onboarding & training docs", 1.5, 60, "Scout, Mentor, Forge"]
  ];

  const $ = id => document.getElementById(id);

  function rowsHTML() {
    return TASKS.map((t, i) => `
      <tr>
        <td><b>${t[0]}</b><br><span class="muted">Agents: ${t[3]}</span></td>
        <td><input type="number" id="hrs-${i}" value="${t[1]}" min="0" max="60" step="0.5" style="width:86px"></td>
        <td><input type="number" id="auto-${i}" value="${t[2]}" min="0" max="95" step="5" style="width:86px"> %</td>
        <td id="saved-${i}" style="font-variant-numeric:tabular-nums">—</td>
      </tr>`).join("");
  }

  function calc() {
    const rate = Math.max(0, parseFloat($("hourly-value").value) || 0);
    let totalHrs = 0, totalSaved = 0;
    const rows = [];

    TASKS.forEach((t, i) => {
      const hrs = Math.max(0, parseFloat($("hrs-" + i).value) || 0);
      const auto = Math.min(95, Math.max(0, parseFloat($("auto-" + i).value) || 0));
      const saved = hrs * auto / 100;
      totalHrs += hrs; totalSaved += saved;
      $("saved-" + i).textContent = saved.toFixed(1) + " h";
      rows.push({ label: t[0], hrs, saved, kept: hrs - saved, agents: t[3], auto });
    });

    const weeklyValue = totalSaved * rate;
    const yearlyValue = weeklyValue * 52;
    const daysBack = totalSaved * 52 / 8;

    $("stat-hours").textContent = totalSaved.toFixed(1);
    $("stat-week").textContent = "$" + Math.round(weeklyValue).toLocaleString();
    $("stat-year").textContent = "$" + Math.round(yearlyValue).toLocaleString();
    $("stat-days").textContent = Math.round(daysBack);

    const top = [...rows].sort((a, b) => b.saved - a.saved);
    Charts.hbars($("audit-chart"), {
      title: "Where your reclaimable hours live",
      subtitle: "Weekly hours per task — reclaimable by AI vs stays with you",
      series: [
        { name: "Reclaimable by AI", color: "#08a2c4" },
        { name: "Stays with you", color: "#9085e9" }
      ],
      rows: top.map(r => ({ label: r.label, values: [+r.saved.toFixed(1), +r.kept.toFixed(1)] })),
      fmt: v => v.toFixed(1) + " h"
    });

    $("audit-verdict").innerHTML = totalSaved < 4
      ? `<p>You're running lean — but even <strong>${totalSaved.toFixed(1)} hours/week</strong> is <strong>$${Math.round(yearlyValue).toLocaleString()}/year</strong> of capacity. Start with your single biggest line: <strong>${top[0].label}</strong> (agents: ${top[0].agents}).</p>`
      : `<p>🔓 You're sitting on <strong>${totalSaved.toFixed(1)} hours/week</strong> — that's <strong>${Math.round(daysBack)} working days a year</strong> worth <strong>$${Math.round(yearlyValue).toLocaleString()}</strong> at your target rate. Attack the top three first: <strong>${top.slice(0, 3).map(r => r.label).join(" · ")}</strong>. Deploy ${top[0].agents} this week and measure the delta.</p>`;

    window._auditReport = { rate, totalHrs, totalSaved, weeklyValue, yearlyValue, daysBack, rows: top };
    try { localStorage.setItem("aba_audit", JSON.stringify({ totalSaved: +totalSaved.toFixed(1), yearlyValue: Math.round(yearlyValue), date: new Date().toISOString().slice(0, 10) })); } catch (e) {}
  }

  function reportRows() {
    const r = window._auditReport;
    const rows = [
      ["AI BUSINESS ACADEMY — TIME GAP AUDIT"],
      ["Date", new Date().toLocaleDateString()],
      ["Owner hourly value", "$" + r.rate + "/hr"],
      ["Total tracked hours/week", +r.totalHrs.toFixed(1)],
      ["Reclaimable hours/week", +r.totalSaved.toFixed(1)],
      ["Value reclaimed per week", "$" + Math.round(r.weeklyValue)],
      ["Value reclaimed per year", "$" + Math.round(r.yearlyValue)],
      ["Working days returned per year", Math.round(r.daysBack)],
      [],
      ["Task", "Hours/week", "Automation %", "Hours reclaimable", "Hours kept", "AI agents to deploy"]
    ];
    r.rows.forEach(t => rows.push([t.label, t.hrs, t.auto + "%", +t.saved.toFixed(1), +t.kept.toFixed(1), t.agents]));
    rows.push([]);
    rows.push(["Action plan", "Deploy agents on the top 3 rows this week. Re-audit in 30 days."]);
    return rows;
  }

  window.auditDownload = function () {
    if (!window._auditReport) return toast("Press Analyze first");
    Sheets.downloadXLS("time-gap-audit.xls", [{ name: "Time Audit", rows: reportRows() }]);
  };

  window.auditEmail = function () {
    if (!window._auditReport) return toast("Press Analyze first");
    const to = $("audit-email-to").value.trim();
    if (!/.+@.+\..+/.test(to)) return toast("Enter a valid email address first");
    const r = window._auditReport;
    Sheets.emailReport({
      to,
      subject: `Your Time Gap Audit — ${r.totalSaved.toFixed(1)} hrs/week reclaimable ($${Math.round(r.yearlyValue).toLocaleString()}/yr)`,
      intro: "Here is your Time Gap Audit from AI Business Academy.",
      filename: "time-gap-audit.csv",
      rows: reportRows()
    });
  };

  window.auditNarrate = function (btn) {
    if (!window._auditReport) return toast("Press Analyze first");
    const r = window._auditReport;
    Narrator.speak(
      `Audit complete. You currently spend ${r.totalHrs.toFixed(0)} hours per week on delegatable work. ` +
      `Of that, ${r.totalSaved.toFixed(1)} hours are reclaimable with AI agents — worth roughly ${Math.round(r.yearlyValue).toLocaleString()} dollars per year at your target rate, ` +
      `or ${Math.round(r.daysBack)} full working days returned to you annually. ` +
      `Your biggest leak is ${r.rows[0].label}. Deploy ${r.rows[0].agents} against it this week, then re-audit in thirty days.`, btn);
  };

  document.addEventListener("DOMContentLoaded", () => {
    $("audit-rows").innerHTML = rowsHTML();
    $("audit-run").addEventListener("click", calc);
    calc();
  });
})();
