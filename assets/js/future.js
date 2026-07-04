/* ============================================================
   FUTURE RADAR — the future AI tool chart:
   what to look out for · what it means · how it grows your
   business tremendously · when to act. Filter by horizon,
   sort by impact, export the whole radar as a spreadsheet.
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);

  /* impact: 1-5 · horizon: now | soon (6-18mo) | later (2-4yr) */
  window.FUTURE_TOOLS = [
    {
      tool: "Agentic AI employees", icon: "🤖", horizon: "now", impact: 5,
      watch: "Assistants that plan multi-step work, use tools, keep memory and finish jobs — not just answer questions.",
      means: "Software stops being something you operate and becomes something you delegate to. 'Assign AI a job' replaces 'ask AI a question'.",
      grow: "Each agent covers a role you'd otherwise hire or skip: inbox, proposals, bookkeeping prep, content. Owners run leaner teams with bigger output — capacity grows before headcount does.",
      action: "Hire your first 5 agents now (Module 4). Measure hours reclaimed weekly."
    },
    {
      tool: "Background / always-on agents", icon: "🌙", horizon: "now", impact: 5,
      watch: "Agents that work while you sleep: monitoring competitors, drafting the morning brief, flagging anomalies — like Profound's 'Aim' for marketing teams (launched July 2026).",
      means: "Work stops being sessions and becomes standing coverage. The business gains a nervous system that never blinks.",
      grow: "You open the day with decisions pre-researched: what changed, what it means, what to do. First-mover speed on every market shift compounds into share.",
      action: "Set up the Monday Intelligence Swarm (Module 5) as your first background routine."
    },
    {
      tool: "Agent payment rails", icon: "💳", horizon: "soon", impact: 4,
      watch: "Infrastructure letting AI agents buy, subscribe and transact within limits you set — startups like Alsa raised funding in July 2026 to build exactly this.",
      means: "Agents move from advising ('you should reorder') to executing ('reordered, here's the receipt'). Commerce becomes agent-to-agent.",
      grow: "Procurement, reordering, media buying and comparison shopping run themselves within budgets. Also: your STORE needs to be readable by customers' buying agents — a new sales channel.",
      action: "Watch for spend-limit + audit-trail features. Make product data clean and machine-readable now."
    },
    {
      tool: "AI search / answer engines (AEO)", icon: "🔎", horizon: "now", impact: 5,
      watch: "Buyers asking AI assistants for recommendations instead of scrolling search results. Citations, not rankings, decide who gets found.",
      means: "The homepage of the internet is becoming an answer, not a list. If AI can't cite you, you're invisible to a growing slice of demand.",
      grow: "Early movers own the 'AI shelf' in their category while rivals fight over blue links. Being the cited answer = pre-sold trust and near-zero acquisition cost.",
      action: "Run an AEO audit (agent: Lumen). Test monthly: do assistants cite you for your category questions?"
    },
    {
      tool: "Multimodal AI (see/hear/speak)", icon: "👁️", horizon: "now", impact: 4,
      watch: "Models that read photos, invoices, shelf displays, job-site pictures, and hold natural voice conversations.",
      means: "The keyboard stops being the bottleneck. Any visual or spoken part of your operation becomes automatable input.",
      grow: "Photo → quote for trades. Shelf photo → reorder list for retail. Voice notes → documented SOPs. Whole categories of 'someone has to look at this' work disappear.",
      action: "List your top 3 'look at it' tasks and pilot one photo- or voice-driven workflow."
    },
    {
      tool: "Voice AI receptionists & closers", icon: "☎️", horizon: "now", impact: 4,
      watch: "Natural-sounding voice agents answering calls, qualifying leads, booking appointments 24/7 — with honest disclosure.",
      means: "The missed call — small business's silent killer — dies. Phone coverage becomes infinite and consistent.",
      grow: "Local businesses miss ~40% of calls; each one is revenue walking to a competitor. Full coverage typically lifts bookings double-digits with zero new marketing.",
      action: "Pilot after-hours first (lowest risk), disclose it's an assistant, review transcripts weekly."
    },
    {
      tool: "AI memory & personal context", icon: "🧠", horizon: "soon", impact: 4,
      watch: "Assistants that remember your business, preferences, customers and past decisions across sessions — persistent context becoming the default.",
      means: "Every AI interaction starts at senior-employee context instead of stranger context. Switching costs rise; your 'AI dossier' becomes an asset.",
      grow: "Compounding quality: month 6 outputs beat month 1 outputs because the assistant knows your voice, margins and customers. Onboarding new tools/staff accelerates too.",
      action: "Start feeding structured context now: role cards, SOPs, voice guides (Modules 4+6). Own and back up your context files."
    },
    {
      tool: "Computer-use agents", icon: "🖱️", horizon: "soon", impact: 4,
      watch: "Agents that operate real software — clicking, typing, navigating legacy systems and portals like a human would.",
      means: "The 'our old system has no integration' excuse dies. Any workflow a temp could do in a browser becomes automatable.",
      grow: "Unlocks automation for the unglamorous stack: insurance portals, government filings, supplier systems, legacy POS. The businesses stuck on old software benefit MOST.",
      action: "Document your portal-based chores now (agent: Forge) — they're first in line."
    },
    {
      tool: "Vertical AI (your industry, distilled)", icon: "🏥", horizon: "soon", impact: 4,
      watch: "AI built for one industry: dental, legal, construction, restaurants — with the workflows, compliance and jargon baked in.",
      means: "Generic AI needs your briefing; vertical AI arrives pre-trained on your world. Setup time collapses.",
      grow: "Best-of-both playbook: vertical AI for regulated/core workflows + general agents for everything else. Competitors using neither fall behind on cost AND quality.",
      action: "Search '[your industry] AI' quarterly; demo the top 2; compare against your general-agent stack."
    },
    {
      tool: "Synthetic media & AI avatars", icon: "🎭", horizon: "now", impact: 3,
      watch: "Studio-quality video presenters, voice clones and brand characters generated from a script — disclosed and on-brand.",
      means: "Video production cost approaches zero. Your brand character (see Character Forge) can literally host your content.",
      grow: "Businesses that 'can't do video' suddenly can: training libraries, product explainers, multilingual versions of everything. Content moats get cheap.",
      action: "Forge your brand character, then pilot one disclosed avatar explainer video."
    },
    {
      tool: "Agent orchestration platforms", icon: "🎼", horizon: "soon", impact: 4,
      watch: "Dashboards where multiple agents, tools and approval gates are wired into visible pipelines — the 'org chart for AI' layer.",
      means: "Multi-agent workflows stop being hacker projects and become products a busy owner can run.",
      grow: "The Chain/Council/Swarm patterns (Module 5) become drag-and-drop. Whole functions — marketing ops, collections, hiring pipelines — run with you as approver only.",
      action: "Master single agents first; adopt an orchestrator once 5+ agents run weekly."
    },
    {
      tool: "On-device & private AI", icon: "🔒", horizon: "soon", impact: 3,
      watch: "Capable models running on laptops/phones/local servers — data never leaves the building.",
      means: "The privacy objection to AI dissolves. Sensitive work (client files, financials, health data) becomes AI-addressable.",
      grow: "Professional services (legal, accounting, medical-adjacent) can finally automate their most valuable — most confidential — workflows. Trust becomes a selling point: 'your data never leaves our office.'",
      action: "If you handle sensitive data, ask vendors about local/private deployment options now."
    },
    {
      tool: "AI-native CRM & RevOps", icon: "📇", horizon: "now", impact: 4,
      watch: "CRMs where AI drafts the follow-ups, scores the pipeline, updates itself from calls/emails, and nags nobody.",
      means: "The CRM stops being a database your team resents and becomes a colleague that does the admin itself.",
      grow: "The #1 revenue leak in small business is broken follow-up. Self-driving pipeline = deals stop dying of silence. Typical lift: 10-25% more closed from the SAME lead flow.",
      action: "Audit your current follow-up gaps (agent: Compass) before choosing tooling."
    },
    {
      tool: "AI governance & compliance tooling", icon: "🛡️", horizon: "later", impact: 3,
      watch: "Rules and standards for AI disclosure, data handling and liability — plus tools that keep you compliant automatically.",
      means: "AI use is becoming regulated like food safety: invisible when done right, expensive when done wrong.",
      grow: "Early good hygiene = trust advantage and zero retrofit cost. 'Responsibly AI-powered' becomes a badge customers look for — especially in B2B deals.",
      action: "Adopt the 1-page AI policy now (agent: Ethica): disclosure, data rules, human review."
    },
    {
      tool: "Autonomous business units", icon: "🏙️", horizon: "later", impact: 5,
      watch: "Experiments where an entire micro-business line — niche store, newsletter, service funnel — runs agent-managed with human ownership and oversight.",
      means: "The unit of entrepreneurship shrinks: one owner, many small AI-run product lines instead of one big bet.",
      grow: "Portfolio entrepreneurship: test 5 niches at once, feed the winners, fold the losers — at a cost that used to fund one attempt. Ownership and judgment become the scarce (valuable) inputs.",
      action: "Not yet — build your agent-management skill now; it's the prerequisite. Revisit in 12-18 months."
    },
    {
      tool: "AI co-scientists & deep research", icon: "🧪", horizon: "later", impact: 4,
      watch: "Research-grade agents that read everything, run analyses for days, and return cited, defensible reports.",
      means: "Consulting-firm-depth answers ('should we enter this market?') become a utility any owner can tap.",
      grow: "Big-company decision quality at small-company speed. The strategy gap between you and funded competitors narrows to zero — judgment becomes the differentiator.",
      action: "Practice framing great research questions now (agent: Panorama) — the skill transfers."
    }
  ];

  const H_LABEL = { now: ["ACT NOW", "horizon-now"], soon: ["6–18 MONTHS", "horizon-soon"], later: ["2–4 YEARS", "horizon-later"] };

  function meter(n) {
    return `<span class="impact-meter" title="Growth impact ${n}/5" aria-label="Growth impact ${n} of 5">` +
      [1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("") + `</span>`;
  }

  function render() {
    const h = document.querySelector("#radar-chips .chip.active")?.dataset.h || "all";
    const list = window.FUTURE_TOOLS
      .filter(t => h === "all" || t.horizon === h)
      .sort((a, b) => b.impact - a.impact);

    $("radar-list").innerHTML = list.map(t => `
      <details class="acc">
        <summary>
          <span style="font-size:1.5rem">${t.icon}</span>
          <span style="flex:1">${t.tool}</span>
          ${meter(t.impact)}
          <span class="horizon-badge ${H_LABEL[t.horizon][1]}">${H_LABEL[t.horizon][0]}</span>
          <span class="chev">▸</span>
        </summary>
        <div class="acc-body">
          <h4>👀 What to look out for</h4><p>${t.watch}</p>
          <h4>🧩 What it means</h4><p>${t.means}</p>
          <h4>📈 How it grows your business</h4><p>${t.grow}</p>
          <h4>⚡ Your move</h4><p>${t.action}</p>
        </div>
      </details>`).join("");

    $("radar-count").textContent = list.length + " signals on radar" + (h !== "all" ? " · " + H_LABEL[h][0] : "");
  }

  window.radarDownload = function () {
    const rows = [
      ["AI BUSINESS ACADEMY — FUTURE AI TOOL RADAR"],
      ["Generated", new Date().toLocaleDateString()], [],
      ["Tool / Signal", "Horizon", "Growth impact (1-5)", "What to look out for", "What it means", "How it grows your business", "Your move"]
    ];
    window.FUTURE_TOOLS.forEach(t =>
      rows.push([t.tool, H_LABEL[t.horizon][0], t.impact, t.watch, t.means, t.grow, t.action]));
    Sheets.downloadXLS("future-ai-tool-radar.xls", [{ name: "Future Radar", rows }]);
  };

  window.radarEmail = function () {
    const to = $("radar-email-to").value.trim();
    if (!/.+@.+\..+/.test(to)) return toast("Enter a valid email address first");
    const rows = [["Tool", "Horizon", "Impact", "Watch for", "Meaning", "Growth", "Action"]];
    window.FUTURE_TOOLS.forEach(t => rows.push([t.tool, H_LABEL[t.horizon][0], t.impact, t.watch, t.means, t.grow, t.action]));
    Sheets.emailReport({
      to, subject: "Your Future AI Tool Radar — 16 signals to watch",
      intro: "Here is the Future AI Tool Radar from AI Business Academy: what to look out for, what it means, and how each signal can grow your business.",
      filename: "future-ai-tool-radar.csv", rows
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    $("radar-chips").innerHTML = `
      <span class="chip active" data-h="all">All signals (${window.FUTURE_TOOLS.length})</span>
      <span class="chip" data-h="now">🟢 Act now</span>
      <span class="chip" data-h="soon">🟡 6–18 months</span>
      <span class="chip" data-h="later">🟣 2–4 years</span>`;
    $("radar-chips").querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      $("radar-chips").querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === c));
      render();
    }));
    render();
  });
})();
