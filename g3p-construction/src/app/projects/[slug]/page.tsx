import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import { getServiceBySlug } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.projectType} — ${project.city} | Project Case Study`,
    description: `${project.projectType} project at ${project.address}, ${project.city}, completed by G3P Construction.`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceSlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
      { "@type": "ListItem", position: 3, name: project.address, item: `${siteConfig.url}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <nav className="text-xs text-ink-400 mb-6">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-gold-400">Projects</Link>
          </nav>
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">
            {project.projectType}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">{project.address}</h1>
          <p className="mt-3 text-ink-300">{project.city}</p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-20">
        <div className="aspect-[16/7] bg-ink-900 flex items-center justify-center border border-ink-100">
          <p className="text-ink-400 text-sm tracking-[0.1em] uppercase">
            Before / During / After photography — coming soon
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Project Overview" title="Scope & Details" />
            <p className="mt-6 text-ink-600 leading-relaxed">{project.summary}</p>
            <p className="mt-4 text-sm text-ink-400">
              This case study is a placeholder — existing condition, client objective,
              construction challenges, solutions, and materials will be added once the
              project write-up is finalized.
            </p>
          </div>
          <div>
            <div className="border border-ink-100 p-7">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400">
                Project Type
              </h3>
              <p className="mt-2 text-ink-950">{project.projectType}</p>

              <h3 className="mt-6 text-xs font-medium tracking-[0.2em] uppercase text-ink-400">
                Location
              </h3>
              <p className="mt-2 text-ink-950">{project.city}</p>

              {service && (
                <>
                  <h3 className="mt-6 text-xs font-medium tracking-[0.2em] uppercase text-ink-400">
                    Related Service
                  </h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-2 inline-block text-gold-700 hover:text-gold-600"
                  >
                    {service.name} →
                  </Link>
                </>
              )}

              <div className="mt-8">
                <CTAButton href="/contact" className="w-full">
                  Start Your Project
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
