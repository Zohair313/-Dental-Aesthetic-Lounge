/**
 * Generates the clinic's illustrative SVG artwork (no external assets).
 * Run: node scripts/generate-art.mjs  → writes into public/art/
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "art");

const GOLD = "#a8813f";
const GOLD_SOFT = "#f0e2c6";
const INK = "#201a15";

function frame(content, defs = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" role="img">
  <defs>${defs}</defs>
  ${content}
</svg>`;
}

const commonDefs = `
  <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdfbf8"/><stop offset="1" stop-color="#f1e9de"/>
  </linearGradient>
  <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#e3e7ea"/><stop offset="1" stop-color="#c6ccd2"/>
  </linearGradient>
  <linearGradient id="toothw" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e8ebe8"/>
  </linearGradient>
  <linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e0c489"/><stop offset="1" stop-color="#a8813f"/>
  </linearGradient>
  <radialGradient id="softlight" cx="0.5" cy="0.15" r="0.85">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.85"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </radialGradient>`;

/** Big friendly tooth, used as a graphic motif. */
function tooth(cx, cy, s, fill = "url(#toothw)") {
  return `<g transform="translate(${cx} ${cy}) scale(${s})">
    <path d="M0-52c-11-7-24-8-34-2-12 7-16 20-14 35 2 12 6 23 10 34 3 8 5 17 8 22 3 6 9 6 12-1 4-7 4-17 5-25 1-8 3-13 13-13s12 5 13 13c1 8 1 18 5 25 3 7 9 7 12 1 3-5 5-14 8-22 4-11 8-22 10-34 2-15-2-28-14-35-10-6-23-5-34 2Z" fill="${fill}"/>
    <path d="M-30-36c3-8 9-13 17-15" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.9"/>
  </g>`;
}

const scenes = {};

