/* ============================================================
   OWNERS' NETWORK — community wall
   Seeded with real-world-style wins from example owners, plus
   your own posts (stored on this device on static hosting —
   see README to wire a shared backend like Supabase for a
   true multi-user community).
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);

  const SEED = [
    {
      name: "Marisol V.", biz: "Bloom & Vine Floral Studio", avatar: "🌸", tag: "Time Reclaimed",
      date: "2026-06-21", likes: 47,
      text: "Ran the Time Audit and nearly cried: 14.5 hours/week on emails, order confirmations and social posts. Deployed Slate for inbox and the Quill→Remix→Echo content chain. Four weeks in: 11 hours back, and our June revenue is up 18% because I finally had time to call the wedding planners on my list. The hours were the growth plan all along.",
      worked: "Start with the inbox agent FIRST. It pays for the habit."
    },
    {
      name: "Deshawn K.", biz: "Ironclad Fitness (2 locations)", avatar: "🏋️", tag: "Profit Found",
      date: "2026-06-14", likes: 63,
      text: "The profit sprint from Module 7 found $2,140/month: zombie software subscriptions ($480), uncollected memberships our old system missed ($900+), and a supplement supplier renegotiation Hawk drafted for me ($760). That's $25K/year — found in six days, with zero new customers.",
      worked: "Do the expense autopsy before ANY new marketing spend."
    },
    {
      name: "Priya R.", biz: "Lantern Books & Coffee", avatar: "📚", tag: "Brand Character",
      date: "2026-06-08", likes: 58,
      text: "Used the Character Forge to create 'Wick' — a lantern-carrying library cat who embodies our DNA (community + craft). Wick writes our newsletter intros, answers site chat, and kids literally come in asking for him. Newsletter open rate went from 24% to 41%. A character isn't a gimmick; it's your values wearing a face.",
      worked: "Give the character ONE strong value to embody, not five."
    },
    {
      name: "Tomás E.", biz: "Bluewater HVAC", avatar: "🌬️", tag: "AI Agents",
      date: "2026-05-30", likes: 71,
      text: "I'm not a tech guy. Started with exactly one agent like Module 4 says: Bridge, for proposals. Call notes go in, clean 3-option proposal comes out, I fix two lines and send. Quote turnaround went from 3 days to same-day, and close rate is up because we're first to respond. One agent. That's all it took to believe.",
      worked: "Same-day proposals close deals. Speed is a feature."
    },
    {
      name: "Aiko + Ben", biz: "Hearth & Harbor Home Staging", avatar: "🛋️", tag: "Market Edge",
      date: "2026-05-19", likes: 39,
      text: "The Monday Intelligence Swarm is our unfair advantage. Vantage caught a competitor dropping their premium tier; we held price and doubled down on the guarantee messaging Beacon wrote. Two of their unhappy clients found us through an AEO-optimized FAQ page Lumen suggested. Reading the market weekly changed how we compete.",
      worked: "Ask AI assistants your category questions monthly — check you're cited."
    },
    {
      name: "Grace O.", biz: "Fernwood Accounting", avatar: "🧾", tag: "Complex Problems",
      date: "2026-05-11", likes: 52,
      text: "Used the Council pattern on our biggest decision — whether to drop 1040-only clients. Scale modeled it, Crucible attacked it, Quorum's 'board' debated it. The verdict surprised us: keep them, but move them to a productized self-serve tier Alchemist designed. Revenue kept, hours halved. A better answer than either of the two options we walked in with.",
      worked: "Let one agent ATTACK your plan before you commit. Every time."
    }
  ];

  function myPosts() {
    try { return JSON.parse(localStorage.getItem("aba_posts") || "[]"); } catch (e) { return []; }
  }

  function render() {
    const tag = document.querySelector("#wall-chips .chip.active")?.dataset.t || "All";
    const mine = myPosts().map(p => ({ ...p, mine: true }));
    const all = [...mine, ...SEED].filter(p => tag === "All" || p.tag === tag);

    $("wall").innerHTML = all.map((p, i) => `
      <div class="card ${p.mine ? "glow-card" : ""}" style="margin-bottom:16px">
        <div style="display:flex;gap:12px;align-items:center;margin-bottom:10px">
          ${p.photo ? `<img src="${p.photo}" alt="" style="width:46px;height:46px;border-radius:12px;object-fit:cover;border:1px solid var(--border-bright)">`
                    : `<div class="avatar">${p.avatar || "👤"}</div>`}
          <div>
            <b>${p.name}</b> <span class="muted">· ${p.biz}</span><br>
            <span class="muted" style="font-size:.75rem">${p.date} · <span style="color:var(--neon-magenta)">${p.tag}</span>${p.mine ? " · your post (this device)" : ""}</span>
          </div>
        </div>
        <p>${p.text}</p>
        ${p.worked ? `<p class="mt-1" style="border-left:3px solid var(--status-good);padding-left:12px"><b>✅ What worked:</b> ${p.worked}</p>` : ""}
        <button class="copy-prompt like-btn" data-i="${i}">👍 Helpful (${p.likes || 0})</button>
      </div>`).join("");

    $("wall").querySelectorAll(".like-btn").forEach(btn =>
      btn.addEventListener("click", () => {
        const label = btn.textContent.match(/\((\d+)\)/);
        const n = label ? parseInt(label[1]) + 1 : 1;
        btn.textContent = `👍 Helpful (${n})`;
        btn.disabled = true;
      }));
  }

  window.wallPost = function () {
    const name = $("wp-name").value.trim() || "Anonymous Owner";
    const biz = $("wp-biz").value.trim() || "My Business";
    const tag = $("wp-tag").value;
    const text = $("wp-text").value.trim();
    const worked = $("wp-worked").value.trim();
    if (text.length < 20) return toast("Share a little more detail — 20+ characters");

    let photo = null;
    try { photo = (JSON.parse(localStorage.getItem("aba_profile") || "{}")).photo || null; } catch (e) {}

    const posts = myPosts();
    posts.unshift({ name, biz, tag, text, worked, photo, avatar: "🚀", likes: 0, date: new Date().toISOString().slice(0, 10) });
    try { localStorage.setItem("aba_posts", JSON.stringify(posts.slice(0, 20))); } catch (e) {}

    // Also offer to share it with the Academy so it can be featured site-wide
    $("wp-text").value = ""; $("wp-worked").value = "";
    toast("🎉 Posted to your wall! Use 'Submit to be featured' to share it site-wide.");
    render();
  };

  window.wallSubmitFeature = function () {
    const posts = myPosts();
    if (!posts.length) return toast("Write your story first, then submit it");
    const p = posts[0];
    Sheets.emailReport({
      to: window.SITE.contactEmail,
      subject: "🌟 Community story submission — " + p.biz,
      intro: "An owner submitted their story to be featured on the community wall:\n\n" + p.text + "\n\nWhat worked: " + (p.worked || "—"),
      filename: "community-story.csv",
      rows: [["Name", p.name], ["Business", p.biz], ["Tag", p.tag], ["Story", p.text], ["What worked", p.worked || ""], ["Date", p.date]]
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const tags = ["All", "Time Reclaimed", "Profit Found", "AI Agents", "Brand Character", "Market Edge", "Complex Problems"];
    $("wall-chips").innerHTML = tags.map((t, i) => `<span class="chip ${i === 0 ? "active" : ""}" data-t="${t}">${t}</span>`).join("");
    $("wall-chips").querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      $("wall-chips").querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === c));
      render();
    }));
    render();
  });
})();
