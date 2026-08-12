// components/site/TrustStats.tsx
// Animated stats strip — e.g. "150+ Projects Completed". Numbers are
// placeholders below; update the STATS array with your real figures.
'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 12, suffix: '+', label: 'Years of Experience' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 20, suffix: '+', label: 'Cities Covered' },
] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(progress * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-shimmer-gold text-4xl font-bold sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <div className="border-y border-[#d4af37]/10 bg-[#05070d] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {STATS.map(stat => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}