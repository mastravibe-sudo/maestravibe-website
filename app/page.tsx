// app/page.tsx  (Home)
import Link from 'next/link';
import Header from '@/components/site/Header';
import HeroSlider from '@/components/site/HeroSlider';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import TrustStats from '@/components/site/TrustStats';
import Testimonials from '@/components/site/Testimonials';
import FAQAccordion from '@/components/site/FAQAccordion';
import { getProject } from '@/lib/projects';

const SERVICES_PREVIEW = [
  { title: 'Architectural Design', desc: 'Concept to construction-ready drawings, tailored to your site and vision.' },
  { title: 'CAD Drafting', desc: 'Accurate working drawings, elevations, sections and full documentation.' },
  { title: '3D Visualization', desc: 'Photorealistic renders so you see the project before it\u2019s built.' },
];

export default function HomePage() {
  const featured = [
    getProject('meridian-residence'),
    getProject('horizon-corporate-tower'),
    getProject('coastal-villa'),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Header />

      <section id="home">
        <HeroSlider />
      </section>

      <TrustStats />

      {/* Services teaser */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                  What We Do
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-bold uppercase tracking-widest text-[#b8942e] hover:text-[#8a7226]"
              >
                View All Services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="gold-glow-hover h-full rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                  Featured Work
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Recent Projects</h2>
              </div>
              <Link
                href="/portfolio"
                className="text-sm font-bold uppercase tracking-widest text-[#b8942e] hover:text-[#8a7226]"
              >
                View All Projects →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  <div className="h-72 overflow-hidden rounded-2xl">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#b8942e]">
                      {p.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQAccordion />

      {/* CTA */}
      <section className="bg-[#05070d] px-6 py-24 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Start a Project
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's build something <span className="text-shimmer-gold">worth designing</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-[#e8c766]"
            >
              Get In Touch
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-[#d4af37]/40 px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#d4af37] transition-all hover:bg-[#d4af37]/10"
            >
              View Portfolio
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}