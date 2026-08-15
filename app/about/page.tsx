// app/about/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';

const WHY_US = [
  { title: 'Creative & Innovative Designs', desc: 'Every space is designed with intent, not templated.' },
  { title: 'Accurate Technical Drawings', desc: 'Dimensioned, scaled, and prepared to industry standards.' },
  { title: 'Client-Focused Approach', desc: 'We design around your goals, budget, and timeline — not ours.' },
  { title: 'Global Design Standards', desc: 'Documentation and drafting built to international conventions.' },
  { title: 'Timely Project Delivery', desc: 'Clear timelines you can plan a build around.' },
  { title: 'Sustainable & Functional Solutions', desc: 'Design that performs, not just presents well.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="About Maestra Arch"
        title="Designing the future, building with precision"
        description="Maestra Arch is the architectural and engineering division of Maestra Group — providing design, drafting, visualization, and construction support to clients worldwide."
      />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
              Our Mission
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Turning ideas into buildable, precise architecture
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Our mission is to transform ideas into accurate, buildable, and visually
              compelling architectural solutions that combine creativity, functionality,
              and precision. As the architectural and engineering division of Maestra
              Group, we work across architectural design, CAD drafting, BIM
              documentation, 3D visualization, quantity estimation, and construction
              support.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We focus on residential and commercial projects — houses, villas,
              apartments, offices, retail spaces, and restaurants — giving each one
              the same disciplined process: consultation, design, documentation,
              visualization, and delivery.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative flex items-center justify-center">
              <div aria-hidden className="absolute h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />
              <img
                src="/images/maestra-arch-badge.png"
                alt="Maestra Arch"
                className="relative h-100 w-100 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.2)] sm:h-80 sm:w-80"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                What Sets Maestra Arch Apart
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="gold-glow-hover h-full rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] px-6 py-20 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Maestra Arch
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            <span className="text-shimmer-gold">Designing the Future.</span> Building with Precision.
          </h2>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}