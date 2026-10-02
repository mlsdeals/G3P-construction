// NOTE: "Licensed & Insured" is intentionally left off this public-facing
// list until the Nevada contractor license number is confirmed against the
// NSCB license search (see docs/MISSING_BUSINESS_INFO.md) — claiming
// licensure before that's verified is a real liability, not just a content
// placeholder. Add it back once confirmed.
const items = [
  "Las Vegas Based",
  "Residential Construction",
  "Remodeling & Renovations",
  "Investor Renovations",
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink-100 bg-paper-100">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