/* ── 1. Clinic reception / interior ─────────────────────────────────────── */
scenes["clinic-interior"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <!-- back wall panel -->
   <rect x="70" y="70" width="300" height="200" rx="16" fill="#f6efe4" stroke="${GOLD_SOFT}" stroke-width="3"/>
   ${tooth(220, 175, 1.25)}
   <!-- reception desk -->
   <rect x="90" y="330" width="420" height="150" rx="18" fill="#efe4d4"/>
   <rect x="90" y="330" width="420" height="26" rx="10" fill="url(#goldg)" opacity="0.85"/>
   <rect x="120" y="384" width="120" height="66" rx="10" fill="#ffffff" opacity="0.7"/>
   <!-- monitor -->
   <rect x="470" y="250" width="170" height="112" rx="10" fill="url(#metal)" stroke="#b9c0c7" stroke-width="3"/>
   <rect x="484" y="264" width="142" height="84" rx="6" fill="#2f3b46"/>
   <rect x="494" y="274" width="90" height="9" rx="4" fill="#8fd0a3"/>
   <rect x="494" y="292" width="122" height="7" rx="3" fill="#5d6b78"/>
   <rect x="494" y="306" width="104" height="7" rx="3" fill="#5d6b78"/>
   <rect x="494" y="320" width="70" height="7" rx="3" fill="${GOLD}"/>
   <rect x="542" y="362" width="26" height="34" fill="#c6ccd2"/>
   <rect x="518" y="392" width="74" height="10" rx="5" fill="#b9c0c7"/>
   <!-- waiting chairs -->
   <g fill="#e6d9c6">
     <rect x="560" y="400" width="86" height="26" rx="10"/>
     <rect x="560" y="360" width="86" height="44" rx="12"/>
     <rect x="560" y="426" width="86" height="14" rx="6" fill="#cfbfa6"/>
     <rect x="666" y="400" width="86" height="26" rx="10"/>
     <rect x="666" y="360" width="86" height="44" rx="12"/>
     <rect x="666" y="426" width="86" height="14" rx="6" fill="#cfbfa6"/>
   </g>
   <!-- plant -->
   <rect x="700" y="452" width="46" height="52" rx="10" fill="#d9c9b1"/>
   <g fill="#7f9c74">
     <ellipse cx="723" cy="424" rx="16" ry="30" transform="rotate(-18 723 424)"/>
     <ellipse cx="723" cy="424" rx="16" ry="30" transform="rotate(20 723 424)"/>
     <ellipse cx="723" cy="414" rx="11" ry="26"/>
   </g>
   <!-- floor line -->
   <rect x="0" y="480" width="800" height="120" fill="#e9dfd0"/>
   <rect x="0" y="480" width="800" height="4" fill="${GOLD_SOFT}"/>
   <!-- pendant lights -->
   <g stroke="${GOLD}" stroke-width="3" opacity="0.8">
     <line x1="200" y1="0" x2="200" y2="46"/><line x1="620" y1="0" x2="620" y2="46"/>
   </g>
   <circle cx="200" cy="56" r="13" fill="url(#goldg)"/>
   <circle cx="620" cy="56" r="13" fill="url(#goldg)"/>`,
  commonDefs,
);

/* ── 2. Dental treatment room ───────────────────────────────────────────── */
scenes["dental-room"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <!-- window -->
   <rect x="560" y="70" width="180" height="150" rx="12" fill="#dceaf3" stroke="#e6dccb" stroke-width="8"/>
   <rect x="560" y="70" width="180" height="150" rx="12" fill="#ffffff" opacity="0.35"/>
   <!-- dental chair -->
   <g>
     <rect x="120" y="330" width="300" height="56" rx="24" fill="#cfd8dd" stroke="#b3bec5" stroke-width="3" transform="rotate(-6 270 358)"/>
     <rect x="360" y="292" width="150" height="50" rx="22" fill="#dbe3e8" stroke="#b3bec5" stroke-width="3" transform="rotate(-16 435 317)"/>
     <circle cx="150" cy="300" r="34" fill="#e2e9ed" stroke="#b3bec5" stroke-width="3"/>
     <rect x="250" y="386" width="26" height="96" rx="8" fill="url(#metal)"/>
     <rect x="200" y="472" width="140" height="18" rx="9" fill="#b9c0c7"/>
     <rect x="196" y="486" width="150" height="12" rx="6" fill="#98a2aa"/>
   </g>
   <!-- overhead lamp -->
   <line x1="470" y1="120" x2="470" y2="176" stroke="#b9c0c7" stroke-width="6"/>
   <g transform="rotate(14 470 200)">
     <rect x="410" y="176" width="120" height="34" rx="16" fill="url(#metal)" stroke="#a7b0b8" stroke-width="3"/>
     <ellipse cx="470" cy="194" rx="46" ry="16" fill="#fdf6d8"/>
     <ellipse cx="470" cy="196" rx="24" ry="9" fill="#ffffff" opacity="0.85"/>
   </g>
   <!-- instrument tray -->
   <rect x="560" y="380" width="180" height="16" rx="8" fill="url(#metal)"/>
   <rect x="596" y="396" width="16" height="80" rx="6" fill="#b9c0c7"/>
   <rect x="556" y="474" width="120" height="14" rx="7" fill="#98a2aa"/>
   <g stroke="#aab4bc" stroke-width="5" stroke-linecap="round">
     <line x1="586" y1="372" x2="622" y2="352"/>
     <line x1="640" y1="372" x2="672" y2="356"/>
     <line x1="700" y1="372" x2="716" y2="348"/>
   </g>
   <!-- small sparkle -->
   <path d="M690 250c2 9 6.5 13.5 15.5 15.5-9 2-13.5 6.5-15.5 15.5-2-9-6.5-13.5-15.5-15.5 9-2 13.5-6.5 15.5-15.5Z" fill="${GOLD}" opacity="0.55"/>
   <!-- floor -->
   <rect x="0" y="500" width="800" height="100" fill="#e9dfd0"/>`,
  commonDefs,
);

