// app/services/page.tsx
import Link from 'next/link';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';

const SERVICES = [
  {
    title: 'Architectural Design',
    desc: 'Complete design solutions for residential and commercial projects — concept design, space planning, floor plans, elevations, sections, and facade design.',
    items: ['Residential Houses & Villas', 'Apartments & Housing Projects', 'Commercial & Office Buildings', 'Retail Stores & Restaurants'],
  },
  {
    title: 'CAD Drafting',
    desc: 'Professional, accurate 2D CAD drawings prepared with proper dimensions, scales, and industry standards.',
    items: ['Floor Plans & Working Drawings', 'Structural, Electrical & Plumbing Drawings', 'PDF / Hand Sketch to CAD Conversion', 'Permit-Ready Documentation'],
  },
  {
    title: '3D Visualization',
    desc: 'High-quality 3D modeling and rendering that helps clients see a project clearly before construction begins.',
    items: ['Exterior & Interior 3D Modeling', 'Photorealistic Renderings', 'Building Massing Models', 'Landscape Visualization'],
  },
  {
    title: 'BIM Documentation',
    desc: 'Coordinated, BIM-ready drawings that support clash-free coordination and efficient project execution.',
    items: ['BIM-Ready Drawing Sets', 'Multi-Discipline Coordination', 'Digital Workflow Support'],
  },
  {
    title: 'Quantity Estimation',
    desc: 'Detailed quantity takeoffs and cost planning support that helps clients control budgets and reduce material waste.',
    items: ['Quantity Takeoffs', 'Bill of Quantities (BOQ)', 'Cost Planning Support'],
  },
  {
    title: 'Construction Support',
    desc: 'Ongoing coordination from concept through execution, keeping every stakeholder aligned as the project moves forward.',
    items: ['Drawing Coordination', 'Design Revisions', 'Consultant Coordination'],
  },
] as const;

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
        eyebrow="What We Offer"
        title="Architectural & Engineering Services"
        description="Maestra Arch is the architectural and engineering division of Maestra Group — delivering design, drafting, visualization, and construction support for residential and commercial projects."
      />

      {/* Full services list */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="gold-glow-hover h-full rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 text-[#d4af37]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
              Our Workflow
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">How We Work</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="gold-glow-hover h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2">
                  <div className="mb-6 text-shimmer-gold text-5xl font-bold">{step.number}</div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm leading-7 text-gray-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to start your <span className="text-shimmer-gold">project?</span>
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-[#e8c766]"
        >
          Get In Touch
        </Link>
      </section>

      <Footer />
    </>
  );
}