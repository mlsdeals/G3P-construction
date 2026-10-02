import { siteConfig } from "@/lib/site-config";

// Renders sitewide JSON-LD: Organization + LocalBusiness (GeneralContractor)
// + WebSite. Page-level schema (BreadcrumbList, Article, FAQPage) is added
// per-page alongside this.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: `${siteConfig.url}/icon-512.png`,
        logo: `${siteConfig.url}/icon-512.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          addressCountry: siteConfig.address.addressCountry,
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon-512.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
