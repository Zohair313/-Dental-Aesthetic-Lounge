import { Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { ClinicGallery } from "@/components/ClinicGallery";
import { ContactSection } from "@/components/ContactSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Team, Testimonials } from "@/components/People";
import { WhyUs } from "@/components/WhyUs";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StockBadge, StockNote } from "@/components/ui/StockBadge";
import { services } from "@/lib/data";

export default function HomePage() {
  const dental = services.filter((s) => s.category === "dental");
  const skin = services.filter((s) => s.category === "skin");

  return (
    <>
      <Hero />

      {/* One lounge, two specialities */}
      <Section>
        <Reveal>
          <SectionHeader
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
      </Section>

      {/* Services */}
      <Section id="services" size="sm">
        <Reveal>
          <SectionHeader
            eyebrow="Our treatments"
            title="Specialised dental & skin services"
            description="From digital smile design to medical-grade laser therapies — every treatment is delivered with modern equipment and a personalised plan."
          />
        </Reveal>
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/services" variant="outline">
            See full treatment details
          </ButtonLink>
        </div>
      </Section>

      {/* Before & after */}
      <Section id="gallery">
        <Reveal>
          <SectionHeader
            eyebrow="Before & after"
            title="Real transformations, tracked session by session"
            description="Drag the slider on any case to compare. Our multi-session treatments are documented visit-by-visit so progress is always visible."
          />
        </Reveal>
        <div className="mt-12">
          <GalleryGrid limit={4} />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/gallery">Open the full gallery</ButtonLink>
        </div>
      </Section>

      {/* Inside the lounge */}
      <Section size="sm">
        <Reveal>
          <SectionHeader
            eyebrow="Inside the lounge"
            title="Clean, calm and built for comfort"
            description="Modern treatment suites, hospital-grade sterilisation and a lounge-style waiting area — designed so every visit feels easy."
          />
        </Reveal>
        <div className="mt-12">
          <ClinicGallery />
        </div>
      </Section>

      {/* Why us */}
      <Section size="sm">
        <Reveal>
          <SectionHeader
            eyebrow="Why patients choose us"
            title="Care you can feel from the first visit"
          />
        </Reveal>
        <div className="mt-12">
          <WhyUs />
        </div>
      </Section>

      {/* Spotlight — smile & kids */}
      <Section size="sm">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <SpotlightCard
              src="/img/smile.jpg"
              alt="A bright, even smile after veneer treatment"
              eyebrow="Smile design"
              title="A smile that still looks like you"
              copy="Digital previews, layered porcelain and a shade matched to your face — natural results, never overdone."
              href="/services"
              linkLabel="Explore smile design"
            />
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard
              src="/img/skincare.jpg"
              alt="Friendly kids dentistry illustration at the clinic"
              eyebrow="Family dentistry"
              title="Gentle visits for little patients"
              copy="Calm, child-friendly appointments — check-ups, fluoride care and habits that last a lifetime."
              href="/contact#book"
              linkLabel="Book a family visit"
            />
          </Reveal>
        </div>
        <StockNote className="mt-6 text-center" />
      </Section>

      <Team />
      <Testimonials />

      {/* Contact + booking */}
      <Section id="book">
        <ContactSection />
      </Section>

      <CTABand />
    </>
  );
}

function SpotlightCard({
  src,
  alt,
  eyebrow,
  title,
  copy,
  href,
  linkLabel,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="card surface-shadow group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <StockBadge className="absolute top-3 right-3" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
          {copy}
        </p>
        <ButtonLink href={href} variant="outline" className="mt-6 w-fit">
          {linkLabel}
        </ButtonLink>
      </div>
    </article>
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
  const accent =
    tone === "gold"
      ? "text-gold bg-gold-soft"
      : "text-rose bg-rose-soft";

  return (
    <article className="card surface-shadow flex h-full flex-col p-8">
      <span
        className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold ${accent}`}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        {badge}
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
        {title}
      </h3>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-ink-soft"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-gold"
              strokeWidth={2.5}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
