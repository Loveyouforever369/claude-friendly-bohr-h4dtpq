/* ============================================================
   DATA · DEPLOYMENT PLAYBOOKS + OPPORTUNITY MAP
   Every agent named here MUST exist in data/agents.js (canon).
   Hours are planning estimates, deliberately conservative —
   never presented as guarantees anywhere on the site.
   ============================================================ */

window.PLAYBOOKS = [
  {
    id: "inbox-rescue",
    icon: "📥",
    name: "Inbox Zero Rescue",
    days: "48 hours",
    pain: "You answer email all day and still go to bed behind. Leads, invoices and fires all live in one unsorted pile — and the pile owns your calendar.",
    crew: [
      { name: "Slate", role: "Inbox Commander" },
      { name: "Dawn", role: "Daily Briefing Officer" },
      { name: "Dispatch", role: "Meeting Eliminator" }
    ],
    moves: [
      "Day 1 AM — Slate triages the backlog into reply-now / reply-today / delegate / archive, and drafts the reply-now batch in your voice.",
      "Day 1 PM — Dawn builds your morning brief template: top 3 priorities, calendar traps, one number to watch.",
      "Day 2 — Dispatch audits the recurring meetings; two 15-minute inbox sweeps replace all-day checking.",
      "Rule installed — agents draft, you approve. Nothing sends itself."
    ],
    deliverable: "A triaged inbox, a reply template library in your voice, and a two-sweep daily rhythm.",
    kpi: "Inbox sessions per day (target: 2) · hours in email per week",
    hoursLow: 4, hoursHigh: 7
  },
  {
    id: "lead-response",
    icon: "🎯",
    name: "Lead Response Sprint",
    days: "7 days",
    pain: "Enquiries arrive, sit for a day, and quietly die. Follow-up depends on you remembering — so the pipeline is really a memory test you keep failing.",
    crew: [
      { name: "Radar", role: "Lead Scorer" },
      { name: "Harpoon", role: "Outbound Hunter" },
      { name: "Compass", role: "Pipeline Manager" },
      { name: "Whisper", role: "Email Sequence Writer" }
    ],
    moves: [
      "Day 1–2 — Radar builds a 100-point scoring model and ranks every open lead; the top ten get your mornings.",
      "Day 3–4 — Whisper writes the acknowledge → qualify → follow-up sequence; Harpoon drafts the personalized outbound touches.",
      "Day 5–6 — Compass designs stages, exit criteria and the daily 20-minute pipeline ritual.",
      "Day 7 — Dry-run with sample leads; every outbound message is a draft until you approve it."
    ],
    deliverable: "A scored pipeline, a five-touch follow-up path, and a 20-minute daily ritual that keeps it alive.",
    kpi: "Minutes to first response · follow-ups completed per lead",
    hoursLow: 3, hoursHigh: 6
  },
  {
    id: "local-visibility",
    icon: "📍",
    name: "Local Visibility Engine",
    days: "10 days",
    pain: "Customers ask AI assistants and Maps who to call — and the answer is your competitor, because your reviews sit unanswered and your listing is a ghost.",
    crew: [
      { name: "Halo", role: "Reputation Guardian" },
      { name: "Lumen", role: "AEO/GEO Optimizer" },
      { name: "Magnet", role: "Lead Magnet Builder" },
      { name: "Orbit", role: "Social Media Planner" }
    ],
    moves: [
      "Day 1–3 — Halo drafts on-brand responses to every unanswered review and sets the 24-hour response rhythm.",
      "Day 4–6 — Lumen audits your pages for answer-engine optimization so AI assistants cite you, not the rival.",
      "Day 7–8 — Magnet designs the free offer that turns lookers into a list you own.",
      "Day 9–10 — Orbit turns one core idea into a month of local, platform-native posts."
    ],
    deliverable: "Every review answered, an AEO-tuned presence, one lead magnet, one month of local posts staged.",
    kpi: "Review response rate · weeks of content staged ahead",
    hoursLow: 2, hoursHigh: 4
  },
  {
    id: "content-engine",
    icon: "🎬",
    name: "Content & Brand Engine",
    days: "14 days",
    pain: "You post in bursts, vanish for a month, and every caption sounds like a different company wrote it. Consistency is losing to the day job.",
    crew: [
      { name: "Echo", role: "Brand Voice Keeper" },
      { name: "Cadence", role: "Editorial Planner" },
      { name: "Quill", role: "Long-form Writer" },
      { name: "Reel", role: "Video Script Writer" },
      { name: "Snap", role: "Visual Prompt Designer" }
    ],
    moves: [
      "Day 1–3 — Echo builds your voice guide from three writing samples: tone, vocabulary, rhythm, taboos.",
      "Day 4–7 — Cadence plans the month; one pillar idea becomes twelve platform-native pieces.",
      "Day 8–11 — Quill drafts the long-form anchor; Reel scripts the short-form cuts; Snap designs the visual prompts.",
      "Day 12–14 — You approve the batch in one sitting. Publishing becomes a review job, not a writing job."
    ],
    deliverable: "A locked voice guide plus a month of on-voice content staged for your approval.",
    kpi: "Posts shipped per week · % of content in locked brand voice",
    hoursLow: 4, hoursHigh: 8
  },
  {
    id: "cash-autopsy",
    icon: "💎",
    name: "Cash & Pricing Autopsy",
    days: "7 days",
    pain: "Busy months, anxious bank account. Revenue is fine on paper, but nobody has priced your hours into the work — so your best seller may be your worst offer.",
    crew: [
      { name: "Meter", role: "Pricing Strategist" },
      { name: "Hawk", role: "Expense Auditor" },
      { name: "Margin", role: "Unit Economics Analyst" },
      { name: "Stream", role: "Cashflow Forecaster" }
    ],
    moves: [
      "Day 1–2 — Hawk runs the expense autopsy: zombie subscriptions, duplicates, invoices earned but never collected.",
      "Day 3–4 — Margin ranks every offer by profit per hour of your life — including your time as a cost.",
      "Day 5–6 — Meter pressure-tests pricing against value and competitors, then scripts the careful 2–5% test.",
      "Day 7 — Stream builds the 13-week cash forecast you update each Friday."
    ],
    deliverable: "An offer ranking with true margins, a leak list with dollar values, and a rolling cash forecast.",
    kpi: "Profit per owner-hour by offer · weeks of cash visibility",
    hoursLow: 2, hoursHigh: 3
  },
  {
    id: "sop-forge",
    icon: "⚒️",
    name: "Ops SOP Forge",
    days: "14 days",
    pain: "The business runs on what's in your head. Every hire asks you the same questions, every absence stalls the work — you can't even take 48 hours off.",
    crew: [
      { name: "Forge", role: "SOP Writer" },
      { name: "Tempo", role: "Priority Commander" },
      { name: "Chime", role: "Onboarding Designer" },
      { name: "Concierge", role: "FAQ & Help Center Author" }
    ],
    moves: [
      "Day 1–3 — Tempo classifies your task list: do / delegate-to-AI / delegate-to-human / delete.",
      "Day 4–8 — You voice-memo your top three processes once; Forge turns each into a step-by-step SOP with checks and escalation rules.",
      "Day 9–11 — Concierge converts the recurring questions into a help center; Chime designs the onboarding path for the next hire.",
      "Day 12–14 — Dry-run: someone else (or an agent) executes an SOP end-to-end without asking you anything."
    ],
    deliverable: "Your top three processes documented and dry-run tested, plus an FAQ and onboarding path.",
    kpi: "Processes that survive the 48-hour-absence test · repeat questions per week",
    hoursLow: 3, hoursHigh: 6
  }
];

