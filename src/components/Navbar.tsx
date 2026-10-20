"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { clinic } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Before & After" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openedFor, setOpenedFor] = useState<string | null>(null);

  // Close the mobile menu whenever the route changes, without an effect.
  if (open && openedFor !== pathname) {
    setOpen(false);
    setOpenedFor(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="hidden bg-night text-cream md:block">
        <div className="container-page flex items-center justify-between py-2 text-[12.5px]">
          <span className="flex items-center gap-2 text-cream/80">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {clinic.address.line1}, {clinic.address.line2}
          </span>
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-cream/80 transition-colors hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            {clinic.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/8 bg-cream/85 backdrop-blur-lg"
            : "border-b border-transparent bg-cream/40 backdrop-blur-sm"
        }`}
      >
        <div className="container-page flex items-center justify-between py-3.5">
          <Link href="/" aria-label={`${clinic.name} — home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-gold"
                      : "text-ink-soft hover:bg-sand hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact#book" className="btn-gold ml-3 !px-5 !py-2.5">
              Book Appointment
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setOpenedFor(pathname);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-ink/8 bg-cream md:hidden">
            <nav className="container-page flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink-soft hover:bg-sand"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact#book" className="btn-gold mt-2">
                Book Appointment
              </Link>
              <a
                href={clinic.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-ink/10 px-4 py-3 text-sm font-medium text-ink"
              >
                <Phone className="h-4 w-4 text-gold" />
                {clinic.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
