import Link from "next/link";
import { Service } from "@/lib/services-data";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between border border-ink-100 bg-paper-50 p-8 min-h-[280px] transition-colors hover:border-gold-500"
    >
      <div>
        <span className="text-xs font-medium tracking-[0.2em] text-gold-700">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl mt-4 text-ink-950">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.summary}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-ink-950 group-hover:text-gold-700">
        Learn More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
