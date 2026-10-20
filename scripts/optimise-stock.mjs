/**
 * Optimises the licensed stock photography in public/stock/ into the
 * web-ready sizes used by the site (public/img/).
 *
 * Source: Pexels (https://www.pexels.com/license/) — free for commercial use,
 * no attribution required. These are REPRESENTATIVE images, not photographs of
 * the clinic; they are labelled as such in the UI.
 *
 * Run: node scripts/optimise-stock.mjs
 */
import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.join(process.cwd(), "public", "stock");
const OUT = path.join(process.cwd(), "public", "img");

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

for (const file of files) {
  const base = file.replace(/\.[^.]+$/, "");
  const src = path.join(SRC, file);

  const meta = await sharp(src).metadata();

  // Full size — 1600x1200 cover
  await sharp(src)
    .rotate() // honour EXIF orientation
    .resize(1600, 1200, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, `${base}.jpg`));

  // Card size
  await sharp(src)
    .rotate()
    .resize(900, 675, { fit: "cover", position: "attention" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, `${base}-card.jpg`));

  console.log(`optimised ${base} (source ${meta.width}x${meta.height})`);
}

await writeFile(
  path.join(process.cwd(), "STOCK-CREDITS.md"),
  `# Stock image credits

All photographs in this folder are **representative images** sourced from
[Pexels](https://www.pexels.com/) and used under the
[Pexels Licence](https://www.pexels.com/license/) — free for commercial use,
no attribution required.

They are **not** photographs of Dental & Aesthetic Lounge. Every stock image is
labelled "Representative image" in the UI wherever it appears.

Replace each file in \`public/stock/\` with a real clinic photograph of the same
name and re-run \`node scripts/optimise-stock.mjs\` to swap it in.

| File | Source |
| --- | --- |
${files.map((f) => `| \`${f}\` | Pexels |`).join("\n")}
`,
  "utf8",
);
