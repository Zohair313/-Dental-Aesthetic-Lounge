# Dental & Aesthetic Lounge — Clinic Website

Official website for **Dental & Aesthetic Lounge**, a 5★ rated dental & skin
clinic in Johar Town, Lahore.

> **Clinic details**
>
> | Field | Value |
> | --- | --- |
> | Name | Dental & Aesthetic Lounge |
> | Category | Dental & Skin Clinic |
> | Address | Opposite G1 Market, Block G, Phase 1, Johar Town, Lahore, Pakistan |
> | Phone | +92 303 017 1000 |
> | Rating | 5.0 ★ (45 reviews) |

---

## What this is

This repository contains **Part 1** of the clinic's digital ecosystem — the
marketing website with an interactive before/after gallery. The wider proposal
also covers a mobile appointment app (React Native / Flutter) and a desktop
patient session tracker (Electron), which are **not** part of this project.

Built with the stack agreed in the proposal:

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** for icons
- A **Node.js route handler** (`/api/appointments`) as the booking API surface

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, speciality overview, services, gallery preview, why-us, team, testimonials, contact + booking |
| `/services` | Full treatment catalogue, per-treatment inclusions, patient journey |
| `/gallery` | Interactive before/after gallery with Dental / Skin filtering |
| `/contact` | Address, map embed, opening hours, booking form, FAQs |
| `/api/appointments` | `POST` appointment requests (validated, ready for DB wiring) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (Turbopack)
npm start        # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type check
```

## The before/after gallery

`src/components/BeforeAfter.tsx` renders a draggable comparison slider
(pointer drag, or arrow keys / Home / End when the handle is focused).

Each case in `src/lib/data.ts` has a `beforeSrc` / `afterSrc` field. When those
are set, the component uses the real patient photographs automatically — no code
changes needed. Until then it falls back to the illustrative SVG renders in
`src/components/CaseArt.tsx`, and labels them as illustrative.

> Before publishing real patient photography, make sure written patient consent
> has been obtained for each case.

## Editing content

Almost all copy lives in **`src/lib/data.ts`**:

- `clinic` — name, phone, address, hours, rating, social links
- `services` — treatments, descriptions and what each one includes
- `galleryCases` — before/after cases
- `team` — doctors and their specialities
- `testimonials` — patient reviews
- `faqs` — contact page questions

### Before go-live (outstanding items)

- [ ] Replace the placeholder Facebook URL (`clinic.facebook`)
- [ ] Replace the placeholder doctors in `team` with the real clinic team
- [ ] Replace placeholder testimonials with real Google / Facebook reviews
- [ ] Confirm the opening hours in `clinic.hours`
- [ ] Add real, consent-cleared before/after photographs (`beforeSrc` / `afterSrc`)
- [ ] Wire `/api/appointments` to PostgreSQL (via Prisma) and front-desk notifications
- [ ] Point `metadataBase` in `src/app/layout.tsx` at the final production domain

## Project structure

```
src/
├─ app/
│  ├─ api/appointments/route.ts   # booking API (POST)
│  ├─ contact/page.tsx
│  ├─ gallery/page.tsx
│  ├─ services/page.tsx
│  ├─ globals.css                 # Tailwind theme + design tokens
│  ├─ layout.tsx                  # fonts, metadata, JSON-LD, nav/footer
│  ├─ not-found.tsx
│  └─ page.tsx                    # home
├─ components/                    # Navbar, Hero, BeforeAfter, BookingForm, …
└─ lib/data.ts                    # all clinic content/data
```

## Notes

- SEO: per-page metadata, Open Graph tags, `Dentist` JSON-LD (address, phone,
  aggregate rating) and a canonical URL are configured in `layout.tsx`.
- Accessibility: the comparison slider is a keyboard-operable ARIA `slider`,
  and animations respect `prefers-reduced-motion`.
- `cacheComponents` is enabled, so any runtime/date-dependent value must be
  deferred (client-side or behind `connection()`) rather than read during
  prerender.

---

Prepared as part of the Dental & Aesthetic Lounge digital platform proposal —
**Techmire**.
