# Technical SEO Checklist

## Implemented in this build

- [x] Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`)
- [x] Logical heading hierarchy (one `<h1>` per page, `<h2>`/`<h3>` nested correctly)
- [x] Clean, crawlable URLs (`/services/home-remodeling-las-vegas`, no query-string routing)
- [x] Canonical tags on every indexable page (`alternates.canonical` in each page's metadata)
- [x] Auto-generated XML sitemap (`/sitemap.xml` via `src/app/sitemap.ts`) covering all services, projects, and articles
- [x] `robots.txt` (`src/app/robots.ts`) allowing crawl, disallowing `/api/`, pointing to the sitemap
- [x] Unique title tag + meta description per page (no shared/duplicate metadata)
- [x] Open Graph + Twitter card metadata (sitewide default in `layout.tsx`, override per page as needed)
- [x] JSON-LD structured data: `GeneralContractor`/`LocalBusiness`, `Organization`, `WebSite` sitewide; `BreadcrumbList` on service/project pages; `FAQPage` on service pages; `Article` on blog posts
- [x] Custom 404 page with navigation back into the site (`src/app/not-found.tsx`)
- [x] Mobile-responsive layout (Tailwind, tested down to 375px width)
- [x] No render-blocking external font requests — fonts self-hosted via Fontsource (also avoids a Google Fonts dependency at build time)
- [x] Images use `next/image` where applicable (logo/icons); `next.config.mjs` enables AVIF/WebP
- [x] Security headers (`X-Content-Type-Options`, `Referrer-Policy`) in `next.config.mjs`
- [x] `noindex` on legal pages that shouldn't rank (`/privacy`, `/terms`)
- [x] No orphan pages — see linking rules in `CONTENT_CLUSTERS.md`
- [x] Descriptive internal link text (no bare "click here")

## Requires external configuration (not code — do these after deploy)

- [ ] **Google Search Console**: verify the domain, submit `/sitemap.xml`
- [ ] **Google Analytics 4**: add a GA4 measurement ID and wire up `gtag` (see `ANALYTICS_PLAN.md` — `src/lib/analytics.ts` is already set up to call `window.gtag` once it exists; add the GA script tag to `layout.tsx`)
- [ ] **Google Tag Manager** (optional, if preferred over direct GA4): add the GTM snippet to `layout.tsx`
- [ ] **HTTPS**: automatic via Railway once the custom domain is connected — confirm the padlock after DNS propagates
- [ ] **301 redirects**: if G3P ever had a prior website/URLs, map old → new URLs (not applicable at initial launch)
- [ ] **Structured data validation**: run the live site through Google's Rich Results Test and the Schema.org validator after deploy
- [ ] **Core Web Vitals**: run Lighthouse / PageSpeed Insights on the live (deployed) URL — local dev numbers aren't representative

## Explicitly avoided (per the brief's "do not" list)

- No duplicate/keyword-swapped city pages
- No doorway pages for services not actually performed
- No fake `AggregateRating` schema (no review schema has been added — add it only once real reviews exist, following Google's review-snippet guidelines)
- No autoplay background video
- No heavy animation libraries — all motion is CSS transitions
