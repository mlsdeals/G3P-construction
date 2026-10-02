import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-200";

  const styles: Record<string, string> = {
    primary: "bg-ink-950 text-paper-50 hover:bg-gold-700",
    secondary: "border border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-paper-50",
    ghost: "border border-paper-50/40 text-paper-50 hover:border-gold-400 hover:text-gold-300",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
