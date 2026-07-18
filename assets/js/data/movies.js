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
  },
  /* ============================================================
     THE CHARACTER FILMS — five shorts, one starring agent each.
     Every film: a new owner, a new town, a unique supporting
     cast, and one agent from the Family doing one job under one
     rule — agents draft, humans approve. Canon check: every
     agent named must exist in data/agents.js.
     ============================================================ */

  /* ================= CHARACTER FILM I: SLATE ================= */
  {
    id: "mv-c1",
    movie: true,
    phase: "Character Film · Slate",
    title: "INBOX ZERO",
    minutes: 7,
    blurb: "Rosa Delgado runs a 24-hour towing company on four hours of sleep and nine hundred unread emails. Somewhere in that pile is a renewal deadline that could take her fleet off the road — and the story of Slate, the Inbox Commander, begins the night she stops digging alone.",
    poster: { icon: "🗒️", grad: "linear-gradient(135deg,#0b1020,#0e2a4d 45%,#22d3ee)" },
    chapters: ["The Pile", "The Hire", "Two Sweeps", "The Storm Test"],
    slides: [
      {
        type: "title", chapter: "The Pile", mood: "night",
        kicker: "The Character Films · Film one",
        title: "INBOX ZERO",
        sub: "Starring Slate, Inbox Commander — with Rosa Delgado of Delgado Towing.",
        visual: "🗒️",
        narration: "Every agent in the Family has a job description. This is a film about what one of those jobs looks like from the inside — told through one owner, one inbox, and one very bad Tuesday. Her name is Rosa Delgado. She runs six tow trucks, around the clock, in a city that never stops crashing into itself. Her drivers are excellent. Her dispatch board is legendary. Her inbox is a landfill. And buried somewhere in that landfill, a clock is running that Rosa doesn't know about. This is the story of Slate. Roll film."
      },
      {
        chapter: "The Pile", mood: "night", kicker: "Scene one · 3:47 AM",
        title: "Nine hundred unread",
        visual: "🚛",
        bullets: [
          "Delgado Towing: six trucks, 24-hour dispatch, twelve years of Rosa's life",
          "The radio she commands. The inbox she survives.",
          "Nine hundred unread — invoices, insurers, a city contract, spam, all one pile",
          "Her filing system: scroll until something looks like it's on fire"
        ],
        narration: "Rosa Delgado can route three wrecks, a repossession and a dead battery across six trucks without writing anything down. On the radio, she is untouchable. But every crash generates paper — insurance threads, city paperwork, body-shop confirmations — and all of it lands in one place. Nine hundred unread. Her system is the system most owners have: scroll at three in the morning until something looks like it's on fire, answer that, sleep four hours, repeat. The radio built her business. The inbox is quietly deciding whether she keeps it. Neither of them knows about the email from October ninth."
      },
      {
        chapter: "The Pile", mood: "night", kicker: "Scene two · The buried clock",
        title: "The email from October ninth",
        visual: "⏰",
        bullets: [
          "From: Evelyn Cho, fleet insurance — subject line like every other notice",
          "Inside: renewal terms changed; documents due in thirty days — twenty-two ago",
          "Below it: a warm lead from a nine-van fleet, never answered, gone quiet",
          "The inbox doesn't lose emails. It loses futures."
        ],
        narration: "On October ninth, an adjuster named Evelyn Cho sent Rosa a renewal notice with a subject line engineered to be ignored. Inside it: the fleet policy terms had changed, new compliance documents were required, and the deadline was thirty days out. Twenty-two of those days are already gone. Three messages below it sits a quieter tragedy — a logistics manager with nine vans asking about a standing contract, never answered, now shopping elsewhere. This is the true cost of the pile. It doesn't lose emails. It loses futures. And it never tells you which ones it's losing."
      },
      {
        type: "cast", chapter: "The Hire", mood: "cyan", kicker: "Chapter two · The cast",
        title: "The people in this story",
        cast: [
          { avatar: "🗒️", name: "Slate", role: "Inbox Commander · starring", line: "Drafts replies, triages by importance, and unsubscribes you from decision fatigue." },
          { avatar: "🚛", name: "Rosa Delgado", role: "Owner, Delgado Towing", line: "Twelve years, six trucks, zero missed dispatches — and nine hundred unread emails." },
          { avatar: "🎧", name: "Marco Delgado", role: "Day dispatcher, Rosa's brother", line: "Keeps the board clean by day; keeps telling Rosa the inbox will bury her." },
          { avatar: "📋", name: "Evelyn Cho", role: "Fleet insurance adjuster", line: "Sent the renewal notice twenty-two days ago. Her deadline doesn't negotiate." }
        ],
        narration: "Meet the cast. Rosa Delgado, who can command six trucks but not nine hundred emails. Her brother Marco, the day dispatcher, who has been saying for a year that the inbox is the only board in the building nobody runs. Evelyn Cho, the adjuster on the other end of a deadline that does not care how good Rosa is on the radio. And the specialist entering this story tonight: Slate, the Inbox Commander — an agent with one job description. Sort everything. Draft what needs answering, in Rosa's voice. Flag what smells like risk. And never, ever hit send alone."
      },
      {
        chapter: "The Hire", mood: "cyan", kicker: "Scene four · The first triage",
        title: "Eight days of margin, found in an evening",
        visual: "🧯",
        bullets: [
          "Marco pastes the pile into Slate, one screen at a time — reply-now, reply-today, delegate, archive",
          "Fourteen minutes in, Slate flags it: renewal deadline, eight days left, marked URGENT-RISK",
          "Also surfaced: the nine-van lead, two unpaid invoices, a driver's expiring certification",
          "Rosa reads the drafts. Rosa approves. Rosa is still the commander."
        ],
        narration: "It starts, like most rescues, undramatically. Marco pastes the backlog into Slate one screen at a time, and Slate does what it was hired to do: reply-now, reply-today, delegate, archive. Fourteen minutes in, it surfaces the October ninth email with a flag Rosa has never seen an inbox produce: urgent, risk, eight days remaining. Then the rest of the buried futures come up for air — the nine-van lead, two invoices worth a truck payment, a driver certification quietly expiring. Slate drafts the reply to Evelyn Cho in Rosa's voice. Rosa reads it twice, changes one word, and approves. The clock is still running. But now somebody's watching it."
      },
      {
        chapter: "Two Sweeps", mood: "cyan", kicker: "Scene five · The rhythm",
        title: "Fifteen minutes, twice a day",
        visual: "🕗",
        bullets: [
          "The new standing order: two inbox sweeps — 8 AM with coffee, 6 PM before the night shift",
          "Slate pre-sorts and pre-drafts; Rosa approves, edits, or kills",
          "Dawn joins the roster: a morning brief — three priorities, calendar traps, one number",
          "The radio rule, applied to email at last: nothing dispatches itself"
        ],
        narration: "The install isn't software. It's a rhythm. Two sweeps a day — eight in the morning with coffee, six in the evening before the night shift takes the board. Slate pre-sorts, pre-drafts, pre-flags; Rosa approves, edits, or kills, fifteen minutes a sweep. A second specialist joins quietly: Dawn, the daily briefing officer, whose morning note fits on a phone screen — three priorities, one calendar trap, one number to watch. Marco laughs the first time he sees it, because it's just the dispatch board's rule finally applied to email: every job gets logged, every job gets assigned, and nothing — nothing — dispatches itself."
      },
      {
        chapter: "The Storm Test", mood: "night", kicker: "Scene six · The night everything hit at once",
        title: "Forty-one emails in one storm",
        visual: "⛈️",
        bullets: [
          "Three weeks later: ice storm, fourteen wrecks, all six trucks rolling",
          "Forty-one emails land in one night — the old Rosa would find them Thursday",
          "The 8 AM sweep: Slate has them sorted; eleven drafts waiting; two flags",
          "Total cost of the storm to the inbox: nineteen minutes"
        ],
        narration: "Every system meets its storm. Rosa's arrives three weeks later as freezing rain — fourteen wrecks before midnight, all six trucks rolling, the radio a wall of sound until dawn. The old Rosa would have surfaced on Thursday to find the week's wreckage in her inbox, and answered none of it. Instead, at eight sharp, exhausted and still in yesterday's jacket, she opens the sweep. Forty-one emails came in overnight. Slate has them held in formation: eleven drafts waiting for approval, two flagged risk, the rest filed. Nineteen minutes later the inbox is empty and Rosa is asleep. The storm never made it past the gate."
      },
      {
        chapter: "The Storm Test", mood: "green", kicker: "Scene seven · The scoreboard",
        title: "What the rescue actually returned",
        visual: "📊",
        bullets: [
          "Renewal filed with six days to spare — Evelyn Cho's reply: 'appreciate the quick turnaround'",
          "The nine-van fleet signed a standing contract — found on day one of triage",
          "Rosa's email time: hours a day, down to two fifteen-minute sweeps",
          "The real dividend: she took a Sunday. Entirely off. First in three years."
        ],
        narration: "Scoreboards keep stories honest, so here is Rosa's. The renewal was filed with six days to spare — Evelyn Cho, who has seen a hundred owners miss that deadline, wrote back four words: appreciate the quick turnaround. The nine-van fleet signed, a contract found on the first night of triage, worth more annually than every tool in the building. Email time fell from unmeasured hours to two bounded sweeps. But measure the real dividend in something rarer: three Sundays later, Rosa's phone stayed in a drawer from Saturday night to Monday morning, and the business did not notice. The pile is gone. The commander remains."
      },
      {
        type: "title", chapter: "The Storm Test", mood: "green",
        kicker: "End of film one",
        title: "YOUR PILE HAS A CLOCK IN IT TOO",
        sub: "Slate's hire prompt is on the AI Family page. The Inbox Zero Rescue playbook runs the same 48-hour install Rosa got.",
        visual: "⬡",
        narration: "Rosa Delgado is a composite — but the email from October ninth is real, because every unmanaged inbox has one. A deadline, a lead, a quiet expiry, sitting in the pile with a clock running. You don't know which email it is. That's the point. Slate's full hire prompt is waiting on the AI Family page, and the Inbox Zero Rescue playbook walks the same forty-eight-hour install Rosa ran: triage, drafts in your voice, two sweeps, and the standing rule that nothing sends itself. One film down. Four specialists to go. Next up: a garage, a hip surgery, and the keys."
      }
    ]
  },

  /* ================= CHARACTER FILM II: FORGE ================= */
  {
    id: "mv-c2",
    movie: true,
    phase: "Character Film · Forge",
    title: "THE KEYS",
    minutes: 7,
    blurb: "Sal Buonanno's garage runs on forty years of knowledge that exists in exactly one place: Sal. When surgery takes him out for three weeks, an apprentice, a voice recorder, and Forge the SOP Writer have eleven days to get the business out of his head — before the head leaves the building.",
    poster: { icon: "⚒️", grad: "linear-gradient(135deg,#0b1020,#3a2a0e 45%,#fbbf24)" },
    chapters: ["The Head", "The Deadline", "The Extraction", "The 48-Hour Test"],
    slides: [
      {
        type: "title", chapter: "The Head", mood: "night",
        kicker: "The Character Films · Film two",
        title: "THE KEYS",
        sub: "Starring Forge, SOP Writer — with Sal Buonanno of Buonanno & Sons Garage.",
        visual: "⚒️",
        narration: "There's a phrase owners use with pride that should terrify them: it's all up here. Forty years of judgment, tapped against a temple. This is a film about what happens when up here has to leave the building. Sal Buonanno runs the garage his grandfather opened — Buonanno and Sons, though his own sons chose other cities long ago. Sal is the business. Which was fine, right up until a surgeon looked at his hip and gave him a date. Eleven days out. This is the story of Forge, the SOP Writer. And a set of keys."
      },
      {
        chapter: "The Head", mood: "violet", kicker: "Scene one · The library that walks",
        title: "Everything is up here",
        visual: "🔧",
        bullets: [
          "Third-generation garage: transmissions, fleet work, the diagnoses nobody else gets right",
          "Theo, the apprentice: two years in, talented, and interrupted forty times a day — 'ask Sal'",
          "Connie runs the books and keeps a list titled THINGS ONLY SAL KNOWS. It has 61 entries.",
          "The best mechanic in the county is also its most dangerous single point of failure"
        ],
        narration: "Watch Sal work and you understand why the county sends him what nobody else can fix. He diagnoses a transmission by sound the way other people recognize a song. But watch the shop around him and you see the other thing: Theo, two years an apprentice and genuinely good, stopping forty times a day to ask; Connie, who runs the books and keeps a half-joking list on her clipboard titled things only Sal knows — sixty-one entries and growing. Every business has assets. Sal's most valuable one walks out the door at six every night, uninsured, unbacked-up, and lately, limping."
      },
      {
        chapter: "The Deadline", mood: "night", kicker: "Scene two · Eleven days",
        title: "The surgeon's calendar doesn't negotiate",
        visual: "🗓️",
        bullets: [
          "Hip replacement, scheduled: three weeks out of the shop, minimum",
          "Mr. Okonkwo's nine delivery vans — the contract that keeps winter paid for — needs service through all of it",
          "Sal's plan: 'I'll answer the phone from the bed.' Connie's counter: 'You'll answer sixty-one questions a day.'",
          "The real deadline isn't the surgery. It's the extraction."
        ],
        narration: "The surgeon gives Sal a date the way surgeons do — kindly, and without alternatives. Three weeks out, minimum, starting the fourteenth. Sal's first plan is every owner's first plan: he'll run the shop from the recovery bed, by phone. Connie does the math out loud at the kitchen table. Sixty-one entries on the list, Theo interrupted forty times a day, the Okonkwo fleet contract — nine vans, the thing that keeps winter paid for — mid-cycle through all of it. That's not recovery, she says, that's dispatch with anesthesia. The surgery isn't the deadline. The deadline is getting forty years out of Sal's head in eleven days."
      },
      {
        type: "cast", chapter: "The Deadline", mood: "cyan", kicker: "Chapter two · The cast",
        title: "The people in this story",
        cast: [
          { avatar: "⚒️", name: "Forge", role: "SOP Writer · starring", line: "Turns tribal knowledge into step-by-step systems anyone can run to standard." },
          { avatar: "🔧", name: "Sal Buonanno", role: "Owner, Buonanno & Sons", line: "Forty years of judgment, one hip surgery, and eleven days to hand it over." },
          { avatar: "🧰", name: "Theo Vance", role: "Apprentice mechanic", line: "Good hands, growing judgment — and about to run the shop with a binder." },
          { avatar: "🔔", name: "Chime", role: "Onboarding Designer · cameo", line: "Builds Theo's first-week path so the binder teaches instead of overwhelms." }
        ],
        narration: "The cast, before the clock starts. Sal Buonanno, who must do the hardest thing an expert ever does — say the quiet parts out loud. Theo Vance, about to discover the difference between helping in a shop and holding one. Connie, whose clipboard list becomes the mission map. And two specialists reporting for duty: Forge, the SOP Writer, whose job is turning voice memos full of judgment into steps, checks, and escalation rules anyone can follow — and, in a supporting role, Chime, the onboarding designer, who takes Forge's binder and turns Theo's terrifying first solo week into a path. Eleven days. Sixty-one entries. Begin."
      },
      {
        chapter: "The Extraction", mood: "cyan", kicker: "Scene four · The voice memos",
        title: "Say it while your hands do it",
        visual: "🎙️",
        bullets: [
          "The method: Sal narrates jobs into his phone while doing them — no writing, no stopping",
          "Forge structures each memo: trigger, steps, checks, escalate-when, definition of done",
          "The magic is in the mumbles — 'if it smells sweet, stop' becomes a written warning that saves engines",
          "Nine days: the sixty-one entries become thirty-one SOPs. The rest, Sal admits, were habits, not knowledge."
        ],
        narration: "The extraction method is built for a man who hates paperwork: don't write, talk. Sal props his phone on the toolbox and narrates while his hands work — every job, every judgment call, every superstition that turns out to be engineering. Forge takes each rambling memo and returns structure: what triggers this job, the steps in order, the checks between them, when to stop and escalate, what done looks like. The gold is in the mumbles. If it smells sweet, stop — five words Sal has said for decades — becomes a written warning about coolant that will someday save an engine Theo hasn't met yet. Nine days in, sixty-one entries have become thirty-one procedures. The other thirty, Sal admits, were just habits wearing knowledge's clothes."
      },
      {
        chapter: "The Extraction", mood: "violet", kicker: "Scene five · The dry run",
        title: "The apprentice and the binder",
        visual: "📖",
        bullets: [
          "Day ten: Theo runs a full brake job start-to-finish from the SOP alone — Sal watches in silence",
          "Two gaps found: a torque spec Sal never said out loud, a supplier quirk only Connie knew",
          "Forge revises same day; Chime sequences Theo's solo week — easy jobs first, fleet van mid-week",
          "The escalation rule, written and taped to the office door: when in doubt, stop and call. No hero mechanics."
        ],
        narration: "Day ten is the dry run, and it is agony for exactly one person. Theo works a complete brake job from the written procedure alone while Sal stands six feet away under strict orders to say nothing. Silence, it turns out, is a diagnostic tool: it finds two gaps by lunch — a torque spec that lived so deep in Sal's hands he'd never said it aloud, and a supplier quirk only Connie knew. Forge revises both procedures before the shop closes. Chime sequences the solo weeks like a training camp: routine jobs Monday, the fleet van Wednesday, nothing exotic until Sal can hobble in. And on the office door, the rule that makes it all safe: when in doubt, stop and call. No hero mechanics."
      },
      {
        chapter: "The 48-Hour Test", mood: "night", kicker: "Scene six · The shop without Sal",
        title: "Three weeks on the standard",
        visual: "🏥",
        bullets: [
          "Surgery Tuesday. Wednesday, the shop opens without Sal for the first time in 31 years.",
          "Week one: 14 jobs to standard, one escalation call — the right one to make",
          "Okonkwo's van 6 throws the sweet smell. Theo stops. The SOP catches what a rushed guess would've missed.",
          "Sal's phone: not sixty-one questions a day. Four calls, total, in week one."
        ],
        narration: "The surgery happens Tuesday. Wednesday morning, for the first time in thirty-one years, the bay doors open without Sal Buonanno inside them. Week one: fourteen jobs completed to standard, and one escalation call — which is not a failure of the system but the system working, because it was the right call to make. Then Okonkwo's van six comes in running hot, and the shop fills with a faint sweet smell. Theo stops. Right there, mid-job, exactly as page eleven commands, and finds the failing head gasket a rushed guess would have cooked into a dead engine. Sal's phone, braced for sixty-one questions a day, rings four times all week. He complains to Connie that nobody needs him. He is smiling when he says it."
      },
      {
        chapter: "The 48-Hour Test", mood: "gold", kicker: "Scene seven · The return",
        title: "What Sal came back to",
        visual: "🔑",
        bullets: [
          "Three weeks later: every fleet deadline met, no comebacks, two new customers from Okonkwo's referral",
          "The binder is now 'the standard' — Theo adds to it; even Sal consults it, to his own disgust",
          "The business survived its founder's absence. That sentence changed what it's worth.",
          "Sal has a new job title, unofficial: chief judgment officer. The wrenches have understudies now."
        ],
        narration: "Sal comes back on a cane three weeks later to a shop that didn't burn down — which sounds like a small thing and is actually the largest thing that has ever happened to the business. Every fleet deadline met. Zero comebacks. Two new customers, referred by Okonkwo, who told a friend his mechanic's shop runs so tight the owner can get surgery and nothing slips. The binder has a name now — the standard — and Theo adds to it weekly. A business that survives its founder's absence is worth something a one-man genius show never is: it's transferable. Sellable, someday. Inheritable, maybe. Sal still does the impossible diagnoses. But the possible ones finally have understudies."
      },
      {
        type: "title", chapter: "The 48-Hour Test", mood: "gold",
        kicker: "End of film two",
        title: "COULD YOUR BUSINESS SURVIVE YOUR ABSENCE?",
        sub: "Forge's hire prompt is on the AI Family page. The Ops SOP Forge playbook runs Sal's exact extraction — voice memos and all.",
        visual: "⬡",
        narration: "Here's the uncomfortable question this film was built to ask: if a surgeon handed you a date eleven days out, what would leave the building with you? Sal got a deadline. Most owners just get the slow version — the vacation never taken, the sale price that evaporates, the apprentice who leaves because everything requires asking. Forge's hire prompt is on the AI Family page, and the Ops SOP Forge playbook runs Sal's exact extraction: say it while your hands do it, structure it, dry-run it, tape the escalation rule to the door. The keys are only yours if you can hand them to someone. Next film: a bakery, a beloved croissant, and the math nobody wanted to see."
      }
    ]
  },

  /* ================= CHARACTER FILM III: MARGIN ================= */
  {
    id: "mv-c3",
    movie: true,
    phase: "Character Film · Margin",
    title: "THE FAMOUS LOAF",
    minutes: 7,
    blurb: "Hearth & Stone's laminated croissant has a line out the door every Saturday — and it's been quietly bankrupting the bakery for two years. Margin, the Unit Economics Analyst, prices the one ingredient Amara and Josef never counted: themselves. A film about loving your product enough to do the math.",
    poster: { icon: "📐", grad: "linear-gradient(135deg,#0b1020,#4d1a35 45%,#f472b6)" },
    chapters: ["The Line Out the Door", "The Uncounted Ingredient", "The Ranking", "The Reprice"],
    slides: [
      {
        type: "title", chapter: "The Line Out the Door", mood: "gold",
        kicker: "The Character Films · Film three",
        title: "THE FAMOUS LOAF",
        sub: "Starring Margin, Unit Economics Analyst — with Amara Osei & Josef Lind of Hearth & Stone.",
        visual: "📐",
        narration: "Some businesses fail from products nobody wants. This film is about the opposite disease — the product everybody wants, that loses money every single time it sells. Hearth and Stone is the bakery every neighborhood deserves: brick oven, flour in the air, and a laminated sourdough croissant so good there's a line down the block every Saturday by seven. Amara and Josef built their reputation on it. What they've never built is the math underneath it. This is the story of Margin, the Unit Economics Analyst — and the bravest spreadsheet in this whole academy. Roll film."
      },
      {
        chapter: "The Line Out the Door", mood: "gold", kicker: "Scene one · Saturday, 6:58 AM",
        title: "Busy is the best disguise",
        visual: "🥐",
        bullets: [
          "Hearth & Stone: seven years, two owners, one famous croissant — 340 sold every Saturday",
          "Revenue up nine percent this year. The bank account, somehow, tighter than ever.",
          "Josef starts lamination at 3 AM; Amara runs the oven from 4; Dot has held the counter for 17 years",
          "The question they ask at close every week: 'Where does it all go?'"
        ],
        narration: "By six fifty-eight on a Saturday there are thirty people outside Hearth and Stone, and by noon the croissant trays will have turned over six times. Three hundred forty croissants, gone. By every visible measure this is a triumph: revenue up nine percent, reviews glowing, Dot at the counter greeting regulars by name and order. So explain the other number — the checking account, tighter this year than last. Josef starts laminating at three in the morning. Amara takes the oven at four. And every Saturday at close, they ask the question owners ask instead of doing math: where does it all go? Busy, it turns out, is the best disguise a failing number ever wore."
      },
      {
        chapter: "The Uncounted Ingredient", mood: "night", kicker: "Scene two · What the recipe leaves out",
        title: "Butter, flour, and nobody's hours",
        visual: "🧮",
        bullets: [
          "The croissant costing sheet, per unit: butter, flour, levain, packaging — $1.61. Sells for $4.75.",
          "Missing from the sheet: 14 hours of lamination and shaping a week — all of it Josef, all of it 3 AM",
          "Missing: the oven bottleneck that pushes everything else later, and the wholesale orders it delays",
          "The most expensive ingredient in the famous croissant is the couple that owns the bakery"
        ],
        narration: "The costing sheet taped inside the pantry door says the croissant costs a dollar sixty-one to make and sells for four seventy-five, and if that were true this would be a very short film. Here's what the sheet leaves out. Fourteen hours a week of lamination, folding, and shaping — skilled work that only Josef does, all of it starting at three in the morning. The oven bottleneck the croissant program causes, which pushes the wholesale bread late, which is the actual profitable line. Two years of declining a stand-mixer upgrade because cash felt thin. The recipe counts butter by the gram. It has never once counted the bakers."
      },
      {
        type: "cast", chapter: "The Uncounted Ingredient", mood: "magenta", kicker: "Chapter two · The cast",
        title: "The people in this story",
        cast: [
          { avatar: "📐", name: "Margin", role: "Unit Economics Analyst · starring", line: "Ranks every offer by true profit per hour of your life — including your hours." },
          { avatar: "🥖", name: "Amara Osei", role: "Co-owner, oven & wholesale", line: "Knows every number except the one hiding inside the famous croissant." },
          { avatar: "🥐", name: "Josef Lind", role: "Co-owner, laminator-in-chief", line: "Fourteen hours a week at 3 AM, priced into the croissant at exactly zero." },
          { avatar: "🧾", name: "Meter", role: "Pricing Strategist · cameo", line: "Scripts the reprice — the letter, the number, and the nerve to send it." }
        ],
        narration: "The cast. Amara Osei, who runs the ovens, the wholesale line, and every number in the building except the one that matters most. Josef Lind, whose three a.m. lamination shift is priced into the famous croissant at exactly zero dollars. Dot, seventeen years at the counter, who will have opinions about what's coming. And the specialists: Margin, the Unit Economics Analyst, starring — whose one job is ranking every product by true profit per hour of the owners' lives — and Meter, the pricing strategist, in a late cameo, because finding the truth is act two. Charging for it is act three."
      },
      {
        chapter: "The Ranking", mood: "night", kicker: "Scene four · The Tuesday night spreadsheet",
        title: "Every product, priced honestly",
        visual: "📊",
        bullets: [
          "The method: 90 days of sales, every product — ingredients, packaging, AND labor hours at a fair wage",
          "Margin's output: profit per unit and profit per owner-hour, ranked coldest to warmest",
          "Wholesale bread: quiet hero, 4× the croissant's return per hour. Cakes: solid. Coffee: tiny margin machine.",
          "The famous croissant, honestly priced: minus 38 cents per unit. The line out the door loses money."
        ],
        narration: "It happens at the prep table on a Tuesday night, flour still in the air. Ninety days of sales go in, every product, and this time labor goes in too — every hour, priced at what they'd pay a stranger to do it. Margin returns the ranking nobody wanted. Wholesale bread, the unglamorous rye that no one photographs: the quiet hero, four times the return per owner-hour. The celebration cakes: solid. The coffee program: a tiny relentless margin machine. And the famous croissant — the identity of the bakery, the line out the door, the thing that made them — at minus thirty-eight cents a unit. Three hundred forty times every Saturday. Josef reads it twice and says, very quietly: we pay them to take it."
      },
      {
        chapter: "The Ranking", mood: "magenta", kicker: "Scene five · The grief scene",
        title: "You're allowed to love it. You're not allowed to lie about it.",
        visual: "💔",
        bullets: [
          "Josef's first instinct: kill the ranking, not the croissant — 'it brings people in!'",
          "Margin, tested: the halo math. Croissant buyers who buy nothing else: 61%. The halo is mostly myth.",
          "Amara's reframe: the croissant isn't the problem. The price is. Undercharging is a choice, not a fate.",
          "Options on the table: reprice, resize the program, or retire it. Only one is unacceptable: pretending."
        ],
        narration: "What follows is the scene every owner recognizes: the argument with the spreadsheet. Josef's first instinct is loyalty — the croissant brings people in, you can't put a price on reputation. So they test the halo instead of assuming it: Margin cross-checks the tickets, and sixty-one percent of croissant buyers buy nothing else. The halo is mostly myth. It's Amara who finds the reframe: the croissant was never the problem. The price is. Underpricing skilled three a.m. labor isn't humility — it's a decision, made by default, every Saturday for two years. You're allowed to love your product. You're not allowed to lie about it. Three options go on the table. The only banned one is pretending."
      },
      {
        chapter: "The Reprice", mood: "cyan", kicker: "Scene six · The letter on the counter",
        title: "Six twenty-five, and the truth",
        visual: "✉️",
        bullets: [
          "The decision: keep the croissant, reprice to $6.25, cap the run at 240 — scarcity is honest now",
          "Meter drafts the counter letter: no apology — the real story of 14 hours of lamination",
          "Dot's condition: she delivers the news personally. 'My regulars get truth from me, not a sign.'",
          "Freed oven hours go to the quiet hero: wholesale bread picks up two new restaurant accounts"
        ],
        narration: "The decision honors both the product and the math. The croissant stays — repriced at six twenty-five, its run capped at two hundred forty, because scarcity that used to be an accident is honest now. Meter drafts the letter for the counter, and it contains no apology; it tells the true story instead — the three a.m. start, the fourteen hours of folding, what real butter costs now, what it means to make a thing properly. Dot sets one condition: she tells the regulars herself, face to face, because her people get truth from her, not from a sign. And the oven hours the smaller run frees up flow straight downhill to the quiet hero — wholesale bread picks up two new restaurant accounts within the month."
      },
      {
        chapter: "The Reprice", mood: "green", kicker: "Scene seven · Ninety days later",
        title: "The line got shorter. The bakery got stronger.",
        visual: "🌅",
        bullets: [
          "Croissant sales: down 21% in units — profitable on every single unit for the first time ever",
          "Three regulars complained. Two hundred didn't. Most repeated Dot's line back: 'about time you charged properly.'",
          "Total bakery profit up; Josef's lamination shift starts at 4:30 now, not 3:00",
          "New house rule, taped where the old costing sheet hung: nothing sells here that doesn't pay the bakers"
        ],
        narration: "Ninety days later the Saturday line is shorter, and the bakery is stronger, and both of those facts are the same fact. Croissant volume fell twenty-one percent — and for the first time in its famous life, every single unit sold makes money. Three regulars complained. Two hundred didn't, and most of them repeated Dot's own line back to her: about time you charged properly for that. Total profit is up on lower revenue — a sentence Amara reads aloud twice because it sounds like a typo and is actually the whole lesson. Josef laminates at four thirty now instead of three. And where the old costing sheet hung, a new rule, in Amara's handwriting: nothing sells here that doesn't pay the bakers."
      },
      {
        type: "title", chapter: "The Reprice", mood: "green",
        kicker: "End of film three",
        title: "WHAT'S YOUR FAMOUS LOAF?",
        sub: "Margin's hire prompt is on the AI Family page. The Cash & Pricing Autopsy playbook runs the same honest ranking — owner hours included.",
        visual: "⬡",
        narration: "Every business has a famous loaf — the beloved offer nobody's priced honestly, the flagship that might be a leak wearing a crown. You find out the way Amara and Josef did: ninety days of numbers, every product, and your own hours counted at a wage you'd actually pay. Margin's hire prompt is on the AI Family page, and the Cash and Pricing Autopsy playbook runs the exact Tuesday-night ranking — then hands you to Meter for the reprice letter, if the math says so. Love your product enough to do the math. Next film: an engineer who'd rather recalculate a bridge than make a sales call — and the ninety words that changed his firm."
      }
    ]
  },

  /* ================= CHARACTER FILM IV: HARPOON ================= */
  {
    id: "mv-c4",
    movie: true,
    phase: "Character Film · Harpoon",
    title: "NINETY WORDS",
    minutes: 7,
    blurb: "Ben Ashworth can calculate exactly when a bridge will fail — and can't send one sales email. With the firm's founder retiring and the pipeline empty, Harpoon the Outbound Hunter teaches the most reluctant salesman in engineering that precision beats volume, respect beats spam, and ninety words beat four thousand addresses.",
    poster: { icon: "🎯", grad: "linear-gradient(135deg,#0b1020,#1a1a4d 45%,#a78bfa)" },
    chapters: ["The Handshake Ledger", "The 4,000-Address Temptation", "The Signal Hunt", "The Reply"],
    slides: [
      {
        type: "title", chapter: "The Handshake Ledger", mood: "night",
        kicker: "The Character Films · Film four",
        title: "NINETY WORDS",
        sub: "Starring Harpoon, Outbound Hunter — with Ben Ashworth of Ashworth Structural.",
        visual: "🎯",
        narration: "Ben Ashworth can tell you, to a tolerance of millimeters, how much load a fifty-year-old bridge deck can carry. Ask him to sell that skill and he will suddenly remember an urgent calculation elsewhere. This is a film about the work brilliant people won't do — and what happens when the person who always did it for them retires. It's about pipelines, the human kind. It's about the difference between hunting and spraying. And it's about ninety words, sent to the right person, about the right crack, at the right time. This is the story of Harpoon. Roll film."
      },
      {
        chapter: "The Handshake Ledger", mood: "night", kicker: "Scene one · The founder's Rolodex",
        title: "Where the work always came from",
        visual: "🤝",
        bullets: [
          "Ashworth Structural: five engineers, thirty years of bridges, schools and warehouses that don't fall down",
          "Every project for three decades arrived the same way: Gerald Fisk's handshakes",
          "Gerald retires in four months. The pipeline after August: one inspection and a maybe.",
          "Ben's sales strategy to date: do excellent work and hope excellence is loud"
        ],
        narration: "For thirty years, Ashworth Structural never needed a sales department because it had Gerald Fisk. Gerald, who founded the firm, knew every county engineer, school-board facilities chief and warehouse developer in three hundred miles — and every project the firm ever built arrived through one of his handshakes. Now Gerald is retiring in four months, the way founders do: gradually, then suddenly. Ben, his best engineer and chosen successor, opens the project ledger one Tuesday and does the structural analysis on his own firm. Past August: one scheduled inspection, one maybe. The load path that held the business up for thirty years is being removed. Nothing has been designed to replace it."
      },
      {
        chapter: "The 4,000-Address Temptation", mood: "violet", kicker: "Scene two · The bad idea that almost won",
        title: "Four thousand addresses, forty dollars",
        visual: "📧",
        bullets: [
          "Panic shopping at midnight: a purchased list — 4,000 'decision-makers', $40, a blast template",
          "The draft: 'Dear Sir/Madam, Ashworth Structural offers comprehensive engineering solutions…'",
          "Priya, the office manager, reads it once: 'You'd never open this. Why would they?'",
          "Her counter-move: a folder she's kept for years, labeled ALMOST — every near-miss client and why"
        ],
        narration: "Desperation writes checks judgment has to cancel, and Ben's arrives at midnight: a purchased list, four thousand so-called decision-makers for forty dollars, and a template that begins Dear Sir slash Madam, Ashworth Structural offers comprehensive engineering solutions. He nearly sends it. What stops him is Priya Nair, the office manager, who reads the draft once and asks the only question that matters: would you open this? You, Ben — would you read past the first line? Then she puts a folder on his desk that she has quietly kept for six years. It's labeled ALMOST. Inside: every client who nearly hired them and didn't, every stalled conversation, every bridge inspection that went to a bigger firm — and why. Four thousand strangers, or thirty-one almosts. Choose your ammunition."
      },
      {
        type: "cast", chapter: "The 4,000-Address Temptation", mood: "cyan", kicker: "Chapter two · The cast",
        title: "The people in this story",
        cast: [
          { avatar: "🎯", name: "Harpoon", role: "Outbound Hunter · starring", line: "Researches the prospect's world and writes outreach that gets replies, not spam flags." },
          { avatar: "📐", name: "Ben Ashworth", role: "Engineer & reluctant successor", line: "Can calculate a bridge's failure point. Freezes at 'just checking in.'" },
          { avatar: "🗂️", name: "Priya Nair", role: "Office manager, keeper of ALMOST", line: "Six years of near-miss clients, filed with reasons. The firm's real pipeline." },
          { avatar: "📡", name: "Radar", role: "Lead Scorer · cameo", line: "Ranks the ALMOST folder by fit and timing — so Ben's ten hours go to the hottest ten." }
        ],
        narration: "The cast. Ben Ashworth, who must learn that selling engineering is engineering — load paths, tolerances, and no guessing. Priya Nair, whose ALMOST folder turns out to be the most valuable document in the building. Gerald Fisk, retiring, whose last gift is an introduction done right. And the specialists: Harpoon, the Outbound Hunter, starring — whose method is research first, respect always, ninety words maximum — and Radar, the lead scorer, in a cameo that matters: thirty-one almosts ranked by fit and timing, because Ben has ten hours a week for this, and the whole discipline is spending them on the right ten conversations."
      },
      {
        chapter: "The Signal Hunt", mood: "cyan", kicker: "Scene four · Research before reach",
        title: "Read their world before you write a word",
        visual: "🔍",
        bullets: [
          "Harpoon's rule: no message until you can name their project, their pressure, and their deadline",
          "Public signals everywhere: county inspection schedules, school bond votes, a developer's stalled permit",
          "Radar ranks the 31 almosts: fit × timing × reachability — the top ten get everything",
          "Number one: Marisol Vega, county engineer — 61 aging bridge decks and a federal reporting deadline in June"
        ],
        narration: "Harpoon's first rule reads like it came off a drafting table: no message leaves this office until we can name the recipient's current project, their pressure, and their deadline. So the hunt starts in public, where the signals were broadcasting all along — county inspection schedules, a school district's bond vote, a developer's permit stalled on a structural question. All published. All readable. All ignored until now. Radar ranks the thirty-one almosts by fit, timing and reachability, and the top of the list writes itself: Marisol Vega, county engineer, sixty-one aging bridge decks and a federal reporting deadline in June that her current firm is visibly behind on. Ben doesn't need four thousand strangers. He needs her Tuesday afternoon."
      },
      {
        chapter: "The Signal Hunt", mood: "violet", kicker: "Scene five · The ninety words",
        title: "One expansion joint, named specifically",
        visual: "✍️",
        bullets: [
          "Draft one, by Ben: 412 words, three paragraphs of firm history. Harpoon: 'That's a brochure. Hunt.'",
          "The discipline: one observed detail, one relevant capability, one small ask. Under ninety words.",
          "The detail: the Route 9 crossing's expansion joint — its condition rating public, its repair window closing",
          "Every draft is staged for Ben's approval. The agent aims; the engineer fires."
        ],
        narration: "Ben's first draft is four hundred twelve words and includes the firm's founding date. Harpoon returns it with the sentence that becomes shop law: that's a brochure — hunt. The discipline is brutal and freeing: one observed detail that proves you did the work, one capability relevant to that detail, one small ask. Under ninety words, total. The final message names the Route nine crossing's expansion joint — condition rating public, repair window closing before winter — notes that Ashworth has load-rated eleven decks of the same vintage, and asks for fifteen minutes before her June deadline. No attachments. No brochure. Ben reads it forty times, changes one comma, and presses send himself. The agent aims. The engineer fires."
      },
      {
        chapter: "The Reply", mood: "cyan", kicker: "Scene six · Twenty-two minutes later",
        title: "The email that got opened",
        visual: "📬",
        bullets: [
          "Marisol Vega replies in 22 minutes: 'You're the first person to mention that joint who didn't work for me.'",
          "The meeting: Ben talks about her bridges, not his firm. Fifteen minutes becomes ninety.",
          "The sequence continues gently: 2 emails, 1 call, 1 site walk — every touch drafted, every touch approved",
          "Meanwhile: ten conversations open across the top ten. Four meetings. Zero spam flags."
        ],
        narration: "The reply lands twenty-two minutes later, and Priya prints it for the wall: you're the first person to mention that joint who doesn't already work for me — can you do Thursday? The meeting runs long for the best reason: Ben never once talks about his firm. He talks about her sixty-one decks, her June deadline, the way a small firm can turn condition reports around in days instead of quarters. Fifteen minutes becomes ninety. Harpoon's follow-up sequence is patient — a summary, a useful precedent, one call, one site walk — and every touch crosses Ben's desk for approval. Across the top ten, the same discipline opens ten conversations, four meetings, zero spam flags. The ALMOST folder is becoming a ledger of appointments."
      },
      {
        chapter: "The Reply", mood: "green", kicker: "Scene seven · The load path, replaced",
        title: "Gerald retires. The pipeline doesn't.",
        visual: "🌉",
        bullets: [
          "June: Ashworth wins the county's 61-deck inspection cycle — the firm's largest contract in nine years",
          "Gerald's last act: five warm introductions, done his way — which turns out to be Harpoon's way, by hand",
          "The Tuesday ritual survives: ten hours, ten best conversations, ninety-word discipline, Ben approving every send",
          "The ledger after August, revisited: seven projects and a waiting list"
        ],
        narration: "In June, the county awards Ashworth Structural the full sixty-one-deck inspection cycle — the largest contract in the firm's history since Gerald's handshake era, won by an engineer who six months ago couldn't send a sales email. Gerald's retirement gift is five warm introductions done the old way, and Ben finally sees it: the old way was always Harpoon's way — know their world, name their problem, ask for something small. Gerald just did it at lunch counters instead of inboxes. The Tuesday ritual is permanent now. Ten hours, the ten best conversations, ninety words of discipline, every send approved by hand. The ledger past August reads seven projects and a waiting list. The load path has been replaced. The structure holds."
      },
      {
        type: "title", chapter: "The Reply", mood: "green",
        kicker: "End of film four",
        title: "WHO'S IN YOUR ALMOST FOLDER?",
        sub: "Harpoon's hire prompt is on the AI Family page. The Lead Response Sprint playbook builds your scored list and your ninety-word discipline.",
        visual: "⬡",
        narration: "Somewhere in your business is an ALMOST folder, even if nobody's been brave enough to label it — the near-clients, the stalled conversations, the people whose problems you could name if you looked. Volume outreach treats them like four thousand strangers. Hunting treats them like thirty-one Tuesdays. Harpoon's hire prompt is on the AI Family page, and the Lead Response Sprint playbook builds the whole discipline: the scored list, the signal research, the ninety-word drafts that wait for your approval. Respect converts better than reach. One film remains: a potter, a stolen voice, and the post about a failure that outsold everything."
      }
    ]
  },

  /* ================= CHARACTER FILM V: ECHO ================= */
  {
    id: "mv-c5",
    movie: true,
    phase: "Character Film · Echo",
    title: "IN HER OWN VOICE",
    minutes: 7,
    blurb: "A growth consultant made Lena Moreau's ceramics studio sound like everyone else's — and the sales followed the soul out the door. Echo, the Brand Voice Keeper, rebuilds her voice from the one place it never left: eleven years of kiln journals. A film about the algorithm, the glaze that failed, and sounding like yourself at scale.",
    poster: { icon: "📣", grad: "linear-gradient(135deg,#0b1020,#0e3a2a 45%,#34d399)" },
    chapters: ["The Borrowed Voice", "The Kiln Journals", "The Unfashionable Post", "The Voice, Kept"],
    slides: [
      {
        type: "title", chapter: "The Borrowed Voice", mood: "magenta",
        kicker: "The Character Films · Film five",
        title: "IN HER OWN VOICE",
        sub: "Starring Echo, Brand Voice Keeper — with Lena Moreau of Kilnhouse Ceramics.",
        visual: "📣",
        narration: "The most valuable asset Lena Moreau owns doesn't appear on any balance sheet. It's a voice — eleven years of it — the particular way she talks about clay and fire and patience that made four thousand strangers care about mugs from a garage kiln in a river town. This is a film about how she lost that voice by hiring someone to amplify it. About the difference between being loud and being unmistakable. And about the agent whose entire job is making sure you sound like yourself at scale. This is the story of Echo. Roll film."
      },
      {
        chapter: "The Borrowed Voice", mood: "magenta", kicker: "Scene one · The growth package",
        title: "Optimized into anonymity",
        visual: "📱",
        bullets: [
          "Kilnhouse Ceramics: one potter, one garage kiln, 4,000 devoted followers built over 11 years",
          "Enter the growth consultant: trending audio, urgency hooks, a 'proven' content calendar",
          "Ninety days of RUN don't walk 🏃 and POV: your morning coffee deserves better",
          "Reach up 30%. Sales down 18%. And Mrs. Whitfield's nine-word review: 'It doesn't sound like you anymore, dear.'"
        ],
        narration: "The consultant came recommended, with case studies and a proven calendar, and for ninety days Kilnhouse Ceramics posted like everyone else on the internet. Run, don't walk. POV: your morning coffee deserves better. Trending audio over time-lapse throwing, urgency hooks over the slow footage of glaze going on. The metrics said it worked — reach up thirty percent. The bank account said otherwise — sales down eighteen, and the collectors who preorder whole kiln loads had gone quiet. The review that ends the experiment isn't from an analyst. It's Mrs. Whitfield, who owns eleven Kilnhouse pieces, at the Saturday market, in nine gentle words: it doesn't sound like you anymore, dear. Lena reads her own feed that night like a stranger's. Because it is one."
      },
      {
        chapter: "The Kiln Journals", mood: "night", kicker: "Scene two · Where the voice never left",
        title: "Eleven years in the drawer",
        visual: "📓",
        bullets: [
          "The studio drawer: eleven years of kiln journals — every firing logged, every failure autopsied",
          "The entries read like her: 'Cone 6 lied to me today. The celadon ran like it had somewhere to be.'",
          "Zoe's realization: the voice was never lost. It was just never allowed onto the feed.",
          "Raw material for a rebuild: not trends — transcripts of a woman talking to fire for a decade"
        ],
        narration: "The rescue starts with a drawer. Zoe — Lena's niece, studio assistant, and the one who has to post all this — is looking for a receipt and finds eleven years of kiln journals instead. Every firing logged. Every failure autopsied in Lena's blunt, funny, tender shorthand. Cone six lied to me today. The celadon ran like it had somewhere to be. Buyer wants 'something blue' — so does everyone; blue is doing fine. Zoe reads for two hours on the studio floor and arrives at the sentence that reframes everything: the voice was never lost. It's been in this drawer the whole time. It just never got hired for the feed. What Kilnhouse needs isn't a better strategy. It's a keeper."
      },
      {
        type: "cast", chapter: "The Kiln Journals", mood: "cyan", kicker: "Chapter two · The cast",
        title: "The people in this story",
        cast: [
          { avatar: "📣", name: "Echo", role: "Brand Voice Keeper · starring", line: "Learns your voice from your own words — then guards it in everything that ships." },
          { avatar: "🏺", name: "Lena Moreau", role: "Potter, Kilnhouse Ceramics", line: "Eleven years of voice in a drawer, ninety days of someone else's on the feed." },
          { avatar: "📲", name: "Zoe Moreau", role: "Niece & studio assistant", line: "Found the journals. Now posts in Lena's voice with Echo checking every caption." },
          { avatar: "🖼️", name: "Marcus Hale", role: "Gallery curator", line: "Stopped reading the feed during the guru era. About to start again." }
        ],
        narration: "The cast. Lena Moreau, who must learn that scaling a voice and surrendering it are different projects. Zoe, who becomes the studio's publisher the day she stops asking what's trending and starts asking what Aunt Lena would actually say. Marcus Hale, the gallery curator who quietly unfollowed during the guru era — his return will be the story's verdict. Mrs. Whitfield, whose nine words started everything. And the specialist at the wheel: Echo, the Brand Voice Keeper, whose method is the opposite of invention — read everything Lena ever wrote, extract the voice she already owns, write it into a guide, and then guard it in every caption, every email, every description that leaves the studio."
      },
      {
        chapter: "The Kiln Journals", mood: "cyan", kicker: "Scene four · The voice guide",
        title: "Rules Lena didn't know she had",
        visual: "🧭",
        bullets: [
          "Echo ingests the journals, the old captions, two podcast interviews — and returns a voice guide",
          "The rules were always there: fire is a collaborator, never an enemy. Failures get autopsies, not apologies.",
          "Banned list, from Lena's own patterns: urgency hooks, 'run don't walk', emoji storms, fake scarcity",
          "The test: Zoe drafts, Echo checks against the guide, Lena approves. Ten seconds a caption."
        ],
        narration: "Echo reads everything — eleven years of journals, the pre-guru captions, two podcast transcripts where Lena forgot she was being recorded, which is where people sound most like themselves. What comes back is uncanny: a voice guide full of rules Lena followed for a decade without once writing them down. Fire is a collaborator, never an enemy. Failures get autopsies, not apologies. Numbers are always specific — cone six, thirteen hours, third firing — because specificity proves you were there. And a banned list drawn from her own patterns: no urgency hooks, no run-don't-walk, no manufactured scarcity. The workflow takes ten seconds a caption: Zoe drafts, Echo checks against the guide, Lena approves. The keeper is on duty."
      },
      {
        chapter: "The Unfashionable Post", mood: "night", kicker: "Scene five · The kiln opens wrong",
        title: "Forty ruined mugs, one honest post",
        visual: "🔥",
        bullets: [
          "Disaster, documented: a firing fails — the new copper glaze crawled on forty mugs, a month's work",
          "The guru playbook: hide it, post the backlog, protect the aesthetic",
          "The journal-voice answer, drafted by Zoe with Echo: a full autopsy — photos of the failures, what cone six did, what she'll change",
          "Lena approves it at the kitchen table with her thumb over the post button for a long minute"
        ],
        narration: "The test arrives, as tests do, inside a disaster. A firing fails — the new copper glaze crawls on forty mugs, a month of throwing reduced to texture like dried riverbed. The old playbook is clear: hide it, post backlog, protect the pretty grid. Zoe drafts the opposite in the journal voice, with Echo holding the line — a full autopsy. Photographs of the worst pieces, unflinching. What the cone did. What the copper wanted that she didn't give it. What changes next firing, in three plain sentences. The caption ends the way the journals always end: the kiln doesn't owe me anything — it just tells the truth at two thousand degrees. Lena sits with her thumb over the button for a long minute. Then she posts the failure."
      },
      {
        chapter: "The Unfashionable Post", mood: "gold", kicker: "Scene six · What honesty did",
        title: "The failure outsells the trend",
        visual: "📈",
        bullets: [
          "The autopsy post: most-shared in Kilnhouse history — 4× anything from the guru era",
          "Comments unlike any before: potters, teachers, collectors — 'this is why we trust you'",
          "Twelve of the forty 'ruined' mugs sell in a day as the Riverbed Series — flaw named, story attached",
          "Marcus Hale, returned: 'The feed finally sounds like the pots look. Call me about spring.'"
        ],
        narration: "The failure post outperforms everything the trend machine ever produced — shared four times more than the guru era's best day, but the numbers are the least of it. Read the comments and the difference is species, not degree: potters asking about the cone schedule, a ceramics teacher requesting permission to use the autopsy in class, collectors writing this is why we trust you. Twelve of the forty ruined mugs sell within a day — renamed the Riverbed Series, flaw documented, story attached — because it turns out people don't buy perfection from a garage kiln; they buy witness. And one direct message that Zoe screenshots for the wall: Marcus Hale, the curator who left. The feed finally sounds like the pots look. Call me about a spring show."
      },
      {
        chapter: "The Voice, Kept", mood: "gold", kicker: "Scene seven · Scale without surrender",
        title: "Louder, and still hers",
        visual: "🏺",
        bullets: [
          "Six months on: followers past 6,000 — slower growth than the guru promised, worth more per hundred",
          "The voice guide governs everything now: captions, the newsletter, wholesale emails, the spring show copy",
          "Zoe runs the feed in minutes a day; Lena approves; Echo keeps; nothing ships off-voice",
          "The spring show sells out. The wall text is three kiln-journal entries, framed."
        ],
        narration: "Six months later, Kilnhouse passes six thousand followers — growth the guru would call slow, and the ledger calls real, because these hundred are worth more than the old era's thousand. The voice guide governs everything that leaves the studio now: captions, the monthly newsletter, wholesale emails, even the wall text for the spring show at Marcus's gallery — which is, in the end, just three kiln-journal entries, framed, beside the pots they describe. The show sells out. The workflow never grew heavier: Zoe drafts in minutes, Echo keeps the line, Lena approves with her morning coffee. That's the whole secret this film has to offer. Scale was never the enemy of soul. Surrender was. Lena Moreau got loud without borrowing a single word."
      },
      {
        type: "title", chapter: "The Voice, Kept", mood: "gold",
        kicker: "End of the character films",
        title: "SOUND LIKE YOURSELF. EVERYWHERE. AT ONCE.",
        sub: "Echo's hire prompt is on the AI Family page. The Content & Brand Engine playbook builds your voice guide from your own words — then keeps it.",
        visual: "⬡",
        narration: "Your voice is already written down — in your sent folder, your best proposals, the way you explain your work to someone who cares. Echo's job is to find it, formalize it, and then guard it in every caption, email and page that ships, so scale amplifies you instead of replacing you. The hire prompt is on the AI Family page; the Content and Brand Engine playbook builds the guide from your own words and installs the ten-second keeper check. And that's the anthology — five owners, five specialists, one rule held all the way through: agents draft, humans approve, and nothing ships without the person whose name is on the door. The Screening Room lights come up. Your family is waiting."
      }
    ]
  }
];