/* ── 3. Laser / skin treatment room ─────────────────────────────────────── */
scenes["laser-room"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <!-- back accent panel -->
   <rect x="0" y="0" width="800" height="240" fill="#f3e6dc" opacity="0.7"/>
   <!-- laser device -->
   <g>
     <rect x="96" y="330" width="150" height="170" rx="20" fill="#e8eef1" stroke="#bec9cf" stroke-width="3"/>
     <rect x="118" y="356" width="106" height="52" rx="10" fill="#2f3b46"/>
     <rect x="128" y="368" width="48" height="8" rx="4" fill="${GOLD}"/>
     <rect x="128" y="384" width="80" height="7" rx="3" fill="#5d6b78"/>
     <circle cx="136" cy="440" r="9" fill="#8fd0a3"/>
     <circle cx="162" cy="440" r="9" fill="#f0d18a"/>
     <circle cx="188" cy="440" r="9" fill="#e0a5a0"/>
     <rect x="118" y="464" width="106" height="20" rx="8" fill="#cfd8dd"/>
   </g>
   <!-- handpiece arm -->
   <path d="M246 372 C 320 340 360 300 420 292" stroke="#b9c0c7" stroke-width="12" fill="none" stroke-linecap="round"/>
   <rect x="404" y="272" width="60" height="34" rx="14" fill="url(#metal)" stroke="#a7b0b8" stroke-width="3"/>
   <!-- treatment bed -->
   <rect x="360" y="400" width="360" height="54" rx="24" fill="#e6edf1" stroke="#bec9cf" stroke-width="3"/>
   <rect x="360" y="386" width="360" height="24" rx="12" fill="#f2f7f9"/>
   <rect x="470" y="454" width="24" height="86" rx="8" fill="url(#metal)"/>
   <rect x="420" y="534" width="130" height="16" rx="8" fill="#b9c0c7"/>
   <!-- face glow mask -->
   <g transform="translate(640 300)">
     <ellipse cx="0" cy="40" rx="58" ry="72" fill="#f4d9c4"/>
     <ellipse cx="0" cy="-6" rx="52" ry="56" fill="#f6ddc9"/>
     <ellipse cx="-20" cy="6" rx="7" ry="4.5" fill="#7a5a48"/>
     <ellipse cx="20" cy="6" rx="7" ry="4.5" fill="#7a5a48"/>
     <path d="M-16 46 q 16 12 32 0" stroke="#c0857b" stroke-width="4" fill="none" stroke-linecap="round"/>
     <ellipse cx="-34" cy="72" rx="14" ry="7" fill="#e9a9a0" opacity="0.5"/>
     <ellipse cx="34" cy="72" rx="14" ry="7" fill="#e9a9a0" opacity="0.5"/>
   </g>
   <!-- laser beam -->
   <path d="M440 292 L 636 336" stroke="#bfe3d2" stroke-width="10" stroke-linecap="round" opacity="0.75"/>
   <path d="M440 292 L 636 336" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
   <!-- sparkles -->
   <g fill="${GOLD}" opacity="0.6">
     <path d="M712 210c1.6 8 6 12.4 14 14-8 1.6-12.4 6-14 14-1.6-8-6-12.4-14-14 8-1.6 12.4-6 14-14Z"/>
     <path d="M330 220c1.3 6.4 4.8 9.9 11.2 11.2-6.4 1.3-9.9 4.8-11.2 11.2-1.3-6.4-4.8-9.9-11.2-11.2 6.4-1.3 9.9-4.8 11.2-11.2Z"/>
   </g>
   <rect x="0" y="500" width="800" height="100" fill="#e9dfd0"/>`,
  commonDefs,
);

/* ── 4. Clinic facade ───────────────────────────────────────────────────── */
scenes["clinic-facade"] = frame(
  `<rect width="800" height="600" fill="#e8eef4"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <!-- building -->
   <rect x="90" y="90" width="620" height="400" rx="14" fill="#f7f2ea" stroke="#e0d4c2" stroke-width="4"/>
   <rect x="90" y="90" width="620" height="72" rx="14" fill="#2b241d"/>
   <text x="400" y="137" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#f6efdf">DENTAL &amp; AESTHETIC LOUNGE</text>
   <!-- windows -->
   <g fill="#cfe0ec" stroke="#dfe7ee" stroke-width="4">
     <rect x="130" y="196" width="150" height="120" rx="8"/>
     <rect x="320" y="196" width="150" height="120" rx="8"/>
     <rect x="510" y="196" width="160" height="120" rx="8"/>
   </g>
   <rect x="130" y="196" width="150" height="120" rx="8" fill="#ffffff" opacity="0.35"/>
   <rect x="510" y="196" width="160" height="120" rx="8" fill="#ffffff" opacity="0.35"/>
   <!-- door -->
   <rect x="330" y="360" width="140" height="130" rx="10" fill="#d9c9b1" stroke="#c4b295" stroke-width="4"/>
   <rect x="352" y="380" width="96" height="60" rx="6" fill="#cfe0ec"/>
   <circle cx="446" cy="450" r="6" fill="${GOLD}"/>
   <!-- awning -->
   <path d="M300 360 h200 l-22-46 h-156 Z" fill="url(#goldg)" opacity="0.9"/>
   <!-- vertical sign -->
   <rect x="646" y="196" width="52" height="280" rx="12" fill="${INK}"/>
   ${tooth(672, 260, 0.34, "url(#goldg)")}
   <text x="672" y="330" text-anchor="middle" font-family="Helvetica, Arial" font-size="20" font-weight="700" fill="#f6efdf" transform="rotate(90 672 380)">CLINIC</text>
   <!-- pavement -->
   <rect x="0" y="490" width="800" height="110" fill="#d9dee4"/>
   <g stroke="#c8ced5" stroke-width="3">
     <line x1="0" y1="530" x2="800" y2="530"/><line x1="0" y1="570" x2="800" y2="570"/>
   </g>
   <!-- tree -->
   <rect x="56" y="410" width="18" height="86" rx="6" fill="#8a6a45"/>
   <circle cx="65" cy="386" r="46" fill="#7f9c74"/>
   <circle cx="40" cy="404" r="30" fill="#8fac82"/>
   <circle cx="92" cy="404" r="30" fill="#8fac82"/>`,
  commonDefs,
);

/* ── 5. Sterilised instruments ───────────────────────────────────────────── */
scenes["instruments"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <rect x="0" y="0" width="800" height="300" fill="#f3ece1" opacity="0.6"/>
   <!-- tray -->
   <rect x="90" y="300" width="620" height="230" rx="26" fill="url(#metal)" stroke="#b9c0c7" stroke-width="4"/>
   <rect x="118" y="326" width="564" height="178" rx="18" fill="#eef3f6"/>
   <!-- instruments -->
   <g stroke="#aab4bc" stroke-width="9" stroke-linecap="round" fill="none">
     <!-- probe -->
     <path d="M170 470 L 300 380"/>
     <path d="M300 380 l 16 -22"/>
     <!-- scaler -->
     <path d="M330 470 L 430 386"/>
     <path d="M430 386 q 22 -18 44 -2"/>
     <!-- mirror -->
     <path d="M470 470 L 558 396"/>
     <circle cx="576" cy="380" r="26" fill="#dfe8ee" stroke="#aab4bc" stroke-width="5"/>
     <!-- syringe -->
     <path d="M180 350 L 300 350"/>
     <rect x="300" y="340" width="70" height="20" rx="6" fill="#cfd8dd" stroke="#aab4bc" stroke-width="4"/>
     <path d="M370 350 L 424 350"/>
   </g>
   <g stroke="#b9c0c7" stroke-width="6" stroke-linecap="round">
     <line x1="210" y1="500" x2="250" y2="500"/>
     <line x1="420" y1="500" x2="470" y2="500"/>
   </g>
   <!-- tooth badge -->
   ${tooth(660, 400, 0.4, "url(#toothw)")}
   <!-- sparkle -->
   <path d="M150 190c2.4 12 8.6 18 20 20-11.4 2-17.6 8-20 20-2.4-12-8.6-18-20-20 11.4-2 17.6-8 20-20Z" fill="${GOLD}" opacity="0.6"/>`,
  commonDefs,
);

