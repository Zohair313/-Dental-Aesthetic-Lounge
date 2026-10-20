"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { clinic } from "@/lib/data";
import { Logo } from "./ui/Logo";
import { ButtonAnchor, ButtonLink } from "./ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Before & After" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedFor, setOpenedFor] = useState<string | null>(null);
  const [elevated, setElevated] = useState(false);

  // Close the drawer on navigation without an effect.
  if (menuOpen && openedFor !== pathname) {
    setMenuOpen(false);
    setOpenedFor(null);
  }

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility bar — desktop only */}
      <div className="hidden bg-night text-cream/75 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[12.5px]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
            {clinic.address.line1}, {clinic.address.line2}
          </span>
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
            {clinic.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          elevated
            ? "border-b border-line bg-cream/90 shadow-[0_1px_20px_-12px_rgb(28_23_18/0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream/60 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[68px]">
          <ButtonLink
            href="/"
            variant="ghost"
            size="sm"
            className="!px-0 !py-0 hover:!bg-transparent"
            aria-label={`${clinic.name} — home`}
          >
            <Logo />
          </ButtonLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant="ghost"
                size="sm"
                aria-current={isActive(link.href) ? "page" : undefined}
                className={
                  isActive(link.href)
                    ? "!text-gold hover:!text-gold-dark"
                    : "!text-ink-soft"
                }
              >
                {link.label}
              </ButtonLink>
            ))}
            <ButtonLink href="/contact#book" className="ml-3">
              Book Appointment
            </ButtonLink>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((v) => !v);
              setOpenedFor(pathname);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/80 text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="border-t border-line bg-cream lg:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant="ghost"
                size="lg"
                className={`!justify-start ${
                  isActive(link.href) ? "!bg-sand !text-gold" : ""
                }`}
              >
                {link.label}
              </ButtonLink>
            ))}
            <ButtonLink href="/contact#book" size="lg" className="mt-2">
              Book Appointment
            </ButtonLink>
            <ButtonAnchor
              href={clinic.phoneHref}
              variant="outline"
              size="lg"
              className="mt-1"
            >
              <Phone className="h-4 w-4 text-gold" />
              {clinic.phone}
            </ButtonAnchor>
          </nav>
        </div>
      </header>
    </>
  );
}
