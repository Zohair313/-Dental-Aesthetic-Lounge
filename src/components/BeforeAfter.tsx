"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseArt } from "./CaseArt";
import type { GalleryCase } from "@/lib/data";

/**
 * Interactive before/after comparison. Drag the handle (or use arrow keys)
 * to wipe between the "before" and "after" states of a case.
 * Uses real images when `beforeSrc`/`afterSrc` are provided, otherwise the
 * illustrative renders from CaseArt.
 */
export function BeforeAfter({
  item,
  className = "",
}: {
  item: GalleryCase;
  className?: string;
}) {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(98, Math.max(2, next)));
  };

  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const moveDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((p) => Math.max(2, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((p) => Math.min(98, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(2);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(98);
    }
  };

  const alt = `${item.title} — ${item.treatment}`;
  const hasPhotos = Boolean(item.beforeSrc && item.afterSrc);

  return (
    <figure
      className={`card surface-shadow overflow-hidden ${className}`}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-sand"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* AFTER (base layer) */}
        <div className="absolute inset-0">
          {hasPhotos ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.afterSrc} alt={`${alt} — after`} className="h-full w-full object-cover" draggable={false} />
          ) : (
            <CaseArt art={item.art} state="after" />
          )}
        </div>

        {/* BEFORE (clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          {hasPhotos ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.beforeSrc} alt={`${alt} — before`} className="h-full w-full object-cover" draggable={false} />
          ) : (
            <CaseArt art={item.art} state="before" />
          )}
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold tracking-widest text-cream uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_14px_rgba(0,0,0,0.35)]"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        />
        <button
          type="button"
          role="slider"
          aria-label={`Reveal before and after for ${item.title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-valuetext={`${Math.round(pct)}% before, ${100 - Math.round(pct)}% after`}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-gold bg-white/95 shadow-[0_8px_24px_-6px_color-mix(in_srgb,var(--color-ink)_50%,transparent)] backdrop-blur-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30"
          style={{ left: `${pct}%` }}
        >
          <ChevronLeft className="mr-0.5 h-4 w-4 text-gold" aria-hidden />
          <ChevronRight className="ml-0.5 h-4 w-4 text-gold" aria-hidden />
        </button>
      </div>

      <figcaption className="px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug font-semibold text-ink">
            {item.title}
          </h3>
          <span className="shrink-0 rounded-full bg-gold-soft px-3 py-1 text-[11px] font-semibold text-gold-dark">
            {item.treatment}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.note}</p>
        {!hasPhotos && (
          <p className="mt-2 text-[11px] tracking-wider text-muted/70 uppercase">
            Illustrative render — patient photography to be added
          </p>
        )}
      </figcaption>
    </figure>
  );
}
