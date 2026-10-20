import type { Metadata } from "next";
import Image from "next/image";
import { Camera, ClipboardList, MousePointerClick } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "Interactive before and after case studies from Dental & Aesthetic Lounge, Johar Town Lahore â€” veneers, aligners, whitening, laser pigmentation and skin rejuvenation.",
  alternates: { canonical: "/gallery" },
};

const notes = [
  {
    icon: MousePointerClick,
    title: "Drag to compare",
    copy: "Every case opens with a slider â€” drag it (or use the arrow keys) to wipe between before and after.",
  },
  {
    icon: Camera,
    title: "Documented per session",
    copy: "Multi-visit treatments are photographed as they progress, so improvement is visible, not just claimed.",
  },
  {
    icon: ClipboardList,
    title: "Honest disclosures",
    copy: "Results vary from patient to patient. Every plan is individual and confirmed after a clinical assessment.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Before & after"
        title="Real cases, real progress"
        description="A visual walkthrough of dental and aesthetic treatments completed at our Johar Town clinic."
      />

      <Section>
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="relative h-44 overflow-hidden rounded-3xl border border-ink/8 bg-sand sm:col-span-2">
            <Image
              src="/img/smile.jpg"
              alt="A bright, even smile after cosmetic dental treatment"
              fill
              sizes="(max-width: 640px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-3xl border border-ink/8 bg-night">
            <Image
              src="/img/og-image.jpg"
              alt="Dental & Aesthetic Lounge brand lockup"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {notes.map((n, i) => {
            const Icon = n.icon;
            return (
              <Reveal key={n.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-ink/8 bg-sand/50 p-6">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} aria-hidden />
                  <h2 className="mt-4 font-display text-lg font-semibold text-ink">
                    {n.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {n.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <GalleryGrid />

        <div className="mt-14 rounded-3xl border border-gold/25 bg-gold-soft/40 px-7 py-6 text-sm leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">Please note:</strong> the
          cases shown here are illustrative renders used while the clinic&apos;s
          patient photo archive is being digitised and consent-cleared. Once
          real, consented photographs are supplied, this gallery automatically
          switches to them â€” no code changes required.
        </div>
      </Section>

      <CTABand />
    </>
  );
}
