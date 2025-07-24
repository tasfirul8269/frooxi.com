export interface WorkItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  images?: string[]; // For multiple project images
  tags: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
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
    image: '/works/ecommerce-preview.jpg',
    images: [
      '/works/ecommerce-1.jpg',
      '/works/ecommerce-2.jpg',
      '/works/ecommerce-3.jpg'
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
    image: '/works/fitness-app-preview.jpg',
    tags: ['mobile', 'react native', 'fitness', 'health'],
    category: 'mobile',
    featured: true,
    date: '2024-01-20',
    url: 'https://apps.apple.com/app/fitness-tracker',
    technologies: ['React Native', 'Firebase', 'Redux'],
    teamMembers: ['nabil-bin-kamal', 'omar-saliheen']
  }
  // Add more work items as needed
];
