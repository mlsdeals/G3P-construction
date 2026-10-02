type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs font-medium tracking-[0.28em] uppercase mb-4 ${
            dark ? "text-gold-400" : "text-gold-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl leading-[1.15] ${
          dark ? "text-paper-50" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? "text-ink-200" : "text-ink-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
