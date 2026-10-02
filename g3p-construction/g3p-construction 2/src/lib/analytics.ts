// Thin wrapper around gtag (Google Analytics 4 / Google Tag Manager).
// Safe to call even before GA is wired up — it's a no-op until
// NEXT_PUBLIC_GA_ID is set and the gtag script is added to layout.tsx.
// See /docs/ANALYTICS_PLAN.md for the full list of events and setup steps.

type GtagEvent =
  | "estimate_form_started"
  | "estimate_form_submitted"
  | "phone_click"
  | "email_click"
  | "project_viewed"
  | "service_cta_clicked";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: GtagEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
