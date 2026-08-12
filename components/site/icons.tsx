// components/site/icons.tsx
function Ico({ d, cls = 'w-5 h-5' }: { d: string; cls?: string }) {
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
}

export const PlusIco = () => <Ico cls="w-4 h-4" d="M12 4v16m8-8H4" />;
export const SearchIco = () => <Ico cls="w-5 h-5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />;
export const GridIco = () => (
  <Ico cls="w-5 h-5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
);
export const ListIco = () => <Ico cls="w-5 h-5" d="M4 6h16M4 12h16M4 18h16" />;