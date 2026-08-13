// lib/projects.ts
// Maestra Arch currently focuses on Residential and Commercial work only —
// small-to-mid-scale projects, not large developments. Replace image URLs,
// text, and drawings with real project material when you have them.

export type Drawing = {
  label: string;
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial';
  location: string;
  year: string;
  cover: string;
  gallery: string[];
  drawings: Drawing[];
  summary: string;
  description: string;
};

// Placeholder technical drawings — swap these two files in
// public/drawings/ for real exported CAD/PDF sheets whenever you have them.
const SAMPLE_DRAWINGS: Drawing[] = [
  { label: 'Ground Floor Plan', src: '/drawings/floor-plan-sample.svg' },
  { label: 'Front Elevation', src: '/drawings/elevation-sample.svg' },
];

export const PROJECTS: Project[] = [
  {
    slug: 'parkview-mixed-use-building',
    title: 'Parkview Mixed-Use Building',
    category: 'Commercial',
    location: 'Client Project',
    year: '2026',
    cover: '/portfolio/mixed-use-building/exterior-render.png',
    gallery: [
      '/portfolio/mixed-use-building/exterior-render.png',
      '/portfolio/mixed-use-building/3d-model-exterior.png',
      '/portfolio/mixed-use-building/3d-ground-floor.png',
      '/portfolio/mixed-use-building/3d-floor-1-2.png',
      '/portfolio/mixed-use-building/3d-floor-3-5.png',
    ],
    drawings: [
      { label: 'Ground Floor Plan', src: '/portfolio/mixed-use-building/floor-plan-ground.png' },
      { label: '1st & 2nd Floor Plan', src: '/portfolio/mixed-use-building/floor-plan-1-2.png' },
      { label: '3rd, 4th & 5th Floor Plan', src: '/portfolio/mixed-use-building/floor-plan-3-5.png' },
      { label: 'Building Section', src: '/portfolio/mixed-use-building/section.png' },
      { label: 'Front Elevation', src: '/portfolio/mixed-use-building/elevation-front.png' },
      { label: 'Rear Elevation', src: '/portfolio/mixed-use-building/elevation-rear.png' },
      { label: 'Left Side Elevation', src: '/portfolio/mixed-use-building/elevation-left.png' },
      { label: 'Right Side Elevation', src: '/portfolio/mixed-use-building/elevation-right.png' },
      { label: 'Construction Details', src: '/portfolio/mixed-use-building/details.png' },
    ],
    summary: 'A 6-level mixed-use building — ground floor parking, office floors, and residential apartments above.',
    description:
      'A mixed-use building combining ground-floor parking, office space across the 1st and 2nd floors, and residential apartments on the 3rd through 5th floors, topped with a furnished rooftop terrace. We delivered the complete documentation package — all floor plans, building section, four elevations, and construction details — along with 3D massing studies and a final exterior visualization.',
  },
  {
    slug: 'crestline-single-story-residence',
    title: 'Crestline Single-Story Residence',
    category: 'Residential',
    location: 'Client Project',
    year: '2026',
    cover: '/portfolio/single-story-house/3d-exterior.png',
    gallery: [
      '/portfolio/single-story-house/3d-exterior.png',
      '/portfolio/single-story-house/3d-front.png',
      '/portfolio/single-story-house/interior-living.png',
      '/portfolio/single-story-house/interior-bedroom-dining.png',
    ],
    drawings: [
      { label: 'Floor Plan', src: '/portfolio/single-story-house/floor-plan.png' },
      { label: 'Construction Details', src: '/portfolio/single-story-house/details.png' },
      { label: 'Building Section', src: '/portfolio/single-story-house/section.png' },
      { label: 'Front Elevation', src: '/portfolio/single-story-house/elevation-front.png' },
      { label: 'Rear Elevation', src: '/portfolio/single-story-house/elevation-rear.png' },
      { label: 'Left Elevation', src: '/portfolio/single-story-house/elevation-left.png' },
      { label: 'Right Elevation', src: '/portfolio/single-story-house/elevation-right.png' },
    ],
    summary: 'A single-story family home with an open living and dining layout.',
    description:
      'A compact single-story residence designed around an open living and dining layout, with a full interior furniture plan to help the client visualize each room before construction. We delivered the floor plan, building section, all four elevations, and a construction details sheet covering door, window, and foundation conditions.',
  },
  {
    slug: 'meridian-residence',
    title: 'Meridian Residence',
    category: 'Residential',
    location: 'Lahore, Pakistan',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A compact 3-bedroom family home designed around light, privacy, and material honesty.',
    description:
      'Meridian Residence is a private family home on a narrow urban plot in a residential neighborhood. We handled the full process for the client — concept design, structural coordination drawings, and interior CAD layouts — delivering a home that feels considered rather than styled.',
  },
  {
    slug: 'lakeside-retreat',
    title: 'Lakeside Retreat',
    category: 'Residential',
    location: 'Murree, Pakistan',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A small, low-profile weekend home designed to sit quietly within a hillside site.',
    description:
      'A single-family weekend home set into a gentle slope. Our scope covered site planning, elevation and section drawings, and 3D visualizations the client used to plan interior finishes ahead of construction.',
  },
  {
    slug: 'coastal-villa',
    title: 'Coastal Villa',
    category: 'Residential',
    location: 'Karachi, Pakistan',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A single-family coastal home engineered for exposed weather without compromising on views.',
    description:
      'A private residence needing a reinforced structural approach for exposed coastal conditions, oriented to frame sea views from the main living spaces. We delivered full architectural drawings, structural coordination documentation, and a BOQ to support accurate contractor bidding.',
  },
  {
    slug: 'horizon-office-building',
    title: 'Horizon Office Building',
    category: 'Commercial',
    location: 'Islamabad, Pakistan',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A compact 3-storey office building for a growing local business.',
    description:
      'A small commercial office building designed for a single business tenant, with flexible floorplates and simple, efficient circulation. We prepared full construction documentation and coordinated drawings to support the build.',
  },
  {
    slug: 'crescent-business-suites',
    title: 'Crescent Business Suites',
    category: 'Commercial',
    location: 'Lahore, Pakistan',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A small multi-unit commercial building with ground-floor retail and offices above.',
    description:
      'A modest commercial building combining a few retail units at street level with small office suites above. We produced the CAD drafting package, quantity takeoffs, and 3D renders used by the client to plan the fit-out.',
  },
  {
    slug: 'riverside-cafe-retail',
    title: 'Riverside Café & Retail Unit',
    category: 'Commercial',
    location: 'Karachi, Pakistan',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    ],
    drawings: SAMPLE_DRAWINGS,
    summary: 'A small café and retail unit along a riverside walkway.',
    description:
      'A boutique café with an adjoining retail unit, designed for a single small-business owner. Our team delivered space-planning layouts, facade design, and construction-ready drawings coordinated closely with the client\u2019s fit-out timeline.',
  },

];

export function getProject(slug: string) {
  return PROJECTS.find(p => p.slug === slug);
}