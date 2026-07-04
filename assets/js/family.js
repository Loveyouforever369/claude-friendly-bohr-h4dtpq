/* ============================================================
   AI FAMILY DIRECTORY — filter, search, hire-prompt copying
   ============================================================ */

(function () {
  let dept = "All";
  const $ = id => document.getElementById(id);

  function render() {
    const q = ($("family-search").value || "").toLowerCase();
    const list = window.AI_FAMILY.filter(a =>
      (dept === "All" || a.dept === dept) &&
      (!q || (a.name + a.role + a.power + a.dept).toLowerCase().includes(q)));

    $("family-count").textContent = list.length + " of " + window.AI_FAMILY.length + " family members";
    $("family-grid").innerHTML = list.map(a => `
      <div class="card agent-card">
        <div class="agent-top">
          <div class="avatar">${a.avatar}</div>
          <div>
            <div class="agent-name">${a.name}</div>
            <div class="agent-role">${a.role}</div>
          </div>
        </div>
        <div class="agent-dept">${a.dept}</div>
        <div class="agent-power">${a.power}</div>
        <button class="copy-prompt" data-name="${a.name}">📋 Copy hire prompt</button>
      </div>`).join("");

    $("family-grid").querySelectorAll(".copy-prompt").forEach(btn => {
      btn.addEventListener("click", () => {
        const agent = window.AI_FAMILY.find(x => x.name === btn.dataset.name);
        copyText(agent.prompt, "✓ " + agent.name + "'s hire prompt copied — paste into your AI assistant");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const depts = ["All", ...window.AI_FAMILY_DEPTS];
    $("family-chips").innerHTML = depts.map(d =>
      `<span class="chip ${d === "All" ? "active" : ""}" data-d="${d}">${d} <span class="muted">(${d === "All" ? window.AI_FAMILY.length : window.AI_FAMILY.filter(a => a.dept === d).length})</span></span>`).join("");

    $("family-chips").querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      dept = c.dataset.d;
      $("family-chips").querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === c));
      render();
    }));

    $("family-search").addEventListener("input", render);

    document.querySelectorAll("[data-count-agents]").forEach(el => el.dataset.count = window.AI_FAMILY.length);
    render();
  });

  window.familyDownload = function () {
    const rows = [["Name", "Department", "Role", "Superpower", "Hire Prompt"]];
    window.AI_FAMILY.forEach(a => rows.push([a.name, a.dept, a.role, a.power, a.prompt]));
    Sheets.downloadXLS("ai-family-roster.xls", [{ name: "AI Family Roster", rows: [["AI BUSINESS ACADEMY — THE AI FAMILY ROSTER (" + window.AI_FAMILY.length + " agents)"], [], ...rows] }]);
  };
})();
