# Content Cluster Map

Each pillar is a service page. Supporting articles link back to their
pillar, and the pillar links out to relevant projects. This is the shape to
grow into as articles get written — most of the supporting articles listed
here are not yet published (see `CONTENT_PLAN_12MO.md`); only the pillar
pages and one article exist today.

```
General Contracting (pillar: /services/general-contracting-las-vegas)
├── How to Choose a General Contractor in Las Vegas  [PUBLISHED]
├── General Contractor vs. Handyman: Which Do You Need?
├── Questions to Ask Before Hiring a General Contractor
├── How to Compare Contractor Bids
├── What Should Be Included in a Construction Estimate?
└── How Construction Change Orders Work

Home Remodeling (pillar: /services/home-remodeling-las-vegas)
├── How Much Does a Home Remodel Cost in Las Vegas?
├── How Much Does a Kitchen Remodel Cost in Las Vegas?
├── How Much Does a Bathroom Remodel Cost in Las Vegas?
├── How Long Does a Home Remodel Take in Las Vegas?
├── Do You Need a Permit to Remodel a Home in Las Vegas?
├── Kitchen Remodeling Costs: Where Your Money Actually Goes
├── Bathroom Remodel Timeline: What Homeowners Should Expect
├── What to Know Before Renovating a Home in Summerlin
├── What to Know Before Remodeling a Home in Henderson
├── How to Prepare Your Home for a Major Renovation
└── Common Remodeling Mistakes Las Vegas Homeowners Make

Investment Property Renovation (pillar: /services/investment-property-renovation-las-vegas)
├── Best Home Renovations for Las Vegas Investment Properties
├── Should You Remodel Before Selling Your Las Vegas Home?
├── Renovating a Las Vegas Fixer-Upper: Where to Start
├── Renovating an Investment Property for Resale vs. Rental
└── How to Budget for a Las Vegas Home Remodel

(Future pillar, once outdoor-living work is confirmed as a real service)
Outdoor Living
└── Las Vegas Outdoor Living Ideas Built for the Desert
```

## Linking rules in place

- Every service page links to: relevant projects (filtered by
  `serviceSlug` in `projects-data.ts`), related services, and the contact
  page. See `src/components/ServicePageTemplate.tsx`.
- The one published article links back to the contact page; as more
  articles are added, link each one back to its pillar service page (not
  yet automated — add the link manually in each article's JSX, or extend
  `articles-data.ts` with a `relatedServiceSlug` field and reuse the
  pattern from `ServicePageTemplate`).
- No orphan pages: every project, service, and article is reachable from
  its hub page, and every hub page is in primary nav or footer nav.
