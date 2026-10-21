// Renders every custom glyph from src/components/ui/icons.tsx into a single
// labelled PNG so the shapes can be eyeballed. Run: node scripts/preview-icons.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = readFileSync(resolve(root, "src/components/ui/icons.tsx"), "utf8");

// Pull <path d="..."/> and <rect .../> children out of each exported function.
const fns = [...src.matchAll(/export function (\w+)\(props: IconProps\) \{([\s\S]*?)\n\}/g)];
const brand = [...src.matchAll(/export function (\w+)\(\{\s*className[^}]*\}\s*:\s*SVGProps<SVGSVGElement>\) \{([\s\S]*?)\n\}/g)];

const items = [];
for (const [, name, body] of [...brand.map((m) => [m[0], m[1], m[2]]), ...fns]) {
  const children = [...body.matchAll(/<(path|rect|circle|ellipse)\b([^>]*?)\/>/g)].map((m) => {
    const tag = m[1];
    const attrs = m[2];
    const d = /d="([^"]+)"/.exec(attrs)?.[1];
    if (tag === "path") return `<path d="${d}" />`;
    const num = (k) => /(\w[\w-]*)="([^"]+)"/.exec(attrs.match(new RegExp(k + '="[^"]+"'))?.[0] ?? "")?.[2] ?? "";
    const g = (k) => (new RegExp(`${k}="([^"]+)"`).exec(attrs)?.[1] ?? "0");
    return `<${tag} x="${g("x")}" y="${g("y")}" width="${g("width")}" height="${g("height")}" rx="${g("rx")}" />`;
  });
  if (children.length) items.push({ name, children: children.join("") });
}

const cols = 5;
const cell = 130;
const rows = Math.ceil(items.length / cols);
const W = cols * cell;
const H = rows * cell;
const cells = items
  .map((it, i) => {
    const x = (i % cols) * cell;
    const y = Math.floor(i / cols) * cell;
    return `
    <g transform="translate(${x + 25}, ${y + 18})">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#1b1611"
           stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        ${it.children}
      </svg>
      <text x="40" y="100" text-anchor="middle" font-family="monospace" font-size="11" fill="#666">${it.name}</text>
    </g>`;
  })
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#fdfbf6"/>${cells}
</svg>`;

mkdirSync(resolve(root, "_iconpreview"), { recursive: true });
writeFileSync(resolve(root, "_iconpreview/icons.svg"), svg);
console.log(`rendered ${items.length} glyphs -> _iconpreview/icons.svg`);
console.log(items.map((i) => i.name).join(", "));
