/* ============================================================
   PROFIT LAB — ROI calculator + playbook filtering + export
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);

  window.profitCalc = function () {
    const revenue = Math.max(0, parseFloat($("pl-revenue").value) || 0);
    const margin = Math.min(95, Math.max(1, parseFloat($("pl-margin").value) || 30)) / 100;
    const hours = Math.max(0, parseFloat($("pl-hours").value) || 0);
    const rate = Math.max(0, parseFloat($("pl-rate").value) || 0);
    const toolCost = Math.max(0, parseFloat($("pl-tools").value) || 0);

    // Conservative model, assumptions shown to the user on-page:
    const timeValue = hours * rate * 52;                 // reclaimed capacity value
    const leakFind = revenue * 0.03;                     // 3% expense/AR leak recovery
    const pricingLift = revenue * 0.02 * margin;         // careful 2% price test → margin
    const conversionLift = revenue * 0.04 * margin;      // 4% more revenue from follow-up/consistency
    const totalUpside = timeValue + leakFind + pricingLift + conversionLift;
    const yearlyToolCost = toolCost * 12;
    const net = totalUpside - yearlyToolCost;
    const roi = yearlyToolCost > 0 ? net / yearlyToolCost : Infinity;
    const payback = totalUpside > 0 ? (yearlyToolCost / totalUpside) * 365 : 0;

    $("pl-result").style.display = "block";
    $("pl-time").textContent = "$" + Math.round(timeValue).toLocaleString();
    $("pl-leaks").textContent = "$" + Math.round(leakFind).toLocaleString();
    $("pl-price").textContent = "$" + Math.round(pricingLift).toLocaleString();
    $("pl-conv").textContent = "$" + Math.round(conversionLift).toLocaleString();
    $("pl-net").textContent = "$" + Math.round(net).toLocaleString();
    $("pl-roi").textContent = yearlyToolCost > 0 ? Math.round(roi * 100).toLocaleString() + "%" : "∞";
    $("pl-payback").textContent = payback < 1 ? "< 1 day" : Math.round(payback) + " days";

    Charts.hbars($("pl-chart"), {
      title: "First-year AI upside by lever (conservative model)",
      subtitle: "Assumptions: hours × rate × 52 · 3% leak recovery · 2% price test · 4% conversion lift — tune them to your reality",
      series: [{ name: "Annual value", color: "#199e70" }],
      rows: [
        { label: "Reclaimed owner time", values: [Math.round(timeValue)] },
        { label: "Leaks & AR recovered", values: [Math.round(leakFind)] },
        { label: "Pricing intelligence", values: [Math.round(pricingLift)] },
        { label: "Follow-up & consistency", values: [Math.round(conversionLift)] },
        { label: "Tool cost (deduct)", values: [Math.round(yearlyToolCost)] }
      ],
      fmt: v => "$" + Math.round(v).toLocaleString()
    });

    window._profitReport = { revenue, margin, hours, rate, toolCost, timeValue, leakFind, pricingLift, conversionLift, totalUpside, yearlyToolCost, net, roi, payback };
    $("pl-result").scrollIntoView({ behavior: "smooth" });
  };

  window.profitDownload = function () {
    if (!window._profitReport) return toast("Run the calculator first");
    const r = window._profitReport;
    const rows = [
      ["AI BUSINESS ACADEMY — AI PROFIT PROJECTION"],
      ["Date", new Date().toLocaleDateString()], [],
      ["INPUTS"], ["Annual revenue", "$" + r.revenue.toLocaleString()],
      ["Gross margin", Math.round(r.margin * 100) + "%"],
      ["Hours reclaimed weekly", r.hours], ["Owner hourly value", "$" + r.rate],
      ["AI tools budget / month", "$" + r.toolCost], [],
      ["PROJECTED FIRST-YEAR VALUE (conservative)"],
      ["Reclaimed owner time", Math.round(r.timeValue)],
      ["Leaks & receivables recovered (3%)", Math.round(r.leakFind)],
      ["Pricing intelligence (2% test × margin)", Math.round(r.pricingLift)],
      ["Follow-up & consistency lift (4% × margin)", Math.round(r.conversionLift)],
      ["Total upside", Math.round(r.totalUpside)],
      ["Annual tool cost", Math.round(r.yearlyToolCost)],
      ["NET FIRST-YEAR VALUE", Math.round(r.net)],
      ["ROI on tools", Math.round(r.roi * 100) + "%"],
      ["Payback period", Math.round(r.payback) + " days"], [],
      ["Note", "Assumptions are deliberately conservative; replace with your measured numbers after 30 days."]
    ];
    Sheets.downloadXLS("ai-profit-projection.xls", [{ name: "Profit Projection", rows }]);
  };

  window.profitEmail = function () {
    if (!window._profitReport) return toast("Run the calculator first");
    const to = $("pl-email-to").value.trim();
    if (!/.+@.+\..+/.test(to)) return toast("Enter a valid email address first");
    const r = window._profitReport;
    Sheets.emailReport({
      to,
      subject: "Your AI Profit Projection — $" + Math.round(r.net).toLocaleString() + " net first-year value",
      intro: "Here is your AI Profit Projection from AI Business Academy.",
      filename: "ai-profit-projection.csv",
      rows: [["Metric", "Value"],
        ["Total upside", "$" + Math.round(r.totalUpside).toLocaleString()],
        ["Tool cost", "$" + Math.round(r.yearlyToolCost).toLocaleString()],
        ["Net value", "$" + Math.round(r.net).toLocaleString()],
        ["ROI", Math.round(r.roi * 100) + "%"],
        ["Payback", Math.round(r.payback) + " days"]]
    });
  };
})();
