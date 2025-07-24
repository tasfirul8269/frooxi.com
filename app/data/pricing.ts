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
        price: '$1,200',
        description: 'Basic, modern website for small businesses or portfolios.',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Contact form'
        ],
        buttonText: 'Get Started',
        badgeText: ''
      },
      {
        id: 'website-professional',
        name: 'Professional',
        price: '$2,500',
        description: 'Custom website with CMS, blog, and advanced features.',
        features: [
          'Up to 15 pages',
          'CMS integration',
          'Blog & SEO setup'
        ],
        buttonText: 'Choose Plan',
        isRecommended: true,
        badgeText: 'Recommended'
      },
      {
        id: 'website-custom',
        name: 'Custom',
        price: 'Contact Us',
        description: 'For e-commerce, web apps, or unique requirements.',
        features: [
          'Unlimited pages',
          'Custom integrations',
          'Dedicated support'
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