/* ── 6. Team portrait placeholder (dentist) ─────────────────────────────── */
function portrait({ coat = "#f7f9fb", accent = GOLD, skin = "#eac6a8", hair = "#3a2f28", scrub }) {
  return frame(
    `<rect width="800" height="600" fill="#f4ede3"/>
     <rect width="800" height="600" fill="url(#softlight)"/>
     <circle cx="400" cy="250" r="230" fill="#efe4d4" opacity="0.65"/>
     <!-- shoulders / coat -->
     <path d="M180 600 C 200 470 280 420 400 420 C 520 420 600 470 620 600 Z" fill="${coat}" stroke="#d9dee3" stroke-width="4"/>
     ${scrub ? `<path d="M300 600 C 306 500 340 452 400 452 C 460 452 494 500 500 600 Z" fill="${scrub}"/>` : ""}
     <!-- collar -->
     <path d="M340 424 L 400 492 L 460 424" fill="none" stroke="#d9dee3" stroke-width="5"/>
     <!-- neck -->
     <rect x="366" y="352" width="68" height="86" rx="30" fill="${skin}"/>
     <!-- head -->
     <ellipse cx="400" cy="272" rx="94" ry="106" fill="${skin}"/>
     <!-- hair -->
     <path d="M306 262 C 306 176 344 142 400 142 C 456 142 494 176 494 262 C 486 216 456 200 400 200 C 344 200 314 216 306 262 Z" fill="${hair}"/>
     <!-- ears -->
     <ellipse cx="307" cy="282" rx="15" ry="22" fill="${skin}"/>
     <ellipse cx="493" cy="282" rx="15" ry="22" fill="${skin}"/>
     <!-- brows -->
     <path d="M344 246 q 26 -14 52 -2" stroke="${hair}" stroke-width="9" fill="none" stroke-linecap="round"/>
     <path d="M404 244 q 26 -12 52 2" stroke="${hair}" stroke-width="9" fill="none" stroke-linecap="round"/>
     <!-- eyes -->
     <ellipse cx="368" cy="278" rx="11" ry="12" fill="#2f2620"/>
     <ellipse cx="432" cy="278" rx="11" ry="12" fill="#2f2620"/>
     <circle cx="372" cy="274" r="3.6" fill="#ffffff"/>
     <circle cx="436" cy="274" r="3.6" fill="#ffffff"/>
     <!-- nose -->
     <path d="M400 292 q -10 24 4 30" stroke="#c99b7c" stroke-width="5" fill="none" stroke-linecap="round"/>
     <!-- smile -->
     <path d="M362 342 q 38 30 76 0" stroke="#b06a5f" stroke-width="7" fill="none" stroke-linecap="round"/>
     <!-- stethoscope -->
     <path d="M330 460 C 330 540 400 556 400 592" stroke="#8b959d" stroke-width="9" fill="none"/>
     <circle cx="404" cy="592" r="18" fill="${accent}" opacity="0.85"/>`,
    commonDefs,
  );
}

