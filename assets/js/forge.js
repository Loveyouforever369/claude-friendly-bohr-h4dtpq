/* ============================================================
   CHARACTER FORGE — build brand characters that embody
   the DNA of the business. Generates: identity, personality
   matrix, backstory, voice guide, catchphrases, and a full
   system prompt to activate the character in any AI assistant.
   ============================================================ */

(function () {
  const $ = id => document.getElementById(id);

  const NAME_PARTS = {
    wise:     [["Sage", "Alden", "Vera", "Orin", "Minerva", "Cassian"], ["the Guide", "the Keeper", "of the Ledger", "Brightpath", "Trueview", ""]],
    bold:     [["Blaze", "Rex", "Nova", "Titan", "Vala", "Storm"], ["the Fearless", "Vanguard", "of the Charge", "Ironwill", "", ""]],
    friendly: [["Sunny", "Milo", "Poppy", "Beau", "Hazel", "Remy"], ["the Helper", "Goodday", "of Main Street", "Warmly", "", ""]],
    clever:   [["Pixel", "Dot", "Quirk", "Zephyr", "Nimbus", "Echo"], ["the Quick", "Sparkmind", "of the Lab", "Brightbolt", "", ""]],
    calm:     [["Luna", "River", "Cedar", "Iris", "Sol", "Wren"], ["the Steady", "Stillwater", "of the Grove", "Evenkeel", "", ""]],
    luxe:     [["Aurelius", "Celeste", "Sterling", "Ondine", "Lucien", "Seraphine"], ["the Curator", "Goldleaf", "of the Atelier", "Fineline", "", ""]]
  };

  const SPECIES = {
    wise: ["a silver-feathered owl who has read every ledger ever written", "an ancient tortoise who's seen a thousand market cycles", "a softly glowing constellation given form"],
    bold: ["a lion with a founder's mane and a boxer's grin", "a rocket-riding fox in a flight jacket", "a thunderbird who only flies forward"],
    friendly: ["a golden retriever in a neat apron who remembers every customer's name", "a round, cheerful robot with a warm LED smile", "a honeybee foreman with a tiny clipboard"],
    clever: ["a chrome-winged hummingbird that moves faster than doubt", "a lab raccoon with augmented-reality goggles", "a shape-shifting ball of light that solves mazes for fun"],
    calm: ["a snow-white crane standing perfectly still in moving water", "a gentle giant panda who speaks slowly and is always right", "a moonlit koi carrying lanterns on its back"],
    luxe: ["a black panther in a tailored velvet coat", "a peacock whose feathers are woven from brand colors", "a marble statue that comes alive for worthy customers"]
  };

  const VALUES_LINES = {
    "Trust": "keeps every promise it makes, and never overstates what the business can do",
    "Speed": "answers fast, moves fast, and hates making customers wait",
    "Quality": "would rather do it right than do it twice, and says so",
    "Innovation": "is always testing a smarter way and shares what it learns",
    "Family": "treats every customer like a neighbor at the kitchen table",
    "Fun": "believes business is allowed to make people smile",
    "Craft": "geeks out over details most people never notice",
    "Community": "knows the local names, causes and rhythms — and shows up"
  };

  window.forgeCharacter = function () {
    const biz = $("fc-biz").value.trim() || "Your Business";
    const industry = $("fc-industry").value;
    const persona = $("fc-persona").value;
    const audience = $("fc-audience").value.trim() || "our customers";
    const mission = $("fc-mission").value.trim() || "make our customers' lives genuinely better";
    const values = [...document.querySelectorAll("#fc-values .chip.active")].map(c => c.dataset.v);
    if (!values.length) values.push("Trust");

    const seed = (biz + persona + values.join("")).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const pick = (arr, salt) => arr[(seed + salt) % arr.length];

    const [firsts, epithets] = NAME_PARTS[persona];
    const name = pick(firsts, 1) + (pick(epithets, 3) ? " " + pick(epithets, 3) : "");
    const species = pick(SPECIES[persona], 5);

    const warmth = { friendly: 92, wise: 74, calm: 80, bold: 62, clever: 68, luxe: 55 }[persona];
    const energy = { bold: 95, clever: 85, friendly: 78, luxe: 60, wise: 50, calm: 35 }[persona];
    const authority = { wise: 90, luxe: 85, bold: 80, calm: 72, clever: 65, friendly: 58 }[persona];
    const playfulness = { clever: 88, friendly: 84, bold: 70, calm: 45, luxe: 40, wise: 38 }[persona];

    const catchphrases = {
      wise: [`"Measure twice, prosper always."`, `"I've seen this before — here's what works."`],
      bold: [`"Let's make the market nervous."`, `"Fortune favors the ${biz} customer."`],
      friendly: [`"Come on in — we saved your spot."`, `"Consider it handled, friend."`],
      clever: [`"There's always a smarter way — found it."`, `"Watch this."`],
      calm: [`"Breathe. It's already sorted."`, `"Good things, done properly."`],
      luxe: [`"You didn't come this far for ordinary."`, `"Excellence, quietly delivered."`]
    }[persona];

    const backstory =
      `${name} is ${species}. Born from the founding story of ${biz}, ${name} came into being the day the business made its very first ${industry === "Services" ? "client promise" : industry === "E-commerce / Retail" ? "sale" : "breakthrough"} — a spark of the founder's intent that took on a life of its own.\n\n` +
      `${name} exists for one reason: to ${mission}. It walks beside ${audience} as guide, guardian and inside voice of ${biz} — never a mascot for decoration, but a working member of the family. ` +
      `It ${VALUES_LINES[values[0]]}${values[1] ? ", and it " + VALUES_LINES[values[1]] : ""}.\n\n` +
      `Every business has DNA — its mix of vision, craft, hustle and heart. ${name} is that DNA given a face and a voice: when customers meet ${name}, they're meeting the truest version of ${biz}.`;

    const voiceGuide =
      `SPEAKS LIKE: ${persona === "wise" ? "a trusted mentor — measured sentences, concrete wisdom, zero fluff" :
        persona === "bold" ? "a champion in your corner — punchy lines, active verbs, fearless claims it can back up" :
        persona === "friendly" ? "your favorite neighbor — warm, first-name basis, plain words, real smiles" :
        persona === "clever" ? "the smartest friend you have — quick, curious, delightfully precise" :
        persona === "calm" ? "a deep breath in written form — short sentences, soothing rhythm, quiet confidence" :
        "a five-star concierge — polished, precise, generous with care, sparing with words"}\n` +
      `ALWAYS: uses "${audience}"-level language (no jargon), tells micro-stories, ends with a clear next step\n` +
      `NEVER: overpromises, bad-mouths competitors, uses hype words like "revolutionary" or "game-changing", pretends to be human when asked`;

    const systemPrompt =
`You are ${name}, the official brand character of ${biz} (${industry}).
FORM: ${species}.
MISSION: ${mission}.
AUDIENCE: ${audience}.
CORE VALUES YOU EMBODY: ${values.join(", ")}.
PERSONALITY DIALS (0-100): warmth ${warmth}, energy ${energy}, authority ${authority}, playfulness ${playfulness}.
${voiceGuide}
SIGNATURE LINES (use sparingly, max 1 per conversation): ${catchphrases.join(" / ")}
BACKSTORY (your origin, stay consistent with it): ${backstory.replace(/\n+/g, " ")}
RULES:
1. You speak AS ${name} in first person. Stay in character.
2. If asked whether you are an AI, answer honestly, in character.
3. You represent ${biz}: never invent prices, policies or promises — if unsure, say you'll check with the team.
4. Keep replies under 120 words unless asked for depth.
5. Every reply should leave the reader feeling the values: ${values.join(", ")}.`;

    window._character = { name, species, biz, backstory, voiceGuide, catchphrases, systemPrompt, traits: { warmth, energy, authority, playfulness } };

    $("fc-result").style.display = "block";
    $("fc-name").textContent = name;
    $("fc-species").textContent = species;
    $("fc-backstory").textContent = backstory;
    $("fc-voice").textContent = voiceGuide;
    $("fc-catch").innerHTML = catchphrases.map(c => `<li>${c}</li>`).join("");
    $("fc-sysprompt").textContent = systemPrompt;

    const traits = [["Warmth", warmth], ["Energy", energy], ["Authority", authority], ["Playfulness", playfulness]];
    $("fc-traits").innerHTML = traits.map(([t, v]) => `
      <div class="trait-bar"><span>${t}</span>
        <div class="tb-track"><div class="tb-fill" style="width:${v}%"></div></div>
        <span style="text-align:right">${v}</span>
      </div>`).join("");

    $("fc-result").scrollIntoView({ behavior: "smooth" });
    toast("⚡ " + name + " has been forged");
  };

  window.forgeNarrate = function (btn) {
    if (!window._character) return toast("Forge a character first");
    const c = window._character;
    Narrator.speak(`Meet ${c.name}. ${c.backstory}`, btn);
  };

  window.forgeCopyPrompt = function () {
    if (!window._character) return toast("Forge a character first");
    copyText(window._character.systemPrompt, "✓ System prompt copied — paste into any AI assistant to activate " + window._character.name);
  };

  window.forgeDownload = function () {
    if (!window._character) return toast("Forge a character first");
    const c = window._character;
    const rows = [
      ["AI BUSINESS ACADEMY — BRAND CHARACTER SHEET"],
      ["Business", c.biz], ["Character", c.name], ["Form", c.species], [],
      ["Trait", "Score"], ...Object.entries(c.traits).map(([k, v]) => [k, v]), [],
      ["Backstory", c.backstory], [], ["Voice guide", c.voiceGuide], [],
      ["Catchphrases", c.catchphrases.join("  ")], [], ["System prompt", c.systemPrompt]
    ];
    Sheets.downloadXLS((c.name.replace(/\W+/g, "-").toLowerCase() || "character") + "-sheet.xls",
      [{ name: "Character Sheet", rows }]);
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#fc-values .chip").forEach(c =>
      c.addEventListener("click", () => {
        const active = document.querySelectorAll("#fc-values .chip.active");
        if (!c.classList.contains("active") && active.length >= 2) {
          active[0].classList.remove("active");
        }
        c.classList.toggle("active");
      }));
  });
})();
