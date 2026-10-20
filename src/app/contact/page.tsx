import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/People";
import { Reveal } from "@/components/Reveal";

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

      <section id="book" className="container-page scroll-mt-24 py-16">
        <ContactSection />
      </section>

      <section className="container-page py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
        </Reveal>
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
