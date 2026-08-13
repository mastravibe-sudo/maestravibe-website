// app/portfolio/[slug]/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Header />

      {/* Full-bleed cover photo, title overlaid — case-study opener */}
      <div className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-[#05070d]">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            {project.category} · {project.location} · {project.year}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Description */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>
          </Reveal>
        </div>
      </section>

      {/* 3D Renders */}
      {project.gallery.length > 0 && (
        <section className="bg-white px-6 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                Visualization
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                3D Renders
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8 pb-20">
              {project.gallery.map((img, i) => (
                <Reveal key={img} delay={i * 100}>
                  <img
                    src={img}
                    alt={`${project.title} — 3D render ${i + 1}`}
                    className="h-[420px] w-full rounded-2xl object-cover lg:h-[600px]"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2D technical drawings — click to open full size */}
      {project.drawings.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                Documentation
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                2D Technical Drawings
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600">
                Sample sheets from the CAD documentation package. Click any drawing to open it full size.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {project.drawings.map((d, i) => (
                <Reveal key={d.src} delay={i * 100}>
                  <a
                    href={d.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-glow-hover group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition"
                  >
                    <div className="border-b border-gray-100 bg-white p-2">
                      <img
                        src={d.src}
                        alt={d.label}
                        className="h-72 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-sm font-semibold text-gray-900">{d.label}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#b8942e]">
                        Open ↗
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="border-t border-gray-100 bg-white px-6 py-16 text-center lg:px-8">
        <Link
          href="/portfolio"
          className="text-sm font-bold uppercase tracking-widest text-[#b8942e] hover:text-[#8a7226]"
        >
          ← Back to all projects
        </Link>
      </section>

      <Footer />
    </>
  );
}