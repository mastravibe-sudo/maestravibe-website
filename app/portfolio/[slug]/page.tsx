// app/portfolio/[slug]/page.tsx
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import ProjectMedia from '@/components/site/ProjectMedia';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
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

      {/* 3D Renders + 2D Technical Drawings, both with zoom/pan lightbox */}
      <ProjectMedia gallery={project.gallery} drawings={project.drawings} title={project.title} />

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