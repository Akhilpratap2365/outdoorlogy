interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
          light ? "border-white/30 bg-white/10 text-foreground/80" : "border-border bg-secondary/60 text-forest"
        }`}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-[3.25rem] ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-muted-foreground" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}