/**
 * Small badge marking a photograph as a representative stock image rather than
 * an actual photograph of the clinic. Kept deliberately visible: the clinic
 * should not present stock photography as its own.
 */
export function StockBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none inline-flex items-center rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cream/90 uppercase backdrop-blur-sm ${className}`}
      title="Representative image — not an actual photograph of this clinic"
    >
      Representative
    </span>
  );
}

/** Footnote used beneath any section containing representative imagery. */
export function StockNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11.5px] leading-relaxed text-muted/80 ${className}`}>
      Photographs on this page are representative stock images, not actual
      photography of our clinic.
    </p>
  );
}
