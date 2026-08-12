// app/portfolio/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Our Work"
        title="Selected projects"
        description="A look at the residential, commercial, and public spaces we've designed and documented."
      />

      {/* Large, alternating, full-width project rows — not a small-card grid */}
      <section className="bg-white">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/portfolio/${p.slug}`}
              className={`group grid grid-cols-1 items-center gap-0 border-b border-gray-100 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="h-[380px] overflow-hidden lg:h-[520px]">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-8 py-14 lg:px-16">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                  {p.category} · {p.location} · {p.year}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
                  {p.summary}
                </p>
                <span className="mt-6 inline-block text-sm font-bold uppercase tracking-widest text-[#b8942e] transition-transform duration-300 group-hover:translate-x-1">
                  View Project →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <Footer />
    </>
  );
}