import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic, services } from "@/lib/data";
import { Logo } from "./ui/Logo";
import { FacebookIcon } from "./ui/icons";
import { Stars } from "./ui/Stars";

// Static: `cacheComponents` blocks `new Date()` during prerender.
const YEAR = 2026;

export function Footer() {
  const treatments = services.slice(0, 6);

  return (
    <footer className="mt-28 bg-night text-cream/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
            A modern dental &amp; skin clinic in Johar Town, Lahore — where
            advanced technology meets gentle, personal care.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <Stars value={clinic.rating.value} size={15} />
            <span className="text-[13px] text-cream/60">
              {clinic.rating.value.toFixed(1)} from {clinic.rating.count} reviews
            </span>
          </div>
          <a
            href={clinic.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-gold"
          >
            <FacebookIcon className="h-4 w-4" />
            Follow us on Facebook
          </a>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer navigation">
          <h2 className="text-[13px] font-semibold tracking-wide text-cream">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Before & After" },
              { href: "/contact", label: "Contact" },
              { href: "/contact#book", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Treatments */}
        <nav aria-label="Popular treatments">
          <h2 className="text-[13px] font-semibold tracking-wide text-cream">
            Treatments
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {treatments.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <h2 className="text-[13px] font-semibold tracking-wide text-cream">
            Visit Us
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
              <span className="leading-relaxed">
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
                <br />
                {clinic.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
              <a
                href={clinic.phoneHref}
                className="transition-colors hover:text-gold"
              >
                {clinic.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
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
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/45 sm:flex-row">
          <p>
            © {YEAR} {clinic.name}. All rights reserved.
          </p>
          <p>
            Plus Code {clinic.plusCode} · Johar Town, Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
