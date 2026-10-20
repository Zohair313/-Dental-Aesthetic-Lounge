import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { BookingForm } from "./BookingForm";
import { FacebookIcon } from "./FacebookIcon";
import { Stars } from "./Stars";
import { clinic } from "@/lib/data";

/** Contact info + map + booking form. Used on the home page and /contact. */
export function ContactSection({ withForm = true }: { withForm?: boolean }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Visit the lounge</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Opposite G1 Market,
          <br />
          in the heart of Johar Town
        </h2>
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-muted">
          Easy to find, easy to park, and open six days a week. Walk in for a
          consultation or book ahead to secure your preferred time slot.
        </p>

        <ul className="mt-8 space-y-5">
          <li className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Address</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">
                {clinic.address.line1},<br />
                {clinic.address.line2}, {clinic.address.country}
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Phone &amp; WhatsApp</p>
              <a
                href={clinic.phoneHref}
                className="mt-0.5 block text-sm text-muted transition-colors hover:text-gold"
              >
                {clinic.phone}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Clinic hours</p>
              {clinic.hours.map((h) => (
                <p key={h.days} className="mt-0.5 text-sm text-muted">
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
          </li>
          <li className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold">
              <Stars value={clinic.rating.value} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                {clinic.rating.value.toFixed(1)} ★ rating
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Based on {clinic.rating.count} patient reviews
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={clinic.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FacebookIcon />
            Facebook Page
          </a>
        </div>
      </div>

      <div className="space-y-8">
        <div className="card overflow-hidden p-0">
          <iframe
            title={`Map to ${clinic.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${clinic.geo.lat},${clinic.geo.lng}`,
            )}&z=17&output=embed`}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        {withForm && <BookingForm />}
      </div>
    </div>
  );
}
