import type { SVGProps } from "react";

/* ────────────────────────────────────────────────────────────────────────────
 * Shared wrapper
 *
 * lucide-react ships no dental or aesthetic-clinic glyphs, and pulling in an
 * icon-font CDN for a handful of shapes would add a third-party request and
 * ~100 KB of CSS/fonts to every page. These are hand-drawn inline SVGs instead:
 * same 24×24 grid, same 1.7 stroke weight and `strokeWidth` override contract
 * as the lucide icons they sit beside, so they are indistinguishable in use.
 * ──────────────────────────────────────────────────────────────────────────── */

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

function Glyph({
  className = "h-4 w-4",
  strokeWidth = 1.7,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ── Brand glyphs ─────────────────────────────────────────────────────────── */

/** Facebook brand glyph (lucide-react no longer ships brand icons). */
export function FacebookIcon({
  className = "h-4 w-4",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** WhatsApp brand glyph. */
export function WhatsAppIcon({
  className = "h-4 w-4",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24Zm-3.4 4.03c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.13.17 1.73 2.77 4.28 3.78.6.23 1.06.37 1.42.48.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.22-.16-.47-.28-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.25-.65.82-.79.99-.15.16-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.39.11-.51.11-.11.29-.3.43-.45.14-.16.19-.27.29-.45.09-.17.04-.33-.03-.45-.06-.13-.55-1.36-.77-1.86-.2-.48-.4-.42-.56-.42l-.47-.01Z" />
    </svg>
  );
}

/* ── Dental ───────────────────────────────────────────────────────────────── */

/**
 * Tooth. Used for general dentistry and gum care where lucide has no match.
 * Crown with two roots, drawn as one continuous outline.
 */
export function ToothIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 5.4C10.4 4 8.6 3.3 7.1 4.2 5.4 5.2 4.9 7.3 5.2 9.6c.2 1.7.7 3.3 1.2 4.9.3 1 .5 2.3.9 3.1.3.7 1.1.8 1.5.1.4-.8.5-2.2.7-3.3.2-1 .4-1.8 2.5-1.8s2.3.8 2.5 1.8c.2 1.1.3 2.5.7 3.3.4.7 1.2.6 1.5-.1.4-.8.6-2.1.9-3.1.5-1.6 1-3.2 1.2-4.9.3-2.3-.2-4.4-1.9-5.4-1.5-.9-3.3-.2-4.9 1.2Z" />
    </Glyph>
  );
}

/** Single tooth with an implant screw below it. */
export function ImplantIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.2c-1.9-1.1-3.8-.6-4.7.6-1 1.3-.8 3.2-.4 5 .3 1.3.7 2.6.9 3.8" />
      <path d="M12 3.2c1.9-1.1 3.8-.6 4.7.6 1 1.3.8 3.2.4 5-.3 1.3-.7 2.6-.9 3.8" />
      <path d="M9.4 12.6h5.2" />
      <path d="M12 12.6v8.2" />
      <path d="M10 15.1h4M10 17.4h4M10.7 19.6h2.6" />
    </Glyph>
  );
}

/** Arch of teeth with a bracket-and-wire brace across them. */
export function BracesIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 13.5c0-5 3.6-8.5 8-8.5s8 3.5 8 8.5" />
      <path d="M4 13.5c0 4.6 3.6 7.1 8 7.1s8-2.5 8-7.1" />
      <path d="M4 13.5h16" />
      <rect x="6.4" y="11.3" width="3.2" height="4.4" rx="0.8" />
      <rect x="14.4" y="11.3" width="3.2" height="4.4" rx="0.8" />
      <rect x="10.4" y="11.3" width="3.2" height="4.4" rx="0.8" />
    </Glyph>
  );
}

/** Tooth with a sparkle — whitening / bleaching. */
export function WhiteningIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M11 7.6C9.7 6.5 8.3 6 7.1 6.7 5.8 7.5 5.4 9.2 5.6 11c.2 1.4.6 2.7 1 4 .2.8.4 1.9.7 2.5.3.6.9.7 1.2.1.3-.7.4-1.8.6-2.7.1-.8.3-1.4 1.9-1.4s1.8.6 1.9 1.4c.2.9.3 2 .6 2.7.3.6.9.5 1.2-.1.3-.6.5-1.7.7-2.5.4-1.3.8-2.6 1-4 .2-1.8-.2-3.5-1.5-4.3-1.2-.7-2.6-.2-3.9.9Z" />
      <path d="M17.6 3.4c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4Z" />
    </Glyph>
  );
}

/** Molar with a focused pulse at the root — endodontics / root canal. */
export function RootCanalIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 4.6C10.4 3.2 8.6 2.5 7.1 3.4 5.4 4.4 4.9 6.5 5.2 8.8c.2 1.7.7 3.3 1.2 4.9.3 1 .5 2.3.9 3.1.3.7 1.1.8 1.5.1.4-.8.5-2.2.7-3.3.2-1 .4-1.8 2.5-1.8s2.3.8 2.5 1.8c.2 1.1.3 2.5.7 3.3.4.7 1.2.6 1.5-.1.4-.8.6-2.1.9-3.1.5-1.6 1-3.2 1.2-4.9.3-2.3-.2-4.4-1.9-5.4-1.5-.9-3.3-.2-4.9 1.2Z" />
      <path d="M12 8.4v5.2" />
      <path d="M10.4 10.2 12 11.8l1.6-1.6" />
      <path d="M12 15.4v2.2" />
    </Glyph>
  );
}

