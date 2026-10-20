/**
 * Generates the clinic's illustrative SVG artwork (no external assets).
 * Run: node scripts/generate-art.mjs  â†’ writes into public/art/
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

/* â”€â”€ 1. Clinic reception / interior â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ 2. Dental treatment room â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ 3. Laser / skin treatment room â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ 4. Clinic facade â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ 5. Sterilised instruments â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ 7. OG / social share image â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["og-image"] = frame(
  `<rect width="800" height="600" fill="${INK}"/>
   <rect width="800" height="600" fill="url(#softlight)" opacity="0.5"/>
   <circle cx="700" cy="60" r="260" fill="${GOLD}" opacity="0.16"/>
   <circle cx="80" cy="560" r="220" fill="#c0857b" opacity="0.14"/>
   <rect x="56" y="56" width="688" height="488" rx="28" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>
   ${tooth(400, 250, 1.5, "url(#goldg)")}
   <text x="400" y="416" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#fbf7f1">Dental &amp; Aesthetic Lounge</text>
   <text x="400" y="462" text-anchor="middle" font-family="Helvetica, Arial" font-size="21" letter-spacing="4" fill="${GOLD}">DENTAL &amp; SKIN CLINIC â€” JOHAR TOWN, LAHORE</text>
   <text x="400" y="510" text-anchor="middle" font-family="Helvetica, Arial" font-size="19" fill="#cdbfa8">+92 303 017 1000   Â·   5.0 â˜… (45 reviews)</text>`,
  commonDefs,
);

/* â”€â”€ 8. Dental check-up close-up â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["checkup-closeup"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <rect x="0" y="0" width="800" height="280" fill="#f6efe4" opacity="0.7"/>
   <!-- gloved hands + mirror -->
   <g>
     <rect x="150" y="300" width="230" height="120" rx="52" fill="#dfe8ee" stroke="#c2cfd7" stroke-width="4" transform="rotate(-8 265 360)"/>
     <rect x="392" y="286" width="180" height="96" rx="44" fill="#e8f0f4" stroke="#c2cfd7" stroke-width="4" transform="rotate(-14 482 334)"/>
     <g transform="rotate(28 470 300)">
       <rect x="470" y="150" width="16" height="170" rx="8" fill="url(#metal)" stroke="#b9c0c7" stroke-width="3"/>
       <circle cx="478" cy="140" r="26" fill="#dfe8ee" stroke="#aab4bc" stroke-width="5"/>
       <circle cx="472" cy="134" r="10" fill="#ffffff" opacity="0.8"/>
     </g>
   </g>
   <!-- smile strip -->
   <g transform="translate(560 430)">
     <path d="M-120 0 C -90 -46 -46 -58 0 -54 C 46 -58 90 -46 120 0 C 90 40 46 48 0 44 C -46 48 -90 40 -120 0 Z" fill="#5a2f2a"/>
     <path d="M-102 -4 C -76 -36 -40 -42 0 -40 C 40 -42 76 -36 102 -4 C 76 6 40 10 0 8 C -40 10 -76 6 -102 -4 Z" fill="#d9938b"/>
     <g fill="url(#toothw)">
       <rect x="-74" y="-34" width="26" height="30" rx="8"/>
       <rect x="-44" y="-38" width="30" height="34" rx="9"/>
       <rect x="-10" y="-39" width="32" height="35" rx="9"/>
       <rect x="26" y="-38" width="30" height="34" rx="9"/>
       <rect x="60" y="-34" width="26" height="30" rx="8"/>
     </g>
   </g>
   ${tooth(150, 170, 0.6, "url(#goldg)")}
   <rect x="0" y="520" width="800" height="80" fill="#e9dfd0"/>`,
  commonDefs,
);

/* â”€â”€ 9. Bright smile after treatment â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["smile-after"] = frame(
  `<rect width="800" height="600" fill="#f7ece4"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <circle cx="400" cy="330" r="250" fill="#ffffff" opacity="0.45"/>
   <!-- lips + bright teeth -->
   <g transform="translate(400 300)">
     <path d="M-260 0 C -190 -110 -90 -140 0 -132 C 90 -140 190 -110 260 0 C 190 108 90 138 0 130 C -90 138 -190 108 -260 0 Z" fill="#8e4a45"/>
     <path d="M-232 -6 C -170 -88 -80 -104 0 -98 C 80 -104 170 -88 232 -6 C 170 66 80 84 0 78 C -80 84 -170 66 -232 -6 Z" fill="#c9756d"/>
     <g fill="url(#toothw)" stroke="#e2e6e2" stroke-width="2">
       <rect x="-176" y="-82" width="58" height="72" rx="18"/>
       <rect x="-112" y="-92" width="64" height="82" rx="20"/>
       <rect x="-42" y="-96" width="68" height="86" rx="21"/>
       <rect x="32" y="-92" width="64" height="82" rx="20"/>
       <rect x="100" y="-82" width="58" height="72" rx="18"/>
     </g>
     <path d="M-196 -60 q 10 -22 26 -30" stroke="#ffffff" stroke-width="10" stroke-linecap="round" fill="none" opacity="0.85"/>
   </g>
   <!-- sparkles -->
   <g fill="${GOLD}" opacity="0.75">
     <path d="M660 130c4 20 14 30 34 34-20 4-30 14-34 34-4-20-14-30-34-34 20-4 30-14 34-34Z"/>
     <path d="M132 150c3 15 10.5 22.5 25.5 25.5-15 3-22.5 10.5-25.5 25.5-3-15-10.5-22.5-25.5-25.5 15-3 22.5-10.5 25.5-25.5Z"/>
     <path d="M690 470c2.4 12 8.4 18 20.4 20.4-12 2.4-18 8.4-20.4 20.4-2.4-12-8.4-18-20.4-20.4 12-2.4 18-8.4 20.4-20.4Z"/>
   </g>`,
  commonDefs,
);

/* â”€â”€ 10. Skincare consultation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["consultation"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <rect x="0" y="0" width="800" height="220" fill="#f3e6dc" opacity="0.55"/>
   <!-- desk -->
   <rect x="60" y="400" width="680" height="150" rx="20" fill="#efe4d4"/>
   <rect x="60" y="400" width="680" height="22" rx="10" fill="url(#goldg)" opacity="0.8"/>
   <!-- chart / tablet on desk -->
   <rect x="110" y="336" width="200" height="80" rx="10" fill="#ffffff" opacity="0.9" transform="rotate(-4 210 376)"/>
   <rect x="128" y="356" width="120" height="8" rx="4" fill="#cfd8dd" transform="rotate(-4 210 376)"/>
   <rect x="128" y="374" width="160" height="8" rx="4" fill="#cfd8dd" transform="rotate(-4 210 376)"/>
   <rect x="128" y="392" width="90" height="8" rx="4" fill="${GOLD}" transform="rotate(-4 210 376)"/>
   <!-- doctor (left) -->
   <g transform="translate(200 300)">
     <path d="M-96 160 C -88 92 -50 62 0 62 C 50 62 88 92 96 160 Z" fill="#f7f9fb" stroke="#d9dee3" stroke-width="4"/>
     <path d="M-34 64 L 0 104 L 34 64" fill="none" stroke="#d9dee3" stroke-width="5"/>
     <rect x="-24" y="18" width="48" height="58" rx="22" fill="#eac6a8"/>
     <ellipse cx="0" cy="-28" rx="62" ry="70" fill="#eac6a8"/>
     <path d="M-62 -34 C -62 -92 -34 -114 0 -114 C 34 -114 62 -92 62 -34 C 56 -66 34 -78 0 -78 C -34 -78 -56 -66 -62 -34 Z" fill="#3a2f28"/>
     <ellipse cx="-24" cy="-24" rx="7" ry="8" fill="#2f2620"/><ellipse cx="24" cy="-24" rx="7" ry="8" fill="#2f2620"/>
     <path d="M-26 4 q 26 20 52 0" stroke="#b06a5f" stroke-width="6" fill="none" stroke-linecap="round"/>
     <path d="M-58 96 C -58 148 0 158 0 186" stroke="#8b959d" stroke-width="8" fill="none"/>
   </g>
   <!-- patient (right) -->
   <g transform="translate(600 306)">
     <path d="M-92 154 C -84 88 -48 60 0 60 C 48 60 84 88 92 154 Z" fill="#e8f0f4" stroke="#d9e2e8" stroke-width="4"/>
     <rect x="-22" y="16" width="44" height="54" rx="20" fill="#f0d2b6"/>
     <ellipse cx="0" cy="-28" rx="58" ry="66" fill="#f0d2b6"/>
     <path d="M-58 -30 C -58 -96 -30 -116 0 -116 C 30 -116 58 -96 58 -30 C 50 -74 30 -84 0 -84 C -30 -84 -50 -74 -58 -30 Z" fill="#4a3728"/>
     <ellipse cx="-22" cy="-24" rx="6.5" ry="7.5" fill="#2f2620"/><ellipse cx="22" cy="-24" rx="6.5" ry="7.5" fill="#2f2620"/>
     <path d="M-22 6 q 22 17 44 0" stroke="#b06a5f" stroke-width="6" fill="none" stroke-linecap="round"/>
     <ellipse cx="-42" cy="10" rx="13" ry="7" fill="#e9a9a0" opacity="0.45"/>
     <ellipse cx="42" cy="10" rx="13" ry="7" fill="#e9a9a0" opacity="0.45"/>
   </g>
   <rect x="0" y="520" width="800" height="80" fill="#e9dfd0"/>`,
  commonDefs,
);

/* â”€â”€ 11. Kids' dentistry â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["kids-dentistry"] = frame(
  `<rect width="800" height="600" fill="#f2f7fa"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <circle cx="400" cy="300" r="230" fill="#ffffff" opacity="0.5"/>
   ${tooth(400, 250, 2.1, "url(#toothw)")}
   <!-- smiling face on the tooth -->
   <g fill="#3a2f28">
     <ellipse cx="366" cy="238" rx="9" ry="10"/><ellipse cx="434" cy="238" rx="9" ry="10"/>
   </g>
   <path d="M362 292 q 38 34 76 0" stroke="#b06a5f" stroke-width="8" fill="none" stroke-linecap="round"/>
   <circle cx="330" cy="272" r="12" fill="#f3b7b0" opacity="0.6"/>
   <circle cx="470" cy="272" r="12" fill="#f3b7b0" opacity="0.6"/>
   <!-- little stars -->
   <g fill="${GOLD}" opacity="0.7">
     <path d="M636 150c3.2 16 11.2 24 27.2 27.2-16 3.2-24 11.2-27.2 27.2-3.2-16-11.2-24-27.2-27.2 16-3.2 24-11.2 27.2-27.2Z"/>
     <path d="M164 168c2.6 13 9.1 19.5 22.1 22.1-13 2.6-19.5 9.1-22.1 22.1-2.6-13-9.1-19.5-22.1-22.1 13-2.6 19.5-9.1 22.1-22.1Z"/>
   </g>
   <rect x="0" y="520" width="800" height="80" fill="#dfeaf1"/>`,
  commonDefs,
);

/* â”€â”€ 12. Digital X-ray lightbox â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["xray"] = frame(
  `<rect width="800" height="600" fill="#1b2026"/>
   <rect width="800" height="600" fill="url(#softlight)" opacity="0.25"/>
   <!-- lightbox panel -->
   <rect x="80" y="60" width="640" height="440" rx="20" fill="#0f1418" stroke="#2f3b46" stroke-width="6"/>
   <rect x="104" y="84" width="592" height="392" rx="12" fill="#243038"/>
   <!-- panoramic dental arch -->
   <g fill="#cfe3ef" opacity="0.92">
     <path d="M150 300 C 170 180 300 140 400 140 C 500 140 630 180 650 300 C 630 236 500 200 400 200 C 300 200 170 236 150 300 Z" opacity="0.5"/>
     <g>
       <rect x="176" y="252" width="34" height="52" rx="10"/>
       <rect x="216" y="240" width="36" height="58" rx="11"/>
       <rect x="258" y="232" width="38" height="62" rx="12"/>
       <rect x="302" y="228" width="38" height="64" rx="12"/>
       <rect x="346" y="226" width="38" height="64" rx="12"/>
       <rect x="390" y="226" width="38" height="64" rx="12"/>
       <rect x="434" y="228" width="38" height="64" rx="12"/>
       <rect x="478" y="232" width="38" height="62" rx="12"/>
       <rect x="522" y="240" width="36" height="58" rx="11"/>
       <rect x="562" y="252" width="34" height="52" rx="10"/>
     </g>
     <rect x="200" y="330" width="34" height="48" rx="10" opacity="0.85"/>
     <rect x="244" y="324" width="34" height="50" rx="10" opacity="0.85"/>
     <rect x="288" y="320" width="34" height="52" rx="10" opacity="0.85"/>
     <rect x="332" y="318" width="34" height="52" rx="10" opacity="0.85"/>
     <rect x="376" y="318" width="34" height="52" rx="10" opacity="0.85"/>
     <rect x="420" y="320" width="34" height="52" rx="10" opacity="0.85"/>
     <rect x="464" y="324" width="34" height="50" rx="10" opacity="0.85"/>
     <rect x="508" y="330" width="34" height="48" rx="10" opacity="0.85"/>
   </g>
   <!-- marker crosshair -->
   <g stroke="${GOLD}" stroke-width="4" opacity="0.9">
     <line x1="404" y1="176" x2="404" y2="152"/><line x1="404" y1="404" x2="404" y2="428"/>
     <line x1="352" y1="290" x2="328" y2="290"/><line x1="456" y1="290" x2="480" y2="290"/>
   </g>
   <text x="404" y="470" text-anchor="middle" font-family="Helvetica, Arial" font-size="18" letter-spacing="3" fill="#6f8593">DIGITAL OPG</text>
   <!-- viewer stand -->
   <rect x="360" y="500" width="80" height="40" fill="#2f3b46"/>
   <rect x="300" y="536" width="200" height="18" rx="9" fill="#2f3b46"/>`,
  commonDefs,
);

/* â”€â”€ 13. Clinic hallway â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["hallway"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <!-- perspective corridor -->
   <path d="M0 0 L 300 190 L 300 410 L 0 600 Z" fill="#efe4d4"/>
   <path d="M800 0 L 500 190 L 500 410 L 800 600 Z" fill="#f6efe4"/>
   <rect x="300" y="190" width="200" height="220" fill="#fdfbf8"/>
   <!-- far door -->
   <rect x="352" y="248" width="96" height="162" rx="8" fill="#d9c9b1" stroke="#c4b295" stroke-width="3"/>
   <circle cx="434" cy="330" r="5" fill="${GOLD}"/>
   <!-- left doors -->
   <g fill="#e8dcc9" stroke="#d4c5ad" stroke-width="3">
     <rect x="52" y="196" width="96" height="152" rx="8"/>
     <rect x="176" y="230" width="72" height="120" rx="8"/>
   </g>
   <!-- right doors -->
   <g fill="#efe4d4" stroke="#d4c5ad" stroke-width="3">
     <rect x="652" y="196" width="96" height="152" rx="8"/>
     <rect x="552" y="230" width="72" height="120" rx="8"/>
   </g>
   <!-- pendant lights in perspective -->
   <g stroke="${GOLD}" stroke-width="3" opacity="0.75">
     <line x1="330" y1="0" x2="352" y2="86"/><line x1="470" y1="0" x2="448" y2="86"/>
     <line x1="200" y1="0" x2="300" y2="140"/><line x1="600" y1="0" x2="500" y2="140"/>
   </g>
   <circle cx="352" cy="92" r="10" fill="url(#goldg)"/>
   <circle cx="448" cy="92" r="10" fill="url(#goldg)"/>
   <circle cx="300" cy="146" r="7" fill="url(#goldg)"/>
   <circle cx="500" cy="146" r="7" fill="url(#goldg)"/>
   <!-- floor -->
   <path d="M0 600 L 300 410 L 500 410 L 800 600 Z" fill="#e9dfd0"/>
   <path d="M340 600 L 396 410 L 404 410 L 460 600 Z" fill="${GOLD_SOFT}" opacity="0.7"/>
   <!-- wall sign -->
   <rect x="368" y="206" width="64" height="26" rx="6" fill="${INK}"/>
   ${tooth(400, 219, 0.14, "url(#goldg)")}`,
  commonDefs,
);

/* â”€â”€ 14. Sterilisation autoclave â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["sterilisation"] = frame(
  `<rect width="800" height="600" fill="url(#wall)"/>
   <rect width="800" height="600" fill="url(#softlight)"/>
   <rect x="0" y="0" width="800" height="250" fill="#eef4f7" opacity="0.6"/>
   <!-- autoclave unit -->
   <rect x="90" y="180" width="280" height="300" rx="22" fill="url(#metal)" stroke="#b9c0c7" stroke-width="4"/>
   <rect x="120" y="212" width="220" height="140" rx="14" fill="#2f3b46"/>
   <circle cx="230" cy="282" r="46" fill="#1f2a33" stroke="#4a5a66" stroke-width="4"/>
   <circle cx="230" cy="282" r="26" fill="#31414c"/>
   <rect x="230" y="240" width="6" height="46" rx="3" fill="#8fd0a3"/>
   <rect x="126" y="372" width="94" height="18" rx="9" fill="#cfd8dd"/>
   <rect x="126" y="402" width="60" height="14" rx="7" fill="#8fd0a3"/>
   <rect x="200" y="402" width="60" height="14" rx="7" fill="#e0c489"/>
   <rect x="274" y="402" width="60" height="14" rx="7" fill="#c6ccd2"/>
   <!-- instrument pouches -->
   <g>
     <rect x="440" y="200" width="130" height="90" rx="12" fill="#ffffff" stroke="#d6dee3" stroke-width="3"/>
     <rect x="440" y="306" width="130" height="90" rx="12" fill="#ffffff" stroke="#d6dee3" stroke-width="3"/>
     <rect x="596" y="200" width="130" height="90" rx="12" fill="#ffffff" stroke="#d6dee3" stroke-width="3"/>
     <rect x="596" y="306" width="130" height="90" rx="12" fill="#ffffff" stroke="#d6dee3" stroke-width="3"/>
   </g>
   <g stroke="#aab4bc" stroke-width="7" stroke-linecap="round">
     <line x1="462" y1="272" x2="540" y2="222"/>
     <line x1="616" y1="272" x2="700" y2="228"/>
   </g>
   <g fill="${GOLD}" opacity="0.85">
     <circle cx="560" cy="222" r="14"/><circle cx="712" cy="228" r="14"/><circle cx="560" cy="330" r="14"/><circle cx="712" cy="330" r="14"/>
   </g>
   <g fill="#ffffff" opacity="0.9">
     <path d="M556 216 l 4 8 8 -8 -2 10 9 3 -9 3 2 10 -8 -8 -4 8 -4 -8 -8 8 2 -10 -9 -3 9 -3 -2 -10 8 8 Z" transform="translate(0 -6) scale(0.62) translate(348 130)"/>
   </g>
   <!-- pedal bin -->
   <rect x="596" y="440" width="120" height="130" rx="14" fill="#e6edf1" stroke="#c2cfd7" stroke-width="3"/>
   <rect x="586" y="424" width="140" height="24" rx="12" fill="#cfd8dd"/>
   <rect x="0" y="540" width="800" height="60" fill="#e9dfd0"/>`,
  commonDefs,
);

/* â”€â”€ 15. Brand lockup card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
scenes["brand-lockup"] = frame(
  `<rect width="800" height="600" fill="${INK}"/>
   <rect width="800" height="600" fill="url(#softlight)" opacity="0.4"/>
   <circle cx="680" cy="90" r="230" fill="${GOLD}" opacity="0.15"/>
   <circle cx="120" cy="520" r="200" fill="#c0857b" opacity="0.13"/>
   <rect x="70" y="70" width="660" height="460" rx="30" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.45"/>
   ${tooth(400, 232, 1.35, "url(#goldg)")}
   <text x="400" y="384" text-anchor="middle" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#fbf7f1">Dental &amp; Aesthetic Lounge</text>
   <text x="400" y="424" text-anchor="middle" font-family="Helvetica, Arial" font-size="17" letter-spacing="5" fill="${GOLD}">DENTAL &amp; SKIN CLINIC</text>
   <g stroke="${GOLD}" stroke-width="2" opacity="0.5">
     <line x1="250" y1="452" x2="550" y2="452"/>
   </g>
   <text x="400" y="486" text-anchor="middle" font-family="Helvetica, Arial" font-size="16" fill="#cdbfa8">Opposite G1 Market Â· Johar Town, Lahore</text>`,
  commonDefs,
);

/* â”€â”€ Write files â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
await mkdir(OUT, { recursive: true });
for (const [name, svg] of Object.entries(scenes)) {
  await writeFile(path.join(OUT, `${name}.svg`), svg, "utf8");
  console.log("wrote", `public/art/${name}.svg`, `(${svg.length} bytes)`);
}
