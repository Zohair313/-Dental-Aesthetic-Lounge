import type { GalleryCase } from "@/lib/data";

type Art = GalleryCase["art"];
type State = "before" | "after";

/**
 * Illustrative renders used in the before/after gallery until real patient
 * photography is supplied. Deterministic (no randomness) so server and
 * client renders always match.
 */

/* ── Smile artwork ───────────────────────────────────────────────────────── */

interface ToothSpec {
  cx: number;
  arcY: number;
  rot: number;
  w: number;
  h: number;
  chip?: boolean;
}

const BASE_Y = 116;
const SPAN = [92, 122, 152, 182, 212, 242, 272, 302];

function toothArc(i: number) {
  const dist = Math.abs(SPAN[i] - 197);
  return BASE_Y + dist * dist * 0.0013;
}

const alignedTeeth: ToothSpec[] = SPAN.map((cx, i) => ({
  cx,
  arcY: toothArc(i),
  rot: 0,
  w: i === 3 || i === 4 ? 29 : 26,
  h: i === 3 || i === 4 ? 44 : 40,
}));

const crookedTeeth: ToothSpec[] = [
  { cx: 90, arcY: toothArc(0) + 7, rot: -7, w: 25, h: 38 },
  { cx: 121, arcY: toothArc(1) - 2, rot: 5, w: 24, h: 40 },
  { cx: 150, arcY: toothArc(2) + 5, rot: -4, w: 26, h: 37 },
  { cx: 181, arcY: toothArc(3) - 4, rot: 6, w: 27, h: 42 },
  { cx: 213, arcY: toothArc(4) + 8, rot: -6, w: 26, h: 36 },
  { cx: 243, arcY: toothArc(5) - 3, rot: 4, w: 25, h: 41 },
  { cx: 271, arcY: toothArc(6) + 6, rot: -5, w: 26, h: 38 },
  { cx: 302, arcY: toothArc(7) + 1, rot: 7, w: 24, h: 39 },
];

function teethFor(art: Extract<Art, { kind: "smile" }>): ToothSpec[] {
  switch (art.teeth) {
    case "crooked":
      return crookedTeeth;
    case "stained":
    case "yellow":
      return alignedTeeth;
    case "chipped":
      return alignedTeeth.map((t, i) => (i === 3 ? { ...t, chip: true } : t));
    case "perfect":
      return alignedTeeth;
  }
}

function teethColor(art: Extract<Art, { kind: "smile" }>, state: State) {
  if (state === "after" || art.teeth === "perfect") return "url(#tooth-after)";
  if (art.teeth === "yellow") return "#d6ba72";
  if (art.teeth === "stained") return "#cbb278";
  return "#d9c79b";
}

function SmileArt({ art, state }: { art: Extract<Art, { kind: "smile" }>; state: State }) {
  const teeth = teethFor(art);
  const after = state === "after";
  const toothFill = teethColor(art, state);
  const showBraces = art.braces && !after;

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="skin-bg" cx="0.5" cy="0.42" r="0.85">
          <stop offset="0" stopColor={after ? "#f4dcc7" : "#e9c7ac"} />
          <stop offset="1" stopColor={after ? "#e7c0a5" : "#d6ac8f"} />
        </radialGradient>
        <linearGradient id="tooth-after" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eceee9" />
        </linearGradient>
        <linearGradient id="lip-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={after ? "#cd8d84" : "#b87a73"} />
          <stop offset="1" stopColor={after ? "#b97168" : "#a3635d"} />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#skin-bg)" />
      {/* soft cheek light */}
      <ellipse cx="200" cy="120" rx="170" ry="110" fill="#ffffff" opacity={after ? 0.16 : 0.06} />

      {/* mouth cavity */}
      <path
        d="M64 152 C 96 110 142 100 200 105 C 258 100 304 110 336 152 C 304 208 256 218 200 212 C 144 218 96 208 64 152 Z"
        fill="#4d2723"
      />
      {/* gum band */}
      <path
        d="M84 148 C 110 118 150 112 200 116 C 250 112 290 118 316 148 C 290 158 250 162 200 160 C 150 162 110 158 84 148 Z"
        fill={after ? "#d9938b" : "#bd7d79"}
      />

      {/* teeth */}
      <g>
        {teeth.map((t, i) => (
          <g key={i} transform={`rotate(${t.rot} ${t.cx} ${t.arcY + t.h / 2})`}>
            {t.chip ? (
              <path
                d={`M${t.cx - t.w / 2} ${t.arcY}
                    h ${t.w}
                    v ${t.h - 9}
                    l -6 6 l -5 -7 l -5 8 l -5 -6
                    Z`}
                fill={toothFill}
                stroke="#00000014"
                strokeWidth="0.8"
              />
            ) : (
              <rect
                x={t.cx - t.w / 2}
                y={t.arcY}
                width={t.w}
                height={t.h}
                rx="9"
                fill={toothFill}
                stroke="#00000012"
                strokeWidth="0.8"
              />
            )}
          </g>
        ))}
      </g>

      {/* braces (before, orthodontic case) */}
      {showBraces && (
        <g>
          <path
            d={`M${SPAN[0]} ${BASE_Y + 22} Q 197 ${BASE_Y + 12} ${SPAN[SPAN.length - 1]} ${BASE_Y + 22}`}
            stroke="#9aa2ab"
            strokeWidth="2.4"
            fill="none"
          />
          {teeth.map((t, i) => (
            <g key={i}>
              <rect
                x={t.cx - 5.5}
                y={t.arcY + t.h * 0.38}
                width="11"
                height="9"
                rx="2.5"
                fill="#c3c9d0"
                stroke="#8f969e"
                strokeWidth="0.8"
              />
              <rect
                x={t.cx - 2}
                y={t.arcY + t.h * 0.38 + 3}
                width="4"
                height="3"
                rx="1"
                fill="#7f878f"
              />
            </g>
          ))}
        </g>
      )}

      {/* lower lip */}
      <path
        d="M64 152 C 100 200 150 214 200 210 C 250 214 300 200 336 152 C 300 186 250 196 200 192 C 150 196 100 186 64 152 Z"
        fill="url(#lip-fill)"
      />
      {/* upper lip */}
      <path
        d="M64 152 C 90 116 130 102 200 107 C 270 102 310 116 336 152 C 304 134 260 128 200 132 C 140 128 96 134 64 152 Z"
        fill="url(#lip-fill)"
      />
      {/* after: subtle smile sheen */}
      {after && (
        <ellipse cx="200" cy="203" rx="70" ry="7" fill="#ffffff" opacity="0.22" />
      )}
    </svg>
  );
}

