import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ContactSection } from "@/components/ContactSection";
import { Testimonials, Team, SectionHeading } from "@/components/People";
import { WhyUs } from "@/components/WhyUs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";

export default function HomePage() {
  const dental = services.filter((s) => s.category === "dental");
  const skin = services.filter((s) => s.category === "skin");

  return (
    <>
      <Hero />

      {/* Intro / two specialities */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            eyebrow="One lounge, two specialities"
            title="Everything your smile and skin need, in one place"
            description="No more running between a dentist and a dermatologist. At Dental & Aesthetic Lounge your dental work and skin treatments are planned together by one coordinated team."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <SpecialityCard
              badge="Dental Care"
              title="Confident, healthy smiles"
              items={dental.map((s) => s.title)}
              tone="gold"
            />
          </Reveal>
          <Reveal delay={100}>
            <SpecialityCard
              badge="Skin & Aesthetics"
              title="Clear, radiant skin"
              items={skin.map((s) => s.title)}
              tone="rose"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-page scroll-mt-24 py-10">
        <Reveal>
          <SectionHeading
            eyebrow="Our treatments"
            title="Specialised dental & skin services"
            description="From digital smile design to medical-grade laser therapies — every treatment is delivered with modern equipment and a personalised plan."
          />
        </Reveal>
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            See full treatment details
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container-page scroll-mt-24 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Before & after"
            title="Real transformations, tracked session by session"
            description="Drag the slider on any case to compare. Our multi-session treatments are documented visit-by-visit so progress is always visible."
          />
        </Reveal>
        <div className="mt-12">
          <GalleryGrid limit={4} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-gold">
            Open the full gallery
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why patients choose us"
            title="Care you can feel from the first visit"
          />
        </Reveal>
        <div className="mt-12">
          <WhyUs />
        </div>
      </section>

      <Team />
      <Testimonials />

      {/* Contact + booking */}
      <section id="book" className="container-page scroll-mt-24 py-20">
        <ContactSection />
      </section>

      <CTABand />
    </>
  );
}

function SpecialityCard({
  badge,
  title,
  items,
  tone,
}: {
  badge: string;
  title: string;
  items: string[];
  tone: "gold" | "rose";
}) {
  const accent = tone === "gold" ? "text-gold bg-gold-soft" : "text-rose bg-rose/12";
  return (
    <article className="card flex h-full flex-col p-8">
      <span className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold ${accent}`}>
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
