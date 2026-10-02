import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ProcessSteps from "@/components/ProcessSteps";
import TrustBar from "@/components/TrustBar";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink-950 text-paper-50 overflow-hidden">
        <HeroArt />
        <div className="relative max-w-container mx-auto px-6 lg:px-10 pt-28 pb-24 lg:pt-36 lg:pb-32">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-6">
            Las Vegas Construction &amp; Renovation
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.04] max-w-3xl">
            Quality.<br />
            Integrity.<br />
            <span className="italic text-gold-300">Results.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-ink-200">
            Residential construction, renovations, remodeling, and property improvements
            throughout the Las Vegas Valley — built around one standard: do it right.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/contact" variant="primary" className="!bg-gold-600 hover:!bg-gold-500 !text-ink-950">
              Request a Project Estimate
            </CTAButton>
            <CTAButton href="/projects" variant="ghost">
              View Our Work
            </CTAButton>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* CORE SERVICES */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Construction managed the way it should be."
            description="From general contracting to full renovations, every G3P project runs on one standard of accountability — for homeowners, investors, and realtors alike."
          />
          <Link
            href="/services"
            className="text-xs font-medium tracking-[0.14em] uppercase text-ink-950 hover:text-gold-700 whitespace-nowrap"
          >
            View All Services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* WHY G3P */}
      <section className="bg-ink-950 text-paper-50 py-24">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why G3P"
            title="Three principles. No exceptions."
            dark
          />
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink-800">
            {[
              {
                title: "Quality",
                body: "Work that holds up to inspection — not just a walkthrough. Materials, methods, and finish work chosen to last, not just to show.",
              },
              {
                title: "Integrity",
                body: "A scope in writing, a schedule you can hold us to, and change orders approved before they're built — not after.",
              },
              {
                title: "Results",
                body: "A finished product measured against the original goal: higher value, a better home, a property that performs.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ink-900 p-10">
                <h3 className="font-display italic text-2xl text-gold-300">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          description="Transparency creates trust. Here's exactly what to expect from consult to completion."
        />
        <div className="mt-14">
          <ProcessSteps />
        </div>
        <div className="mt-10">
          <Link
            href="/our-process"
            className="text-xs font-medium tracking-[0.14em] uppercase text-ink-950 hover:text-gold-700"
          >
            See the Full Process →
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-paper-100 py-24">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Our Work"
              title="Recent Las Vegas Valley projects."
              description="Full before/after documentation and project write-ups are being added as each case study is finalized."
            />
            <Link
              href="/projects"
              className="text-xs font-medium tracking-[0.14em] uppercase text-ink-950 hover:text-gold-700 whitespace-nowrap"
            >
              View Full Portfolio →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Who We Work With" title="Built for serious projects — and serious partners." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Homeowners", body: "Renovations and remodels for the home you're staying in." },
            { title: "Investors", body: "Scope-to-budget renovations for flips and rental turns." },
            { title: "Realtors", body: "A construction partner you can refer with confidence." },
            { title: "Property Owners", body: "Improvements and upgrades ahead of sale or lease-up." },
          ].map((item) => (
            <div key={item.title} className="border border-ink-100 p-7">
              <h3 className="font-display text-lg text-ink-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-paper-100 py-24">
        <div className="max-w-container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Service Area"
              title="Working across the Las Vegas Valley."
              description="G3P Construction is based in Las Vegas and takes on residential construction and renovation projects throughout the valley."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {siteConfig.serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-ink-200 px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase text-ink-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-950 text-paper-50 py-28 relative overflow-hidden">
        <HeroArt subtle />
        <div className="relative max-w-container mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl mx-auto">
            Let&rsquo;s build something <span className="italic text-gold-300">better.</span>
          </h2>
          <p className="mt-5 text-ink-200 max-w-md mx-auto">
            Tell us about your project — we&rsquo;ll follow up with next steps.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact" className="!bg-gold-600 hover:!bg-gold-500 !text-ink-950">
              Request a Project Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroArt({ subtle = false }: { subtle?: boolean }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${subtle ? "opacity-[0.06]" : "opacity-[0.12]"}`}
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#b8863c" strokeWidth="1">
        <path d="M-100 650 L400 300 L750 300 L1540 650" />
        <path d="M100 800 L100 480 L560 230 L1020 480 L1020 800" />
        <path d="M300 800 L300 560 L720 340 L1140 560 L1140 800" />
        <line x1="-100" y1="720" x2="1540" y2="720" />
      </g>
    </svg>
  );
}
