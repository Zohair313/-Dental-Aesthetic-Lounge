import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { clinic } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = "https://dentalaestheticlounge.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dental & Aesthetic Lounge — Dental & Skin Clinic in Johar Town, Lahore",
    template: "%s — Dental & Aesthetic Lounge",
  },
  description:
    "Dental & Aesthetic Lounge is a 5-star rated dental & skin clinic in Johar Town, Lahore. Veneers, aligners, whitening, implants, laser skin rejuvenation and more. Book an appointment: +92 303 017 1000.",
  keywords: [
    "dental clinic Johar Town",
    "skin clinic Lahore",
    "dentist Johar Town Lahore",
    "veneers Lahore",
    "clear aligners Lahore",
    "laser skin treatment Lahore",
    "teeth whitening Lahore",
    "dental implants Lahore",
    "Dental & Aesthetic Lounge",
  ],
  openGraph: {
    title: "Dental & Aesthetic Lounge — Dental & Skin Clinic, Johar Town Lahore",
    description:
      "5★ rated dental & skin clinic in Johar Town, Lahore. Smile design, aligners, whitening, implants, laser rejuvenation and more.",
    url: siteUrl,
    siteName: clinic.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1600,
        height: 1200,
        alt: "Dental & Aesthetic Lounge — Johar Town, Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental & Aesthetic Lounge — Johar Town, Lahore",
    description: "5★ rated dental & skin clinic in Johar Town, Lahore.",
    images: ["/img/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  medicalSpecialty: ["Dentistry", "Dermatology"],
  telephone: "+92-303-017-1000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite G1 Market, Block G, Phase 1",
    addressLocality: "Johar Town, Lahore",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  hasMap: `https://www.google.com/maps?q=${clinic.geo.lat},${clinic.geo.lng}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(clinic.rating.value),
    reviewCount: String(clinic.rating.count),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
