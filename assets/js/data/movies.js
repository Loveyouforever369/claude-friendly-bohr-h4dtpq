/* ============================================================
   THE SCREENING ROOM — feature movies
   One ~17-minute feature introducing the AI Family, plus four
   phase movies following Sam Reyes, owner of Summit Signs,
   through a 90-day transformation. Deep narration, title cards,
   cast cards, chapters, scene moods.
   ============================================================ */

window.MOVIES = [

  /* ================= FEATURE: MEET THE FAMILY (~17 min) ================= */
  {
    id: "mv-intro",
    movie: true,
    phase: "Feature Presentation",
    title: "MEET THE FAMILY",
    minutes: 17,
    blurb: "The 17-minute origin film — every one of the 13 departments gets its own scene. One owner at midnight, the shift that changed everything, and a guided introduction to the 118 specialists — department by department — who can grow a business while its owner sleeps.",
    poster: { icon: "👁️", grad: "linear-gradient(135deg,#0b1020,#1a1a4d 40%,#22d3ee)" },
    chapters: ["The Owner at Midnight", "The Shift", "The Family", "One Day, Transformed", "The Arithmetic", "Your Seat"],
    slides: [
      {
        type: "title", chapter: "The Owner at Midnight", mood: "night",
        kicker: "AI Business Academy presents",
        title: "MEET THE FAMILY",
        sub: "A film about the workforce you didn't know you already had.",
        visual: "⬡",
        narration: "This is a film about a kind of loneliness nobody warns you about. The loneliness of the owner. And it's a film about the moment that loneliness became optional. Over the next seventeen minutes, you'll meet a family — one hundred and eighteen specialists who never sleep, never quit, and never forget a follow-up. But first, you need to meet someone else. Someone you may recognize."
      },
      {
        chapter: "The Owner at Midnight", mood: "night", kicker: "Scene one · 11:52 PM",
        title: "The light that's always on",
        visual: "🌃",
        bullets: [
          "Every town has one: the office light still burning at midnight",
          "Behind it, an owner doing a fourth job of the day",
          "Invoices. Unanswered emails. Tomorrow's post. A quote due Friday.",
          "Not because they're failing — because everything routes through them"
        ],
        narration: "Drive through any town at midnight and you'll see it: one window still lit above a shop, one screen glowing in a home office. Behind that light is an owner — someone who was a salesperson at nine this morning, a bookkeeper at two, a customer service department at five, and is now, at midnight, a marketing intern formatting tomorrow's post. Not because the business is failing. Often because it's succeeding. Every yes they've ever earned has become a task, and every task routes through the same tired mind. If you've been that light in the window, this film was made for you."
      },
      {
        chapter: "The Owner at Midnight", mood: "night", kicker: "Scene two · The old bargain",
        title: "The deal every owner was offered",
        visual: "⚖️",
        bullets: [
          "The old bargain: trade your evenings for your independence",
          "Hire help? Payroll arrives before the profit does",
          "Do it all yourself? The business caps out at the edge of your stamina",
          "For a hundred years, those were the only two doors"
        ],
        narration: "For generations, small business came with a bargain written in invisible ink: in exchange for your independence, you will surrender your evenings. Your options were brutal in their simplicity. Hire people — and watch payroll arrive months before the profit that justifies it. Or do everything yourself — and accept that your business can never grow past the edge of your own stamina. Two doors. Both expensive. Every owner you've ever admired walked through one of them and paid the toll. Until, quietly, a third door appeared."
      },
      {
        chapter: "The Shift", mood: "cyan", kicker: "Chapter two · What changed",
        title: "The third door opened in 2026",
        visual: "🚪",
        bullets: [
          "For years, AI answered questions — clever, but you still did the work",
          "Then it began finishing jobs: planning, using tools, remembering",
          "2026: assign AI a job with memory, standards and constraints",
          "The market stopped saying 'chatbot' and started saying 'employee'"
        ],
        narration: "Here's what actually changed, stripped of the hype. For years, artificial intelligence answered questions. Clever, occasionally dazzling — but when the answer arrived, you still did the work. Then something shifted. The technology stopped answering and started finishing. It learned to plan a task, choose its tools, remember yesterday's context, and carry a job from beginning to end. By twenty twenty-six, the entire market had quietly changed its vocabulary. Nobody serious says chatbot anymore. They say agent. They say digital employee. The question stopped being 'what can it tell me?' and became 'what job can it own?'"
      },
      {
        chapter: "The Shift", mood: "cyan", kicker: "The definition that matters",
        title: "A prompt is a request. An agent is a hire.",
        visual: "🗝️",
        bullets: [
          "A prompt: one question, one answer, no memory, no standard",
          "An agent: a name, a role, your context, your quality bar",
          "Same technology — completely different results",
          "The difference isn't the machine. It's the management."
        ],
        narration: "Understand this one distinction and everything else in this film makes sense. A prompt is a request — one question, one answer, then amnesia. An agent is a hire. It has a name. A defined role. It knows your business, your customer, your voice, and your standards, because you gave it all four in writing. Same underlying technology — utterly different results. A casual prompt gets you an intern's guess. A properly briefed agent gets you a senior specialist's draft. The difference was never the machine. The difference is the management. And management, unlike magic, can be learned."
      },
      {
        chapter: "The Family", mood: "violet", kicker: "Chapter three · The roster",
        title: "One hundred eighteen specialists. Thirteen departments.",
        visual: "🏛️",
        bullets: [
          "We built the org chart so you don't have to imagine it",
          "Every specialist: a name, a role, a superpower, a hire prompt",
          "Copy the prompt, add your context, and they report for duty",
          "What follows: a walk through every department"
        ],
        narration: "So we built you the org chart most owners can't yet imagine: the AI Family. One hundred and eighteen named specialists, organized into thirteen departments — an executive suite, a marketing division, a sales floor, a finance office, and nine more. Every member has a role, a superpower, and a hire prompt you can copy in one click and paste into any capable AI assistant. That prompt is a complete role card — identity, job, standards, boundaries — so your new hire starts at senior level on day one. What follows is a walk through the building. Keep count of how many of these jobs you're currently doing yourself, at midnight, alone."
      },
      {
        type: "cast", chapter: "The Family", mood: "cyan", kicker: "Department 1 of 13",
        title: "The Executive Suite — your strategy brain trust",
        cast: [
          { avatar: "🧭", name: "Atlas", role: "Chief Strategy AI", line: "Turns your raw ambition into a ranked 12-month map with milestones and risks." },
          { avatar: "🏛️", name: "Quorum", role: "AI Board of Advisors", line: "Five simulated board seats debate your big decision — then vote." },
          { avatar: "🔮", name: "Cipher", role: "Decision Analyst", line: "Cost-benefit, second-order effects and regret analysis in minutes." },
          { avatar: "⏱️", name: "Tempo", role: "Priority Commander", line: "Your chaotic to-do list, returned as a ruthless battle plan." }
        ],
        narration: "We begin at the top: the Executive Suite. Meet Atlas, your chief strategy officer, who takes the ambition rattling around your head and returns a ranked twelve-month map — priorities, milestones, risks, and the three decisions only you can make. Beside him sits Quorum, an entire board of advisors in one hire: five perspectives that debate your biggest decision and deliver a vote with conditions. Cipher runs the cold analysis — costs, consequences, the move after the move. And Tempo, the priority commander, takes your drowning to-do list and hands back tomorrow's top three. Most owners have never had a single strategic advisor. You just met four."
      },
      {
        type: "cast", chapter: "The Family", mood: "magenta", kicker: "Department 2 of 13",
        title: "Marketing & Brand — the department of being found",
        cast: [
          { avatar: "📣", name: "Echo", role: "Brand Voice Keeper", line: "Learns your voice from three samples — then everything sounds like you." },
          { avatar: "🔦", name: "Beacon", role: "Positioning Strategist", line: "Carves the one sentence that makes you the obvious choice." },
          { avatar: "🌈", name: "Prism", role: "Campaign Architect", line: "Full campaigns: hook, angles, channels, calendar, KPIs." },
          { avatar: "💡", name: "Lumen", role: "AI-Search Optimizer", line: "Makes you the business AI assistants cite when buyers ask." }
        ],
        narration: "Down one floor: Marketing and Brand, the department of being found. Echo is its soul — she studies three samples of your writing and builds a voice guide so precise that every future email, ad and post sounds unmistakably like you, even when you didn't write a word of it. Beacon finds your position: the one sentence that makes you the obvious choice instead of one option among many. Prism architects entire campaigns — the big idea, the angles, the calendar, the numbers that prove it's working. And Lumen fights on the newest battlefield: when your customers ask an AI assistant who to trust, Lumen's job is making sure the answer is you."
      },
      {
        type: "cast", chapter: "The Family", mood: "violet", kicker: "Department 3 of 13",
        title: "The Content Studio — one truth in, fifteen assets out",
        cast: [
          { avatar: "✒️", name: "Quill", role: "Long-form Writer", line: "Interviews you first — your stories stay in, the fluff stays out." },
          { avatar: "🎛️", name: "Remix", role: "Repurposing Engine", line: "One pillar piece becomes 15 platform-native assets." },
          { avatar: "🎬", name: "Reel", role: "Video Script Writer", line: "Hook-first scripts with beat-by-beat shot notes." },
          { avatar: "🎙️", name: "Dub", role: "Narration Director", line: "Turns your writing into spoken-word scripts with pacing marks." }
        ],
        narration: "Next door, the Content Studio hums around a single principle: your stories are the fuel, the machine is just the engine. Quill interviews you before writing a word, so the article that emerges carries your scars and your customers, not generic filler. Remix takes that one pillar piece and splits it into fifteen platform-native assets — posts, scripts, an email, carousels — in a single pass. Reel writes video that earns its first three seconds. And Dub, the narration director, turns any page into spoken word with pacing and emphasis marked, so your content can be heard as well as read. Fifteen minutes of your truth each Monday. A full week of presence. That's the studio's promise."
      },
      {
        type: "cast", chapter: "The Family", mood: "gold", kicker: "Department 4 of 13",
        title: "Sales & Revenue — where silence stops killing deals",
        cast: [
          { avatar: "🧭", name: "Compass", role: "Pipeline Manager", line: "Stages, cadences, and the daily 20-minute pipeline ritual." },
          { avatar: "🎯", name: "Harpoon", role: "Outbound Hunter", line: "Cold outreach personalized enough to earn replies." },
          { avatar: "🌉", name: "Bridge", role: "Proposal Builder", line: "Call notes in, polished 3-option proposal out — same day." },
          { avatar: "🔁", name: "Encore", role: "Retention Strategist", line: "Finds the renewal, upsell and win-back moments you're missing." }
        ],
        narration: "The sales floor is louder, and it should be — this is where revenue lives. Compass builds your pipeline: real stages, exit criteria, follow-up cadences, and a twenty-minute daily ritual that keeps deals moving without you white-knuckling a spreadsheet. Harpoon hunts: outreach researched and personal enough that strangers actually reply. Bridge might be the single most profitable hire in the family for service businesses — call notes go in, and a polished three-option proposal comes out the same afternoon, because speed-to-quote closes deals that brilliance loses. And Encore works the goldmine everyone forgets: the customers you already have, at the exact moments they're ready for more."
      },
      {
        type: "cast", chapter: "The Family", mood: "cyan", kicker: "Department 5 of 13",
        title: "Customer Experience — the department of being loved",
        cast: [
          { avatar: "🏠", name: "Haven", role: "Support Responder", line: "Warm, accurate replies in your voice — escalating what needs you." },
          { avatar: "🌊", name: "Ripple", role: "Review & Referral Engine", line: "Turns peak-happiness moments into 5-star reviews." },
          { avatar: "🛡️", name: "Sentry", role: "Churn Predictor", line: "Spots drifting customers before the goodbye email." },
          { avatar: "📶", name: "Beam", role: "Chatbot Trainer", line: "Writes your site assistant's brain, personality and guardrails." }
        ],
        narration: "Customer Experience is the department of being loved, and love, it turns out, is mostly logistics. Haven answers support tickets with warmth and accuracy in your voice, and knows exactly which ones need a human heart instead. Ripple watches for peak-happiness moments — the job done, the problem solved — and asks for the review right then, when yes is easy. Sentry reads the quiet signals of a customer drifting away and hands you the save play before the goodbye email arrives. And Beam trains your website assistant: its knowledge, its personality, and the guardrails that keep it honest. Businesses that respond fast and remember everything don't just keep customers. They collect advocates."
      },
      {
        type: "cast", chapter: "The Family", mood: "green", kicker: "Department 6 of 13",
        title: "Finance & Cashflow — X-ray vision for your money",
        cast: [
          { avatar: "💧", name: "Stream", role: "Cashflow Forecaster", line: "13-week forecasts that make crunches announce themselves early." },
          { avatar: "🦅", name: "Hawk", role: "Expense Auditor", line: "Hunts zombie subscriptions and leaks — finds 5-15% instantly." },
          { avatar: "📐", name: "Margin", role: "Unit Economics Analyst", line: "True profit per offer — including the hours of your life." },
          { avatar: "🏦", name: "Vault", role: "Profit-First Coach", line: "Profit taken first by design, not hoped for last." }
        ],
        narration: "The finance office glows green, and not by accident. Stream keeps a thirteen-week cash forecast alive, so the crunch that used to ambush you in week nine now announces itself in week one — when it's still solvable with a phone call. Hawk performs the expense autopsy: zombie subscriptions, duplicate tools, prices you agreed to three years ago — most owners find five to fifteen percent on the first pass. Margin computes what nothing else tells you: true profit per offer, including the hours of your own life each one consumes. And Vault makes profit a decision instead of a leftover. Money stops being a monthly mystery. It becomes a dashboard."
      },
      {
        type: "cast", chapter: "The Family", mood: "violet", kicker: "Department 7 of 13",
        title: "Operations & Systems — the end of everything-routes-through-you",
        cast: [
          { avatar: "⚒️", name: "Forge", role: "SOP Writer", line: "Turns 'how you do things' into playbooks anyone can run." },
          { avatar: "🔗", name: "Relay", role: "Automation Architect", line: "Designs the automations that delete repetitive work." },
          { avatar: "🦾", name: "Assembly", role: "Agent Orchestrator", line: "Wires specialists into pipelines with you as approver." },
          { avatar: "🩹", name: "Patch", role: "Root-Cause Analyst", line: "Runs 5-Whys on recurring fires so they stop recurring." }
        ],
        narration: "Operations is where the midnight light finally goes dark. Forge sits with you and extracts the business trapped in your head — turning 'how we do things' into step-by-step playbooks that anyone, human or AI, can run to your standard. Relay designs the automations that make repetitive work simply vanish. Assembly is the conductor: it wires individual specialists into pipelines where work flows from agent to agent with you standing at the approval gates. And Patch ends the era of recurring fires by asking why five times until the real cause confesses. This is the department that makes your vacation possible. Actually possible."
      },
      {
        type: "cast", chapter: "The Family", mood: "cyan", kicker: "Department 8 of 13",
        title: "Data & Insights — decisions with evidence attached",
        cast: [
          { avatar: "🔍", name: "Lens", role: "Data Interpreter", line: "Messy numbers in — three decision-ready insights out." },
          { avatar: "🧑‍🤝‍🧑", name: "Census", role: "Persona Builder", line: "Evidence-based customer portraits, not stereotypes." },
          { avatar: "🪝", name: "Grapple", role: "Funnel Analyst", line: "Finds the leaky step and prices what fixing it is worth." },
          { avatar: "✅", name: "Verity", role: "Fact Checker", line: "Verifies claims before they leave the building." }
        ],
        narration: "Data and Insights is a quiet floor with enormous consequences. Lens takes the messy numbers you've been avoiding and returns the three insights that actually change a decision — with confidence levels attached, because certainty is a scam. Census builds your customer personas from evidence instead of stereotype: what they're actually trying to get done, what triggers them to buy, where they gather. Grapple examines your funnel and points at the leaky step — then prices exactly what fixing it is worth. And Verity checks every claim before it ships, because in an age of confident machines, the businesses that verify become the businesses that get trusted."
      },
      {
        type: "cast", chapter: "The Family", mood: "gold", kicker: "Department 9 of 13",
        title: "People & Talent — build the human team right",
        cast: [
          { avatar: "🔭", name: "Scout", role: "Hiring Writer", line: "Role scorecards and postings that attract doers, repel tire-kickers." },
          { avatar: "🧹", name: "Sift", role: "Interview Designer", line: "Structured interviews with scoring rubrics — no more hiring on vibes." },
          { avatar: "🧑‍🏫", name: "Mentor", role: "Training Builder", line: "Turns your best employee's know-how into onboarding for the next." },
          { avatar: "🪄", name: "Baton", role: "Delegation Coach", line: "Sorts your week: only-you, human, AI, or delete." },
          { avatar: "🕊️", name: "Accord", role: "Conversation Coach", line: "Scripts the hard talks with empathy and spine." }
        ],
        narration: "Because agents don't replace your people — they make hiring and leading them dramatically better. Scout writes job scorecards and postings that attract doers and quietly repel tire-kickers. Sift designs structured interviews with scoring rubrics, so you stop hiring on vibes and start hiring on evidence. Mentor sits with your best employee and turns what they know into a five-day onboarding course for the next one — so excellence stops living in one irreplaceable head. Baton, the delegation coach, sorts your entire week into what only you can do and everything else. And Accord scripts the conversations every owner dreads — underperformance, conflict, pay — with empathy and spine in equal measure."
      },
      {
        type: "cast", chapter: "The Family", mood: "violet", kicker: "Department 10 of 13",
        title: "Legal & Compliance — the department of sleeping well",
        cast: [
          { avatar: "📑", name: "Clause", role: "Contract Explainer", line: "Contracts in plain English; flags the clauses to question." },
          { avatar: "🛡️", name: "Shield", role: "Policy Drafter", line: "Fair, clear policies — ready for your attorney's review." },
          { avatar: "🧬", name: "Ethica", role: "AI Policy Officer", line: "Your 1-page AI rules: disclosure, data lines, review gates." },
          { avatar: "🔏", name: "Ledgerlock", role: "Data Privacy Guide", line: "Maps what customer data you hold and how to keep it clean." }
        ],
        narration: "The legal floor is quiet, organized, and the reason you sleep. Clause translates any contract into plain English and flags the clauses worth questioning — so you walk into your attorney's office with a list instead of a shrug. Shield drafts the policies most owners put off for years: refunds, cancellations, terms — fair, clear, and ready for professional review. Ethica writes your one-page AI policy: what's approved, what's forbidden, what always gets human eyes, and exactly how you disclose it to customers. And Ledgerlock maps every piece of customer data you hold, where it lives, and the five hygiene steps a small team can actually do. None of them replace a lawyer. All of them make you ten times readier for one."
      },
      {
        type: "cast", chapter: "The Family", mood: "magenta", kicker: "Department 11 of 13",
        title: "Product & Innovation — stay dangerous",
        cast: [
          { avatar: "⚡", name: "Spark", role: "Idea Generator", line: "30 structured ideas, 3 worth testing — on demand." },
          { avatar: "🛰️", name: "Probe", role: "Validation Designer", line: "The cheapest 7-day test before you bet real money." },
          { avatar: "⚗️", name: "Alchemist", role: "Offer Transformer", line: "Repackages what you sell: subscription, productized, license." },
          { avatar: "🔥", name: "Crucible", role: "Red Team", line: "Attacks your plan from 6 angles before the market does." }
        ],
        narration: "Innovation is a department now, not a mood. Spark runs structured ideation on demand — thirty ideas from three directions, scored, with three worth testing. Probe designs the cheapest possible validation: a seven-day test with kill-or-go criteria written before you spend a dollar building. Alchemist takes what you already sell and repackages it — a subscription version, a productized version, a licensing play — because your next offer is usually hiding inside your current one. And Crucible, everyone's least favorite and most valuable colleague, attacks every plan from six angles — customer indifference, competitor response, unit economics, operations, regulation, timing — before the market does it for free. Businesses with this floor stay dangerous. Businesses without it stay lucky, until they aren't."
      },
      {
        type: "cast", chapter: "The Family", mood: "green", kicker: "Department 12 of 13",
        title: "E-Commerce & Local — own the shelf and the street",
        cast: [
          { avatar: "🏪", name: "Storefront", role: "Listing Optimizer", line: "Titles and bullets that rank, convert — and read well to buying agents." },
          { avatar: "🛒", name: "Cartwright", role: "Cart Recoverer", line: "The 3-touch sequence that brings back 10-15% of lost carts." },
          { avatar: "📍", name: "Maple", role: "Local SEO Champion", line: "Own your neighborhood: profile, reviews, local pages." },
          { avatar: "📦", name: "Courier", role: "Post-Purchase Designer", line: "Unboxing to reorder: inserts, check-ins, replenishment nudges." }
        ],
        narration: "Whether your business lives on a shelf or a street corner, this department fights for it. Storefront rewrites product listings so they rank, convert, and — increasingly important — read clearly to the AI shopping agents that buy on customers' behalf. Cartwright runs the three-touch recovery sequence that brings back ten to fifteen percent of abandoned carts, the cheapest revenue in commerce. Maple makes you the landmark of your neighborhood: business profile, local pages, and the review engine that decides who shows up first when someone nearby needs what you sell. And Courier designs everything after the sale — the unboxing, the day-seven check-in, the reorder nudge — because the second purchase is where real businesses are built."
      },
      {
        type: "cast", chapter: "The Family", mood: "magenta", kicker: "Department 13 of 13",
        title: "The Owner's Circle — the ones who work for you personally",
        cast: [
          { avatar: "🌄", name: "Dawn", role: "Daily Briefing Officer", line: "Your morning: top 3, calendar traps, one number to watch." },
          { avatar: "🗒️", name: "Slate", role: "Inbox Commander", line: "Triages everything, drafts replies in your voice." },
          { avatar: "⛵", name: "Keel", role: "Work-Life Balancer", line: "Audits your calendar against your actual life priorities." },
          { avatar: "🦉", name: "Sage", role: "Learning Curator", line: "Your personal MBA in 20-minute weekly briefs." },
          { avatar: "🪖", name: "Aegis", role: "Crisis Companion", line: "When it goes sideways: triage, first moves, steady hands." }
        ],
        narration: "And finally, the department that exists for you — not the business, you. Dawn briefs you each morning: today's top three, the meetings to shorten, one number worth watching. Slate commands your inbox so it stops commanding your life. Keel audits your calendar against what you claim to care about — family, health, thinking — and names the drift out loud. Sage runs your personal MBA in twenty-minute weekly briefs matched to whatever's hardest right now. And Aegis stands ready for the worst days: triage, first moves, the message to send, and a steady reminder of what is and isn't in your control. Every empire builder needs a household staff. This is yours."
      },
      {
        chapter: "One Day, Transformed", mood: "cyan", kicker: "Chapter four · 6:00 AM",
        title: "A day in the life — with the Family working",
        visual: "🌅",
        bullets: [
          "6:00 AM — Dawn's briefing is waiting: top 3, one risk, one number",
          "6:05 — overnight: swarm briefing done, 12 emails pre-drafted, content queued",
          "8:30 — you approve, adjust, redirect: 25 minutes, not 3 hours",
          "10:00 — your first deep-work block in years, uninterrupted"
        ],
        narration: "Now watch a single day with the family at work. Six a.m. Before your coffee is ready, Dawn's briefing is waiting: three priorities, one risk flagged, one number to watch. Overnight, the intelligence swarm read your market — a competitor's price change, two new reviews, a trend picking up speed — and Lens compressed it to one page. Slate pre-drafted replies to twelve emails. The week's content sits queued for your approval. At eight thirty, you do what leaders actually do: approve, adjust, redirect. Twenty-five minutes. Work that used to eat three hours. And at ten o'clock comes something you may not recognize at first: an uninterrupted block of deep work. Your first in years."
      },
      {
        chapter: "One Day, Transformed", mood: "gold", kicker: "Chapter four · 2:00 PM",
        title: "The afternoon that used to be impossible",
        visual: "🌇",
        bullets: [
          "2:00 PM — a call ends; Bridge has the proposal drafted by 2:40",
          "4:00 — Sentry flags a drifting client; the save play goes out warm",
          "5:30 — Stream's Friday forecast: no surprises for the 9th week straight",
          "6:15 — the light in the window goes dark. You're at dinner."
        ],
        narration: "The afternoon builds. A discovery call ends at two; by two forty, Bridge has the three-option proposal drafted, and you send it while your competitor is still promising to 'get something over by Friday.' At four, Sentry flags a longtime client gone quiet, and the save play goes out — warm, personal, two weeks before they would have quietly left. At five thirty, Stream's forecast confirms the ninth consecutive week without a cash surprise. And at six fifteen, something happens that the town hasn't seen in years. The light in the window goes dark. You're at dinner. The business is still working."
      },
      {
        chapter: "The Arithmetic", mood: "green", kicker: "Chapter five · The honest math",
        title: "What it costs vs. what it returns",
        visual: "🧮",
        bullets: [
          "The tools behind a full starting five: typically under $100/month",
          "The labor equivalent: $180,000+ per year of specialist salaries",
          "The real return: 10-16 owner-hours a week, reinvested",
          "12 hrs × $150/hr × 52 weeks = $93,600 of annual capacity — from one decision"
        ],
        narration: "Let's do the arithmetic out loud, because it sounds like an exaggeration until you run it. The tools behind a starting five of agents typically cost less than one hundred dollars a month — less than most owners spend on software they've forgotten they have. The equivalent human labor — a strategist, a writer, a bookkeeper's assistant, a coordinator, an analyst — would run past one hundred eighty thousand dollars a year. But the deeper return is time. Ten to sixteen owner-hours a week, recovered. At a hundred and fifty dollars an hour, twelve reclaimed hours are worth ninety-three thousand six hundred dollars of annual capacity. From one decision. Made once."
      },
      {
        chapter: "The Arithmetic", mood: "violet", kicker: "Chapter five · The guardrails",
        title: "Why this works: gates, not faith",
        visual: "🚦",
        bullets: [
          "Every agent works behind a review gate — you approve what ships",
          "Never in the prompts: secrets, credentials, sensitive customer data",
          "Facts get verified; AI use gets disclosed where trust matters",
          "Autonomy is earned in inches — four clean weeks at a time"
        ],
        narration: "And before the skeptic in you objects — good. Keep that skeptic. The family works precisely because it runs on gates, not faith. Every agent operates behind a review gate: nothing customer-facing, financial, or irreversible ships without your eye. Secrets, credentials and sensitive customer data never enter a prompt. Facts get verified before they leave the building, and AI involvement is disclosed anywhere trust matters — your customers respect honesty and punish pretending. Autonomy is earned in inches: four clean weeks buys a little more freedom. This isn't surrendering your business to machines. It's the most supervised workforce you'll ever run."
      },
      {
        chapter: "Your Seat", mood: "cyan", kicker: "Chapter six · What's coming",
        title: "This is the slow version",
        visual: "🔭",
        bullets: [
          "Agents that transact, background agents that never sleep — already arriving",
          "Every year, the family gets smarter. Your context makes it YOURS.",
          "The owners learning management now will run the next decade",
          "The gap between movers and watchers compounds monthly"
        ],
        narration: "One more thing, and it matters: everything you've just seen is the slow version. Right now, infrastructure is being built for agents that transact on your behalf, background agents that work while whole time zones sleep, and orchestration that turns departments into single decisions. Every year, the family gets smarter — but here's the secret that protects you: its value comes from your context. Your voice, your standards, your customers, your playbooks. That can't be copied by a competitor who starts later, because time in the system is the one thing money can't buy back. The gap between owners who move and owners who watch is compounding monthly."
      },
      {
        type: "title", chapter: "Your Seat", mood: "night", kicker: "Final scene",
        title: "YOUR SEAT AT THE TABLE",
        sub: "The family is assembled. The org chart is waiting. The only empty chair is yours.",
        visual: "⬡",
        narration: "So here is where the film ends and your part begins. The family is assembled — one hundred and eighteen specialists, thirteen departments, every hire prompt written and waiting one click away. The diagnostics are free: twelve questions to decode your business DNA, one honest audit to find your hidden hours. The training is narrated and ready. The only empty chair in the entire building is the one at the head of the table. The light in the window doesn't have to be you anymore. Scan your DNA. Run your audit. Hire your first specialist tonight. And take your seat."
      }
    ]
  },

  /* ================= PHASE I: THE DIAGNOSIS (~7 min) ================= */
  {
    id: "mv-p1",
    movie: true,
    phase: "Phase I Movie",
    title: "THE DIAGNOSIS",
    minutes: 7,
    blurb: "Sam Reyes runs a six-person sign shop and hasn't seen 7 PM at home in two years. The scan that told the truth, the gaps that predicted the next crisis, and the first honest hour of the transformation.",
    poster: { icon: "🧬", grad: "linear-gradient(135deg,#0b1020,#083b4d 45%,#08a2c4)" },
    chapters: ["The Breaking Point", "The Scan", "The Truth", "First Light"],
    slides: [
      {
        type: "title", chapter: "The Breaking Point", mood: "night",
        kicker: "The 90-day chronicles · Part I",
        title: "THE DIAGNOSIS",
        sub: "Before a business can be transformed, it has to be told the truth.",
        visual: "🧬",
        narration: "This is the first film in a ninety-day story. It follows Sam Reyes — owner of Summit Signs, a six-person sign and print shop that everyone in town would call successful. Everyone except the person running it. Part one is about the hardest step in any transformation. Not the technology. The truth."
      },
      {
        chapter: "The Breaking Point", mood: "night", kicker: "Tuesday, 11:47 PM",
        title: "Sam at eleven forty-seven",
        visual: "🌃",
        bullets: [
          "Revenue up 22% this year — and Sam has never been more exhausted",
          "Quotes go out late. Invoices go out later. Instagram: silent 5 weeks.",
          "Best installer just quit: 'there's no system here, just Sam's memory'",
          "The exit interview line that kept Sam up: it was true"
        ],
        narration: "Eleven forty-seven on a Tuesday night, and Sam Reyes is still at the shop. Here's the paradox that nobody warned Sam about: revenue is up twenty-two percent this year, and things have never felt closer to collapse. Quotes go out late, so deals die of silence. Invoices go out later, so cash arrives in unpredictable lurches. The shop's Instagram has been silent for five weeks because the person who runs marketing also runs everything else. And last Friday, Sam's best installer quit. His exit interview had one line in it: 'There's no system here — just Sam's memory.' Sam has been awake at night ever since. Because it was true."
      },
      {
        chapter: "The Breaking Point", mood: "violet", kicker: "The myth",
        title: "The lie Sam believed",
        visual: "🪨",
        bullets: [
          "'I just need to work harder' — the owner's oldest myth",
          "But Sam already works 68 hours a week",
          "Effort wasn't the missing ingredient. Information was.",
          "You cannot fix what you have never precisely diagnosed"
        ],
        narration: "Sam believed the oldest myth in small business: I just need to work harder. But Sam already works sixty-eight hours a week. There is no harder left. Here's what the myth hides: effort was never the missing ingredient. Information was. Sam knows everything about vinyl and permits and installation angles — and almost nothing, precisely, about where Summit Signs is strong, where it's fragile, and which weakness is quietly writing next year's crisis. A doctor who prescribes before diagnosing is called dangerous. An owner who does it is called normal. That changes tonight."
      },
      {
        chapter: "The Scan", mood: "cyan", kicker: "Wednesday, 6:15 AM",
        title: "Twelve questions Sam almost didn't answer",
        visual: "🔬",
        bullets: [
          "The Business DNA scan: six strands, twelve questions, four minutes",
          "Vision · Operations · Marketing · Sales · Finance · Innovation",
          "The rule that matters: score the business you HAVE, not the plan",
          "Sam's finger hovered over the honest answers. Then chose them."
        ],
        narration: "The next morning, running on five hours of sleep and one long conversation with his sister — who'd found the Academy first — Sam sits down with the Business DNA scan. Twelve questions across six strands: vision, operations, marketing, sales, finance, innovation. Four minutes. There's only one rule, printed right at the top: answer for the business you have today, not the one you keep meaning to build. Question three: if you disappeared for three weeks, what happens? Sam's finger hovers over the comfortable answer. Hovers. And then, for the first time in a long time, Sam chooses the true one: everything stops. It routes through me."
      },
      {
        chapter: "The Truth", mood: "magenta", kicker: "The results",
        title: "V3 · O1 · M2 · S3 · F1 · I2",
        visual: "🧬",
        bullets: [
          "Vision: Active. Sales: Active. Sam can see and Sam can sell.",
          "Marketing: Emerging — bursts, then silence",
          "Operations: DORMANT. Finance: DORMANT.",
          "Archetype: The Rainmaker — revenue-led, system-starved"
        ],
        narration: "The helix spins, and Summit Signs' genetic code appears: V three, O one, M two, S three, F one, I two. The screen names Sam's archetype: The Rainmaker — someone who can see the mountain and sell the climb. Vision, active. Sales, active. That's what built twenty-two percent growth. And then the two dormant genes, glowing like warning lights: Operations, level one. Finance, level one. The scan's gap analysis says what no consultant ever had the nerve to: your strengths are hiding your weaknesses, and the bill is coming. Growth that breaks you. Famous and broke. Sam reads the words twice."
      },
      {
        chapter: "The Truth", mood: "night", kicker: "The prophecy",
        title: "Weak strands predicted the exact crisis",
        visual: "⚠️",
        bullets: [
          "Weak Ops + strong Sales = every new customer adds chaos, not profit",
          "The installer quitting? Predicted. The cash lurches? Predicted.",
          "The scan didn't tell Sam anything new — it told Sam the SHAPE of it",
          "And for the first time: a treatment plan, in order"
        ],
        narration: "Here's what shook Sam: the scan didn't reveal anything unfamiliar. It revealed the shape of it. Weak operations plus strong sales equals growth that breaks you — every new customer adding chaos instead of profit. That's not a prediction anymore; that's last month. The installer who quit over 'no systems' — that's the operations strand talking. The cash that lurches despite record revenue — that's the finance strand. Every fire Sam had been fighting one at a time was actually two fires with many faces. And underneath the diagnosis, for the first time, a treatment plan: specific, ordered, and starting with three names Sam had never heard."
      },
      {
        chapter: "First Light", mood: "green", kicker: "The prescription",
        title: "Forge. Stream. Hawk.",
        visual: "💊",
        bullets: [
          "For dormant Operations: Forge — turn Sam's memory into playbooks",
          "For dormant Finance: Stream (13-week forecast) + Hawk (leak hunt)",
          "One agent per week. Not ten. One.",
          "The report, downloaded and emailed: Sam's 'before' photo"
        ],
        narration: "The prescription reads like a casting sheet. For the dormant operations strand: Forge, the SOP writer, whose entire job is extracting the business trapped in Sam's memory and turning it into playbooks a team can run. For dormant finance: Stream, who keeps a thirteen-week cash forecast so surprises become schedules — and Hawk, who audits expenses with a raptor's patience. The plan is almost insultingly modest: one agent per week. Not a revolution. A drip. Sam downloads the DNA report — the before photo — and emails it to himself with a subject line that feels like a signature on a contract: Day one."
      },
      {
        chapter: "First Light", mood: "cyan", kicker: "The rules",
        title: "The first honest hour",
        visual: "📜",
        bullets: [
          "Rule 1: AI drafts, Sam decides — everything ships past Sam's eye",
          "Rule 2: no customer data, no secrets in prompts",
          "Rule 3: verify facts. Rule 4: disclose where trust matters.",
          "Rule 5: one workflow at a time, measured"
        ],
        narration: "That evening, Sam does something new: reads the safety rules before the tool. One — AI drafts, humans decide. Everything that leaves Summit Signs still passes Sam's eye. Two — no customer data, no credentials, nothing in a prompt Sam wouldn't email to a stranger. Three — facts get verified, because confident and correct are different things. Four — disclose AI where trust matters. And five — one workflow at a time, measured, before the next. Sixty minutes later, Forge has interviewed Sam and produced the first written procedure in Summit Signs' nine-year history: how to quote a storefront sign. It's four pages. It's beautiful. Sam's installer could have followed it."
      },
      {
        type: "title", chapter: "First Light", mood: "cyan", kicker: "End of Part I",
        title: "DIAGNOSIS: COMPLETE",
        sub: "Your turn: the same 12 questions are waiting on the Business DNA page. Answer them for the business you have.",
        visual: "🧭",
        narration: "One scan. Two dormant strands found. One procedure written. Nothing dramatic — and everything different, because Summit Signs now knows exactly where it's bleeding and exactly what to do first. In part two, The Liberation: Sam runs the time audit, discovers sixteen and a half hours buried in an ordinary week, and makes the first three hires of a workforce that never sleeps. But before you press play on Sam's next chapter — go run your own. The same twelve questions are waiting on the Business DNA page. Four minutes. One rule. The business you have, not the one you're planning."
      }
    ]
  },

  /* ================= PHASE II: THE LIBERATION (~7 min) ================= */
  {
    id: "mv-p2",
    movie: true,
    phase: "Phase II Movie",
    title: "THE LIBERATION",
    minutes: 7,
    blurb: "The forensic time audit finds 16.5 hours buried in Sam's ordinary week. First hires: Slate, Forge and Echo. And on a Thursday at 6:40 PM, something happens that hasn't happened in two years.",
    poster: { icon: "⏳", grad: "linear-gradient(135deg,#0b1020,#3b2a6b 45%,#9085e9)" },
    chapters: ["The Audit", "The Hires", "The Rhythm", "Thursday, 6:40 PM"],
    slides: [
      {
        type: "title", chapter: "The Audit", mood: "night",
        kicker: "The 90-day chronicles · Part II",
        title: "THE LIBERATION",
        sub: "You can't buy time. You can only steal it back.",
        visual: "⏳",
        narration: "Part two of Sam's ninety days. The diagnosis said where Summit Signs was weak. Now comes the question every owner asks with a bitter laugh: who has time to fix anything? This film is about that question — and the forensic audit that proves the time was there all along, buried in plain sight, waiting to be stolen back."
      },
      {
        chapter: "The Audit", mood: "violet", kicker: "Three ugly days",
        title: "Track, tag, total — the forensic method",
        visual: "🔎",
        bullets: [
          "Three days, every task logged in 30-minute blocks — ugly honesty",
          "Tags: Creator · Manager · Operator · Admin",
          "Sam's total: 61% of the week spent as Operator + Admin",
          "The golden rule: done 3+ times this month = a system waiting to exist"
        ],
        narration: "The method is three words: track, tag, total. For three ordinary days, Sam logs every task in thirty-minute blocks — including the forty minutes lost in the inbox after lunch that no owner ever admits to. Then every block gets a tag. Creator: making things only Sam can make. Manager: directing people and decisions. Operator: doing the shop's repeatable work. Admin: feeding the machine — filing, formatting, forwarding, following up. On Sunday night, Sam totals the tags and stares at the number for a long time. Sixty-one percent of the week — operator and admin. The two categories AI eats for breakfast."
      },
      {
        chapter: "The Audit", mood: "cyan", kicker: "The number",
        title: "16.5 hours. $128,000 a year.",
        visual: "💰",
        bullets: [
          "The analyzer's verdict: 16.5 reclaimable hours per week",
          "At Sam's target rate of $150/hr: $128,700 of annual capacity",
          "That's 107 working days a year, buried in an ordinary week",
          "Top three leaks: email triage · quoting · social content"
        ],
        narration: "Sam feeds the three days into the Time Gap Analyzer and sets the target rate — one hundred fifty dollars an hour, calculated the honest way: the income Sam actually wants, divided by two thousand hours. The verdict comes back in glowing bars: sixteen and a half reclaimable hours per week. At the target rate, that's one hundred twenty-eight thousand seven hundred dollars of annual capacity — one hundred and seven working days a year — buried inside an ordinary week like treasure under floorboards. The three biggest leaks glow at the top of the chart: email triage. Quote writing. Social content. Sam downloads the audit spreadsheet and pins it to the wall. The before photo now has a price tag."
      },
      {
        chapter: "The Hires", mood: "gold", kicker: "Hire #1",
        title: "Slate takes the inbox",
        visual: "🗒️",
        bullets: [
          "Role card: identity, context, job, standards, boundaries — one page",
          "Day 1-3: Slate drafts replies to emails Sam already answered — and gets graded",
          "Sam feeds it 3 of his best replies: taste transfers by example",
          "By Friday: 96 minutes a day, down to 31"
        ],
        narration: "Monday morning, Sam makes the first hire: Slate, the inbox commander. But not with a lazy prompt — with a role card. One page: who Slate is, what Summit Signs does, who its customers are, what the job is, and the boundaries — never promise an install date, never quote a price, always flag anything angry to Sam first. Then the onboarding trick that changes everything: Sam feeds Slate three of the best replies he's ever written, and has it draft answers to emails he's already handled — so he can grade fairly. By Wednesday the drafts sound like Sam on a good day. By Friday, the inbox takes thirty-one minutes instead of ninety-six."
      },
      {
        chapter: "The Hires", mood: "violet", kicker: "Hires #2 and #3",
        title: "Forge writes the shop down. Echo learns the voice.",
        visual: "⚒️",
        bullets: [
          "Forge, week two: quoting SOP, install checklist, onboarding playbook",
          "The new installer trains against documents, not against Sam's time",
          "Echo, week three: learns Sam's voice from 3 samples — then guards it",
          "Rule held: one hire a week, each proven before the next"
        ],
        narration: "Week two belongs to Forge. One hour-long interview at a time, the shop leaves Sam's head and lands on paper: the quoting procedure, the install-day checklist, the new-customer onboarding flow. When Sam hires a replacement installer at month's end, the man trains against documents — and only borrows Sam's time for the parts that genuinely need a human. Week three, Echo arrives and studies three samples of Sam's writing until she can produce that voice on demand — plainspoken, a little dry, allergic to hype. From now on, anything any agent writes passes through Echo's filter. The discipline holds: one hire a week. Each one proven before the next walks in."
      },
      {
        chapter: "The Rhythm", mood: "cyan", kicker: "The management system",
        title: "Gates in the morning, retro on Friday",
        visual: "🔄",
        bullets: [
          "8:00 AM gate: approve, adjust, redirect — 20 minutes",
          "4:30 PM gate: same, before the shop closes",
          "Friday retro: what failed this week → role cards updated",
          "The insight: the agents improve because Sam's briefings improve"
        ],
        narration: "What makes it stick isn't the technology — it's the rhythm Sam builds around it. Eight a.m.: the morning gate. Twenty minutes of approve, adjust, redirect. Four thirty: the afternoon gate, same drill, before the shop closes. And Friday brings the fifteen-minute retrospective, the most valuable meeting Sam attends all week, with attendees consisting entirely of Sam and a notebook: what did the agents get wrong this week, and which role card needs a sentence added? Here's the insight Sam writes down in week five, underlined twice: the agents aren't getting smarter. My briefings are getting better. Management, it turns out, was the skill all along."
      },
      {
        chapter: "Thursday, 6:40 PM", mood: "green", kicker: "Week four",
        title: "The thing that hadn't happened in two years",
        visual: "🌆",
        bullets: [
          "Thursday, 6:40 PM: quotes sent, invoices out, content queued, inbox clear",
          "Sam locks the shop — while the sky is still light",
          "11.5 hours reclaimed by week four; audit re-run pinned beside the first",
          "Reinvestment: 5 hrs to follow-ups, 3 to systems, 3 to LIFE"
        ],
        narration: "And then comes the scene this film is named for. Thursday, week four, six forty in the evening. The quotes are sent — same-day, all of them. Invoices went out on time for the third straight week. Next week's content is queued. The inbox is empty. Sam stands in the doorway of Summit Signs genuinely unsure what to do, because the day is finished and so is the work. The re-run audit says eleven and a half hours reclaimed so far. Sam has already decided where they go: five hours to follow-up calls that used to never happen, three to building more systems — and three, non-negotiable, to being home before dinner goes cold."
      },
      {
        type: "title", chapter: "Thursday, 6:40 PM", mood: "green", kicker: "End of Part II",
        title: "16.5 HOURS WERE ALWAYS THERE",
        sub: "Your week is hiding its own number. The Time Gap Analyzer will find it in ten minutes.",
        visual: "⏱️",
        narration: "Sixteen and a half hours. They were always there — every single week, hiding inside tasks that felt like the job but were actually just the friction. In part three, The Engines: Sam stops reclaiming time and starts compounding it — a marketing machine that runs on fifteen minutes of truth, an intelligence swarm that reads the market every Monday at dawn, and the multi-agent council that talks Sam out of a two-hundred-thousand-dollar mistake. But your week is hiding its own number, and it's probably bigger than you think. The Time Gap Analyzer takes ten minutes. Go find out what your floorboards are worth."
      }
    ]
  },

  /* ================= PHASE III: THE ENGINES (~7 min) ================= */
  {
    id: "mv-p3",
    movie: true,
    phase: "Phase III Movie",
    title: "THE ENGINES",
    minutes: 7,
    blurb: "The content machine that runs on 15 minutes of truth, the Monday intelligence swarm, and the agent council that talked Sam out of a $200,000 mistake — then found the better move hiding behind it.",
    poster: { icon: "🕸️", grad: "linear-gradient(135deg,#0b1020,#5b1e3f 45%,#d55181)" },
    chapters: ["The Machine", "The Swarm", "The Council", "Compounding"],
    slides: [
      {
        type: "title", chapter: "The Machine", mood: "night",
        kicker: "The 90-day chronicles · Part III",
        title: "THE ENGINES",
        sub: "Reclaimed time is fuel. Engines are what you pour it into.",
        visual: "🕸️",
        narration: "Part three. Sam Reyes has hours again — eleven and a half a week and climbing. But reclaimed time is just fuel. This film is about engines: the systems that convert an owner's recovered hours into growth that compounds whether or not the owner is watching. Three engines. One month. And one decision that would have cost two hundred thousand dollars if Sam had made it the old way."
      },
      {
        chapter: "The Machine", mood: "magenta", kicker: "Engine one",
        title: "Fifteen minutes of truth, every Monday",
        visual: "🎙️",
        bullets: [
          "Monday, 7:15 AM: Sam records voice notes on the drive in",
          "A customer story · an opinion · answers to 3 real buyer questions",
          "The chain: Quill drafts → Remix splits into 15 → Echo voices it",
          "Five weeks of silence became five weeks of daily presence"
        ],
        narration: "Engine one is marketing, rebuilt as a machine with exactly one moving part that requires Sam: the truth. Every Monday at seven fifteen, on the drive to the shop, Sam records fifteen minutes of voice notes. The story of the restaurant sign that survived the hailstorm. An opinion about why cheap vinyl is expensive. Answers to the three questions every customer asked last week. By nine, Quill has drafted the pillar article with Sam's stories intact. Remix splits it into fifteen platform-native pieces. Echo tunes every word until it sounds like Sam and nobody else. The Instagram account that once went silent for five weeks now posts every day — and sounds more like Sam than when Sam wrote it exhausted at midnight."
      },
      {
        chapter: "The Machine", mood: "cyan", kicker: "Engine one · part two",
        title: "Becoming the answer machines cite",
        visual: "🔍",
        bullets: [
          "Buyers now ask AI assistants: 'best sign shop near me?'",
          "Lumen's audit: extractable answers, entity clarity, real FAQs",
          "Summit publishes definitive guides with its own data",
          "Six weeks later: cited by name in AI answers. Rivals: absent."
        ],
        narration: "Then Lumen opens a battlefield Sam didn't know existed. Buyers have changed how they search: they ask AI assistants, and the assistants answer with citations. Lumen's audit of Summit's website is blunt — nothing extractable, nothing definitive, invisible to the machines that increasingly make recommendations. So Summit starts publishing real answers: what a storefront sign actually costs and why, permit rules by county, a durability guide built from nine years of Summit's own repair data. Six weeks later, Sam asks three different AI assistants the question every local buyer asks — best sign shop near me — and hears Summit Signs cited by name, twice. The competitors aren't in the answer. They don't know the question changed."
      },
      {
        chapter: "The Swarm", mood: "violet", kicker: "Engine two",
        title: "Monday, 6 AM: five agents read the market",
        visual: "🐝",
        bullets: [
          "Vantage: competitor offers & pricing · Pulse: rising trends",
          "Halo: every new review, Summit's AND rivals' · Drift: benchmarks",
          "Lens merges it all into one page: what changed, what it means, one action",
          "Coffee-length reading. Analyst-department knowledge."
        ],
        narration: "Engine two wakes before anyone. Monday, six a.m.: five agents fan out across the market in parallel. Vantage scans the three rival shops — offers, prices, messaging changes. Pulse tracks what's rising: this month, channel letter signs and a wave of new restaurants opening on the east side. Halo reads every new review — Summit's and, more usefully, the competitors': two complaints about missed deadlines at the big shop across town. Drift checks Summit's numbers against industry benchmarks. And Lens compresses it all into one page ending with a single recommended action. Sam reads it with coffee. Twenty minutes into every week, Sam is the best-informed sign shop owner in the county — and starts aiming at the deadline-missers' unhappy customers."
      },
      {
        chapter: "The Council", mood: "gold", kicker: "Engine three",
        title: "The $200,000 question",
        visual: "⚖️",
        bullets: [
          "The temptation: a second location across town — $200K all-in",
          "Old Sam: gut feel, a napkin, a leap",
          "New Sam convenes the council: Scale, Voyager, Crucible, Sentinel, Quorum",
          "Every agent gets the same brief. Then they argue."
        ],
        narration: "Then comes the decision that gives this film its stakes. A building becomes available across town — good corner, good price. A second location. Two hundred thousand dollars all-in, and Sam wants it the way owners want things at two a.m.: completely. Old Sam would have decided on gut feel and a napkin. New Sam convenes a council. Five agents get the identical brief. Scale models the finances in three scenarios. Voyager sizes the market on that side of town. Sentinel maps the operational risks. Crucible — whose only job is attack — goes hunting for the fatal flaw. And Quorum hosts the debate, seat by seat, and forces a vote. The whole council costs Sam one evening."
      },
      {
        chapter: "The Council", mood: "night", kicker: "The verdict",
        title: "Talked down from the ledge — and up to something better",
        visual: "🕳️",
        bullets: [
          "Crucible's kill shot: capacity, not geography, is the constraint",
          "Scale: base case survives; downside case starves BOTH locations",
          "Quorum's vote: no on the building — yes on a mobile install unit at 1/8 the cost",
          "The counterfactual Sam frames: 'the best money is the money you don't burn'"
        ],
        narration: "The council's verdict lands like cold water, and then like a gift. Crucible finds the flaw in one line: Summit's constraint isn't geography — it's install capacity. A second storefront doubles rent without adding a single installer. Scale's downside scenario shows both locations starving each other through one slow winter. Quorum votes no — but boards don't just say no, and neither does this one. The alternative surfaces in the debate: a mobile install unit — a fitted van and a second crew — serving the east side at one-eighth the cost, testing the market before buying it. Sam prints the council transcript and frames a line from it above the desk: the best money is the money you don't burn."
      },
      {
        chapter: "Compounding", mood: "green", kicker: "The follow-up engine",
        title: "Deals stopped dying of silence",
        visual: "🔁",
        bullets: [
          "Compass: every quote gets a cadence — day 2, day 5, day 12",
          "The quote Sam forgot? There isn't one anymore.",
          "Close rate on quotes: 31% → 44% in six weeks. Same leads.",
          "Ripple + Halo: review velocity triples; every review answered in a day"
        ],
        narration: "The quietest engine turns out to be the most profitable. Compass installs a follow-up cadence on every quote that leaves the building: a check-in at day two, value added at day five, a graceful final touch at day twelve. Nothing pushy — just present, every time, in Sam's voice. The quote Sam forgot to chase? That category simply stops existing. Six weeks in, the close rate on quotes has climbed from thirty-one percent to forty-four — same leads, same prices, zero new marketing spend. Meanwhile Ripple asks for reviews at the moment of the happy install photo, Halo answers every one within a day, and Summit's review velocity triples. The engines don't get tired. That's the whole point."
      },
      {
        type: "title", chapter: "Compounding", mood: "magenta", kicker: "End of Part III",
        title: "ENGINES DON'T GET TIRED",
        sub: "The playbooks for all three engines are in Modules 5 and 6 — and the Council pattern is waiting for your own $200,000 question.",
        visual: "⚙️",
        narration: "A machine that markets on fifteen minutes of truth. A swarm that reads the market before dawn. A council that turns two-hundred-thousand-dollar gambles into structured decisions. None of it required Sam to become a technologist — only to become a better manager of a workforce that doesn't sleep. In the finale, The Compound: the profit sprint that finds twenty-six thousand dollars hiding inside Summit Signs, the price test Sam was afraid of for three years, and the scoreboard on day ninety. But you have your own two-hundred-thousand-dollar question — every owner does. The council pattern is in Module five. Convene yours before you write the check."
      }
    ]
  },

  /* ================= PHASE IV: THE COMPOUND (~7 min) ================= */
  {
    id: "mv-p4",
    movie: true,
    phase: "Phase IV Movie",
    title: "THE COMPOUND",
    minutes: 7,
    blurb: "The seven-day profit sprint finds $26,000 hiding inside Summit Signs. The price test Sam feared for three years takes forty minutes. And on day 91, the scoreboard tells a story nobody would have believed.",
    poster: { icon: "💎", grad: "linear-gradient(135deg,#0b1020,#4d3a08 45%,#c98500)" },
    chapters: ["The Sprint", "The Fear", "Day 91", "The Owner Sam Became"],
    slides: [
      {
        type: "title", chapter: "The Sprint", mood: "night",
        kicker: "The 90-day chronicles · Finale",
        title: "THE COMPOUND",
        sub: "The money was already there. So was the owner.",
        visual: "💎",
        narration: "The finale of Sam's ninety days. Every transformation has a moment when it stops feeling like effort and starts feeling like identity. For Sam Reyes, that moment arrives during a seven-day treasure hunt through Summit Signs' own books — and ends at a scoreboard on day ninety-one that tells a story no one at the shop would have believed in the spring."
      },
      {
        chapter: "The Sprint", mood: "green", kicker: "Days 1–2",
        title: "Hawk and Toll go hunting",
        visual: "🦅",
        bullets: [
          "Hawk's expense autopsy: $640/month of zombie software and bloat",
          "Design suite nobody opened since March · two overlapping stock services",
          "Toll's receivables sweep: $9,300 of finished, invoiced, unpaid work",
          "Firm-but-friendly ladder: $7,100 collected within three weeks"
        ],
        narration: "The profit sprint opens with Hawk, who reads Summit's expenses the way a raptor reads a field. The findings would be funny if they weren't universal: a design suite nobody has opened since March. Two stock photo services doing one job. A phone plan sized for a company Summit stopped being two years ago. Total: six hundred forty dollars a month, cancelled or renegotiated in an afternoon. Then Toll sweeps the receivables and finds the money hiding in plain sight — nine thousand three hundred dollars of work that was finished, invoiced, and simply never chased. Toll's ladder is firm and friendly: reminder, nudge, notice. Within three weeks, seven thousand one hundred dollars of Summit's own money comes home."
      },
      {
        chapter: "The Sprint", mood: "gold", kicker: "Days 3–4",
        title: "The margin table nobody wanted to see",
        visual: "📐",
        bullets: [
          "Margin ranks every service by profit-per-hour — including Sam's hours",
          "The 'flagship' vehicle wraps: $61/hr once Sam's time is priced in",
          "Quiet little banner installs: $210/hr. Nobody was promoting them.",
          "The move: banners get a package and a page; wraps get repriced or referred"
        ],
        narration: "Days three and four belong to Margin, and to a table Sam almost didn't want to see. Every Summit service, ranked by true profit per hour — with Sam's own hours finally priced in instead of pretended free. The flagship, the pride of the website, the vehicle wraps Sam loved showing off? Sixty-one dollars an hour once design revisions and Sam's supervision entered the math. And the humble banner installs nobody ever promoted — two hundred and ten dollars an hour. Sam stares at the table through two cups of coffee. Then moves. Banners get a package, a page and a promotion. Wraps get repriced honestly — or referred out to the shop across town that misses deadlines. Let them have the prestige. Summit will take the profit."
      },
      {
        chapter: "The Fear", mood: "magenta", kicker: "Day 5",
        title: "The price test Sam dodged for three years",
        visual: "🎢",
        bullets: [
          "Summit hadn't raised prices in 3 years — fear, not math",
          "Meter's model: +6% on new quotes; even losing 1 in 10 deals still wins",
          "Scripted, tested on new customers only; loyal clients grandfathered",
          "Result after 4 weeks: zero pushback. Nobody even mentioned it."
        ],
        narration: "Day five is the one Sam had been dreading, because day five is about fear. Summit Signs hadn't raised prices in three years — not because the math said no, but because fear did. What if they leave? Meter runs the actual math: a six percent increase on new quotes wins even if one deal in ten walks away — and the deals that would walk over six percent were the least profitable relationships on the books anyway. The test is careful and kind: new customers only, existing clients grandfathered with a thank-you note, every word of the announcement scripted. Sam clicks send with a held breath. Four weeks later, the result of three years of fear: nothing. Zero pushback. Not one customer even mentioned it. The fear had been charging Summit rent for three years, and it never once paid."
      },
      {
        chapter: "The Fear", mood: "cyan", kicker: "Days 6–7",
        title: "The last surprise",
        visual: "💧",
        bullets: [
          "Stream builds the 13-week forecast; Almanac maps the seasonal dip",
          "The January trough — visible in October, for the first time ever",
          "The prep: a holiday storefront package sold in November",
          "Sprint total: ~$26,000 found + fear retired. No new customers required."
        ],
        narration: "The sprint closes with Stream and Almanac building what Summit never had: sight. The thirteen-week forecast goes up on the wall, and Almanac lays nine years of seasonality over it — including the January trough that has ambushed Sam every single winter like it was somehow news. This year it's visible in October, which means this year it gets an answer: a holiday storefront refresh package, sold through November, that pulls January revenue forward into the calm. Sam tallies the seven days: roughly twenty-six thousand dollars found, collected or unlocked — plus one three-year-old fear, formally retired. Not one new customer required. The money was already there. It just needed someone with time to look."
      },
      {
        chapter: "Day 91", mood: "violet", kicker: "The scoreboard",
        title: "Ninety days, five numbers",
        visual: "🏆",
        bullets: [
          "Owner admin time: 61% → 24% of the week",
          "Idea-to-shipped: 3 weeks → 3 days · Quote close rate: 31% → 44%",
          "Recurring work with an agent owner: 64%",
          "Evenings home before 7: one per month → four per week"
        ],
        narration: "Day ninety-one. Sam pulls up the scoreboard that got built in week one, back when its empty columns felt like fiction. Owner time spent as operator and admin: was sixty-one percent, now twenty-four. Idea to shipped: was three weeks, now three days. Quote close rate: thirty-one to forty-four percent. Share of recurring work with a named agent owner: sixty-four percent. And the fifth metric — the one Sam almost didn't track because it felt unserious, and now defends as the entire point: evenings home before seven. Was one a month. Now four a week. The business grew. The owner shrank back to human size. Both things happened at once, and it turns out that was always allowed."
      },
      {
        chapter: "The Owner Sam Became", mood: "night", kicker: "What almost went wrong",
        title: "The five traps Sam skirted",
        visual: "🕳️",
        bullets: [
          "Week 3, the dip: novelty gone, compounding invisible — Sam almost quit",
          "The tool-tourism temptation: 14 shiny apps bookmarked, zero bought",
          "The near-miss: one unreviewed post with a wrong price — caught at the gate",
          "The team: included from day one, each with their own agent — nobody ran"
        ],
        narration: "Honesty requires the outtakes. Week three nearly ended everything — the novelty gone, the compounding not yet visible, and Sam one bad Tuesday from declaring the whole thing a fad. The only thing that held was the calendar: the Friday retro was already scheduled, so Sam showed up to it, and the numbers argued back. There was the tool-tourism temptation — fourteen shiny apps bookmarked in a weekend, zero purchased, because the rule said systems before subscriptions. There was the near-miss that justified every gate: a queued post with an outdated price, caught at the morning review in four seconds. And there was the fear that never came true: the team, included from day one and each handed an agent for their own worst task, didn't fear the family. They fought over who got the next hire."
      },
      {
        chapter: "The Owner Sam Became", mood: "gold", kicker: "The horizon",
        title: "Options are the real dividend",
        visual: "🌇",
        bullets: [
          "The mobile unit launches next quarter — the council's cheaper bet",
          "A buyer asked what Summit would sell for; for the first time, it's sellable",
          "Sam's Monday radar habit: one experiment always running",
          "The org chart on the shop wall: 6 humans, 11 agents, 1 owner — at dinner"
        ],
        narration: "What did ninety days actually buy? Options — the real dividend of a systemized business. The mobile install unit launches next quarter, the council's one-eighth-cost bet on the east side. A broker called last month asking what Summit would ever sell for, and for the first time in nine years the honest answer isn't 'nothing without Sam in it' — documented systems and a business that runs to standard are exactly what buyers pay premiums for. Not that Sam is selling. There's a new org chart taped to the shop wall, half joke and completely true: six humans. Eleven agents. One owner — who is, at this very moment, at dinner."
      },
      {
        type: "title", chapter: "The Owner Sam Became", mood: "gold", kicker: "End of the chronicles",
        title: "YOUR 90 DAYS START NOW",
        sub: "Sam's tools are your tools — the scan, the audit, the family, the sprint. Same site. Same price. Free.",
        visual: "⬡",
        narration: "Sam Reyes is a composite — built from the documented patterns of real owners running this exact playbook. Which means something better than a true story: a repeatable one. Every tool in Sam's ninety days is on this site right now. The DNA scan that told the truth. The audit that found the hours. The family that took the work. The sprint that found the money. The scoreboard that proved it. Ninety days from tonight, there's a version of your business with your name on the door and your evenings back in your possession. It is exactly twelve questions away from starting. Roll credits on Sam. Roll cameras on you."
      }
    ]
  }
];
