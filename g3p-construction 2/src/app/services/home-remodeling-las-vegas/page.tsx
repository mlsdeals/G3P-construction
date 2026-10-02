import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Home Remodeling Las Vegas, NV | Kitchens, Baths & Renovations",
  description:
    "G3P Construction provides home remodeling and renovation services in Las Vegas — kitchens, bathrooms, interior renovations, and whole-home remodels.",
  alternates: { canonical: "/services/home-remodeling-las-vegas" },
};

export default function Page() {
  return <ServicePageTemplate slug="home-remodeling-las-vegas" />;
}
