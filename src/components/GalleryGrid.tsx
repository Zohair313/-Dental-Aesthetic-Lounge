"use client";

import { useId, useState } from "react";
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
  const groupId = useId();

  const visible = galleryCases
    .filter((c) => filter === "all" || c.category === filter)
    .slice(0, limit ?? galleryCases.length);

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter cases by speciality"
        className="mb-8 flex flex-wrap items-center justify-center gap-2"
      >
        {filters.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-ink text-cream shadow-[0_10px_24px_-12px_color-mix(in_srgb,var(--color-ink)_80%,transparent)]"
                  : "border border-ink/15 bg-white text-ink-soft hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        {visible.map((item) => (
          <BeforeAfter key={`${groupId}-${item.id}`} item={item} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Drag the slider to compare. Real patient case photography will replace
        these renders once the clinic archive is digitised.
      </p>
    </div>
  );
}
