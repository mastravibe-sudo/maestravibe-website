// components/site/FAQAccordion.tsx
'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What services does Maestra Arch offer?',
    a: 'We provide architectural design, CAD drafting, 3D visualization, and BIM services — from initial concept through construction-ready documentation.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on project size and complexity, but most residential projects move from consultation to final documentation within 4-8 weeks.',
  },
  {
    q: 'Do you work on both residential and commercial projects?',
    a: 'Yes — we design and document residential homes, commercial buildings, and public/civic spaces.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Just your site details, project goals, and budget range. We\u2019ll take it from there and guide you through the rest.',
  },
  {
    q: 'Can you help with revisions after the design is delivered?',
    a: 'Yes, revisions and continuous support are part of our process until the project is fully completed.',
  },
] as const;

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gray-100 border-t border-b border-gray-100">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`ml-4 shrink-0 text-xl text-[#d4af37] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-gray-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}