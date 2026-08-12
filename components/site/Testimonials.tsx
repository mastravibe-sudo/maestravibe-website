// components/site/Testimonials.tsx
// Static grid of client testimonials — edit the TESTIMONIALS array with
// real client quotes and names whenever you have them.

const TESTIMONIALS = [
  {
    quote: "Maestra Arch turned our vague ideas into a clear, buildable plan. The CAD documentation was flawless and saved us weeks with the contractor.",
    name: 'Ahmed R.',
    role: 'Residential Client',
  },
  {
    quote: "Fast, precise, and genuinely collaborative. Every revision was handled quickly without losing the original design intent.",
    name: 'Sara K.',
    role: 'Commercial Developer',
  },
  {
    quote: "The 3D visualizations helped us secure buy-in from stakeholders before a single brick was laid. Exceptional attention to detail.",
    name: 'James Whitfield',
    role: 'Project Manager',
  },
] as const;

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(t => (
            <div
              key={t.name}
              className="gold-glow-hover flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8"
            >
              <svg className="h-6 w-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{t.quote}</p>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}