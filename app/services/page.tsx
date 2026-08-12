// app/services/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';

const STEPS = [
  { number: '01', title: 'Consultation', description: 'We discuss your project requirements, goals, budget, and timeline to understand your vision.' },
  { number: '02', title: 'Planning & Design', description: 'Our architects prepare concepts, layouts, and detailed architectural designs tailored to your needs.' },
  { number: '03', title: 'CAD Documentation', description: 'We create accurate construction drawings, working drawings, elevations, sections, and detailed documentation.' },
  { number: '04', title: 'Visualization', description: 'Photorealistic 3D renderings and visual presentations help you see the final project before construction.' },
  { number: '05', title: 'Delivery & Support', description: 'Final CAD files, PDFs, revisions, and continuous support are provided until project completion.' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Our Workflow"
        title="How Maestra Arch works"
        description="A professional architectural workflow from concept to construction documentation — accurate, buildable, on time."
      />

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(step => (
              <div
                key={step.number}
                className="gold-glow-hover rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-2"
              >
                <div className="mb-6 text-shimmer-gold text-5xl font-bold">{step.number}</div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to start your <span className="text-shimmer-gold">project?</span>
        </h2>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-[#e8c766]"
        >
          Get In Touch
        </a>
      </section>

      <Footer />
    </>
  );
}