/** Toothbrush over a tooth — hygiene and check-ups. */
export function DentalCareIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M9.4 10.4c-1.4-1.2-2.9-1.8-4.2-1-1.4.9-1.9 2.8-1.6 4.8.2 1.5.7 3 1.1 4.5.2.9.4 2.1.8 2.8.3.6.9.7 1.3.1.3-.7.4-2 .6-3 .2-.9.4-1.6 2.6-1.6" />
      <path d="M14.8 7.6h5.6a1.4 1.4 0 0 1 1.4 1.4v1.2a1.4 1.4 0 0 1-1.4 1.4h-5.6a1.4 1.4 0 0 1-1.4-1.4V9a1.4 1.4 0 0 1 1.4-1.4Z" />
      <path d="M13.4 12.6 21 21" />
      <path d="M15.6 7.6v-3M18.6 7.6v-3M21.8 7.6v-3" />
    </Glyph>
  );
}

/** Three teeth in a row — smile design / veneers. */
export function VeneerIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 12.4c0-4.4 3.6-7.6 8-7.6s8 3.2 8 7.6" />
      <path d="M4 12.4c0 3.9 3.6 5.9 8 5.9s8-2 8-5.9" />
      <path d="M4 12.4h16" />
      <path d="M9.3 5.5v11.6M14.7 5.5v11.6" />
    </Glyph>
  );
}

/* ── Skin & aesthetics ────────────────────────────────────────────────────── */

/** Laser handpiece emitting a beam onto a skin surface. */
export function LaserIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M14.6 3.2 19 7.6l-2.6 2.6-4.4-4.4 2.6-2.6Z" />
      <path d="M12 9.8 5.6 16.2" />
      <path d="M9.4 14.6 4.8 10l1.9-1.9 4.6 4.6" />
      <path d="M15.2 11.4l4.1 4.1a1.6 1.6 0 0 1 0 2.3l-1.3 1.3a1.6 1.6 0 0 1-2.3 0l-4.1-4.1" />
      <path d="M8.6 4.2v-2M5.6 6.1 4.2 4.7M4.2 9.1h-2" />
    </Glyph>
  );
}

/** Droplet with an inner highlight — serums, hydration, pigmentation. */
export function SerumIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.4s6 6.3 6 10.2a6 6 0 0 1-12 0c0-3.9 6-10.2 6-10.2Z" />
      <path d="M9.4 13.6a2.7 2.7 0 0 0 2.7 2.7" />
    </Glyph>
  );
}

/** Face in profile with a sparkle — facial rejuvenation. */
export function FaceGlowIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M13.6 3.4a8 8 0 1 0 0 16c.9 0 1.4-.5 1.4-1.2v-1.3c0-.7-.5-1.2-1.2-1.2h-1.4c-.6 0-1-.4-1-1v-1.4" />
      <path d="M9.4 8.2h.01M13.4 7.4h.01" />
      <path d="M9.6 12.4a3.4 3.4 0 0 0 3.4 2.6" />
      <path d="M19.6 3.2c.3 1.5 1.1 2.3 2.6 2.6-1.5.3-2.3 1.1-2.6 2.6-.3-1.5-1.1-2.3-2.6-2.6 1.5-.3 2.3-1.1 2.6-2.6Z" />
    </Glyph>
  );
}

/** Layered skin — pigment, texture and acne-scar work. */
export function SkinLayersIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.2 3.4 7.4a.8.8 0 0 0 0 1.4l8.6 4.2 8.6-4.2a.8.8 0 0 0 0-1.4L12 3.2Z" />
      <path d="M3.4 12.4a.8.8 0 0 0 0 1.4L12 18l8.6-4.2a.8.8 0 0 0 0-1.4" />
      <path d="M3.4 16.9a.8.8 0 0 0 0 1.4L12 22.5l8.6-4.2a.8.8 0 0 0 0-1.4" />
    </Glyph>
  );
}

/** Droplet inside a shield — protective, gentle treatments. */
export function SkinShieldIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 2.8 4.8 5.6v5.8c0 4.4 3 7.6 7.2 9.8 4.2-2.2 7.2-5.4 7.2-9.8V5.6L12 2.8Z" />
      <path d="M12 8.2s2.6 2.7 2.6 4.4a2.6 2.6 0 0 1-5.2 0c0-1.7 2.6-4.4 2.6-4.4Z" />
    </Glyph>
  );
}

/** Clock with a pressure arrow — anti-aging / tightening over time. */
export function LiftIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 4.2a7.8 7.8 0 1 0 7.8 7.8" />
      <path d="M12 7.6v4.4l2.8 1.7" />
      <path d="M16.4 2.6h4.8v4.8" />
      <path d="m21.2 2.6-4.6 4.6" />
    </Glyph>
  );
}
