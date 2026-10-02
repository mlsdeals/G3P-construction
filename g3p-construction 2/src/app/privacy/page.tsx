import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <h1 className="font-display text-4xl text-ink-950">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-400">
        [PLACEHOLDER — replace with a real privacy policy before launch, ideally reviewed by
        counsel. At minimum it should cover: what information the estimate-request form
        collects, how it&rsquo;s stored (Neon/Postgres via this site&rsquo;s database), whether
        it&rsquo;s shared with third parties, and how a visitor can request deletion.]
      </p>
      <p className="mt-6 text-sm text-ink-600">
        Contact {siteConfig.email} with any privacy questions.
      </p>
    </article>
  );
}
