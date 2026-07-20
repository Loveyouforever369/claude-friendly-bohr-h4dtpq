/* ============================================================
   FAMILY UPGRADES — the AI Family never stops learning.
   Append new entries monthly (newest first). Each upgrade names
   the agent, the new skill, where it came from, and how an owner
   uses it TODAY. Skills come from real study: the Future Radar
   briefings, tool research, and production work in this repo.
   ============================================================ */

window.SKILL_UPGRADES = [
  {
    date: "2026-07", agent: "Scout", avatar: "🧭", dept: "Growth & Marketing",
    skill: "Latent-demand mining (the complaint method)",
    learned: "From the 2026 solo-operator playbook plus a 100-post study of real owner threads: 100 people complaining about the same thing in 100 different places is a market gap, not noise. Hunt Reddit, Maps reviews, Facebook groups and YouTube comments — then score each gap on three signals: visible pain, a reachable buyer, and a result you can test.",
    use: "Give Scout your niche and it returns a complaint map: the top recurring gripes verbatim, where they cluster, and which ones pass the three-signal test as products or services you could ship this month."
  },
  {
    date: "2026-07", agent: "Ladder", avatar: "🪜", dept: "Sales Office",
    skill: "Value pricing + the recurring conversion",
    learned: "Most solo operators undercharge 5–10×. Price at 10–30% of what the RESULT is worth to the buyer (hours saved × their rate, money made, pain avoided) — never at what the file cost to make. Then convert one-time buyers to recurring: PDF → quarterly update, template → monthly library, best customers → ongoing version.",
    use: "Hand Ladder any offer and it returns a value-priced band plus the specific recurring version of the same product, with the upgrade email drafted."
  },
  {
    date: "2026-07", agent: "Census", avatar: "📊", dept: "Research & Insights",
    skill: "The owner complaint taxonomy",
    learned: "A 2026 study of 100 top small-business posts found the real patterns under the surface gripes: skills waste in 80% (the owner doing work someone else should do), process gaps in 59% (nothing written down until it fails), manual follow-up chasing in 22%, and in 30% of threads the commenters re-diagnosed the owner's problem as something structural the owner couldn't see from inside.",
    use: "Paste your three biggest frustrations and Census classifies them against the taxonomy — then routes each one to the agent whose job it actually is."
  },
  {
    date: "2026-07", agent: "Reel", avatar: "🎬", dept: "Content Studio",
    skill: "Vertical 9:16 render pipeline",
    learned: "The in-repo video pipeline (seekable HTML → frame capture → ffmpeg) now produces vertical 1080×1920 Shorts/Reels/TikTok masters, not just 16:9 — step-based ad videos with big captions sized for phone screens and sub-40-second runtimes.",
    use: "Ask Reel for a 'vertical steps cut' of any topic: it scripts 5–6 step cards, renders the master in both MP4 and WebM, and hands you the platform-native captions to post with it."
  },
  {
    date: "2026-07", agent: "Reel", avatar: "🎬", dept: "Content Studio",
    skill: "Seedance director grammar",
    learned: "Studied the 2026 ultra-realistic AI short-film workflow: write technical shot lists (never prose), always specify camera movement (or the model defaults to static 'surveillance' framing), and reserve the final 15–20 words of every prompt for lighting + camera.",
    use: "Ask Reel for a 'Seedance-ready shot list' — every shot arrives as subject + action + shot type + movement, with the lighting/camera clause pre-formatted at the end."
  },
  {
    date: "2026-07", agent: "Snap", avatar: "📸", dept: "Content Studio",
    skill: "@Reference tag consistency",
    learned: "Text-only prompts hold ~60–70% character consistency; attaching reference files and calling them explicitly (@Character1 face lock, @Video1 motion transfer, @Audio1 beat sync — up to 12 files) pushes it above 90%.",
    use: "Snap now writes prompts with the @tag calls included, so your brand character stays the same face in every rendered scene."
  },
  {
    date: "2026-07", agent: "Dub", avatar: "🎙️", dept: "Content Studio",
    skill: "Open-source local voiceover (Piper)",
    learned: "Piper TTS runs neural narration on a plain CPU, free and offline — the missing voice track for the academy's self-rendered videos. Kokoro-82M is the Apache-licensed alternative.",
    use: "Dub's narration scripts now export in Piper-ready plain text; one command turns them into WAV voiceover in any open environment."
  },
  {
    date: "2026-07", agent: "Orbit", avatar: "🪐", dept: "Marketing & Brand",
    skill: "YouTube + Facebook launch playbook",
    learned: "Native uploads beat links, one CTA per post, first-hour replies decide reach, and every post should star ONE named character — the launch kit with titles, tags, thumbnails and a 14-day calendar is in MARKETING.md.",
    use: "Ask Orbit for 'this week's launch posts' — it drafts from the calendar with your video files and site links slotted in."
  },
  {
    date: "2026-07", agent: "Reel", avatar: "🎬", dept: "Content Studio",
    skill: "Anchor-scene shot planning",
    learned: "From 2026 long-form AI video practice: generate the most important shot first (a clean close-up), then reference it everywhere — AI video models have no memory between clips.",
    use: "Ask Reel to write your shot list 'anchor first': it now opens every video plan with the anchor shot and threads its visual details through every subsequent scene prompt."
  },
  {
    date: "2026-07", agent: "Snap", avatar: "📸", dept: "Content Studio",
    skill: "Identity-anchored character prompts",
    learned: "Character consistency is THE central challenge of long-form AI video. The fix: lock 3–5 reference images and repeat the character's key features (hair, clothing, distinguishing marks) in every prompt — tools like Higgsfield 2.0 build this in.",
    use: "Snap now writes every brand-character image/video prompt with a fixed 'identity block' — same features, every scene, so your character never drifts."
  },
  {
    date: "2026-07", agent: "Mirage", avatar: "🕶️", dept: "Content Studio",
    skill: "Draft-cheap, finish-expensive routing",
    learned: "The 2026 multi-model workflow: iterate concepts on fast/cheap models (Kling, MiniMax), then spend premium credits (Veo, Seedance) only on takes you'll publish — keeps production inside one plan's monthly credits.",
    use: "Give Mirage your video idea and budget; it returns a two-pass plan: which shots to draft cheap, which finals earn the premium render."
  },
  {
    date: "2026-07", agent: "Dub", avatar: "🎙️", dept: "Content Studio",
    skill: "Licensed voice casting",
    learned: "Voice cloning of real actors without consent is off-limits — legally and ethically. Licensed libraries (HeyGen stock voices, ElevenLabs Voice Library) carry consented, commercial-cleared deep narrator voices.",
    use: "Dub now includes a 'voice casting card' with every narration script: 3 licensed voice archetypes to audition, disclosure line included."
  },
  {
    date: "2026-07", agent: "Tinker", avatar: "🔧", dept: "Product & Innovation",
    skill: "One-variable scene iteration",
    learned: "Changing multiple variables at once (angle + lighting + setting) is the top cause of AI-video identity drift. Change exactly one variable per generation.",
    use: "Applies beyond video: Tinker now redesigns any workflow experiment the same way — one variable per iteration, so you always know what caused the change."
  },
  {
    date: "2026-07", agent: "Prism", avatar: "🌈", dept: "Marketing & Brand",
    skill: "Persistent-presenter campaigns",
    learned: "HeyGen-class persistent avatars keep the same face, voice and mannerisms across dozens of videos — audiences build a relationship with a consistent presenter, not a rotating cast.",
    use: "Prism's campaign plans now cast ONE persistent presenter (your brand character or a licensed avatar) across the whole funnel — ads, explainers, follow-ups."
  },
  {
    date: "2026-07", agent: "Assembly", avatar: "🦾", dept: "Operations & Systems",
    skill: "Render-pipeline orchestration",
    learned: "From this academy's own trailer build: a seekable HTML composition + frame-exact capture + synthesized score = a real MP4 with zero external services. The pipeline is documented in PRODUCTION.md.",
    use: "Assembly can now plan an end-to-end video pipeline for any film in the Screening Room: script → avatar clips → b-roll → assembly → publish, with owner approval gates."
  },
  {
    date: "2026-07", agent: "Vantage", avatar: "🛰️", dept: "Executive Suite",
    skill: "AI-video competitive scan",
    learned: "2026 prediction consensus: video volume explodes as generation costs collapse. Businesses that publish consistent, character-led video will out-signal rivals still posting static images.",
    use: "Vantage's Monday briefing now flags which competitors started publishing AI-led video — and where your character-led content can outflank them."
  },
  {
    date: "2026-07", agent: "Sage", avatar: "🦉", dept: "Owner's Circle",
    skill: "The 20-minute video-production curriculum",
    learned: "Everything above, distilled: anchor scenes, identity blocks, one-variable iteration, licensed voices, draft-cheap/finish-expensive, persistent presenters.",
    use: "Ask Sage for the 'AI video micro-course': six 20-minute briefs, one per concept, each ending with an exercise on your own brand character."
  },
  {
    date: "2026-07", agent: "Ethica", avatar: "🧬", dept: "Legal & Compliance",
    skill: "Synthetic-media disclosure standards",
    learned: "As avatar video goes mainstream, disclosure becomes a trust advantage: audiences reward honesty about AI presenters and punish discovered deception.",
    use: "Ethica now adds a one-line disclosure standard to every avatar-video plan, plus the checklist for where it must appear (video description, end card, site)."
  }
];
