# Site Map

## Live now

```
/                                                          Homepage
/services                                                  Services hub
/services/general-contracting-las-vegas                    Service page
/services/home-remodeling-las-vegas                        Service page
/services/investment-property-renovation-las-vegas         Service page
/projects                                                  Portfolio hub
/projects/morning-grove                                    Case study
/projects/alcova-ridge                                     Case study
/projects/satin-mist                                       Case study
/projects/sienna-vista                                     Case study
/projects/hanging-rock                                     Case study
/projects/camden-hills                                     Case study
/projects/snow-creek                                       Case study
/projects/altura-vista                                     Case study
/about                                                      Company / team
/our-process                                                8-step process
/contact                                                    Contact + estimate form
/resources                                                  Blog / resource hub
/resources/how-to-choose-a-general-contractor-in-las-vegas  Article
/privacy                                                    Privacy policy (noindex)
/terms                                                      Terms of use (noindex)
/sitemap.xml                                                Auto-generated (src/app/sitemap.ts)
/robots.txt                                                 Auto-generated (src/app/robots.ts)
```

## Designed to expand without restructuring

The architecture intentionally leaves room to grow — each addition below is a
new file, not a rebuild:

**More services** (only once G3P actually performs them):
`/services/kitchen-remodeling-las-vegas`,
`/services/bathroom-remodeling-las-vegas`,
`/services/luxury-home-remodeling-las-vegas`,
`/services/exterior-renovation-las-vegas`, etc.

**Location pages** — only if/when they can be genuinely useful and unique
per area (not keyword-swapped templates): `/service-areas/henderson`,
`/service-areas/summerlin`, etc. Do not build these until there's real,
area-specific content to put on them (see the "no doorway pages" rule in
`/docs/TECHNICAL_SEO_CHECKLIST.md`).

**Content clusters** — supporting articles under `/resources/` that link
back to pillar service pages (see `/docs/CONTENT_CLUSTERS.md`).

**Future divisions** (per the original brief): Commercial Construction,
Custom Homes, additional Nevada markets — each would get its own top-level
section (`/commercial/`, `/custom-homes/`) without touching the existing
residential-renovation architecture.

## Deliberately not built yet

- A dozen-plus keyword-driven service pages the brief suggested
  (`/flooring-installation-las-vegas`, `/tile-installation-las-vegas`,
  etc.) — only 3 services were confirmed as real as of this build. Adding a
  page for a service G3P doesn't perform would be a doorway page.
- An `/admin` leads dashboard — see the note at the bottom of `README.md`.
- Full case-study write-ups — the 8 project pages exist with the real
  addresses provided, as placeholders for scope, photography, and results.
