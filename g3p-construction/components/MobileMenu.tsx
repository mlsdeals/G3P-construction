"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/our-process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The header this button lives in uses backdrop-blur, which (like
  // `filter`) creates a containing block for `position: fixed` descendants
  // — so a fixed overlay nested inside it gets clipped to the header's own
  // box instead of the viewport. Render the overlay through a portal to
  // `document.body` so it's always fixed relative to the viewport.
  useEffect(() => setMounted(true), []);

  // Lock background scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 -mr-2 text-ink-950"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {mounted && open &&
        createPortal(
          <div className="fixed inset-x-0 top-20 bottom-0 z-[100] bg-ink-950 overflow-y-auto">
            <nav className="flex flex-col px-6 pt-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-5 border-b border-ink-800"
                >
                  <span className="text-xs font-medium tracking-[0.1em] text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl text-paper-50 group-active:text-gold-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="px-6 pt-8 pb-10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-gold-600 text-ink-950 px-7 py-4 text-[13px] font-medium tracking-[0.14em] uppercase"
              >
                Request a Project Estimate
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="mt-6 block text-center text-sm font-medium tracking-[0.06em] text-ink-200"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-2 text-center text-xs tracking-[0.1em] uppercase text-ink-500">
                Las Vegas Construction &amp; Renovation
              </p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
