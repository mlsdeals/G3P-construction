const items = [
  "Las Vegas Based",
  "Residential Construction",
  "Remodeling & Renovations",
  "Investor Renovations",
  "Licensed & Insured*",
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
        <p className="mt-3 text-center text-[11px] text-ink-400">
          *License number to be published once confirmed — see internal checklist.
        </p>
      </div>
    </div>
  );
}
