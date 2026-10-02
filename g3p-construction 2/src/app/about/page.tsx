import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About G3P Construction | Las Vegas, NV",
  description:
    "G3P Construction is a Las Vegas construction and renovation company built around quality, integrity, and results.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">About G3P</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">
            Anyone can promise a finished project.
          </h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">
            G3P focuses on everything required to get there correctly — the planning,
            communication, workmanship, scheduling, accountability, and details that
            separate average construction from exceptional construction.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-3 gap-14">
        <div>
          <SectionHeading eyebrow="Quality" title="The standard" />
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            Quality isn&rsquo;t a finish selection — it&rsquo;s a method. Materials, sequencing,
            and craftsmanship chosen to hold up under real use, not just a first look.
          </p>
        </div>
        <div>
          <SectionHeading eyebrow="Integrity" title="How we operate" />
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            Clear scope. Honest estimates. Change orders approved before they&rsquo;re built.
            Construction demands accountability — we treat every schedule, scope, and
            finish like our name is attached to it, because it is.
          </p>
        </div>
        <div>
          <SectionHeading eyebrow="Results" title="What remains" />
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            A finished property that performs — whether that means a home you&rsquo;re
            proud to live in, or an investment that delivers the return it was scoped for.
          </p>
        </div>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10 max-w-2xl">
          <SectionHeading eyebrow="Our Team" title="Leadership & Crew" />
          <p className="mt-6 text-ink-600 leading-relaxed">
            [Leadership bios and team photos to be added — see
            /docs/MISSING_BUSINESS_INFO.md for what&rsquo;s needed.] G3P Construction is
            built on an experienced crew with real field experience across the Las Vegas
            Valley.
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl mx-auto">
            Let&rsquo;s talk about your project.
          </h2>
          <div className="mt-8">
            <CTAButton href="/contact">Request a Project Estimate</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
