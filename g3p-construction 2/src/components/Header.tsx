import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CTAButton from "./CTAButton";
import TrackedLink from "./TrackedLink";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/our-process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper-50 shadow-[0_1px_0_0_rgba(17,16,13,0.08),0_8px_24px_-12px_rgba(17,16,13,0.18)]">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center shrink-0 min-w-0">
            <Image
              src="/g3p-wordmark.png"
              alt="G3P Construction"
              width={819}
              height={240}
              className="h-11 sm:h-12 lg:h-14 w-auto shrink-0"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-ink-700 hover:text-gold-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="phone_click"
              className="text-[13px] font-medium tracking-[0.06em] text-ink-700 hover:text-gold-700"
            >
              {siteConfig.phone}
            </TrackedLink>
            <CTAButton href="/contact" className="!px-5 !py-2.5 !text-xs">
              Request Estimate
            </CTAButton>
          </div>

          {/* Mobile CTA — tap-to-call, a compact estimate link, and the nav menu */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-3 shrink-0">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="phone_click"
              ariaLabel="Call G3P Construction"
              className="text-ink-950 p-2"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </TrackedLink>
            <Link
              href="/contact"
              className="bg-ink-950 text-paper-50 px-3 py-2 text-[11px] font-medium tracking-[0.08em] uppercase whitespace-nowrap"
            >
              Estimate
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
