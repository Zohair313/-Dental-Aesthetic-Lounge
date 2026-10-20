import type { ElementType, ReactNode } from "react";

type Tone = "dental" | "skin" | "neutral";

const tones: Record<Tone, { chip: string; label: string; text: string }> = {
  dental: {
    chip: "bg-gold-soft",
    label: "Dental",
    text: "text-gold",
  },
  skin: {
    chip: "bg-rose-soft",
    label: "Skin & Aesthetics",
    text: "text-rose",
  },
  neutral: {
    chip: "bg-sand",
    label: "",
    text: "text-muted",
  },
};

/** Small rounded icon tile used across cards. */
export function IconTile({
  icon: Icon,
  tone = "dental",
  className = "",
}: {
  icon: ElementType<{ className?: string; strokeWidth?: number }>;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${t.chip} ${t.text} ${className}`}
    >
      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
    </span>
  );
}

/** Pill label, e.g. a treatment category or a badge. */
export function Pill({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${t.chip} ${t.text} ${className}`}
    >
      {children}
    </span>
  );
}

/** Works out whether a service slug/category is dental or skin. */
export function toneFor(category: "dental" | "skin"): Tone {
  return category;
}
