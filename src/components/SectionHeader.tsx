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
    <div className={`mb-8 sm:mb-10 lg:mb-12 border-b border-stone-200 pb-5 sm:pb-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
        <span className="text-brand-600 font-semibold">{number}</span>
        <span className="text-brand-300">/</span>
        <span>{label}</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 lg:gap-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight leading-snug">
          {title}
        </h2>
        {description && (
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl lg:max-w-md font-sans leading-relaxed lg:text-right">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
