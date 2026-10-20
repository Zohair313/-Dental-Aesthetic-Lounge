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
            {clinic.rating.value.toFixed(1)} ★ — {clinic.rating.count} patient
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
            — bringing smile design, orthodontics, implants and advanced laser
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
            {/* A bright, "after" smile render as the hero visual */}
            <HeroArt />
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
            ✦ Veneers · Aligners · Laser
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

function HeroArt() {
  return (
    <div className="aspect-[4/3.4] w-full">
      <HeroArtSvg />
    </div>
  );
}

function HeroArtSvg() {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="hero-skin" cx="0.5" cy="0.42" r="0.9">
          <stop offset="0" stopColor="#f6ddc8" />
          <stop offset="1" stopColor="#e9c2a6" />
        </radialGradient>
        <linearGradient id="hero-tooth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eceeea" />
        </linearGradient>
        <linearGradient id="hero-lip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cf8f86" />
          <stop offset="1" stopColor="#ba736a" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="340" fill="url(#hero-skin)" />
      <rect width="400" height="340" fill="url(#hero-glow)" />

      {/* mouth */}
      <g transform="translate(0, 20)">
        <path
          d="M58 165 C 92 118 142 106 200 112 C 258 106 308 118 342 165 C 308 226 256 236 200 230 C 144 236 92 226 58 165 Z"
          fill="#4d2723"
        />
        <path
          d="M80 160 C 108 126 150 120 200 124 C 250 120 292 126 320 160 C 292 172 250 176 200 174 C 150 176 108 172 80 160 Z"
          fill="#d9938b"
        />
        {[96, 126, 156, 186, 216, 246, 276, 306].map((cx, i) => {
          const dist = Math.abs(cx - 201);
          const y = 126 + dist * dist * 0.0013;
          const w = i === 3 || i === 4 ? 29 : 26;
          const h = i === 3 || i === 4 ? 44 : 40;
          return (
            <rect
              key={cx}
              x={cx - w / 2}
              y={y}
              width={w}
              height={h}
              rx="9"
              fill="url(#hero-tooth)"
              stroke="#00000012"
              strokeWidth="0.8"
            />
          );
        })}
        <path
          d="M58 165 C 96 218 148 234 200 228 C 252 234 304 218 342 165 C 304 196 252 208 200 204 C 148 208 96 196 58 165 Z"
          fill="url(#hero-lip)"
        />
        <path
          d="M58 165 C 86 124 128 110 200 116 C 272 110 314 124 342 165 C 308 146 262 138 200 143 C 138 138 92 146 58 165 Z"
          fill="url(#hero-lip)"
        />
        <ellipse cx="200" cy="222" rx="66" ry="6" fill="#ffffff" opacity="0.25" />
      </g>

      {/* sparkle */}
      <path
        d="M330 62 c1.6 8 6 12.4 14 14 -8 1.6 -12.4 6 -14 14 -1.6-8 -6-12.4 -14-14 8-1.6 12.4-6 14-14Z"
        fill="#c9a24e"
        opacity="0.9"
      />
      <path
        d="M76 46 c1.2 6 4.5 9.3 10.5 10.5 -6 1.2 -9.3 4.5 -10.5 10.5 -1.2-6 -4.5-9.3 -10.5-10.5 6-1.2 9.3-4.5 10.5-10.5Z"
        fill="#c9a24e"
        opacity="0.65"
      />
    </svg>
  );
}
