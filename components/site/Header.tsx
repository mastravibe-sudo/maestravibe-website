// components/site/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#d4af37]/10 bg-[#05070d]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Utility bar — phone / email, always visible */}
      <div className="hidden border-b border-white/5 bg-black/40 px-6 py-2 text-xs text-gray-400 sm:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6">
          <a href="mailto:hello@maestraarch.com" className="flex items-center gap-1.5 transition-colors hover:text-[#d4af37]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@maestraarch.com
          </a>
          <a href="tel:+920000000000" className="flex items-center gap-1.5 transition-colors hover:text-[#d4af37]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +92 000 0000000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/maestra-arch-badge.png"
            alt="Maestra Arch"
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Maestra <span className="text-shimmer-gold">Arch</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#d4af37]' : 'text-gray-200 hover:text-[#d4af37]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#d4af37] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#e8c766]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}