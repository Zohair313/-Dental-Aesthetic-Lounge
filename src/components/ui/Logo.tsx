export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-bg" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2b241d" />
          <stop offset="1" stopColor="#17120e" />
        </linearGradient>
        <linearGradient id="lm-bd" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d9b878" />
          <stop offset="1" stopColor="#8a6a30" />
        </linearGradient>
        <linearGradient id="lm-tt" x1="16" y1="11" x2="31" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fdfbf6" />
          <stop offset="1" stopColor="#dfc288" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13.5"
        fill="url(#lm-bg)"
        stroke="url(#lm-bd)"
        strokeWidth="1.5"
      />
      <path
        d="M24 11.5c-2.6-1.7-5.6-1.9-8-.5-2.7 1.6-3.6 4.6-3.1 8 .4 2.8 1.3 5.3 2.2 7.9.6 1.8 1 4 1.7 5.2.7 1.2 2 1.3 2.6.2.8-1.5.9-3.8 1.2-5.7.3-1.7.6-3 3.4-3s3.1 1.3 3.4 3c.3 1.9.4 4.2 1.2 5.7.6 1.1 1.9 1 2.6-.2.7-1.2 1.1-3.4 1.7-5.2.9-2.6 1.8-5.1 2.2-7.9.5-3.4-.4-6.4-3.1-8-2.4-1.4-5.4-1.2-8 .5Z"
        fill="url(#lm-tt)"
      />
      <path
        d="M35.5 10c.4 2 1.5 3.1 3.5 3.5-2 .4-3.1 1.5-3.5 3.5-.4-2-1.5-3.1-3.5-3.5 2-.4 3.1-1.5 3.5-3.5Z"
        fill="#e9cd8f"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + wordmark. `tone="light"` is for use on dark backgrounds.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const word = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-cream/55" : "text-muted";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="leading-tight">
        <span
          className={`block font-display text-[16.5px] font-semibold tracking-[-0.01em] ${word}`}
        >
          Dental <span className="text-gold">&amp;</span> Aesthetic Lounge
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.16em] ${sub}`}
        >
          Dental &amp; Skin Clinic
        </span>
      </span>
    </span>
  );
}
