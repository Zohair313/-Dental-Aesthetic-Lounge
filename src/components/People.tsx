import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { Stars } from "./Stars";
import { clinic, team, testimonials } from "@/lib/data";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          <SectionHeading
            eyebrow="Patient stories"
            title="Rated 5★ by the people of Johar Town"
          />
          <div className="mt-5 flex items-center gap-3 rounded-full border border-gold/25 bg-gold-soft/50 px-5 py-2">
            <span className="font-display text-2xl font-semibold text-ink">
              {clinic.rating.value.toFixed(1)}
            </span>
            <Stars value={clinic.rating.value} />
            <span className="text-sm text-muted">
              {clinic.rating.count} reviews
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="card flex h-full flex-col p-7">
              <Quote className="h-7 w-7 text-gold/40" fill="currentColor" />
              <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-soft">
                “{t.quote}”
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
    </section>
  );
}

export function Team() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Our specialists"
          title="A team that treats you like family"
          description="Dentists and aesthetic physicians working together, so your dental and skin treatments are planned as one cohesive journey."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 90}>
            <article className="card flex h-full flex-col p-7 text-center sm:text-left">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-sand font-display text-2xl font-semibold text-gold-dark sm:mx-0">
                {m.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
              <p className="mt-1 text-[13px] text-muted">{m.qualifications}</p>
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
