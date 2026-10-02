import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "General Contractor Las Vegas, NV",
  description:
    "Licensed general contracting and full project management for residential construction in Las Vegas — scheduling, permitting, subcontractor coordination, and quality control.",
  alternates: { canonical: "/services/general-contracting-las-vegas" },
};

export default function Page() {
  return <ServicePageTemplate slug="general-contracting-las-vegas" />;
}
