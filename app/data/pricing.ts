export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
  isCustom?: boolean;
  badgeText?: string;
}

export interface PricingSection {
  id: string;
  title: string;
  description: string;
  tiers: PricingTier[];
  generalDescription: string;
}

export const pricingSections: PricingSection[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'We build modern, responsive websites tailored to your brand and business goals. From simple landing pages to complex web applications, our team ensures your online presence is fast, secure, and easy to manage.',
    tiers: [
      {
        id: 'website-starter',
        name: 'Starts From',
        price: '$1,500',
        description: 'Basic website + essential SEO for small businesses.',
        features: [
          'Up to 6 pages',
          'Responsive design',
          'Contact form + Google Maps',
          'Basic on-page SEO setup',
          'Google Analytics integration'
        ],
        buttonText: 'Get Started',
        badgeText: 'Popular'
      },
      {
        id: 'website-professional',
        name: 'Professional',
        price: '$4,500',
        description: 'Custom website with advanced SEO for growth-focused businesses.',
        features: [
          'Up to 20 pages / e-commerce ready',
          'CMS integration (WordPress / Next.js / Shopify)',
          'Blog setup + SEO optimization',
          'Technical SEO (schema, indexing, speed)',
          'Competitor keyword analysis',
          'Monthly SEO performance reports',
          '1 month free maintenance'
        ],
        buttonText: 'Choose Plan',
        isRecommended: true,
        badgeText: 'Recommended'
      },
      {
        id: 'website-custom',
        name: 'Custom',
        price: 'Contact Us',
        description: 'For startups & enterprises with unique requirements.',
        features: [
          'Unlimited pages',
          'Custom integrations (APIs, CRM, Payments)',
          'Scalable SEO strategy (50+ keywords)',
          'Content plan + backlink outreach',
          'Dedicated support & consultation'
        ],
        buttonText: 'Request Quote',
        isCustom: true
      }
    ],
    generalDescription: 'Our pricing is designed to be transparent and flexible. All listed prices are starting points and may vary depending on your project\'s complexity, features, and timeline. If your requirements expand or you need additional services, we\'ll always discuss and update the pricing with you in advance. Once you select a plan or request a custom quote, we\'ll schedule a consultation to define your needs and provide a detailed proposal. Most projects begin with a deposit, with the remainder due upon completion or at agreed milestones. If you have questions or unique needs, <a href="/contact" class="underline text-black hover:text-gray-800">contact us</a> for a tailored solution.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'We create user-focused, modern interfaces to boost engagement and usability. Our design process ensures your product is intuitive, visually appealing, and aligned with your brand.',
    tiers: [
      {
        id: 'uiux-starter',
        name: 'Starts From',
        price: '$800',
        description: 'Basic UI/UX for small projects or MVPs.',
        features: [
          'Up to 5 screens/pages',
          'Wireframes',
          'Simple prototype'
        ],
        buttonText: 'Get Started'
      },
      {
        id: 'uiux-professional',
        name: 'Professional',
        price: '$1,500',
        description: 'Comprehensive UI/UX for web or mobile apps.',
        features: [
          'Up to 15 screens/pages',
          'Interactive prototype',
          'Design system'
        ],
        buttonText: 'Choose Plan',
        isRecommended: true,
        badgeText: 'Recommended'
      },
      {
        id: 'uiux-custom',
        name: 'Custom',
        price: 'Contact Us',
        description: 'Enterprise design, branding, or ongoing design support.',
        features: [
          'Unlimited screens/pages',
          'Branding',
          'Dedicated designer'
        ],
        buttonText: 'Request Quote',
        isCustom: true
      }
    ],
    generalDescription: 'Our UI/UX design pricing is tailored to your specific needs. The starting prices cover standard design packages, but we can customize every aspect to fit your requirements. Additional services like user research, usability testing, or design system creation may affect the final cost. We\'ll work with you to define the scope and provide a transparent quote before starting any work. For ongoing design needs, we offer retainer packages at discounted rates. <a href="/contact" class="underline text-black hover:text-gray-800">Contact us</a> to discuss your project in detail.'
  },
  // Add more pricing sections here as needed
];
