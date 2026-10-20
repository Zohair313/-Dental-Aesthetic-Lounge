/** Generates favicon / app icons from the logo mark. */
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bg" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2b241d"/><stop offset="1" stop-color="#17120e"/>
    </linearGradient>
    <linearGradient id="bd" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d9b878"/><stop offset="1" stop-color="#8a6a30"/>
    </linearGradient>
    <linearGradient id="tt" x1="16" y1="11" x2="31" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fdfbf6"/><stop offset="1" stop-color="#dfc288"/>
    </linearGradient>
  </defs>
  <rect x="1.5" y="1.5" width="45" height="45" rx="14" fill="url(#bg)" stroke="url(#bd)" stroke-width="1.5"/>
  <path d="M24 11.5c-2.6-1.7-5.6-1.9-8-.5-2.7 1.6-3.6 4.6-3.1 8 .4 2.8 1.3 5.3 2.2 7.9.6 1.8 1 4 1.7 5.2.7 1.2 2 1.3 2.6.2.8-1.5.9-3.8 1.2-5.7.3-1.7.6-3 3.4-3s3.1 1.3 3.4 3c.3 1.9.4 4.2 1.2 5.7.6 1.1 1.9 1 2.6-.2.7-1.2 1.1-3.4 1.7-5.2.9-2.6 1.8-5.1 2.2-7.9.5-3.4-.4-6.4-3.1-8-2.4-1.4-5.4-1.2-8 .5Z" fill="url(#tt)"/>
  <path d="M35.5 10c.4 2 1.5 3.1 3.5 3.5-2 .4-3.1 1.5-3.5 3.5-.4-2-1.5-3.1-3.5-3.5 2-.4 3.1-1.5 3.5-3.5Z" fill="#e9cd8f"/>
</svg>`;

const appDir = path.join(process.cwd(), "src", "app");

// Modern icon convention: src/app/icon.png & apple-icon.png
await sharp(Buffer.from(mark(512))).resize(512, 512).png().toFile(path.join(appDir, "icon.png"));
await sharp(Buffer.from(mark(180))).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));

// Keep a vector copy in public for reuse
await writeFile(path.join(process.cwd(), "public", "logo-mark.svg"), mark(48), "utf8");

console.log("wrote src/app/icon.png, src/app/apple-icon.png, public/logo-mark.svg");
