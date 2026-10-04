interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 border-b border-stone-200 pb-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
        <span className="text-stone-900 font-semibold">{number}</span>
        <span>/</span>
        <span>{label}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-stone-600 text-sm max-w-md font-sans leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
