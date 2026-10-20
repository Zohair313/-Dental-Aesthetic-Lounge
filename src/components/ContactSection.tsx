import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { BookingForm } from "./BookingForm";
import { ButtonAnchor } from "./ui/Button";
import { IconTile } from "./ui/IconTile";
import { Stars } from "./ui/Stars";
import { FacebookIcon } from "./ui/icons";
import { clinic } from "@/lib/data";

const facts = [
  {
    icon: MapPin,
    label: "Address",
    body: (
      <p className="mt-0.5 text-sm leading-relaxed text-muted">
        {clinic.address.line1},
        <br />
        {clinic.address.line2}, {clinic.address.country}
      </p>
    ),
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    body: (
      <a
        href={clinic.phoneHref}
        className="mt-0.5 block text-sm text-muted transition-colors hover:text-gold"
      >
        {clinic.phone}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Clinic hours",
    body: (
      <>
        {clinic.hours.map((h) => (
          <p key={h.days} className="mt-0.5 text-sm text-muted">
            {h.days}: {h.time}
          </p>
        ))}
      </>
    ),
  },
];

/** Contact info + map + booking form. Used on the home page and /contact. */
export function ContactSection({ withForm = true }: { withForm?: boolean }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Visit the lounge</p>
        <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
          Opposite G1 Market,
          <br />
          in the heart of Johar Town
        </h2>
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-muted">
          Easy to find, easy to park, and open six days a week. Walk in for a
          consultation or book ahead to secure your preferred time slot.
        </p>

        <ul className="mt-8 space-y-5">
          {facts.map(({ icon: Icon, label, body }) => (
            <li key={label} className="flex gap-4">
              <IconTile icon={Icon} />
              <div>
                <p className="text-sm font-semibold text-ink">{label}</p>
                {body}
              </div>
            </li>
          ))}

          <li className="flex gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-soft">
              <Stars value={clinic.rating.value} size={15} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                {clinic.rating.value.toFixed(1)} rating
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Based on {clinic.rating.count} patient reviews
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonAnchor
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </ButtonAnchor>
          <ButtonAnchor
            href={clinic.facebook}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <FacebookIcon />
            Facebook Page
          </ButtonAnchor>
        </div>
      </div>

      <div className="space-y-8">
        <div className="card surface-shadow overflow-hidden p-0">
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
