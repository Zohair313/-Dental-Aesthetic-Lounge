import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Book an appointment at Dental & Aesthetic Lounge, opposite G1 Market, Block G, Phase 1, Johar Town, Lahore. Call +92 303 017 1000 or request a slot online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & booking"
        title="Book your visit"
        description="Tell us what you need and when — our front desk confirms every appointment by phone."
      />

      <Section id="book">
        <ContactSection />
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
        </Reveal>
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
