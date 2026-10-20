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

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 90}>
            <article className="card group flex h-full flex-col overflow-hidden surface-shadow">
              <div className="relative aspect-[4/3.4] w-full overflow-hidden bg-sand">
                <Image
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold text-ink">
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
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
