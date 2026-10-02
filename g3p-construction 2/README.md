# G3P Construction — Website

Quality. Integrity. Results.

A Next.js 14 (App Router) + Tailwind CSS marketing site for G3P Construction,
a Las Vegas residential construction and renovation company. Lead capture
(the "Request a Project Estimate" form) writes to a Postgres database via
Prisma, built against [Neon](https://neon.tech) serverless Postgres.

Strategy documents (sitemap, keyword map, content plan, SEO checklists, etc.)
live in [`/docs`](./docs) — start there for the "why" behind the site
architecture. [`/docs/MISSING_BUSINESS_INFO.md`](./docs/MISSING_BUSINESS_INFO.md)
is the single checklist of real business info still needed before launch.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Database:** Postgres via [Neon](https://neon.tech), accessed through
  Prisma's [Neon serverless driver adapter](https://www.prisma.io/docs/orm/overview/databases/neon)
  (no native binary query engine to deploy — this keeps builds fast and
  reliable on platforms like Railway)
- **Fonts:** Self-hosted via [Fontsource](https://fontsource.org) (Inter +
  Fraunces) — no runtime dependency on Google Fonts
- **Hosting:** [Railway](https://railway.app)
- **Source control:** GitHub

## Local development

```bash
npm install
cp .env.example .env   # then fill in your real Neon DATABASE_URL
npx prisma db push     # creates the EstimateRequest table in your Neon DB
npm run dev
```

Open http://localhost:3000.

## Deploying: GitHub → Railway → Neon → your domain

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "Initial commit: G3P Construction website"
gh repo create g3p-construction --private --source=. --remote=origin
git push -u origin main
```

(No `gh` CLI? Create an empty repo on github.com, then
`git remote add origin <your-repo-url>` and `git push -u origin main`.)

### 2. Create a Neon database

1. Go to [neon.tech](https://neon.tech) and create a new project (e.g. `g3p-construction`).
2. In the Neon dashboard, copy the **pooled** connection string — this is
   your `DATABASE_URL`.

### 3. Deploy to Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
2. Select this repo. Railway auto-detects Next.js via Nixpacks and uses the
   build/start commands from `railway.json` / `package.json`.
3. In the Railway project's **Variables** tab, add:
   - `DATABASE_URL` — the Neon pooled connection string from step 2
   - `NEXT_PUBLIC_SITE_URL` — your production domain, e.g. `https://www.g3pconstruction.com`
4. Deploy. Once it's live, run the Prisma schema push against the Neon
   database once (from your local machine, with `.env` pointing at the same
   `DATABASE_URL`):
   ```bash
   npx prisma db push
   ```

### 4. Connect your domain

1. In Railway, open the deployed service → **Settings → Networking → Custom Domain**.
2. Add your domain (e.g. `www.g3pconstruction.com`) and follow Railway's
   instructions to add the CNAME record at your domain registrar.
3. Update `NEXT_PUBLIC_SITE_URL` in Railway's variables to match, and
   redeploy.

### 5. After launch

- Submit the sitemap (`/sitemap.xml`) in Google Search Console.
- Work through [`/docs/MISSING_BUSINESS_INFO.md`](./docs/MISSING_BUSINESS_INFO.md),
  [`/docs/LOCAL_SEO_CHECKLIST.md`](./docs/LOCAL_SEO_CHECKLIST.md), and
  [`/docs/TECHNICAL_SEO_CHECKLIST.md`](./docs/TECHNICAL_SEO_CHECKLIST.md).

## Project structure

```
src/
  app/                  Routes (App Router) — one folder per URL path
    api/estimate/       POST endpoint that saves leads to Postgres
  components/           Shared UI (Header, Footer, cards, form, etc.)
  lib/
    site-config.ts      Business info (phone, email, service areas, etc.)
    services-data.ts    The 3 real services G3P performs — add more here
    projects-data.ts    Project case studies
    articles-data.ts    Published /resources articles
    prisma.ts           Database client (Neon adapter)
prisma/
  schema.prisma          Database schema (EstimateRequest leads table)
docs/                     Strategy docs — sitemap, keyword map, SEO checklists
```

## Adding content later (no rebuild required)

- **New service:** add an entry to `src/lib/services-data.ts`, then create
  `src/app/services/<slug>/page.tsx` following the pattern in the existing
  three service route files (each is ~10 lines — metadata plus
  `<ServicePageTemplate slug="..." />`).
- **New project case study:** add an entry to `src/lib/projects-data.ts`.
  The `/projects/[slug]` route picks it up automatically.
- **New article:** add an entry to `src/lib/articles-data.ts` and create
  `src/app/resources/<slug>/page.tsx`.

## Viewing submitted leads

Leads submitted through the estimate form land in the `EstimateRequest`
table in your Neon database. Easiest ways to view them for now:

- Neon's dashboard has a built-in SQL editor — run
  `select * from "EstimateRequest" order by "createdAt" desc;`
- Or run `npx prisma studio` locally (with `.env` pointing at the Neon DB)
  for a spreadsheet-like UI.

A proper leads dashboard page (`/admin`, password-protected) is a natural
next build — not included in this first pass so the public site could ship
first.
