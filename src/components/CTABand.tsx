import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/lib/data";

/** Full-width call-to-action band. */
export function CTABand() {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[2rem] bg-night px-8 py-16 text-center sm:px-16">
        <Image
          src="/img/clinic-interior.jpg"
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
              "radial-gradient(50% 80% at 20% 0%, rgba(168,129,63,0.35) 0%, transparent 60%), radial-gradient(45% 70% at 85% 100%, rgba(192,133,123,0.28) 0%, transparent 55%), linear-gradient(180deg, rgba(29,24,19,0.72) 0%, rgba(29,24,19,0.86) 100%)",
          }}
        />
        <h2 className="relative font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
          Ready for your best smile and skin?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-cream/70">
          Book a consultation at Dental &amp; Aesthetic Lounge today — we will
          map out a treatment plan that fits your goals, your schedule and your
          budget.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact#book" className="btn-gold">
            Book an Appointment
          </Link>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-cream/25 bg-cream/5 text-cream hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={clinic.phoneHref}
            className="btn border border-cream/25 bg-cream/5 text-cream hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
