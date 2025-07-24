export interface Product {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
  cta: string;
  ctaLink: string;
  price: string;
  featured?: boolean;
  category?: string[];
  tags?: string[];
  image?: string;
}

export const products: Product[] = [
  {
    id: 'app1',
    name: 'TaskFlow',
    type: 'Mobile Application',
    icon: '📱',
    description: 'A productivity app to manage your daily tasks and projects efficiently on the go. Organize, prioritize, and track your work with smart reminders, collaboration tools, and seamless cloud sync across devices.',
    cta: 'Learn More',
    ctaLink: '/products/app1',
    price: 'Free',
    featured: true,
    category: ['mobile', 'productivity'],
    tags: ['task management', 'productivity', 'mobile app'],
    image: '/products/taskflow.jpg'
  },
  {
    id: 'saas1',
    name: 'CloudSuite',
    type: 'SaaS',
    icon: '☁️',
    description: 'A cloud-based suite for business management, analytics, and collaboration. Includes CRM, invoicing, project management, and real-time reporting for growing teams and enterprises.',
    cta: 'Learn More',
    ctaLink: '/products/saas1',
    price: '$19/mo',
    featured: true,
    category: ['saas', 'business'],
    tags: ['business management', 'analytics', 'collaboration'],
    image: '/products/cloudsuite.jpg'
  },
  {
    id: 'web1',
    name: 'ShopEase',
    type: 'Ecommerce Website',
    icon: '🛒',
    description: 'A modern ecommerce platform for seamless online shopping experiences. Features customizable storefronts, secure payments, inventory management, and marketing tools.',
    cta: 'Learn More',
    ctaLink: '/products/web1',
    price: '$299 setup',
    featured: true,
    category: ['web', 'ecommerce'],
    tags: ['ecommerce', 'online store', 'shopping'],
    image: '/products/shopease.jpg'
  },
  {
    id: 'app2',
    name: 'FitTrack',
    type: 'Mobile Application',
    icon: '🏃‍♂️',
    description: 'A fitness tracking app to monitor workouts, nutrition, and progress. Set goals, join challenges, and get personalized insights to stay motivated and healthy.',
    cta: 'Learn More',
    ctaLink: '/products/app2',
    price: 'Free',
    featured: false,
    category: ['mobile', 'health'],
    tags: ['fitness', 'health', 'workout'],
    image: '/products/fittrack.jpg'
  },
  {
    id: 'web2',
    name: 'EduPortal',
    type: 'Educational Website',
    icon: '🎓',
    description: 'An interactive learning platform for students and educators. Access courses, track progress, and collaborate in a secure, user-friendly environment.',
    cta: 'Learn More',
    ctaLink: '/products/web2',
    price: 'Contact Us',
    featured: false,
    category: ['web', 'education'],
    tags: ['education', 'learning', 'courses'],
    image: '/products/eduportal.jpg'
  },
  {
    id: 'saas2',
    name: 'SocialPulse',
    type: 'Social Media Dashboard',
    icon: '📊',
    description: 'Comprehensive social media management platform to schedule posts, analyze performance, and engage with your audience across multiple platforms from one dashboard.',
    cta: 'Learn More',
    ctaLink: '/products/saas2',
    price: '$29/mo',
    featured: true,
    category: ['saas', 'marketing'],
    tags: ['social media', 'analytics', 'scheduling'],
    image: '/products/socialpulse.jpg'
  }
];
