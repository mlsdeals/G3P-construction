import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { articles } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Construction Resources | G3P Construction",
  description:
    "Las Vegas construction and renovation resources from G3P Construction — practical guidance for homeowners and investors planning a project.",
  alternates: { canonical: "/resources" },
};

const upcomingTopics = [
  "How Much Does a Home Remodel Cost in Las Vegas?",
  "Do You Need a Permit to Remodel a Home in Las Vegas?",
  "General Contractor vs. Handyman: Which Do You Need?",
  "What to Know Before Renovating a Home in Summerlin",
  "How to Compare Contractor Bids",
  "Renovating an Investment Property for Resale vs. Rental",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-ink-950 text-paper-50 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-400 mb-5">Resources</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl">
            Straightforward guidance, not filler.
          </h1>
          <p className="mt-6 max-w-xl text-ink-200 leading-relaxed">
            Practical answers for homeowners and investors planning a Las Vegas renovation.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Latest" title="Articles" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group border border-ink-100 p-7 hover:border-gold-500 transition-colors"
            >
              <span className="text-xs font-medium tracking-[0.14em] uppercase text-gold-700">
                {article.category}
              </span>
              <h3 className="mt-3 font-display text-lg text-ink-950 group-hover:text-gold-700">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Coming Soon" title="In the editorial pipeline" />
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {upcomingTopics.map((topic) => (
              <li key={topic} className="text-sm text-ink-600 flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-600" />
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ink-400">
            Full 12-month content plan: /docs/CONTENT_PLAN_12MO.md
          </p>
        </div>
      </section>
    </>
  );
}
