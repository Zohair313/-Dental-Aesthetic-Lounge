import {
  Sparkles,
  ShieldCheck,
  Layers,
  Smartphone,
  HeartHandshake,
  Microscope,
  type LucideIcon,
} from "lucide-react";

const pillars: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Microscope,
    title: "Modern equipment",
    copy: "Digital imaging, rotary endodontics, medical-grade lasers and 3D treatment planning — the tools behind consistent results.",
  },
  {
    icon: Layers,
    title: "Multi-session planning",
    copy: "Aligners, implant cases and laser packages are planned as sessions and tracked properly, so you always know what comes next.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & sterilisation",
    copy: "Strict instrument sterilisation and single-use protocols for every dental and skin procedure.",
  },
  {
    icon: Smartphone,
    title: "Easy booking",
    copy: "Book online in seconds or reach us on WhatsApp. Appointment reminders keep your treatment schedule on track.",
  },
  {
    icon: Sparkles,
    title: "Natural-looking results",
    copy: "Conservative dentistry and aesthetic medicine focused on enhancing what you already have.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle, honest care",
    copy: "Clear pricing, honest advice and treatment options explained before anything begins.",
  },
];

export function WhyUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map(({ icon: Icon, title, copy }) => (
        <article key={title} className="rounded-3xl border border-ink/8 bg-sand/50 p-7">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
        </article>
      ))}
    </div>
  );
}
