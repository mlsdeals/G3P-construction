import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Choose a General Contractor in Las Vegas",
  description:
    "What to actually check before hiring a Las Vegas general contractor — licensing, scope detail, communication, and the questions that separate a real operator from a risk.",
  alternates: { canonical: "/resources/how-to-choose-a-general-contractor-in-las-vegas" },
};

export default function ArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose a General Contractor in Las Vegas",
    description:
      "What to actually check before hiring a Las Vegas general contractor — licensing, scope detail, communication, and the questions that separate a real operator from a risk.",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <nav className="text-xs text-ink-400 mb-6">
          <Link href="/" className="hover:text-gold-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/resources" className="hover:text-gold-700">Resources</Link>
        </nav>

        <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-700 mb-5">
          Contractor Education
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink-950 leading-tight">
          How to Choose a General Contractor in Las Vegas
        </h1>
        <p className="mt-6 text-sm text-ink-400">Published October 1, 2026</p>

        <div className="mt-10 prose-content space-y-6 text-ink-700 leading-relaxed">
          <p>
            Most homeowners choose a contractor the way they choose a restaurant — a review
            score and a gut feeling. For a renovation running into the tens of thousands of
            dollars, that&rsquo;s not enough information. Here&rsquo;s what actually separates a
            contractor worth hiring from one worth avoiding.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">1. Confirm the license directly with the state</h2>
          <p>
            In Nevada, contractors performing work above certain thresholds are required to
            hold a license through the Nevada State Contractors Board (NSCB). Don&rsquo;t take a
            license number at face value — look it up directly on the NSCB&rsquo;s license search
            to confirm it&rsquo;s active, in good standing, and covers the scope of work you need.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">2. Ask for a written scope, not a verbal estimate</h2>
          <p>
            A real estimate names the work being done, the materials involved, and what&rsquo;s
            explicitly excluded. If a contractor can only give you a round number with no
            written scope behind it, that number means nothing — it has no way to hold either
            of you accountable once work starts.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">3. Ask how change orders are handled</h2>
          <p>
            Almost every renovation uncovers something unexpected once walls or flooring come
            up. The question isn&rsquo;t whether a change order will happen — it&rsquo;s whether your
            contractor documents it in writing and gets your sign-off before doing the extra
            work, or just does it and tells you the number afterward.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">4. Ask who is actually on site day to day</h2>
          <p>
            Some contractors sell the job, then hand it to subcontractors with minimal
            oversight. Ask directly: who is managing the site day to day, and how often will
            you hear from them. A contractor who can&rsquo;t answer this clearly is telling you
            something about how the project will actually run.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">5. Compare bids on scope, not just price</h2>
          <p>
            The lowest bid is often the lowest because it excludes something the higher bids
            include — a different grade of material, a smaller scope, or an allowance that
            will balloon once selections are made. Line up bids item by item before deciding
            on price alone.
          </p>

          <h2 className="font-display text-2xl text-ink-950 pt-4">The bottom line</h2>
          <p>
            A contractor worth hiring will welcome every one of these questions. One who
            gets evasive or impatient with them is giving you useful information before
            you&rsquo;ve signed anything.
          </p>
        </div>

        <div className="mt-14 border-t border-ink-100 pt-10">
          <h3 className="font-display text-2xl text-ink-950">Working on a project in the Las Vegas Valley?</h3>
          <p className="mt-3 text-ink-600">Tell us about it — we&rsquo;ll walk you through scope and next steps.</p>
          <div className="mt-6">
            <CTAButton href="/contact">Request a Project Estimate</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}
