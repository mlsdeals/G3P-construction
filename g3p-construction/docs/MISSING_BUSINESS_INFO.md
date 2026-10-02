# Missing Business Information

Everything below is currently a placeholder in the code. The build was not
held up waiting for this — placeholders are clearly marked (`[PHONE]`,
`[EMAIL]`, etc.) so they're easy to find and replace. Search the codebase
for `[` to find every remaining placeholder, or check these specific spots.

## Core business info → `src/lib/site-config.ts`

- [ ] Phone number (and `phoneHref`, e.g. `tel:+17025551234`)
- [ ] Email address
- [ ] Nevada contractor license number (**legally required to be accurate
      before this goes live** — do not publish a license number without
      confirming it against the NSCB license search)
- [ ] Business address — or confirm G3P is service-area-only with no public
      office, in which case the street-address line should be removed
      entirely rather than left as a placeholder
- [ ] Business hours
- [ ] Social media profile URLs (Instagram, Facebook, LinkedIn) — leave
      blank if they don't exist yet rather than linking to nothing

## Services → `src/lib/services-data.ts`

Confirmed as of this build: General Contracting, Home Remodeling &
Renovation, Investment Property Renovation. If G3P performs additional
services (kitchen/bath specifically as standalone offerings, exterior
work, outdoor living, etc.), say so and pages can be added following the
existing pattern — see `README.md`.

## Projects → `src/lib/projects-data.ts` and `/projects/[slug]`

Eight case studies were created from the real addresses provided
(11527 Morning Grove, 1995 Alcova Ridge Dr, 213 Satin Mist, 9336 Sienna
Vista, 2621 Hanging Rock Dr, 9624 Camden Hills, 11468 Snow Creek Ave,
11305 Altura Vista Ave). For each one, still needed:

- [ ] Real project type (currently assigned generically — confirm or correct)
- [ ] Scope of work actually performed
- [ ] Before / during / after photography
- [ ] A short narrative: existing condition, objective, challenges, solution

**Note on photography:** this build does not pull photos from Zillow,
Redfin, or similar listing sites — those photos are typically owned by the
listing agent/photographer, not by G3P, and republishing them on a
marketing site without a license is a real copyright risk (and the homes
may now have different owners). The project pages currently show a styled
placeholder instead. Use G3P's own job-site photography once available.

## About page → `src/app/about/page.tsx`

- [ ] Real leadership bios and team photos
- [ ] Crew size / experience framing (accurate, not inflated)

## Legal pages

- [ ] `/privacy` — real privacy policy (ideally reviewed by counsel)
- [ ] `/terms` — real terms of use (ideally reviewed by counsel)

## Analytics & tracking

- [ ] Google Analytics 4 measurement ID
- [ ] Google Search Console verification
- [ ] Google Business Profile URL (for cross-linking / UTM tracking)

## Reviews

- [ ] Real customer reviews (none are fabricated or placeholder-displayed
      in this build — a testimonials section is intentionally not built
      until real reviews exist)

## Original brief items answered during the build

- **Tech stack**: Next.js + Tailwind + Prisma/Neon, per your choice.
- **Services**: General Contracting, Home Remodeling, Investment Property
  Renovation, per your confirmation.
- **Contact info**: placeholders, per your choice — see above.
- **Project photos**: placeholders with real addresses, per the discussion
  above about Zillow/Redfin copyright — see above.
