import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Repeat, ShieldCheck, Wallet, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionHeading } from "@/components/People";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { services, type ServiceCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental & Skin Treatments",
  description:
    "Explore dental and aesthetic treatments at Dental & Aesthetic Lounge, Johar Town Lahore: veneers, aligners, whitening, implants, root canals, laser skin rejuvenation, pigmentation and anti-aging care.",
  alternates: { canonical: "/services" },
};

const journey = [
  {
    icon: Clock,
    step: "01",
    title: "Consultation",
    copy: "A full assessment of your dental and skin concerns with digital imaging where relevant.",
  },
  {
    icon: Repeat,
    step: "02",
    title: "Personalised plan",
    copy: "You receive a clear, staged treatment plan with timelines, number of sessions and costs.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Treatment sessions",
    copy: "Each visit is logged and your session countdown tracked, so progress is never guesswork.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Review & aftercare",
    copy: "Follow-ups, maintenance guidance and receipts for every stage of your treatment.",
  },
];

const categories: { key: ServiceCategory; label: string; blurb: string }[] = [
  {
    key: "dental",
    label: "Dental Treatments",
    blurb:
      "General, cosmetic and orthodontic dentistry delivered with modern equipment — from routine cleaning to complete smile makeovers.",
  },
  {
    key: "skin",
    label: "Skin & Aesthetic Treatments",
    blurb:
      "Medical-grade aesthetic care for pigmentation, acne scarring, ageing and hair reduction, planned in tracked session packages.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Treatments designed around you"
        description="Dental & Aesthetic Lounge brings together cosmetic dentistry, orthodontics and aesthetic medicine under one roof in Johar Town, Lahore."
      />

      {categories.map((cat, catIndex) => (
        <section key={cat.key} className="container-page py-16">
          <Reveal>
            <SectionHeading
              eyebrow={catIndex === 0 ? "Speciality 01" : "Speciality 02"}
              title={cat.label}
              description={cat.blurb}
              align="left"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="relative mt-8 h-56 overflow-hidden rounded-3xl border border-ink/8 bg-sand sm:h-72">
              <Image
                src={catIndex === 0 ? "/img/dental-room.jpg" : "/img/laser-room.jpg"}
                alt={
                  catIndex === 0
                    ? "Dental treatment room at Dental & Aesthetic Lounge"
                    : "Laser skin treatment room at Dental & Aesthetic Lounge"
                }
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="mt-10">
            <ServicesGrid category={cat.key} />
          </div>
        </section>
      ))}

      {/* What each treatment includes */}
      <section className="container-page py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Treatment details"
            title="What's included"
            description="A closer look at what each of our core treatments involves."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 80}>
              <article className="card h-full p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {s.category === "dental" ? "Dental" : "Skin"}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Patient journey */}
      <section className="container-page py-16">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Your treatment journey"
            description="A simple, transparent process — including the session tracking our multi-visit treatments are built around."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((j, i) => (
            <Reveal key={j.step} delay={i * 80}>
              <article className="relative h-full rounded-3xl border border-ink/8 bg-sand/50 p-7">
                <span className="font-display text-4xl font-semibold text-gold/30">
                  {j.step}
                </span>
                <j.icon className="mt-3 h-6 w-6 text-gold" strokeWidth={1.7} />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {j.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{j.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
