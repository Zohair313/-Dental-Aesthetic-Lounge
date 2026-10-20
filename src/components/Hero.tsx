import Image from "next/image";
import { clinic } from "@/lib/data";
import { Stars } from "./Stars";

/** Hero for the home page. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 18%, rgba(168,129,63,0.13) 0%, transparent 60%), radial-gradient(50% 45% at 88% 10%, rgba(192,133,123,0.14) 0%, transparent 55%), radial-gradient(40% 40% at 70% 90%, rgba(168,129,63,0.10) 0%, transparent 55%)",
        }}
      />

      <div className="container-page grid items-center gap-14 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft/60 px-4 py-1.5 text-[12px] font-semibold text-gold-dark">
            <Stars value={clinic.rating.value} className="!h-3.5 !w-3.5" />
            {clinic.rating.value.toFixed(1)} â˜… â€” {clinic.rating.count} patient
            reviews
          </span>

          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Your smile and skin,
            <br />
            <span className="text-gold">crafted with precision</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft/90">
            {clinic.name} is a modern dental &amp; skin clinic in{" "}
            <strong className="font-semibold text-ink">Johar Town, Lahore</strong>{" "}
            â€” bringing smile design, orthodontics, implants and advanced laser
            skin treatments together under one elegant roof.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButtonPrimary />
            <a href="#gallery" className="btn-outline">
              View Before &amp; After
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-1 gap-4 border-t border-ink/10 pt-7 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-ink">Dental + Skin</dt>
              <dd className="mt-0.5 text-muted">Two specialities, one lounge</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Session tracking</dt>
              <dd className="mt-0.5 text-muted">Multi-visit plans, fully logged</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Johar Town</dt>
              <dd className="mt-0.5 text-muted">Opp. G1 Market, Phase 1</dd>
            </div>
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-transparent to-rose/25 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_40px_100px_-50px_rgba(32,26,21,0.55)]">
            <Image
              src="/img/clinic-interior.jpg"
              alt="Inside Dental & Aesthetic Lounge â€” reception and waiting area"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating rating card */}
          <div className="animate-soft-float absolute -bottom-6 -left-4 hidden rounded-2xl border border-ink/8 bg-white/95 px-5 py-4 shadow-[0_24px_60px_-30px_rgba(32,26,21,0.5)] backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-semibold text-ink">
                {clinic.rating.value.toFixed(1)}
              </span>
              <div>
                <Stars value={clinic.rating.value} />
                <p className="mt-0.5 text-[12px] text-muted">
                  {clinic.rating.count}+ happy patients
                </p>
              </div>
            </div>
          </div>

          {/* floating pill */}
          <div
            className="animate-soft-float absolute -right-3 top-6 hidden rounded-2xl border border-ink/8 bg-night px-4 py-3 text-[12px] font-semibold text-cream shadow-[0_20px_50px_-25px_rgba(32,26,21,0.6)] sm:block"
            style={{ animationDelay: "1.6s" }}
          >
            âœ¦ Veneers Â· Aligners Â· Laser
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkButtonPrimary() {
  return (
    <a href="#book" className="btn-gold">
      Book an Appointment
    </a>
  );
}