/* Where owners & entrepreneurs find paid demand for these exact skills.
   Honest framing only: channels + first moves — never income promises. */
window.OPPORTUNITY_CHANNELS = [
  {
    icon: "🤝",
    name: "Your warm network",
    where: "Phone contacts, past colleagues, previous clients, your own inbox",
    why: "Trust already exists, so the sales cycle is days, not months. Almost every first paid project starts here.",
    firstMove: "Message ten people: \"I install AI systems that hand owners hours back — know anyone drowning in email or slow follow-up?\" Ask for the intro, not the sale.",
    sell: "Inbox Zero Rescue"
  },
  {
    icon: "🗺️",
    name: "Local businesses via Maps research",
    where: "Google Maps: trades, clinics, salons, restaurants near you",
    why: "Visibility gaps are public. Unanswered reviews and thin listings are a pitch you can see before you ever say hello.",
    firstMove: "Find ten local businesses with unanswered reviews. Send a short, specific note naming what you saw and one fix — no template blast.",
    sell: "Local Visibility Engine"
  },
  {
    icon: "💼",
    name: "LinkedIn conversations",
    where: "Owner posts about overwhelm, hiring VAs, or 'trying AI'",
    why: "Owners announce their pains in public. A helpful comment beats a cold pitch, and your profile does the selling afterward.",
    firstMove: "Comment usefully on ten owner posts this week. DM only the ones who reply. Keep every message under 90 words.",
    sell: "Lead Response Sprint"
  },
  {
    icon: "🧑‍🎨",
    name: "Independent marketplaces",
    where: "Contra, PeoplePerHour, Guru and similar portfolio-first platforms",
    why: "Lighter onboarding than the big bidding sites, and fixed-scope service listings fit AI installs perfectly.",
    firstMove: "List one fixed-scope package — name, deliverables, timeline, price — instead of an 'I do everything' profile.",
    sell: "Content & Brand Engine"
  },
  {
    icon: "🏢",
    name: "Agency white-label overflow",
    where: "Marketing and web agencies with more work than hands",
    why: "One agency relationship can replace twenty cold pitches — they own the client, you own the delivery.",
    firstMove: "Offer one agency a fixed-price pilot: their brand, your AI-assisted delivery, one project to prove the fit.",
    sell: "Content & Brand Engine"
  },
  {
    icon: "🏛️",
    name: "Communities & chambers",
    where: "Chamber of commerce, BNI, trade groups, niche owner forums",
    why: "Rooms full of owners who already pay for help and refer each other constantly. Value first earns the referral engine.",
    firstMove: "Give one short talk or post one genuinely useful answer per week. Let the follow-up questions come to you.",
    sell: "Cash & Pricing Autopsy"
  },
  {
    icon: "🔁",
    name: "Job boards, inverted",
    where: "Postings for VAs, ops coordinators, content managers",
    why: "A company hiring for repetitive work often needs a system more than a salary. The job ad is the needs analysis, already written.",
    firstMove: "Pitch a fixed-scope 30-day pilot that delivers the outcome the role was meant to produce — honestly framed as an alternative, never a trick.",
    sell: "Ops SOP Forge"
  },
  {
    icon: "📣",
    name: "Your own proof-of-work",
    where: "Everything this academy helps you build — audits, characters, plans",
    why: "Showing one real before/after beats any portfolio claim. Document the install, and the install sells the next one.",
    firstMove: "Run one playbook on your own business first. Export the spreadsheet, screenshot the before/after, share the story.",
    sell: "Any — you'll have receipts"
  }
];
