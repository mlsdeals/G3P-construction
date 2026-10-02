import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Our Projects | Las Vegas Construction & Renovation Portfolio",
  description:
    "A portfolio of G3P Construction's Las Vegas Valley renovation and construction projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">Our Work</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">
            Real projects across the Las Vegas Valley.
          </h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">
            Full case studies — scope, before/during/after photography, and project
            details — are being published as each one is finalized.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <SectionHeading
            title="Have a project in mind?"
            description="Tell us about it and we'll follow up with next steps."
          />
          <CTAButton href="/contact">Request a Project Estimate</CTAButton>
        </div>
      </section>
    </>
  );
}
