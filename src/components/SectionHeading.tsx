interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase ${
            isDark ? "text-[#A8B5A0]" : "text-[#C8795A]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
          isDark ? "text-[#F7F4EC]" : "text-[#244638]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#A8B5A0]" : "text-[#555A54]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
