type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  label,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-4 text-center max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm uppercase tracking-[0.2em] text-primary">
        {label}
      </span>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
