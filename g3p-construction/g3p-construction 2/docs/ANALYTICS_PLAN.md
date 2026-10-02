# Analytics Plan

## Setup (not yet wired up — requires real account IDs)

1. Create a **Google Analytics 4** property for the live domain.
2. Add the GA4 snippet to `src/app/layout.tsx` (in the `<head>`, via
   `next/script` with `strategy="afterInteractive"`), using a
   `NEXT_PUBLIC_GA_ID` environment variable.
3. Once that's live, every call to `trackEvent(...)` in
   `src/lib/analytics.ts` starts firing automatically — no other code
   changes needed, since the form and CTAs already call it.
4. Register the domain in **Google Search Console** and submit `/sitemap.xml`.
5. Optional: wire up **Google Tag Manager** instead of GA4 directly, if you
   want non-developers to manage additional tags later.

## Conversion events already instrumented in code

| Event | Fires when | Where in code |
|---|---|---|
| `estimate_form_started` | User focuses any field in the estimate form for the first time | `src/components/EstimateForm.tsx` |
| `estimate_form_submitted` | Estimate form successfully saves to the database | `src/components/EstimateForm.tsx` |
| `phone_click` | Any `tel:` link is clicked (header, contact page) | `src/components/TrackedLink.tsx`, used in `Header.tsx` + `contact/page.tsx` |
| `email_click` | Any `mailto:` link is clicked (contact page) | `src/components/TrackedLink.tsx`, used in `contact/page.tsx` |
| `project_viewed` | *(defined, not yet wired)* | `src/lib/analytics.ts` |
| `service_cta_clicked` | *(defined, not yet wired)* | `src/lib/analytics.ts` |

**To finish wiring the remaining events**: `project_viewed` would fire from
a `useEffect` on `projects/[slug]/page.tsx` (needs a small client
component, same pattern as `TrackedLink`), and `service_cta_clicked` would
wrap the CTA buttons on service pages the same way `TrackedLink` wraps
phone/email links. Left for a quick follow-up rather than guessing at the
final GA4 event structure before an account exists.

## Explicitly not done

- No conversion fires simply because a page loaded (per the brief's
  instruction) — every event above is tied to a real user action.
- No UTM-parameter handling is built into the estimate form yet; add
  hidden fields that read `utm_source`/`utm_medium`/`utm_campaign` from the
  URL on page load and include them in the form POST once campaigns exist
  that need attribution (the `EstimateRequest` database model already has
  columns ready for this — `source`, `utmSource`, `utmMedium`, `utmCampaign`).

## Recommended GA4 conversion marking

Once GA4 is live, mark `estimate_form_submitted` and `phone_click` as
**key events** (GA4's term for conversions) in the GA4 admin — these are
the two actions that most directly indicate a qualified lead.
