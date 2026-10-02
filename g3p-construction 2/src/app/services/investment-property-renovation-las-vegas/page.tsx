import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Investment Property Renovation Las Vegas, NV | Fix & Flip Contractor",
  description:
    "Renovation and construction management for investors and house flippers in Las Vegas — scope-to-budget renovations built around ARV and holding costs.",
  alternates: { canonical: "/services/investment-property-renovation-las-vegas" },
};

export default function Page() {
  return <ServicePageTemplate slug="investment-property-renovation-las-vegas" />;
}