scenes["doctor-1"] = portrait({});
scenes["doctor-2"] = portrait({
  hair: "#241c17",
  coat: "#f7f9fb",
  scrub: "#e8f0f4",
});
scenes["doctor-3"] = portrait({
  hair: "#4a3728",
  coat: "#ffffff",
  accent: "#c0857b",
  scrub: "#f6e9e6",
});

/* ── 7. OG / social share image ─────────────────────────────────────────── */
scenes["og-image"] = frame(
  `<rect width="800" height="600" fill="${INK}"/>
   <rect width="800" height="600" fill="url(#softlight)" opacity="0.5"/>
   <circle cx="700" cy="60" r="260" fill="${GOLD}" opacity="0.16"/>
   <circle cx="80" cy="560" r="220" fill="#c0857b" opacity="0.14"/>
   <rect x="56" y="56" width="688" height="488" rx="28" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>
   ${tooth(400, 250, 1.5, "url(#goldg)")}
   <text x="400" y="416" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#fbf7f1">Dental &amp; Aesthetic Lounge</text>
   <text x="400" y="462" text-anchor="middle" font-family="Helvetica, Arial" font-size="21" letter-spacing="4" fill="${GOLD}">DENTAL &amp; SKIN CLINIC — JOHAR TOWN, LAHORE</text>
   <text x="400" y="510" text-anchor="middle" font-family="Helvetica, Arial" font-size="19" fill="#cdbfa8">+92 303 017 1000   ·   5.0 ★ (45 reviews)</text>`,
  commonDefs,
);

/* ── Write files ────────────────────────────────────────────────────────── */
await mkdir(OUT, { recursive: true });
for (const [name, svg] of Object.entries(scenes)) {
  await writeFile(path.join(OUT, `${name}.svg`), svg, "utf8");
  console.log("wrote", `public/art/${name}.svg`, `(${svg.length} bytes)`);
}
