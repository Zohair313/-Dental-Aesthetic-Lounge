/** Shared header for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 70% at 18% 0%, rgba(168,129,63,0.14) 0%, transparent 60%), radial-gradient(45% 60% at 85% 20%, rgba(192,133,123,0.12) 0%, transparent 55%)",
        }}
      />
      <div className="container-page py-16 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
