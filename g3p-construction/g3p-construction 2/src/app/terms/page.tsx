import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <h1 className="font-display text-4xl text-ink-950">Terms of Use</h1>
      <p className="mt-4 text-sm text-ink-400">
        [PLACEHOLDER — replace with real terms of use before launch, ideally reviewed by
        counsel. Website terms are separate from construction-contract terms, which should
        live in your actual client agreements, not this page.]
      </p>
      <p className="mt-6 text-sm text-ink-600">
        Contact {siteConfig.email} with any questions.
      </p>
    </article>
  );
}
