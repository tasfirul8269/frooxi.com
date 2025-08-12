export interface BrandProduct {
  icon: string;
  name: string;
  subtitle: string;
  rating: string;
}

export interface Brand {
  id: string;
  name: string;
  subtitle: string;
  initials: string;
  description: string;
  stats: string[];
  cta: string;
  ctaLink: string;
  products: BrandProduct[];
  productsStatus: 'Live' | 'Beta' | 'Coming Soon';
  featured?: boolean;
  category?: string[];
  tags?: string[];
  logo?: string;
}

export const brands: Brand[] = [
  {
    id: 'skilse',
    name: 'SKILSE',
    subtitle: 'Online Learning Platform',
    initials: 'S',
    description: 'Skilse offers a growing library of expert-led online courses focused on web and app development, empowering learners to build real-world skills and stay ahead in the digital age.',
    stats: ['300+ Classes', '1K+ Students'],
    cta: 'Explore Platform',
    ctaLink: '/brands/skilse',
    products: [
      { icon: 'WP', name: 'Web Development', subtitle: 'Learn to build websites', rating: '4.9★' },
      { icon: 'UI', name: 'UI Components', subtitle: 'Reusable elements', rating: '4.8★' },
      { icon: 'API', name: 'API Tools', subtitle: 'Development kits', rating: '4.7★' },
    ],
    productsStatus: 'Coming Soon',
    featured: true,
    category: ['education', 'learning'],
    tags: ['online-courses', 'web-development', 'app-development'],
    logo: '/brands/skilse-logo.png'
  },
  {
    id: 'attowear',
    name: 'ATTOWEAR',
    subtitle: 'Clothing Brand',
    initials: 'A',
    description: 'Attowear is a modern men\'s clothing brand offering a curated selection of essential and trend-forward apparel, including shirts, pants, and outerwear, designed for comfort, versatility, and effortless everyday style for men.',
    stats: ['20+ Products', 'Modern Style'],
    cta: 'Learn More',
    ctaLink: '/brands/attowear',
    products: [
      { icon: 'SH', name: 'Shirts', subtitle: 'Essential wear', rating: '4.8★' },
      { icon: 'PT', name: 'Pants', subtitle: 'Comfortable fit', rating: '4.7★' },
      { icon: 'OT', name: 'Outerwear', subtitle: 'Trend-forward', rating: '4.6★' },
    ],
    productsStatus: 'Coming Soon',
    featured: false,
    category: ['fashion', 'clothing'],
    tags: ['mens-fashion', 'apparel', 'style'],
    logo: '/brands/attowear-logo.png'
  },
  {
    id: 'uivo',
    name: 'UiVo',
    subtitle: 'UI/UX Design Assets',
    initials: 'U',
    description: 'Uivo is a collection of professional Figma-based UI/UX design assets, including components, templates, and patterns, designed to help developers and designers create beautiful and functional digital experiences.',
    stats: ['100+ Assets', 'Professional'],
    cta: 'Learn More',
    ctaLink: '/brands/uivo',
    products: [
      { icon: 'CP', name: 'Components', subtitle: 'Reusable UI elements', rating: '4.9★' },
      { icon: 'TP', name: 'Templates', subtitle: 'Ready-to-use designs', rating: '4.8★' },
      { icon: 'PT', name: 'Patterns', subtitle: 'Design systems', rating: '4.7★' },
    ],
    productsStatus: 'Coming Soon',
    featured: false,
    category: ['design', 'ui-ux'],
    tags: ['figma', 'design-assets', 'ui-components'],
    logo: '/brands/uivo-logo.png'
  },
  {
    id: 'jooloud',
    name: 'Jooloud',
    subtitle: 'No-Code Website Builder',
    initials: 'J',
    description: 'Jooloud is a no-code website builder that allows users to create professional websites without writing code, using a drag-and-drop interface and pre-built templates. It also provides hosting, so your site is live instantly—no extra setup required.',
    stats: ['Premium', 'No-Code'],
    cta: 'Learn More',
    ctaLink: '/brands/jooloud',
    products: [
      { icon: 'WB', name: 'Website Builder', subtitle: 'Drag & drop interface', rating: '4.8★' },
      { icon: 'TM', name: 'Templates', subtitle: 'Pre-built designs', rating: '4.7★' },
      { icon: 'HS', name: 'Hosting', subtitle: 'Instant deployment', rating: '4.9★' },
    ],
    productsStatus: 'Coming Soon',
    featured: false,
    category: ['website-builder', 'no-code'],
    tags: ['no-code', 'website-builder', 'hosting'],
    logo: '/brands/jooloud-logo.png'
  }
];
