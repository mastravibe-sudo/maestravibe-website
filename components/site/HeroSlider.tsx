// components/site/HeroSlider.tsx
'use client';

import Link from 'next/link';

export default function HeroSlider() {
  return (
    <>
      {/* ===== FULL-BLEED HERO ===== */}
      <div className="relative flex min-h-screen items-center overflow-hidden bg-[#05070d]">
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Gold/black tint overlay for readability + brand feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/70 to-[#05070d]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070d]/80 via-transparent to-[#05070d]/40" />

        {/* Giant ghost text behind headline */}
        <h2
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-tighter text-white/5"
        >
          ARCH
        </h2>

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 lg:px-8">
          <span className="inline-block rounded-full border border-[#d4af37]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Built for sustainable growth
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Designing spaces for{' '}
            <span className="font-serif italic text-[#d4af37]">modern living</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">
            We combine creative design and compelling storytelling to craft
            memorable spaces — from concept sketches to construction-ready drawings.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-[#e8c766]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Floating preview card, bottom-right */}
        <div className="absolute bottom-10 right-6 hidden w-64 rounded-2xl border border-[#d4af37]/20 bg-[#05070d]/80 p-4 backdrop-blur-md sm:block lg:right-16">
          <div className="flex items-center gap-3">
            <img
              src="/images/maestra-arch-badge.png"
              alt=""
              className="h-14 w-14 rounded-lg border border-[#d4af37]/30 object-contain p-1"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Precision in every detail
              </p>
              <p className="mt-1 text-[11px] leading-snug text-gray-400">
                Exterior to interior, every step is planned.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== LIGHT STATS STRIP ===== */}
      <div className="border-b border-gray-100 bg-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-serif text-2xl italic text-[#8a7226] sm:text-left">
            Unfinished
          </p>
          <h2 className="mt-1 text-center text-3xl font-bold text-gray-900 sm:text-left sm:text-4xl">
            Turn dreams into reality
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Architecture Design
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                We customize every project to fit your site, budget, and vision.
              </p>
            </div>

            <div className="border-t border-[#d4af37] pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Corporate Building Design
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Modern, functional spaces built for how businesses actually work.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Future of Architecture
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Sustainable, forward-facing design for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}