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
  features?: string[];
}

export const products: Product[] = [
  {
    id: 'pos1',
    name: 'FrooxiPOS',
    type: 'POS System',
    icon: '💳',
    description: 'A comprehensive Point of Sale system with inventory management, customer tracking, and business analytics. Streamline your retail or restaurant operations with our all-in-one solution.',
    cta: 'Request Demo',
    ctaLink: '/contact',
    price: 'Custom Pricing',
    featured: true,
    category: ['saas', 'retail', 'restaurant'],
    tags: ['pos', 'inventory', 'billing', 'analytics'],
    image: '/products/pos-system.jpg',
    features: [
      'Point of Sale Terminal',
      'Invoice & Receipt Generation',
      'Estimate Creation',
      'Customer Management',
      'Product Catalog',
      'Inventory Tracking',
      'Accounting & Transactions',
      'Purchase Orders',
      'Warranty Management',
      'Barcode Scanner/Generator',
      'Multi-location Support',
      'Employee Management',
      'Sales Analytics & Reports',
      'Tax Management',
      'Multi-payment Support',
      'Offline Mode',
      'Cloud Sync',
      'Mobile App Access',
      'Customizable Receipts',
      'Loyalty Programs'
    ]
  },
  
];
