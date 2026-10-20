import { Star } from "lucide-react";

export function Stars({
  value = 5,
  className = "",
}: {
  value?: number;
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
          className={
            i <= Math.round(value)
              ? "h-4 w-4 fill-gold text-gold"
              : "h-4 w-4 text-gold/30"
          }
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
