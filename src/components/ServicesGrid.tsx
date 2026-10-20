import Link from "next/link";
import {
  Anchor,
  AlignCenter,
  ArrowRight,
  Clock3,
  Droplet,
  Droplets,
  Flower2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Sun,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/data";
import { IconTile } from "./ui/IconTile";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  align: AlignCenter,
  sun: Sun,
  anchor: Anchor,
  heartPulse: HeartPulse,
  shield: ShieldCheck,
  wand: Wand2,
  droplet: Droplet,
  flower: Flower2,
  droplets: Droplets,
  clock: Clock3,
  zap: Zap,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Sparkles;
  const isDental = service.category === "dental";

  return (
    <article className="card group relative flex flex-col p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_28px_70px_-40px_color-mix(in_srgb,var(--color-gold)_55%,transparent)]">
      <IconTile
        icon={Icon}
        tone={isDental ? "dental" : "skin"}
        className="mb-5"
      />
      <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
        {isDental ? "Dental" : "Skin & Aesthetics"}
      </span>
      <h3 className="mt-1.5 font-display text-xl leading-snug font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.short}
      </p>
      <Link
        href="/contact#book"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
      >
        Book this treatment
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>
    </article>
  );
}

export function ServicesGrid({
  category,
  limit,
}: {
  category?: Service["category"];
  limit?: number;
}) {
  const list = services
    .filter((s) => !category || s.category === category)
    .slice(0, limit ?? services.length);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
