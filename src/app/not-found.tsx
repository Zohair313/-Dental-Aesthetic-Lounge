import { ButtonLink } from "@/components/ui/Button";
import { clinic } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-32 text-center">
      <span className="font-display text-6xl font-semibold text-gold">404</span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
        This page took a day off
      </h1>
      <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
        The page you were looking for doesn&apos;t exist. Head back home, or
        call us on {clinic.phone} if you need help booking.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact#book" variant="outline">
          Book an appointment
        </ButtonLink>
      </div>
    </section>
  );
}
