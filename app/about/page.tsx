// app/about/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';

const VALUES = [
  { title: 'Precision', desc: 'Every drawing, every measurement, checked and rechecked before it reaches you.' },
  { title: 'Creativity', desc: 'We design spaces that feel considered, not templated.' },
  { title: 'Reliability', desc: 'Clear timelines, honest updates, and delivery you can plan around.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="About Us"
        title="Designing spaces, creating futures"
        description="Maestra Arch is an architectural studio focused on precise, modern design — from first sketch to final construction document."
      />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built on precision, driven by vision
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              We started Maestra Arch to bridge the gap between bold architectural
              vision and the technical precision every build actually needs.
              Our team works across concept design, CAD documentation, and 3D
              visualization — so clients see exactly what they're getting, long
              before construction begins.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Every project moves through the same disciplined process: consultation,
              design, documentation, visualization, and delivery — no shortcuts,
              no guesswork.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div aria-hidden className="absolute h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />
            <img
              src="/images/maestra-arch-badge.png"
              alt="Maestra Arch"
              className="relative h-64 w-64 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.2)] sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
              What Drives Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Our Values</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VALUES.map(v => (
              <div
                key={v.title}
                className="gold-glow-hover rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}