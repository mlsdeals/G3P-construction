"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

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
          <div className="fixed inset-x-0 top-20 bottom-0 z-[100] bg-paper-50 overflow-y-auto">
            <nav className="flex flex-col px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 border-b border-ink-100 text-base font-medium tracking-[0.04em] text-ink-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}
