// components/site/Footer.tsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/10 bg-[#05070d] px-6 py-16 font-sans tracking-tight text-gray-400 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-12 lg:flex-row">
          <div className="lg:max-w-xs">
            <Link href="/" className="mb-4 flex items-center gap-3 text-3xl font-bold tracking-tighter text-shimmer-gold">
              <img src="/images/maestra-arch-badge.png" alt="" className="h-10 w-10 object-contain" />
              MAESTRA ARCH
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Designing spaces, creating futures — modern architectural design, CAD drafting,
              and 3D visualization for ambitious projects.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:justify-items-end">
            <div className="min-w-[140px]">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Services</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">Architectural Design</Link></li>
                <li><Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">CAD Drafting</Link></li>
                <li><Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">3D Visualization</Link></li>
                <li><Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">BIM Services</Link></li>
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Resources</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/portfolio" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">Contact</Link></li>
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Company</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/about" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-300 transition-all duration-300 hover:text-[#d4af37]">Portfolio</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/10 pt-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="w-full max-w-md">
              <h4 className="mb-2 text-lg font-medium text-white">Subscribe to our newsletter</h4>
              <p className="mb-4 text-sm text-gray-400">Get project updates and design insights in your inbox.</p>
              <form className="group relative" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-[#d4af37]/20 bg-[#0d1117] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                />
                <button className="absolute bottom-2 right-2 top-2 rounded-lg bg-[#d4af37] px-5 text-sm font-medium text-black transition-colors hover:bg-[#e8c766]">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#d4af37]/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-gray-500 md:flex-row">
            <p>© 2026 Maestra Arch. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}