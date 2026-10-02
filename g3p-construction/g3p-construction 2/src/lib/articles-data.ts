// Published articles. Keep this list to genuinely useful, fully-written
// pieces — see /docs/CONTENT_PLAN_12MO.md for the full editorial calendar of
// topics not yet written. Do not add an entry here until the article is real.

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  publishedAt: string;
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-a-general-contractor-in-las-vegas",
    title: "How to Choose a General Contractor in Las Vegas",
    category: "Contractor Education",
    description:
      "What to actually check before hiring a contractor — licensing, scope detail, communication, and the questions that separate a real operator from a risk.",
    publishedAt: "2026-10-01",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
