# Structured Data (Schema) Inventory

| Type | Where | File |
|---|---|---|
| `GeneralContractor` (extends `LocalBusiness`) | Every page (sitewide) | `src/components/StructuredData.tsx` |
| `Organization` | Every page (sitewide) | `src/components/StructuredData.tsx` |
| `WebSite` | Every page (sitewide) | `src/components/StructuredData.tsx` |
| `BreadcrumbList` | Every service page, every project page | `ServicePageTemplate.tsx`, `projects/[slug]/page.tsx` |
| `FAQPage` | Every service page (from that service's `faqs` array) | `ServicePageTemplate.tsx` |
| `Article` | Published resource articles | `resources/how-to-choose-a-general-contractor-in-las-vegas/page.tsx` |

## Intentionally not implemented yet

- **`AggregateRating` / `Review`** — no real reviews exist yet. Adding this
  before real reviews are collected would violate Google's structured-data
  guidelines (and the brief's explicit instruction not to fake it). Add
  once a real review source is wired up (see `LOCAL_SEO_CHECKLIST.md`).
- **`Person`** (team bios) — add once real team member names/bios/photos
  are provided (see `MISSING_BUSINESS_INFO.md`); wire into `/about`.
- **`ImageObject`** with full metadata on project photography — add once
  real project photos replace the placeholder graphics on project pages.

## Validation

After each deploy, spot-check with:
- Google's [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

Run both against the live URL, not localhost — some validators won't
accept `localhost` URLs.
