import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import ProjectCard from "./ProjectCard";
import { getServiceBySlug, services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export default function ServicePageTemplate({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const related = services.filter((s) => s.slug !== slug).slice(0, 2);
  const relatedProjects = projects.filter((p) => p.serviceSlug === slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <nav className="text-xs text-ink-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-200">{service.name}</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">
            {service.primaryKeyword}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">{service.name}</h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">{service.intro}</p>
          <div className="mt-9">
            <CTAButton href="/contact" className="!bg-gold-600 hover:!bg-gold-500 !text-ink-950">
              Request a Project Estimate
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading eyebrow="Scope" title="What's included" />
          <ul className="mt-8 space-y-4">
            {service.scope.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="The G3P Approach" title="How we run this job" />
          <ul className="mt-8 space-y-4">
            {service.approach.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELEVANT PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="bg-paper-100 py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <SectionHeading eyebrow="Relevant Projects" title={`Recent ${service.shortName.toLowerCase()} work`} />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICE AREA */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-20">
        <SectionHeading
          eyebrow="Service Area"
          title={`${service.shortName} across the Las Vegas Valley`}
          description={`Including ${siteConfig.serviceAreas.slice(0, 6).join(", ")}, and surrounding areas.`}
        />
      </section>

      {/* FAQ */}
      <section className="bg-paper-100 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 divide-y divide-ink-200">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-display text-lg text-ink-950">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-20">
        <SectionHeading eyebrow="Related Services" title="You may also need" />
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="border border-ink-100 p-7 hover:border-gold-500 transition-colors group"
            >
              <h3 className="font-display text-lg text-ink-950 group-hover:text-gold-700">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-600">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-paper-50 py-20 text-center">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl mx-auto">
            Ready to talk through your project?
          </h2>
          <div className="mt-8">
            <CTAButton href="/contact" className="!bg-gold-600 hover:!bg-gold-500 !text-ink-950">
              Request a Project Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