/* ── Skin artwork ────────────────────────────────────────────────────────── */

interface Spot {
  cx: number;
  cy: number;
  r: number;
  o: number;
}

const pigmentationSpots: Spot[] = [
  { cx: 130, cy: 120, r: 11, o: 0.4 },
  { cx: 156, cy: 104, r: 7, o: 0.35 },
  { cx: 118, cy: 148, r: 8, o: 0.3 },
  { cx: 170, cy: 132, r: 5, o: 0.3 },
  { cx: 252, cy: 112, r: 10, o: 0.38 },
  { cx: 276, cy: 138, r: 6, o: 0.32 },
  { cx: 240, cy: 146, r: 7, o: 0.28 },
  { cx: 294, cy: 104, r: 5, o: 0.3 },
  { cx: 200, cy: 168, r: 6, o: 0.24 },
  { cx: 90, cy: 118, r: 5, o: 0.26 },
  { cx: 320, cy: 140, r: 8, o: 0.3 },
  { cx: 186, cy: 96, r: 4, o: 0.28 },
];

const acneSpots: Spot[] = [
  { cx: 128, cy: 112, r: 9, o: 0.5 },
  { cx: 160, cy: 138, r: 7, o: 0.45 },
  { cx: 143, cy: 158, r: 6, o: 0.4 },
  { cx: 255, cy: 122, r: 8, o: 0.45 },
  { cx: 280, cy: 150, r: 6, o: 0.4 },
  { cx: 236, cy: 158, r: 5, o: 0.35 },
  { cx: 110, cy: 140, r: 5, o: 0.35 },
  { cx: 268, cy: 96, r: 5, o: 0.35 },
  { cx: 200, cy: 128, r: 7, o: 0.4 },
];

function SkinArt({ art, state }: { art: Extract<Art, { kind: "skin" }>; state: State }) {
  const after = state === "after";
  const spots = after ? [] : art.concerns === "acne" ? acneSpots : pigmentationSpots;

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="skin-base" cx="0.5" cy="0.4" r="0.9">
          <stop offset="0" stopColor={after ? "#f6d6bd" : "#e9c3a6"} />
          <stop offset="1" stopColor={after ? "#eabf9e" : "#d5a888"} />
        </radialGradient>
        <radialGradient id="skin-glow" cx="0.5" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#ffffff" stopOpacity={after ? 0.5 : 0.1} />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skin-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00000000" />
          <stop offset="1" stopColor="#00000026" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#skin-base)" />

      {/* texture / fine lines (before only) */}
      {!after && art.concerns !== "acne" && (
        <g stroke="#b37c5e" strokeWidth="1.4" fill="none" opacity="0.3">
          <path d="M110 170 q 30 10 62 2" />
          <path d="M230 178 q 32 8 60 -4" />
          <path d="M160 84 q 40 -12 82 0" />
        </g>
      )}

      {/* flat dullness overlay (before, dull case) */}
      {!after && art.concerns === "dull" && (
        <>
          <rect width="400" height="300" fill="#8f7a68" opacity="0.22" />
          <ellipse cx="200" cy="240" rx="180" ry="70" fill="#6f5c4c" opacity="0.18" />
        </>
      )}

      {/* pigmentation / acne spots */}
      {spots.map((s, i) => (
        <g key={i}>
          <circle cx={s.cx} cy={s.cy} r={s.r} fill={art.concerns === "acne" ? "#c26455" : "#96653f"} opacity={s.o} />
          <circle cx={s.cx - s.r * 0.3} cy={s.cy - s.r * 0.3} r={s.r * 0.45} fill={art.concerns === "acne" ? "#d98375" : "#b08054"} opacity={s.o * 0.8} />
        </g>
      ))}

      {/* after: healthy glow + smooth highlight */}
      {after && (
        <>
          <rect width="400" height="300" fill="url(#skin-glow)" />
          <ellipse cx="150" cy="110" rx="80" ry="46" fill="#ffffff" opacity="0.18" />
          {/* faint residual marks for realism */}
          <circle cx="252" cy="118" r="6" fill="#96653f" opacity="0.08" />
          <circle cx="140" cy="140" r="5" fill="#96653f" opacity="0.07" />
        </>
      )}

      <rect width="400" height="300" fill="url(#skin-vignette)" />
    </svg>
  );
}

/* ── Exported wrapper ────────────────────────────────────────────────────── */

export function CaseArt({ art, state }: { art: Art; state: State }) {
  return art.kind === "smile" ? (
    <SmileArt art={art} state={state} />
  ) : (
    <SkinArt art={art} state={state} />
  );
}
