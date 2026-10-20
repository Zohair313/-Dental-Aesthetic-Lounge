import type { ReactNode } from "react";

/** Consistent section wrapper with an optional tinted background. */
export function Section({
  id,
  children,
  className = "",
  tone = "cream",
  size = "md",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "none";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    cream: "",
    sand: "bg-sand/60",
    none: "",
  };
  const sizes = {
    sm: "py-12",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-28",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} ${sizes[size]} ${id ? "scroll-mt-24" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

/**
 * Section header. `align="center"` centres it; `align="left"` keeps it flush
 * left with an optional trailing action on wide screens.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  action?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <header
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="display-title mt-3">{title}</h2>
        {description && (
          <p
            className={`mt-4 text-[15.5px] leading-relaxed text-muted ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
