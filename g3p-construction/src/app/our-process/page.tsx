import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Our Process | G3P Construction",
  description:
    "How G3P Construction manages a project from discovery through completion — discovery, site walk, scope & estimate, pre-construction, build, quality control, final walkthrough, and completion.",
  alternates: { canonical: "/our-process" },
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">
            How We Work
          </p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">Our Process</h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">
            Transparency creates trust. Here&rsquo;s exactly what happens at every stage of
            a G3P project.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <ProcessSteps />
      </section>

      <section className="bg-paper-100 py-20 text-center">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <SectionHeading align="center" title="Ready to start at step one?" />
          <div className="mt-8">
            <CTAButton href="/contact">Request a Project Estimate</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
