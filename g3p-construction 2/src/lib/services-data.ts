// Core services G3P actually performs, confirmed 2026-10-01. Keep this list
// scoped to real services — see /docs/SITE_MAP.md for how to add more later
// without restructuring the site.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  scope: string[];
  approach: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "general-contracting-las-vegas",
    name: "General Contracting",
    shortName: "General Contracting",
    summary:
      "Licensed general contracting and full project management for residential construction throughout the Las Vegas Valley.",
    primaryKeyword: "general contractor Las Vegas",
    secondaryKeywords: [
      "Las Vegas general contractor",
      "residential contractor Las Vegas",
      "construction company Las Vegas",
    ],
    intro:
      "Every project — whole-home remodel, structural change, or ground-up build-out — needs one party accountable for scope, schedule, subcontractors, permitting, and quality. That's the job of a general contractor, and it's the foundation of how G3P runs every job.",
    scope: [
      "Project scheduling and subcontractor coordination",
      "Permitting and inspection management",
      "Budget tracking and change-order documentation",
      "On-site quality control at every phase",
      "Single point of accountability from consult to final walkthrough",
    ],
    approach: [
      "We scope the job in writing before a single wall comes down.",
      "You get a schedule, not a guess — and updates when it changes.",
      "Every trade on site is managed by G3P, not left to coordinate itself.",
      "Final walkthrough happens against the original scope, line by line.",
    ],
    faqs: [
      {
        q: "Does G3P handle permits?",
        a: "Yes. Permitting and inspections are managed as part of every general contracting project — it's not an add-on.",
      },
      {
        q: "Do you work with real estate investors?",
        a: "Yes. A significant share of our work is investment-property and resale-focused renovation — see our Investment Property Renovation service.",
      },
      {
        q: "Can you work on occupied homes?",
        a: "In many cases, yes — this is scoped and discussed during the site walk, since it affects sequencing and schedule.",
      },
    ],
  },
  {
    slug: "home-remodeling-las-vegas",
    name: "Home Remodeling & Renovation",
    shortName: "Home Remodeling",
    summary:
      "Whole-home and room-by-room remodeling for Las Vegas homeowners — kitchens, bathrooms, interior renovations, and property improvements.",
    primaryKeyword: "home remodeling Las Vegas",
    secondaryKeywords: [
      "home renovation Las Vegas",
      "Las Vegas remodeling contractor",
      "kitchen and bathroom remodeling Las Vegas",
    ],
    intro:
      "A remodel is only as good as the planning behind it. G3P manages home remodeling projects from design selections through final finish work, so the result matches what was promised — not a watered-down version of it.",
    scope: [
      "Kitchen and bathroom remodeling",
      "Interior renovations — flooring, trim, paint, fixtures",
      "Whole-home remodels and layout changes",
      "Design-selection support (materials, finishes, fixtures)",
      "Property-improvement projects ahead of a sale",
    ],
    approach: [
      "We start with how you actually use the space, not a generic template.",
      "Material and finish selections are locked before demolition starts.",
      "Daily job-site discipline — a clean, organized site is a controlled site.",
      "You see the budget and the schedule; neither moves without your sign-off.",
    ],
    faqs: [
      {
        q: "Can I provide my own materials?",
        a: "Yes, this is discussed and scoped up front — owner-supplied materials are factored into the schedule and warranty terms.",
      },
      {
        q: "How are change orders handled?",
        a: "In writing, before the work happens — you approve the cost and schedule impact before it's built.",
      },
      {
        q: "Do you provide design-selection help?",
        a: "Yes, we support material and finish selections as part of the remodeling process.",
      },
    ],
  },
  {
    slug: "investment-property-renovation-las-vegas",
    name: "Investment Property Renovation",
    shortName: "Investment Property Renovation",
    summary:
      "Renovation and construction management for investors, flippers, and property owners preparing homes for resale or rental in the Las Vegas market.",
    primaryKeyword: "investment property renovation Las Vegas",
    secondaryKeywords: [
      "house flip contractor Las Vegas",
      "Las Vegas fix and flip contractor",
      "rental property renovation Las Vegas",
    ],
    intro:
      "Investment renovations run on a different clock than owner-occupied remodels — scope, budget, and timeline decisions all have to be weighed against resale or rental return. G3P scopes and manages these projects with that math built in from day one.",
    scope: [
      "Full-gut and cosmetic renovations for resale",
      "Rental-ready renovations and turn work",
      "Scope-to-budget planning aligned to ARV and comps",
      "Fast, disciplined scheduling to minimize holding costs",
      "Renovation management for out-of-state and hands-off owners",
    ],
    approach: [
      "We scope to the comps, not to a wish list — every dollar should show up in value.",
      "Timelines are built around your holding costs, not around our convenience.",
      "Clear, documented communication for owners who aren't on-site.",
      "A finished product that inspects clean and shows well, every time.",
    ],
    faqs: [
      {
        q: "Do you work with out-of-state investors?",
        a: "Yes — clear documentation, photos, and scheduled updates are part of how we run these projects.",
      },
      {
        q: "Can you scope a renovation to a target budget?",
        a: "Yes, this is standard for investment work — we scope to the numbers that make the project work.",
      },
      {
        q: "Do you provide before/after documentation?",
        a: "Yes, photo documentation through each phase is part of our investment-property process.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
