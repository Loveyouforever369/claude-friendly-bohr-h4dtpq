/* ============================================================
   BUSINESS PROFILE HUB
   - Owner profile with real photo (stored locally on device)
   - "How we should serve you" service preferences
   - Feedback / ideas / complaints composer → email pipeline
   - Pulls in DNA + Time Audit results if the tools were run
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);
  const KEY = "aba_profile";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); return true; }
    catch (e) { toast("Couldn't save locally (storage full or private mode)"); return false; }
  }

  function fill() {
    const p = load();
    ["name", "biz", "industry", "size", "email", "goals", "serve", "challenges"].forEach(k => {
      const el = $("pf-" + k);
      if (el && p[k]) el.value = p[k];
    });
    if (p.photo) { $("pf-photo-img").src = p.photo; $("pf-photo-img").style.display = "block"; $("pf-photo-empty").style.display = "none"; }
    renderCard();
  }

  function renderCard() {
    const p = load();
    const dna = (() => { try { return JSON.parse(localStorage.getItem("aba_dna")); } catch (e) { return null; } })();
    const audit = (() => { try { return JSON.parse(localStorage.getItem("aba_audit")); } catch (e) { return null; } })();

    if (!p.name && !p.biz) { $("pf-card").innerHTML = `<p class="muted">Save your profile to see your Owner Card here.</p>`; return; }

    $("pf-card").innerHTML = `
      <div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">
        ${p.photo ? `<img src="${p.photo}" alt="${p.name || "Owner"}" style="width:84px;height:84px;border-radius:16px;object-fit:cover;border:2px solid var(--neon-cyan)">`
                  : `<div class="avatar" style="width:84px;height:84px;font-size:2.4rem">👤</div>`}
        <div>
          <h3 style="margin:0">${p.name || "Owner"}</h3>
          <p style="margin:2px 0"><b>${p.biz || ""}</b> · ${p.industry || ""} · ${p.size || ""}</p>
          <p class="muted" style="margin:2px 0">${p.email || ""}</p>
        </div>
      </div>
      <div class="grid grid-3 mt-2">
        <div class="stat-tile"><div class="stat-value accent">${dna ? dna.code : "—"}</div><div class="stat-label">Business DNA ${dna ? "· " + dna.archetype : "(run the scan)"}</div></div>
        <div class="stat-tile"><div class="stat-value accent">${audit ? audit.totalSaved + "h" : "—"}</div><div class="stat-label">${audit ? "Reclaimable hrs/week" : "Time audit (run it)"}</div></div>
        <div class="stat-tile"><div class="stat-value accent">${audit ? "$" + audit.yearlyValue.toLocaleString() : "—"}</div><div class="stat-label">${audit ? "Yearly value found" : "Value (run the audit)"}</div></div>
      </div>
      ${p.goals ? `<h4 style="color:var(--neon-cyan);font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;margin:16px 0 4px">Goals</h4><p>${p.goals}</p>` : ""}
      ${p.serve ? `<h4 style="color:var(--neon-cyan);font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;margin:12px 0 4px">How to serve this business</h4><p>${p.serve}</p>` : ""}`;
  }

  window.profileSave = function () {
    const p = load();
    ["name", "biz", "industry", "size", "email", "goals", "serve", "challenges"].forEach(k => {
      const el = $("pf-" + k);
      if (el) p[k] = el.value.trim();
    });
    if (save(p)) { toast("✓ Profile saved on this device"); renderCard(); }
  };

  window.profilePhoto = function (input) {
    const file = input.files && input.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) return toast("Please choose an image file");
    if (file.size > 4 * 1024 * 1024) return toast("Image too large — pick one under 4 MB");
    const reader = new FileReader();
    reader.onload = () => {
      // Downscale to keep localStorage light
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        const scale = Math.min(1, 320 / Math.max(img.width, img.height));
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        const dataUrl = c.toDataURL("image/jpeg", 0.82);
        const p = load(); p.photo = dataUrl;
        if (save(p)) {
          $("pf-photo-img").src = dataUrl; $("pf-photo-img").style.display = "block";
          $("pf-photo-empty").style.display = "none";
          toast("✓ Photo added — stored only on your device");
          renderCard();
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  window.profileDownload = function () {
    const p = load();
    if (!p.name && !p.biz) return toast("Save your profile first");
    const dna = (() => { try { return JSON.parse(localStorage.getItem("aba_dna")); } catch (e) { return null; } })();
    const audit = (() => { try { return JSON.parse(localStorage.getItem("aba_audit")); } catch (e) { return null; } })();
    const rows = [
      ["AI BUSINESS ACADEMY — BUSINESS PROFILE"],
      ["Owner", p.name || ""], ["Business", p.biz || ""], ["Industry", p.industry || ""],
      ["Team size", p.size || ""], ["Email", p.email || ""], [],
      ["Goals", p.goals || ""], ["How we should serve this business", p.serve || ""],
      ["Current challenges", p.challenges || ""], [],
      ["Business DNA", dna ? dna.code + " (" + dna.archetype + ", " + dna.avg + "/100)" : "not scanned yet"],
      ["Time audit", audit ? audit.totalSaved + " hrs/week reclaimable · $" + audit.yearlyValue + "/yr" : "not run yet"]
    ];
    Sheets.downloadXLS("business-profile.xls", [{ name: "Business Profile", rows }]);
  };

  /* ----- Message center: feedback, ideas, complaints ----- */
  window.profileSend = function () {
    const p = load();
    const type = $("msg-type").value;
    const text = $("msg-text").value.trim();
    if (text.length < 10) return toast("Tell us a little more — 10+ characters");

    const subjectMap = {
      feedback: "💬 Owner feedback",
      idea: "💡 'AI could help me with…' idea",
      complaint: "🚩 Complaint — please make this right",
      serve: "🤝 How to serve my business better"
    };
    const rows = [
      ["Type", type], ["From", p.name || "(no profile saved)"], ["Business", p.biz || ""],
      ["Email", p.email || ""], ["Date", new Date().toLocaleString()], [],
      ["Message", text]
    ];
    Sheets.emailReport({
      to: window.SITE.contactEmail,
      subject: subjectMap[type] + " — " + (p.biz || p.name || "an owner"),
      intro: "New message from the Business Profile hub:\n\n" + text,
      filename: "owner-message.csv",
      rows
    });
    // Keep a local history
    try {
      const hist = JSON.parse(localStorage.getItem("aba_messages") || "[]");
      hist.unshift({ type, text, date: new Date().toISOString().slice(0, 10) });
      localStorage.setItem("aba_messages", JSON.stringify(hist.slice(0, 30)));
    } catch (e) {}
    renderHistory();
    $("msg-text").value = "";
  };

  function renderHistory() {
    let hist = [];
    try { hist = JSON.parse(localStorage.getItem("aba_messages") || "[]"); } catch (e) {}
    $("msg-history").innerHTML = hist.length
      ? hist.map(m => `<div class="card" style="padding:12px 16px;margin-bottom:8px"><span class="muted">${m.date} · ${m.type}</span><p>${m.text}</p></div>`).join("")
      : `<p class="muted">Messages you send will be listed here (kept on this device).</p>`;
  }

  document.addEventListener("DOMContentLoaded", () => { fill(); renderHistory(); });
})();
