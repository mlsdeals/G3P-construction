// Central place for business information used across the site (header, footer,
// contact page, structured data, metadata). Replace every [PLACEHOLDER] with
// G3P's real, verified information before launch — see
// /docs/MISSING_BUSINESS_INFO.md for the full checklist.

export const siteConfig = {
  name: "G3P Construction",
  tagline: "Quality. Integrity. Results.",
  description:
    "G3P Construction is a Las Vegas construction and renovation company focused on high-quality residential construction, remodeling, and investment-property renovation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.g3pconstruction.com",

  // --- PLACEHOLDER business info — confirm before launch ---
  phone: "[PHONE]",
  phoneHref: "tel:[PHONE_DIGITS]",
  email: "[EMAIL]",
  // Nevada licensing is a legal requirement to display accurately — do not
  // publish until confirmed.
  license: "[NV CONTRACTOR LICENSE #]",
  address: {
    // Only publish a physical address if G3P maintains a public office.
    // If G3P operates as a service-area business with no public storefront,
    // remove the street line and keep city/state/service-area only.
    streetAddress: "[STREET ADDRESS — or remove if service-area only]",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "[ZIP]",
    addressCountry: "US",
  },
  hours: "[BUSINESS HOURS — e.g. Mon–Fri 8:00 AM–5:00 PM]",
  // ---------------------------------------------------------

  serviceAreas: [
    "Las Vegas",
    "Henderson",
    "Summerlin",
    "North Las Vegas",
    "Enterprise",
    "Spring Valley",
    "Southern Highlands",
    "Green Valley",
    "Mountain's Edge",
    "Centennial Hills",
  ],

  social: {
    // Add real profile URLs once created
    instagram: "",
    facebook: "",
    linkedin: "",
  },
};

export type SiteConfig = typeof siteConfig;
