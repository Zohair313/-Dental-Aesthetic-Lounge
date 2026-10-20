import { Star } from "lucide-react";

export function Stars({
  value = 5,
  size = 16,
  className = "",
}: {
  value?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          strokeWidth={1.5}
          className={
            i <= Math.round(value)
              ? "fill-gold text-gold"
              : "fill-transparent text-gold/35"
          }
        />
      ))}
    </span>
  );
}

/** "5.0 ★ · 45 reviews" inline rating, used in headers and cards. */
export function RatingInline({
  value,
  count,
  className = "",
}: {
  value: number;
  count: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Stars value={value} size={14} />
      <span className="text-[13px] font-medium text-muted">
        {value.toFixed(1)} · {count} reviews
      </span>
    </span>
  );
}
