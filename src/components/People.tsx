import Image from "next/image";
import { Quote } from "lucide-react";
import { clinic, team, testimonials } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Stars } from "./ui/Stars";
import { Section, SectionHeader } from "./ui/Section";

/* ── Testimonials ────────────────────────────────────────────────────────── */

export function Testimonials() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeader
          eyebrow="Patient stories"
          title="Rated 5 stars by the people of Johar Town"
        />
        <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-gold/25 bg-gold-soft/60 px-5 py-2">
          <span className="font-display text-2xl font-semibold text-ink">
            {clinic.rating.value.toFixed(1)}
          </span>
          <Stars value={clinic.rating.value} />
          <span className="text-sm text-muted">
            {clinic.rating.count} reviews
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="card surface-shadow flex h-full flex-col p-7">
              <Quote
                className="h-7 w-7 text-gold/40"
                fill="currentColor"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.context}</p>
                </div>
                <Stars value={5} />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── Team ────────────────────────────────────────────────────────────────── */

export function Team() {
  return (
    <Section>
      <Reveal>
        <SectionHeader
          eyebrow="Our specialists"
          title="A team that treats you like family"
          description="Dentists and aesthetic physicians working together, so your dental and skin treatments are planned as one cohesive journey."
        />
      </Reveal>

      {/* Team at work — one generic team photograph, no individuals named */}
      <Reveal delay={60}>
        <figure className="card surface-shadow mt-12 overflow-hidden">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-sand">
            <Image
              src="/img/team.jpg"
              alt="A dental team working together in a treatment room"
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          <figcaption className="px-6 py-4">
            <p className="text-[13px] text-muted">
              Our dental and aesthetic team, working as one.
            </p>
          </figcaption>
        </figure>
      </Reveal>

      {/* Named profiles — details pending confirmation by the clinic */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 90}>
            <article className="card flex h-full flex-col p-7 surface-shadow">
              <span
                aria-hidden
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-soft to-sand font-display text-xl font-semibold text-gold-dark"
              >
                {m.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
              <p className="mt-1 text-[13px] text-muted">
                {m.qualifications}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {m.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-sand px-3 py-1 text-[12px] font-medium text-ink-soft"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-ink/8 pt-4 text-[11px] tracking-wide text-muted/70 uppercase">
                Profile to be confirmed by the clinic
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
