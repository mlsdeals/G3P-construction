// Project case studies. Seeded with the real property addresses provided for
// the Oct 2026 team meeting. Scope details, photos, and figures below are
// PLACEHOLDERS — swap them for the real project facts and before/during/after
// photography before this goes live. See /docs/MISSING_BUSINESS_INFO.md.
//
// Addresses are shown because they were supplied specifically for use on this
// site. Remove any address you don't want public before launch.

export type Project = {
  slug: string;
  address: string;
  city: string;
  projectType: string;
  serviceSlug: string;
  summary: string;
  scopeConfirmed: boolean;
};

export const projects: Project[] = [
  {
    slug: "morning-grove",
    address: "11527 Morning Grove",
    city: "Las Vegas, NV",
    projectType: "Investment Property Renovation",
    serviceSlug: "investment-property-renovation-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "alcova-ridge",
    address: "1995 Alcova Ridge Dr",
    city: "Las Vegas, NV",
    projectType: "Investment Property Renovation",
    serviceSlug: "investment-property-renovation-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "satin-mist",
    address: "213 Satin Mist",
    city: "Las Vegas, NV",
    projectType: "Home Remodeling",
    serviceSlug: "home-remodeling-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "sienna-vista",
    address: "9336 Sienna Vista",
    city: "Las Vegas, NV",
    projectType: "Investment Property Renovation",
    serviceSlug: "investment-property-renovation-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "hanging-rock",
    address: "2621 Hanging Rock Dr",
    city: "Las Vegas, NV",
    projectType: "Home Remodeling",
    serviceSlug: "home-remodeling-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "camden-hills",
    address: "9624 Camden Hills",
    city: "Las Vegas, NV",
    projectType: "Investment Property Renovation",
    serviceSlug: "investment-property-renovation-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "snow-creek",
    address: "11468 Snow Creek Ave",
    city: "Las Vegas, NV",
    projectType: "General Contracting",
    serviceSlug: "general-contracting-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
  {
    slug: "altura-vista",
    address: "11305 Altura Vista Ave",
    city: "Las Vegas, NV",
    projectType: "Home Remodeling",
    serviceSlug: "home-remodeling-las-vegas",
    summary: "[Add project scope, before/after photos, and result]",
    scopeConfirmed: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
