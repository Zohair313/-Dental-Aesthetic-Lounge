import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white gold-glow hover:bg-gold-dark",
  outline:
    "border border-ink/15 bg-white/70 text-ink backdrop-blur-sm hover:border-gold hover:text-gold",
  ghost: "text-ink-soft hover:bg-sand hover:text-ink",
  light:
    "border border-cream/25 bg-cream/5 text-cream backdrop-blur-sm hover:border-gold hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5.5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function buttonClass({
  variant = "gold",
  size = "md",
  className = "",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

/** Internal navigation styled as a button. */
export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}

interface ButtonAnchorProps
  extends Omit<ComponentProps<"a">, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

/** External link / hash anchor styled as a button. */
export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonAnchorProps) {
  return (
    <a className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}

interface ButtonProps extends Omit<ComponentProps<"button">, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
