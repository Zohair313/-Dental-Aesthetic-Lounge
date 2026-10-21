/**
 * Central content/data for the Dental & Aesthetic Lounge website.
 *
 * Everything marked with a TODO should be verified/replaced with real clinic
 * content (doctors, reviews, hours, photos) before going live.
 */

export const clinic = {
  name: "Dental & Aesthetic Lounge",
  tagline: "Dental & Skin Clinic",
  category: "Dental & Skin Clinic",
  phone: "+92 303 017 1000",
  phoneHref: "tel:+923030171000",
  whatsapp: "https://wa.me/923030171000?text=Assalam-o-Alaikum!%20I%27d%20like%20to%20book%20an%20appointment%20at%20Dental%20%26%20Aesthetic%20Lounge.",
  // TODO: replace with the actual Facebook page URL
  facebook: "https://www.facebook.com/search/top?q=Dental%20%26%20Aesthetic%20Lounge",
  address: {
    line1: "Opposite G1 Market, Block G",
    line2: "Phase 1, Johar Town, Lahore",
    country: "Pakistan",
    full: "Opposite G1 Market, Block G, Phase 1, Johar Town, Lahore, Pakistan",
  },
  mapsQuery: "Dental & Aesthetic Lounge, Opposite G1 Market, Block G, Phase 1, Johar Town, Lahore",
  // Decoded from the Google Plus Code "F7GJ+38 Lahore" → full code 8J3PF7GJ+38.
  // TODO: verify the pin against the clinic's actual Google Maps listing.
  geo: { lat: 31.475188, lng: 74.280813 },
  plusCode: "F7GJ+38",
  rating: { value: 5.0, count: 45 },
  // TODO: verify actual clinic timings
  hours: [
    { days: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
} as const;

export type ServiceCategory = "dental" | "skin";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  details: string[];
  icon: string; // key into the icon map in ServicesGrid
}

export const services: Service[] = [
  // ── Dental ────────────────────────────────────────────────────────────────
  {
    slug: "veneers-smile-design",
    title: "Porcelain Veneers & Smile Design",
    category: "dental",
    short: "Custom e-max veneers and digital smile design for a natural Hollywood smile.",
    details: [
      "Digital smile preview before treatment starts",
      "Premium e-max and layered porcelain veneers",
      "Usually completed in 2–3 visits",
      "Colour and shape matched to your face",
    ],
    icon: "veneers",
  },
  {
    slug: "aligners-braces",
    title: "Clear Aligners & Braces",
    category: "dental",
    short: "Invisible aligners and modern metal/ceramic braces for every age.",
    details: [
      "Invisible clear aligners with 3D treatment plan",
      "Metal and ceramic self-ligating braces",
      "Regular adjustment sessions tracked visit-by-visit",
      "Retainers provided after completion",
    ],
    icon: "align",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "dental",
    short: "In-office laser whitening and take-home kits for a brighter smile in one visit.",
    details: [
      "In-office whitening with visible results in ~60 minutes",
      "Dentist-supervised take-home kits",
      "Safe for enamel with desensitising protocol",
      "Shade guide documented before & after",
    ],
    icon: "whitening",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "dental",
    short: "Single and multiple tooth replacement with titanium implants and zirconia crowns.",
    details: [
      "CBCT-guided implant planning",
      "Titanium implants with zirconia crowns",
      "Single sitting and delayed protocols available",
      "Multi-session tracking with session countdown",
    ],
    icon: "implant",
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    category: "dental",
    short: "Painless single-sitting RCT with rotary endodontics and apex locator.",
    details: [
      "Rotary endodontics with apex locator accuracy",
      "Single-sitting treatment in most cases",
      "Immediate crown/final restoration advice",
      "Emergency pain relief prioritised",
    ],
    icon: "rootCanal",
  },
  {
    slug: "checkup-cleaning",
    title: "Check-up, Cleaning & Gum Care",
    category: "dental",
    short: "Routine exams, scaling, polishing and complete gum health maintenance.",
    details: [
      "Full oral examination with digital X-rays",
      "Ultrasonic scaling and polishing",
      "Gum disease treatment and follow-ups",
      "Kids' dentistry and fluoride care",
    ],
    icon: "dentalCare",
  },

  // ── Skin & Aesthetics ─────────────────────────────────────────────────────
  {
    slug: "laser-rejuvenation",
    title: "Laser Skin Rejuvenation",
    category: "skin",
    short: "Fractional laser treatments for tone, texture, glow and overall renewal.",
    details: [
      "Medical-grade fractional laser platform",
      "Customised plans for face and body",
      "Packages tracked session-by-session",
      "Downtime and aftercare guidance included",
    ],
    icon: "laser",
  },
  {
    slug: "pigmentation-melasma",
    title: "Pigmentation & Melasma Treatment",
    category: "skin",
    short: "Multi-session protocols for dark spots, sun damage and stubborn melasma.",
    details: [
      "Diagnosed pigment mapping before treatment",
      "Laser, peels and medical skincare combined",
      "Progress photographed every session",
      "Maintenance plan to prevent recurrence",
    ],
    icon: "serum",
  },
  {
    slug: "acne-scars",
    title: "Acne & Acne Scar Reduction",
    category: "skin",
    short: "Active acne control plus scar revision with microneedling, RF and lasers.",
    details: [
      "Active acne and breakout management",
      "Microneedling, RF and fractional laser for scars",
      "Combined medical + procedural protocol",
      "Visible improvement tracked over sessions",
    ],
    icon: "skinLayers",
  },
  {
    slug: "hydrafacial-glow",
    title: "HydraFacial & Skin Hydration",
    category: "skin",
    short: "Deep cleansing, exfoliation and hydration facials with zero downtime.",
    details: [
      "Cleanse, exfoliate, extract and hydrate in one session",
      "Booster serums matched to skin type",
      "Event-ready glow with no downtime",
      "Monthly packages available",
    ],
    icon: "serum",
  },
  {
    slug: "anti-aging",
    title: "Anti-Aging & Skin Tightening",
    category: "skin",
    short: "Non-surgical tightening, wrinkle care and collagen-stimulating treatments.",
    details: [
      "Radiofrequency and HIFU skin tightening",
      "Collagen-stimulating protocols",
      "Natural-looking, gradual results",
      "Personalised age-defying plans",
    ],
    icon: "lift",
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "skin",
    short: "Comfortable, safe laser hair reduction for face and body with packages.",
    details: [
      "Diode laser suitable for South Asian skin",
      "Face and body packages with session countdown",
      "Cooling for a comfortable experience",
      "Course of 6–8 sessions typical",
    ],
    icon: "laser",
  },
];

/* ── Before & After gallery ──────────────────────────────────────────────── */

export interface GalleryCase {
  id: string;
  title: string;
  category: ServiceCategory;
  treatment: string;
  note: string;
  art:
    | { kind: "smile"; teeth: "stained" | "yellow" | "crooked" | "chipped" | "perfect"; braces?: boolean }
    | { kind: "skin"; concerns: "spots" | "dull" | "acne" };
  // When real patient photos are ready, provide URLs here and they will be
  // used instead of the illustrative renders.
  beforeSrc?: string;
  afterSrc?: string;
}

export const galleryCases: GalleryCase[] = [
  {
    id: "case-veneers-01",
    title: "Complete Smile Makeover",
    category: "dental",
    treatment: "10 × Porcelain Veneers",
    note: "Worn, discoloured edges restored with layered e-max veneers.",
    art: { kind: "smile", teeth: "stained" },
  },
  {
    id: "case-aligners-01",
    title: "Crowding Corrected",
    category: "dental",
    treatment: "Clear Aligners — 14 months",
    note: "Severe crowding aligned without surgery, tracked every visit.",
    art: { kind: "smile", teeth: "crooked", braces: true },
  },
  {
    id: "case-whitening-01",
    title: "One-Visit Whitening",
    category: "dental",
    treatment: "In-office Laser Whitening",
    note: "Deep staining from tea and tobacco lightened by several shades.",
    art: { kind: "smile", teeth: "yellow" },
  },
  {
    id: "case-bonding-01",
    title: "Chipped Tooth Repair",
    category: "dental",
    treatment: "Composite Bonding",
    note: "A fractured front tooth rebuilt and shaped in a single visit.",
    art: { kind: "smile", teeth: "chipped" },
  },
  {
    id: "case-laser-01",
    title: "Pigmentation Clearance",
    category: "skin",
    treatment: "Fractional Laser — 5 sessions",
    note: "Patchy melasma and sun damage evened out over five sessions.",
    art: { kind: "skin", concerns: "spots" },
  },
  {
    id: "case-glow-01",
    title: "Dull Skin Revival",
    category: "skin",
    treatment: "HydraFacial + Laser Glow Package",
    note: "Dehydrated, tired skin restored to a healthy, natural glow.",
    art: { kind: "skin", concerns: "dull" },
  },
];

/* ── Team (TODO: replace with the clinic's real doctors) ─────────────────── */

/**
 * PLACEHOLDER profiles. These names, roles and qualifications are invented and
 * must be replaced with the clinic's real staff before launch — including
 * written consent for any photographs used.
 *
 * Deliberately carries no `photo` field: we do not attach stock portraits to
 * named individuals, as that would present strangers as the clinic's doctors.
 */
export const team = [
  {
    name: "Dr. Ayesha Khan",
    role: "Dental Surgeon & Smile Design Specialist",
    qualifications: "BDS, FCPS (Prosthodontics)",
    focus: ["Veneers & Smile Design", "Implants", "Crowns & Bridges"],
  },
  {
    name: "Dr. Bilal Ahmed",
    role: "Orthodontist",
    qualifications: "BDS, MSc Orthodontics",
    focus: ["Clear Aligners", "Braces", "Retention & Relapse Cases"],
  },
  {
    name: "Dr. Hina Shahid",
    role: "Aesthetic Physician",
    qualifications: "MBBS, Diploma in Dermatology",
    focus: ["Laser Rejuvenation", "Pigmentation", "Anti-Aging Protocols"],
  },
] as const;

/* ── Clinic imagery ──────────────────────────────────────────────────────── */

/**
 * Every photo below is a REPRESENTATIVE stock image (Pexels licence, free for
 * commercial use) — not an actual photograph of this clinic. The UI labels
 * them accordingly via `clinicPhotos[].stock`.
 *
 * To use real clinic photos: drop them into `public/stock/` using the same
 * filenames and run `node scripts/optimise-stock.mjs`.
 */
export const clinicPhotos = [
  {
    src: "/img/reception.jpg",
    alt: "Clinic reception and waiting area",
    label: "Reception",
    stock: true,
  },
  {
    src: "/img/dental-room.jpg",
    alt: "Dental treatment room with modern dental chair",
    label: "Dental Suite",
    stock: true,
  },
  {
    src: "/img/laser-room.jpg",
    alt: "Aesthetic treatment room",
    label: "Aesthetic Suite",
    stock: true,
  },
  {
    src: "/img/tools.jpg",
    alt: "Sterilised dental instruments laid out on a tray",
    label: "Instruments",
    stock: true,
  },
  {
    src: "/img/facade.jpg",
    alt: "Clinic entrance and exterior",
    label: "Our Clinic",
    stock: true,
  },
  {
    src: "/img/hallway.jpg",
    alt: "Corridor leading to the treatment rooms",
    label: "The Corridor",
    stock: true,
  },
  {
    src: "/img/consultation.jpg",
    alt: "Dentist discussing a treatment plan with a patient",
    label: "Consultation",
    stock: true,
  },
  {
    src: "/img/xray.jpg",
    alt: "Dental X-ray being reviewed on a screen",
    label: "Digital Imaging",
    stock: true,
  },
  {
    src: "/img/dentist-work.jpg",
    alt: "Dentist carrying out a procedure",
    label: "In Treatment",
    stock: true,
  },
  {
    src: "/img/dental-detail.jpg",
    alt: "Close-up of a dental check-up",
    label: "Check-up",
    stock: true,
  },
] as const;

/* ── Testimonials (TODO: replace with real Google / Facebook reviews) ────── */

export const testimonials = [
  {
    name: "Ammar Sheikh",
    context: "Veneers & Smile Design",
    quote:
      "I got my veneers done here and the result is beyond what I imagined. The team explained every step, and the smile design preview matched the final result exactly.",
  },
  {
    name: "Fatima Noor",
    context: "Laser Pigmentation Package",
    quote:
      "Five sessions of laser for my melasma and the difference is huge. They track every session properly, so you always know how many are left and what to expect.",
  },
  {
    name: "Usman Tariq",
    context: "Clear Aligners",
    quote:
      "Best decision going with clear aligners here. Regular follow-ups, adjustments on time, and my teeth are perfectly straight now.",
  },
  {
    name: "Zainab Malik",
    context: "HydraFacial & Skin Care",
    quote:
      "Clean, modern clinic and very gentle staff. My HydraFacial sessions have become a monthly routine — skin feels fresh every single time.",
  },
] as const;

/* ── FAQs ────────────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "Do I need an appointment, or are walk-ins welcome?",
    a: "Walk-ins are welcome, but booking ahead guarantees your preferred time slot with the right specialist — especially for evening and weekend visits.",
  },
  {
    q: "How do multi-session treatments work?",
    a: "Treatments like aligners, laser packages and implant cases are planned as a series of sessions. Your plan and session countdown are tracked in our patient system so you always know exactly where you stand.",
  },
  {
    q: "Where exactly is the clinic?",
    a: "We are located opposite G1 Market in Block G, Phase 1, Johar Town, Lahore — one of the easiest landmarks to find in the area.",
  },
  {
    q: "Can I book on behalf of a family member?",
    a: "Yes. Simply fill in the booking form or call us with the patient's name and preferred service, and we will set the appointment up for you.",
  },
] as const;
