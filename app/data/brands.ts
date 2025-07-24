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
    id: 'joomshaper',
    name: 'JoomShaper',
    subtitle: 'Flagship Platform',
    initials: 'JS',
    description: 'JoomShaper provides a marketplace of over 100 digital products and services, serving thousands of developers and businesses worldwide with cutting-edge solutions.',
    stats: ['100+ Products', '10K+ Users'],
    cta: 'Explore Platform',
    ctaLink: '/brands/joomshaper',
    products: [
      { icon: 'WP', name: 'WordPress Themes', subtitle: 'Premium templates', rating: '4.9★' },
      { icon: 'UI', name: 'UI Components', subtitle: 'Reusable elements', rating: '4.8★' },
      { icon: 'API', name: 'API Tools', subtitle: 'Development kits', rating: '4.7★' },
    ],
    productsStatus: 'Live',
    featured: true,
    category: ['platform', 'marketplace'],
    tags: ['wordpress', 'templates', 'development'],
    logo: '/brands/joomshaper-logo.png'
  },
  {
    id: 'droip',
    name: 'Droip',
    subtitle: 'Website Builder',
    initials: 'DP',
    description: 'Droip is a next-generation website builder for modern web professionals, offering advanced features and seamless workflows.',
    stats: ['Next-Gen', 'Website Builder'],
    cta: 'Learn More',
    ctaLink: '/brands/droip',
    products: [
      { icon: 'BLD', name: 'Site Builder', subtitle: 'Drag & drop', rating: '4.8★' },
      { icon: 'TM', name: 'Templates', subtitle: 'Modern designs', rating: '4.7★' },
    ],
    productsStatus: 'Beta',
    featured: true,
    category: ['website-builder', 'tools'],
    tags: ['design', 'development', 'no-code'],
    logo: '/brands/droip-logo.png'
  },
  {
    id: 'henosum',
    name: 'Henosum',
    subtitle: 'Manufacturing',
    initials: 'HN',
    description: 'Henosum manufactures and delivers flagship products to the global market, trusted by industry leaders.',
    stats: ['Global Reach', 'Flagship Products'],
    cta: 'Discover',
    ctaLink: '/brands/henosum',
    products: [
      { icon: 'TL', name: 'Tool Sets', subtitle: 'Industrial grade', rating: '4.9★' },
      { icon: 'PLT', name: 'Platforms', subtitle: 'Custom solutions', rating: '4.8★' },
    ],
    productsStatus: 'Live',
    featured: true,
    category: ['manufacturing', 'hardware'],
    tags: ['industrial', 'tools', 'equipment'],
    logo: '/brands/henosum-logo.png'
  },
  {
    id: 'nexuslabs',
    name: 'Nexus Labs',
    subtitle: 'R&D Division',
    initials: 'NL',
    description: 'Pushing the boundaries of technology through innovative research and development in emerging fields.',
    stats: ['R&D', 'Innovation'],
    cta: 'Explore Research',
    ctaLink: '/brands/nexuslabs',
    products: [
      { icon: 'AI', name: 'AI Models', subtitle: 'Next-gen AI', rating: '4.7★' },
      { icon: 'BLK', name: 'Blockchain', subtitle: 'Secure solutions', rating: '4.6★' },
    ],
    productsStatus: 'Live',
    featured: false,
    category: ['research', 'development'],
    tags: ['ai', 'blockchain', 'emerging-tech'],
    logo: '/brands/nexuslabs-logo.png'
  },
  {
    id: 'quantum',
    name: 'Quantum',
    subtitle: 'Enterprise Solutions',
    initials: 'QT',
    description: 'Enterprise-grade solutions for large-scale business challenges, delivering reliability at scale.',
    stats: ['Enterprise', 'Scalable'],
    cta: 'Enterprise Demo',
    ctaLink: '/brands/quantum',
    products: [
      { icon: 'CLD', name: 'Cloud Services', subtitle: 'Scalable infrastructure', rating: '4.9★' },
      { icon: 'SAAS', name: 'SaaS Platform', subtitle: 'Business tools', rating: '4.8★' },
    ],
    productsStatus: 'Live',
    featured: true,
    category: ['enterprise', 'cloud'],
    tags: ['saas', 'b2b', 'scalable'],
    logo: '/brands/quantum-logo.png'
  }
];
