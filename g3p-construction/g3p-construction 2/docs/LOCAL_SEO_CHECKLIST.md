# Local SEO & Google Business Profile Checklist

## NAP consistency

Keep Name, Address, Phone identical everywhere they appear: the website
footer/contact page, Google Business Profile, and any directory listing.
Once real values replace the placeholders in `src/lib/site-config.ts`,
that file becomes the single source of truth — copy from it, don't
retype it, when filling out other profiles.

## Google Business Profile setup

- [ ] **Primary category**: General Contractor (confirm this is the most
      accurate match vs. "Construction Company" or "Remodeler" — primary
      category has an outsized effect on which searches you show up for)
- [ ] **Secondary categories**: add specific ones that match real services —
      e.g. Kitchen Remodeler, Bathroom Remodeler, Home Builder — only for
      services actually performed
- [ ] **Business description**: write from the same positioning as the
      website (Quality. Integrity. Results.) — avoid unverifiable claims
      ("#1 contractor," fabricated years in business)
- [ ] **Services list**: mirror the real services in `services-data.ts` exactly
- [ ] **Service areas**: mirror `siteConfig.serviceAreas`
- [ ] **Hours**: real hours, once confirmed
- [ ] **Phone**: real number, matching the website exactly (same formatting)
- [ ] **Website URL**: the live production domain
- [ ] **Project photography**: upload real completed-project photos regularly — this is also what the website's project pages need (see `MISSING_BUSINESS_INFO.md`)
- [ ] **Before/after photography**: a strong differentiator for GBP's photo-heavy search results
- [ ] **UTM tracking**: append UTM params to the website link in the GBP profile (e.g. `?utm_source=google&utm_medium=gbp&utm_campaign=profile`) so Analytics can attribute GBP traffic separately

## Review generation (legitimate only)

- [ ] Build a simple post-project workflow: at final walkthrough, send a
      direct link to leave a Google review (never incentivize the content
      of the review — incentivizing *that someone leaves* a review, with
      no influence on what they say, is fine; paying for positive
      reviews is not)
- [ ] Respond to every review, positive and negative, professionally
- [ ] Never generate or write fake reviews — the website is intentionally
      shipping with **no** testimonials section populated with placeholder
      quotes; add a real-reviews section only once real reviews exist, and
      pull them via a legitimate method (manual entry from real quotes, or
      a reviews API) — not fabricated

## Regular maintenance (ongoing, not one-time)

- [ ] Photo uploads on a regular cadence (new project photos as jobs complete)
- [ ] Google Posts / updates for completed projects, availability, etc.
- [ ] Keep hours current around holidays
- [ ] Monitor and respond to Q&A on the profile

## Local directories & citations (legitimate, no spam)

- [ ] Nevada State Contractors Board — public license lookup already lists you; make sure business name matches exactly
- [ ] Local chamber of commerce membership (if applicable)
- [ ] Industry associations (e.g. NARI, local builders associations) if G3P joins one
- [ ] Supplier/manufacturer "find a pro" directories for brands actually used
- [ ] Realtor-facing directories if G3P builds formal realtor partnerships

Do not use mass directory submission services or paid link farms — see
`BACKLINK_STRATEGY.md` for the legitimate version of this.
