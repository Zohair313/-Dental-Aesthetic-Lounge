"use client";

import { useState } from "react";
import { BeforeAfter } from "./BeforeAfter";
import { galleryCases, type ServiceCategory } from "@/lib/data";

type Filter = "all" | ServiceCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Cases" },
  { key: "dental", label: "Dental" },
  { key: "skin", label: "Skin & Aesthetics" },
];

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = galleryCases
    .filter((c) => filter === "all" || c.category === filter)
    .slice(0, limit ?? galleryCases.length);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              filter === f.key
                ? "bg-ink text-cream shadow-[0_10px_24px_-12px_rgba(32,26,21,0.8)]"
                : "border border-ink/15 bg-white text-ink-soft hover:border-gold hover:text-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        {visible.map((item) => (
          <BeforeAfter
            key={`${filter}-${item.id}`}
            item={item}
            className="animate-fade-up"
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Drag the slider to compare. Real patient case photography will replace
        these renders once the clinic archive is digitised.
      </p>
    </div>
  );
}
