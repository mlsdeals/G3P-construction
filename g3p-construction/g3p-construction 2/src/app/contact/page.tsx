import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import SectionHeading from "@/components/SectionHeading";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Request a Project Estimate | G3P Construction",
  description:
    "Request a project estimate from G3P Construction — Las Vegas general contracting, remodeling, and investment-property renovation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="max-w-container mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Tell us about your project."
            description="Fill out the form and we'll follow up with next steps — or reach us directly below."
          />

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400">Phone</h3>
              <TrackedLink
                href={siteConfig.phoneHref}
                event="phone_click"
                className="mt-1 block text-lg text-ink-950 hover:text-gold-700"
              >
                {siteConfig.phone}
              </TrackedLink>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400">Email</h3>
              <TrackedLink
                href={`mailto:${siteConfig.email}`}
                event="email_click"
                className="mt-1 block text-lg text-ink-950 hover:text-gold-700"
              >
                {siteConfig.email}
              </TrackedLink>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400">Hours</h3>
              <p className="mt-1 text-ink-700">{siteConfig.hours}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400">Service Area</h3>
              <p className="mt-1 text-ink-700 leading-relaxed">
                {siteConfig.serviceAreas.join(", ")}, and surrounding Las Vegas Valley communities.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 border border-ink-100 p-8 sm:p-10 bg-paper-50">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
