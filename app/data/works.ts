export interface WorkItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  images?: string[]; // For multiple project images
  tags: string[];
  category: 'web' | 'mobile' | 'design' | 'seo' | 'other';
  featured: boolean;
  client?: string;
  date: string; // ISO date string
  url?: string;
  githubUrl?: string;
  technologies: string[];
  teamMembers?: string[]; // References to team member IDs
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export const works: WorkItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    shortDescription: 'A full-featured e-commerce solution with modern UI/UX',
    longDescription: 'Developed a comprehensive e-commerce platform with features including product catalog, shopping cart, user authentication, and payment processing. The platform supports multiple vendors and includes an admin dashboard for inventory and order management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    ],
    tags: ['ecommerce', 'react', 'nodejs', 'mongodb'],
    category: 'web',
    featured: true,
    client: 'Retail Solutions Inc.',
    date: '2024-03-15',
    url: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourorg/ecommerce-platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    teamMembers: ['tanvir-almas', 'tasfirul-haque'],
    challenges: [
      'Handling high traffic during sales events',
      'Implementing real-time inventory updates',
      'Ensuring secure payment processing'
    ],
    solutions: [
      'Implemented server-side caching and CDN',
      'Used WebSockets for real-time updates',
      'Integrated with Stripe and PayPal with PCI compliance'
    ],
    results: [
      '40% increase in conversion rate',
      '99.9% uptime during Black Friday sales',
      'Positive user feedback on the checkout experience'
    ]
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracker App',
    shortDescription: 'Mobile application for tracking workouts and nutrition',
    longDescription: 'A cross-platform mobile application that helps users track their workouts, nutrition, and fitness goals. The app includes personalized workout plans, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['mobile', 'react native', 'fitness', 'health'],
    category: 'mobile',
    featured: true,
    date: '2024-01-20',
    url: 'https://apps.apple.com/app/fitness-tracker',
    technologies: ['React Native', 'Firebase', 'Redux'],
    teamMembers: ['nabil-bin-kamal', 'omar-saliheen']
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website Redesign',
    shortDescription: 'Modern corporate website with improved user experience',
    longDescription: 'Redesigned and developed a modern corporate website for a Fortune 500 company, focusing on improved user experience, better content organization, and enhanced mobile responsiveness.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['corporate', 'nextjs', 'tailwind', 'responsive'],
    category: 'web',
    featured: true,
    client: 'TechCorp Industries',
    date: '2024-02-10',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    results: [
      '60% improvement in page load speed',
      '45% increase in mobile engagement',
      'Better SEO rankings'
    ]
  },
  {
    id: 'ui-design-system',
    title: 'Design System & UI Components',
    shortDescription: 'Comprehensive design system for consistent UI/UX',
    longDescription: 'Created a comprehensive design system with reusable UI components, design tokens, and documentation to ensure consistent user experience across all products.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['design-system', 'ui-components', 'figma', 'storybook'],
    category: 'design',
    featured: false,
    date: '2024-01-15',
    technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
    results: [
      '50% reduction in design time',
      'Consistent brand experience',
      'Improved developer productivity'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization Project',
    shortDescription: 'Comprehensive SEO optimization for better rankings',
    longDescription: 'Implemented comprehensive SEO strategies including technical SEO, content optimization, and local SEO to improve search engine rankings and organic traffic.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['seo', 'optimization', 'analytics', 'content'],
    category: 'seo',
    featured: false,
    client: 'Local Business Network',
    date: '2024-03-01',
    technologies: ['Google Analytics', 'Search Console', 'SEMrush'],
    results: [
      '200% increase in organic traffic',
      'Top 3 rankings for target keywords',
      'Improved local search visibility'
    ]
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Management App',
    shortDescription: 'Complete restaurant management solution',
    longDescription: 'Developed a comprehensive restaurant management application including order management, inventory tracking, staff scheduling, and customer relationship management.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['restaurant', 'management', 'mobile', 'inventory'],
    category: 'mobile',
    featured: false,
    date: '2024-02-28',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    results: [
      '30% reduction in order errors',
      'Improved staff efficiency',
      'Better customer satisfaction'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Creative Portfolio Website',
    shortDescription: 'Stunning portfolio website for creative professionals',
    longDescription: 'Designed and developed a modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimal performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['portfolio', 'creative', 'animations', 'responsive'],
    category: 'web',
    featured: false,
    date: '2024-01-30',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Three.js'],
    results: [
      'Engaging user experience',
      'Fast loading times',
      'Increased client inquiries'
    ]
  },
  {
    id: 'dashboard-ui',
    title: 'Analytics Dashboard UI',
    shortDescription: 'Modern analytics dashboard with data visualization',
    longDescription: 'Created a comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable widgets for business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['dashboard', 'analytics', 'data-viz', 'charts'],
    category: 'design',
    featured: false,
    date: '2024-02-15',
    technologies: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
    results: [
      'Improved data insights',
      'Better decision making',
      'Enhanced user experience'
    ]
  },
  {
    id: 'blog-platform',
    title: 'Content Management Platform',
    shortDescription: 'Modern CMS for content creators and publishers',
    longDescription: 'Built a robust content management system with advanced features like multi-user collaboration, content scheduling, SEO tools, and analytics integration.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    tags: ['cms', 'content', 'blog', 'publishing'],
    category: 'web',
    featured: false,
    date: '2024-01-25',
    technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'Redis'],
    results: [
      'Streamlined content workflow',
      'Improved publishing efficiency',
      'Better content performance'
    ]
  },
  {
    id: 'mobile-game',
    title: 'Educational Mobile Game',
    shortDescription: 'Interactive educational game for children',
    longDescription: 'Developed an engaging educational mobile game that helps children learn through interactive gameplay, progress tracking, and adaptive difficulty levels.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    tags: ['game', 'education', 'mobile', 'interactive'],
    category: 'mobile',
    featured: false,
    date: '2024-02-20',
    technologies: ['Unity', 'C#', 'Firebase'],
    results: [
      'Increased learning engagement',
      'Positive user feedback',
      'Educational impact measured'
    ]
  },
  {
    id: 'ecommerce-ui',
    title: 'E-commerce UI/UX Design',
    shortDescription: 'User-centered design for online shopping experience',
    longDescription: 'Designed a complete e-commerce user interface focusing on conversion optimization, user experience, and mobile-first design principles.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['ecommerce', 'ui-ux', 'conversion', 'mobile-first'],
    category: 'design',
    featured: false,
    date: '2024-03-05',
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    results: [
      '25% increase in conversion rate',
      'Improved user satisfaction',
      'Reduced cart abandonment'
    ]
  },
  {
    id: 'api-development',
    title: 'RESTful API Development',
    shortDescription: 'Scalable API architecture for enterprise applications',
    longDescription: 'Developed a comprehensive RESTful API with authentication, rate limiting, caching, and comprehensive documentation for enterprise-level applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['api', 'rest', 'nodejs', 'documentation'],
    category: 'web',
    featured: false,
    date: '2024-02-12',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    results: [
      '99.9% API uptime',
      'Reduced development time',
      'Improved integration experience'
    ]
  }
];
