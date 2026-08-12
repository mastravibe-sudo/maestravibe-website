// lib/projects.ts
// Centralized project data — used by both the portfolio grid and the
// individual project detail pages. Replace with real projects/photos
// whenever you have them.

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  cover: string;
  gallery: string[];
  summary: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'meridian-residence',
    title: 'Meridian Residence',
    category: 'Residential',
    location: 'London, UK',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A private residence designed around light, material honesty, and quiet luxury.',
    description:
      'Meridian Residence sits on a narrow urban plot, using a stepped massing strategy to bring natural light deep into the plan. Materials were chosen for how they age — board-formed concrete, white oak, and blackened steel — creating a home that feels considered rather than styled.',
  },
  {
    slug: 'horizon-corporate-tower',
    title: 'Horizon Corporate Tower',
    category: 'Commercial',
    location: 'Manchester, UK',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A 22-storey commercial tower built around flexible floorplates and a full glazed atrium.',
    description:
      'Horizon Corporate Tower was designed for adaptability — column-free floorplates that can be reconfigured as tenants change, with a full-height atrium bringing daylight into the building\u2019s core. The facade uses a high-performance double-skin system to manage solar gain without sacrificing transparency.',
  },
  {
    slug: 'lakeside-pavilion',
    title: 'Lakeside Pavilion',
    category: 'Residential',
    location: 'Lake District, UK',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A low, horizontal pavilion sitting quietly within the landscape.',
    description:
      'Set into a gentle slope above the lake, the pavilion\u2019s low profile and cedar cladding were chosen to weather into the surrounding landscape over time. Full-height glazing along the lake-facing elevation blurs the line between inside and out.',
  },
  {
    slug: 'atrium-office-park',
    title: 'Atrium Office Park',
    category: 'Commercial',
    location: 'Birmingham, UK',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A three-building office campus organized around a shared landscaped atrium.',
    description:
      'Atrium Office Park reimagines the suburban office campus as a connected community rather than three isolated buildings. A shared glazed atrium links all three blocks, hosting informal meeting space, a cafe, and event areas used by every tenant.',
  },
  {
    slug: 'coastal-villa',
    title: 'Coastal Villa',
    category: 'Residential',
    location: 'Cornwall, UK',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A clifftop home engineered to withstand coastal weather without compromising on views.',
    description:
      'Designed to withstand exposed coastal conditions, Coastal Villa uses a reinforced concrete frame with a rain-screen facade, oriented to frame uninterrupted sea views from every principal room while sheltering entry courtyards from prevailing winds.',
  },
  {
    slug: 'civic-cultural-center',
    title: 'Civic Cultural Center',
    category: 'Public',
    location: 'Leeds, UK',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    ],
    summary: 'A public cultural center bringing gallery, performance, and civic space under one roof.',
    description:
      'The Civic Cultural Center consolidates a gallery, a 300-seat performance hall, and flexible civic meeting space into a single public building, organized around a central foyer that stays open to the street throughout the day.',
  },
];

export function getProject(slug: string) {
  return PROJECTS.find(p => p.slug === slug);
}