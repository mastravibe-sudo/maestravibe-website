// components/site/WhatsAppButton.tsx
// Floating WhatsApp button — add once in app/layout.tsx so it shows on every page.
'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/920000000000?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#d4af37]/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.7 4.52 1.902 6.35L4 29l7.86-1.87A11.93 11.93 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.9a9.86 9.86 0 01-5.04-1.38l-.36-.21-4.66 1.11 1.13-4.55-.24-.37A9.87 9.87 0 016.1 15c0-5.46 4.44-9.9 9.9-9.9S25.9 9.54 25.9 15s-4.44 9.9-9.9 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}