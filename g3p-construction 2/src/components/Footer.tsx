import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display text-lg tracking-wide text-paper-50 mb-3">
              G3P <span className="text-gold-400">CONSTRUCTION</span>
            </div>
            <p className="text-sm tracking-[0.1em] uppercase text-gold-400 mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-ink-400 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold-400 transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/projects" className="hover:text-gold-400 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link href="/our-process" className="hover:text-gold-400 transition-colors">Our Process</Link></li>
              <li><Link href="/resources" className="hover:text-gold-400 transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-ink-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href={siteConfig.phoneHref} className="hover:text-gold-400 transition-colors">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">{siteConfig.email}</a></li>
              <li className="text-ink-400">{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-800">
          <p className="text-xs text-ink-400 mb-3 tracking-[0.04em]">
            Serving the Las Vegas Valley, including{" "}
            {siteConfig.serviceAreas.join(", ")}.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink-600">
            <p>© {new Date().getFullYear()} G3P Construction. All rights reserved. License {siteConfig.license}.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
