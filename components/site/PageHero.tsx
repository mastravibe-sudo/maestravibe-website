// components/site/PageHero.tsx
// Reusable dark banner for interior pages (About, Services, Portfolio, Contact).
// Keeps the fixed transparent Header readable on every page, not just Home.

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[#05070d] pb-16 pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#d4af37]/10"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-block rounded-full border border-[#d4af37]/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          <span className="text-shimmer-gold">{title}</span>
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}