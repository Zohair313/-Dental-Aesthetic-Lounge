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
      <div aria-hidden className="ring-gradient absolute inset-0 -z-10" />
      <div className="container-page py-16 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl">
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
