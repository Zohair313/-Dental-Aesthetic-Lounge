import Image from "next/image";
import { ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { clinic } from "@/lib/data";
import { ButtonAnchor } from "./ui/Button";
import { Stars } from "./ui/Stars";
import { StockBadge } from "./ui/StockBadge";

const highlights = [
  {
    icon: Stethoscope,
    title: "Dental + Skin",
    body: "Two specialities, one lounge",
  },
  {
    icon: ShieldCheck,
    title: "Session tracking",
    body: "Multi-visit plans, fully logged",
  },
  {
    icon: Sparkles,
    title: "Johar Town",
    body: "Opp. G1 Market, Phase 1",
  },
] as const;

/** Home page hero. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 18%, color-mix(in srgb, var(--color-gold) 13%, transparent) 0%, transparent 60%), radial-gradient(50% 45% at 88% 10%, color-mix(in srgb, var(--color-rose) 14%, transparent) 0%, transparent 55%), radial-gradient(40% 40% at 70% 90%, color-mix(in srgb, var(--color-gold) 10%, transparent) 0%, transparent 55%)",
        }}
      />

      <div className="container-page grid items-center gap-14 pt-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-28">
        {/* ── Copy ─────────────────────────────────────────────────────── */}
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft/70 px-4 py-1.5 text-[12px] font-semibold text-gold-dark">
            <Stars value={clinic.rating.value} size={14} />
            {clinic.rating.value.toFixed(1)} stars — {clinic.rating.count}{" "}
            patient reviews
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-[3.4rem]">
            Your smile and skin,
            <br />
            <span className="text-gold">crafted with precision</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft/90">
            {clinic.name} is a modern dental &amp; skin clinic in{" "}
            <strong className="font-semibold text-ink">
              Johar Town, Lahore
            </strong>{" "}
            — bringing smile design, orthodontics, implants and advanced laser
            skin treatments together under one elegant roof.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonAnchor href="#book" size="lg">
              Book an Appointment
            </ButtonAnchor>
            <ButtonAnchor href="#gallery" variant="outline" size="lg">
              View Before &amp; After
            </ButtonAnchor>
          </div>

          <dl className="mt-10 grid max-w-lg gap-5 border-t border-ink/10 pt-7 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Icon className="h-4 w-4 text-gold" strokeWidth={1.9} />
                  {title}
                </dt>
                <dd className="mt-1 text-[13px] text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Visual ───────────────────────────────────────────────────── */}
        <div
          className="animate-rise relative"
          style={{ animationDelay: "120ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-transparent to-rose/25 blur-2xl"
          />

          <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2rem] border border-white/60 bg-white surface-shadow-lg">
            <Image
              src="/img/reception.jpg"
              alt="A clinic reception and waiting area"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <StockBadge className="absolute top-3 right-3" />
          </div>

          {/* Floating rating card */}
          <div className="animate-drift absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-ink/8 bg-white/95 px-5 py-4 backdrop-blur surface-shadow sm:flex">
            <span className="font-display text-3xl font-semibold text-ink">
              {clinic.rating.value.toFixed(1)}
            </span>
            <div>
              <Stars value={clinic.rating.value} />
              <p className="mt-0.5 text-[12px] text-muted">
                {clinic.rating.count}+ happy patients
              </p>
            </div>
          </div>

          {/* Floating treatment pill */}
          <div
            className="animate-drift absolute top-6 -right-3 hidden rounded-2xl bg-night px-4 py-3 text-[12px] font-semibold text-cream surface-shadow sm:block"
            style={{ animationDelay: "1.6s" }}
          >
            Veneers · Aligners · Laser
          </div>
        </div>
      </div>
    </section>
  );
}
