/* ============================================================
   SHEETS — client-side spreadsheet factory + email delivery
   - CSV and Excel-compatible .xls (SpreadsheetML) generation
   - Email: POSTs to SITE.emailEndpoint if configured (Formspree/
     Web3Forms style), otherwise downloads the file and opens a
     pre-filled mail draft so the user can attach & send.
   ============================================================ */

window.Sheets = (function () {

  function esc(v) { return String(v ?? "").replace(/"/g, '""'); }

  function toCSV(rows) {
    return rows.map(r => r.map(c => `"${esc(c)}"`).join(",")).join("\r\n");
  }

  function xmlEsc(v) {
    return String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* sheets: [{name, rows: [[..],[..]]}] — first row of each sheet is styled as a header */
  function toXLS(sheets) {
    const ws = sheets.map(s => {
      const rowsXml = s.rows.map((row, ri) => {
        const cells = row.map(c => {
          const isNum = typeof c === "number" && isFinite(c);
          const styleId = ri === 0 ? ' ss:StyleID="hdr"' : "";
          return `<Cell${styleId}><Data ss:Type="${isNum ? "Number" : "String"}">${xmlEsc(c)}</Data></Cell>`;
        }).join("");
        return `<Row>${cells}</Row>`;
      }).join("");
      const cols = (s.rows[0] || []).map(() => `<Column ss:Width="180"/>`).join("");
      return `<Worksheet ss:Name="${xmlEsc(s.name).slice(0, 31)}"><Table>${cols}${rowsXml}</Table></Worksheet>`;
    }).join("");

    return `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="hdr">
   <Font ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#1F2A5A" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 ${ws}
</Workbook>`;
  }

  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  function downloadCSV(filename, rows) {
    download(filename, "﻿" + toCSV(rows), "text/csv;charset=utf-8");
    toast("📥 Spreadsheet downloaded: " + filename);
  }

  function downloadXLS(filename, sheets) {
    download(filename, toXLS(sheets), "application/vnd.ms-excel");
    toast("📥 Excel workbook downloaded: " + filename);
  }

  /*
   * Email a report.
   * cfg: { to, subject, intro, rows (for CSV body), filename, sheets (optional XLS) }
   * If SITE.emailEndpoint is set, POST there (works with Formspree/Web3Forms-style
   * endpoints). Otherwise: download the spreadsheet + open a pre-filled draft.
   */
  async function emailReport(cfg) {
    const csv = toCSV(cfg.rows);
    const endpoint = window.SITE && window.SITE.emailEndpoint;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            email: cfg.to,
            subject: cfg.subject,
            message: (cfg.intro || "") + "\n\n--- REPORT (CSV) ---\n" + csv
          })
        });
        if (res.ok) { toast("📧 Report emailed to " + cfg.to + " ✓"); return true; }
        throw new Error("endpoint returned " + res.status);
      } catch (err) {
        console.warn("Email endpoint failed, falling back to draft:", err);
      }
    }

    // Fallback for static hosting: download + open mail draft
    if (cfg.sheets) downloadXLS(cfg.filename.replace(/\.csv$/, ".xls"), cfg.sheets);
    else downloadCSV(cfg.filename, cfg.rows);

    const bodyLimit = 1500; // keep mailto URLs safe across clients
    const body = (cfg.intro || "") +
      "\n\nYour full report has just downloaded as \"" + cfg.filename +
      "\" — attach it to this email before sending.\n\n--- REPORT PREVIEW ---\n" +
      csv.slice(0, bodyLimit) + (csv.length > bodyLimit ? "\n… (see attached file for the rest)" : "");

    location.href = "mailto:" + encodeURIComponent(cfg.to || "") +
      "?subject=" + encodeURIComponent(cfg.subject) +
      "&body=" + encodeURIComponent(body);

    toast("📧 Draft opened — attach the downloaded file & send");
    return true;
  }

  return { toCSV, toXLS, download, downloadCSV, downloadXLS, emailReport };
})();
