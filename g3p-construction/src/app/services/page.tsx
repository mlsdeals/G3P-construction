import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Construction & Remodeling Services in Las Vegas, NV",
  description:
    "G3P Construction provides general contracting, home remodeling, and investment-property renovation services throughout the Las Vegas Valley.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">Services</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">
            Construction services for serious Las Vegas projects.
          </h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">
            Every service below is one we actually perform — not a keyword list. Each page walks
            through scope, our approach, and what to expect.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <SectionHeading
            title="Not sure which service fits your project?"
            description="Tell us what you're working with — we'll scope it and point you in the right direction."
          />
          <CTAButton href="/contact">Request a Project Estimate</CTAButton>
        </div>
      </section>
    </>
  );
}
