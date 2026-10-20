/**
 * Builds the social share (OG) image from a licensed stock photo + brand text.
 * Run: node scripts/build-og.mjs
 */
import sharp from "sharp";
import path from "node:path";

const SRC = path.join(process.cwd(), "public", "stock", "dentist-work.jpg");
const OUT = path.join(process.cwd(), "public", "img", "og-image.jpg");

const W = 1200;
const H = 630;

const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#17120e" stop-opacity="0.94"/>
      <stop offset="0.55" stop-color="#17120e" stop-opacity="0.82"/>
      <stop offset="1" stop-color="#17120e" stop-opacity="0.30"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <rect x="0" y="0" width="6" height="${H}" fill="#a8813f"/>

  <text x="72" y="196" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#fbf7f1">Dental &amp; Aesthetic</text>
  <text x="72" y="262" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#e0c489">Lounge</text>

  <text x="74" y="320" font-family="Helvetica, Arial" font-size="20" letter-spacing="4" fill="#c9b795">DENTAL &amp; SKIN CLINIC</text>

  <line x1="74" y1="360" x2="620" y2="360" stroke="#a8813f" stroke-width="2" opacity="0.6"/>

  <text x="74" y="412" font-family="Helvetica, Arial" font-size="24" fill="#fbf7f1">Opposite G1 Market, Johar Town, Lahore</text>
  <text x="74" y="456" font-family="Helvetica, Arial" font-size="24" fill="#fbf7f1">+92 303 017 1000</text>

  <text x="74" y="528" font-family="Helvetica, Arial" font-size="22" fill="#e0c489">5.0 stars  ·  45 patient reviews</text>
  <text x="74" y="570" font-family="Helvetica, Arial" font-size="16" fill="#8d8171">Representative images — not actual clinic photography</text>
</svg>`;

const base = await sharp(SRC)
  .rotate()
  .resize(W, H, { fit: "cover", position: "attention" })
  .toBuffer();

await sharp(base)
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(OUT);

console.log("wrote public/img/og-image.jpg (1200x630)");
