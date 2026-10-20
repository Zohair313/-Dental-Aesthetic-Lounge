import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/lib/data";
import { ButtonAnchor, ButtonLink } from "./ui/Button";

/** Full-width call-to-action band. */
export function CTABand() {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[2rem] bg-night px-8 py-16 text-center sm:px-16">
        <Image
          src="/img/reception.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 20% 0%, color-mix(in srgb, var(--color-gold) 35%, transparent) 0%, transparent 60%), radial-gradient(45% 70% at 85% 100%, color-mix(in srgb, var(--color-rose) 28%, transparent) 0%, transparent 55%), linear-gradient(180deg, color-mix(in srgb, var(--color-night) 72%, transparent) 0%, color-mix(in srgb, var(--color-night) 88%, transparent) 100%)",
          }}
        />
        <h2 className="relative font-display text-3xl leading-tight font-semibold text-cream sm:text-4xl">
          Ready for your best smile and skin?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-cream/70">
          Book a consultation at Dental &amp; Aesthetic Lounge today — we will
          map out a treatment plan that fits your goals, your schedule and your
          budget.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact#book" size="lg">
            Book an Appointment
          </ButtonLink>
          <ButtonAnchor
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            size="lg"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </ButtonAnchor>
          <ButtonAnchor
            href={clinic.phoneHref}
            variant="light"
            size="lg"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call now
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}
