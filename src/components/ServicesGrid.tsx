import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { services, type Service } from "@/lib/data";
import { IconTile } from "./ui/IconTile";
import {
  BracesIcon,
  DentalCareIcon,
  FaceGlowIcon,
  ImplantIcon,
  LaserIcon,
  LiftIcon,
  RootCanalIcon,
  SerumIcon,
  SkinLayersIcon,
  SkinShieldIcon,
  ToothIcon,
  VeneerIcon,
  WhiteningIcon,
} from "./ui/icons";

/**
 * Dental and aesthetic glyphs are hand-drawn in `ui/icons.tsx` because
 * lucide-react has no tooth, implant, brace or laser shapes. Both sets satisfy
 * the same `{ className, strokeWidth }` contract, hence the shared type.
 */
type ServiceIcon = LucideIcon | ComponentType<{ className?: string; strokeWidth?: number }>;

const iconMap: Record<string, ServiceIcon> = {
  // dental
  veneers: VeneerIcon,
  align: BracesIcon,
  whitening: WhiteningIcon,
  implant: ImplantIcon,
  rootCanal: RootCanalIcon,
  tooth: ToothIcon,
  dentalCare: DentalCareIcon,
  // skin & aesthetics
  laser: LaserIcon,
  serum: SerumIcon,
  faceGlow: FaceGlowIcon,
  skinLayers: SkinLayersIcon,
  skinShield: SkinShieldIcon,
  lift: LiftIcon,
  // fallback
  sparkles: Sparkles,
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
