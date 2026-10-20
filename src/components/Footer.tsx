import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { FacebookIcon } from "./FacebookIcon";
import { clinic, services } from "@/lib/data";

// Static build-time constant (Cache Components blocks `new Date()` in
// prerendered output, and the copyright year doesn't need to be live).
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="[&_span]:text-cream [&_span_span]:text-cream/90" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            A modern dental &amp; skin clinic in the heart of Johar Town,
            Lahore — where advanced technology meets gentle, personal care.
          </p>
          <a
            href={clinic.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
          >
            <FacebookIcon />
            Follow us on Facebook
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-cream">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="transition-colors hover:text-gold">Home</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-gold">Services</Link></li>
            <li><Link href="/gallery" className="transition-colors hover:text-gold">Before &amp; After</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
            <li><Link href="/contact#book" className="transition-colors hover:text-gold">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-cream">
            Treatments
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-cream">
            Visit Us
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={clinic.phoneHref} className="transition-colors hover:text-gold">
                {clinic.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {clinic.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {COPYRIGHT_YEAR} {clinic.name}. All rights reserved.
          </p>
          <p>Johar Town, Lahore — Dental &amp; Skin Care</p>
        </div>
      </div>
    </footer>
  );
}
