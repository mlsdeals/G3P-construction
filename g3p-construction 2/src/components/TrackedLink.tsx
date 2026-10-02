"use client";

import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

// Small client-component wrapper so server components (Header, Footer, etc.)
// can still render tel:/mailto: links that fire analytics events on click,
// without becoming client components themselves.
export default function TrackedLink({
  href,
  event,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  event: "phone_click" | "email_click";
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event)}
    >
      {children}
    </a>
  );
}
