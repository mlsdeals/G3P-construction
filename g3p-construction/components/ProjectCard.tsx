import Link from "next/link";
import { Project } from "@/lib/projects-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
        <PlaceholderArt />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] tracking-[0.18em] uppercase text-gold-300 border border-gold-400/50 px-2.5 py-1">
          {project.projectType}
        </span>
        <span className="absolute bottom-4 left-4 text-[11px] tracking-[0.1em] uppercase text-paper-50/80">
          Photos coming soon
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg text-ink-950 group-hover:text-gold-700 transition-colors">
            {project.address}
          </h3>
          <p className="text-sm text-ink-600">{project.city}</p>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mt-1.5 shrink-0 text-ink-400 group-hover:text-gold-700 transition-colors"
        >
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </div>
    </Link>
  );
}

function PlaceholderArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <rect width="400" height="300" fill="#1c1c1c" />
      <g stroke="#b8863c" strokeOpacity="0.35" strokeWidth="1">
        <path d="M0 220 L140 110 L260 110 L400 220" fill="none" />
        <path d="M60 300 L60 170 L200 90 L340 170 L340 300" fill="none" />
        <line x1="0" y1="260" x2="400" y2="260" />
      </g>
      <circle cx="200" cy="150" r="2" fill="#dcb878" />
    </svg>
  );
}
