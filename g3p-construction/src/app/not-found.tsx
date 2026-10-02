import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="max-w-container mx-auto px-6 lg:px-10 py-32 text-center">
      <p className="text-xs font-medium tracking-[0.28em] uppercase text-gold-700 mb-5">404</p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink-950">Page not found.</h1>
      <p className="mt-5 text-ink-600 max-w-md mx-auto">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <CTAButton href="/">Back to Home</CTAButton>
        <CTAButton href="/contact" variant="secondary">Contact Us</CTAButton>
      </div>
      <p className="mt-10 text-sm text-ink-400">
        Looking for something specific?{" "}
        <Link href="/services" className="text-gold-700 hover:text-gold-600">Browse services</Link>{" "}
        or{" "}
        <Link href="/projects" className="text-gold-700 hover:text-gold-600">view our projects</Link>.
      </p>
    </section>
  );
}
