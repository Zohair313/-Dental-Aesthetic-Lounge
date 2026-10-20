/** Rasterise the generated SVGs into JPG/PNG assets. */
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const ART = path.join(process.cwd(), "public", "art");
const OUT = path.join(process.cwd(), "public", "img");

await mkdir(OUT, { recursive: true });

const files = (await readdir(ART)).filter((f) => f.endsWith(".svg"));

for (const file of files) {
  const base = file.replace(/\.svg$/, "");
  const src = path.join(ART, file);

  // Web-optimised JPG (photos / room scenes)
  await sharp(src, { density: 200 })
    .resize(1600, 1200, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, `${base}.jpg`));

  // Smaller card version
  await sharp(src, { density: 200 })
    .resize(900, 675, { fit: "cover" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, `${base}-card.jpg`));

  console.log("rasterised", base);
}
