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
    id: 'revoult-studio',
    title: 'Agency Website',
    shortDescription: 'A modern, animated agency website with smooth performance and SEO optimization',
    longDescription: 'Revoult Studio, a creative agency specializing in video editing, 3D animation, graphics designing, and website development, approached us to create a modern, visually engaging website that reflects their premium creative work. Their requirements included smooth, lag-free animations across all devices, a responsive design that performs well on both desktop and mobile, and strong SEO optimization to improve online visibility. Additionally, they needed a secure admin panel to add and manage portfolio items, as well as to create multiple admin accounts for team members. We chose Next.js for its SEO-friendly capabilities and fast performance, MongoDB for flexible data management, and Framer Motion for fluid animations. Our development process focused on balancing high-quality visuals with performance optimization, ensuring the animations remained silky smooth without compromising loading speed. The admin panel was built with a role-based access system, enabling secure content management without technical barriers for the client’s team. In the end, the new website not only elevated Revoult Studio’s online presence but also streamlined their workflow, allowing them to showcase their work more effectively and engage potential clients with a polished, professional platform.',
    image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755045105/RevoultStudio_irf8or.png',
    images: [],
    tags: ['agency', 'nextjs', 'mongodb', 'seo', 'framer-motion'],
    category: 'web',
    featured: true,
    client: 'Revoult Studio',
    date: '2024-03-15',
    url: 'https://revoultstudio.com',
    githubUrl: '',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'Framer Motion'],
    teamMembers: ['tasfirul-haque'],
    challenges: [
      'Maintaining smooth, lag-free animations across all devices',
      'Building a secure admin panel for portfolio and user management',
      'Optimizing the site for SEO while using animations'
    ],
    solutions: [
      'Used Framer Motion with GPU-accelerated animations for smooth performance',
      'Implemented a role-based admin panel with MongoDB and secure authentication',
      'Applied Next.js server-side rendering and metadata optimization for SEO'
    ],
    results: [
      'Fast-loading, mobile-friendly experience with smooth animations',
      'Efficient admin workflow for adding and managing content',
      'Improved search engine visibility and higher client engagement'
    ]
  },
  {
    id: 'mateluxy',
    title: 'Mateluxy Real Estate',
    shortDescription: 'A feature-rich real estate platform built with the MERN stack',
    longDescription: 'Mateluxy, a Dubai-based real estate company specializing in luxury property sales, rentals, and management, approached us to create a sleek and visually appealing website that reflects their premium brand identity while being intuitive and easy to navigate for their clients. The project required building both the frontend and backend, as well as designing the complete UI from scratch, all within a strict one-month deadline. We developed the platform using the MERN stack to ensure scalability, speed, and flexibility. The website features a clean, modern interface with property listings, agent profiles, news articles, and an engaging homepage designed to capture user interest. A robust admin panel was implemented to allow the Mateluxy team to manage every aspect of the platform—including banners, agents, properties, news, contacts, consultancy requests, and booking management—without needing technical expertise. The result is a responsive, SEO-friendly, and high-performing real estate platform that empowers Mateluxy to showcase their listings, engage potential buyers, and streamline their business operations.',
    image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755046321/Mateluxy_krd2kq.png',
    images: [],
    tags: ['real-estate', 'mern', 'mongodb', 'admin-panel'],
    category: 'web',
    featured: true,
    client: 'Mateluxy Real Estate',
    date: '2024-07-05',
    url: 'https://mateluxy.com',
    githubUrl: '',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Mongoose'],
    teamMembers: ['tasfirul-haque'],
    challenges: [
      'Completing a full-featured real estate platform within one month',
      'Creating a visually appealing UI that matches the luxury brand image',
      'Building an advanced yet easy-to-use admin panel for non-technical staff'
    ],
    solutions: [
      'Used the MERN stack to ensure rapid development and high scalability',
      'Designed a clean, modern UI/UX to attract potential clients and improve usability',
      'Developed a comprehensive admin panel with role-based access and complete site control'
    ],
    results: [
      'Successfully launched within the one-month deadline',
      'Significant improvement in lead generation and user engagement',
      'Streamlined property, agent, and booking management for the Mateluxy team'
    ]
}
,
{
  id: 'mj-hotel-group',
  title: 'MJ Hotel Group',
  shortDescription: 'A luxury hotel booking platform built with WordPress',
  longDescription: 'MJ Hotel Group, a hospitality brand offering luxury serviced apartments across London, wanted a premium online platform that would reflect their high-end brand image and make the booking process seamless for their guests. Their goal was to showcase their wide range of properties—located in areas like Ealing, Northfield, Northolt, Cockfosters, Camden, and Kenton—while also highlighting their focus on exceptional hospitality and sustainability. We developed the website using WordPress to ensure fast deployment, easy management, and scalability for future updates. The site includes a custom hotel booking system that allows guests to browse properties, check availability, and complete bookings directly online. Property pages feature detailed descriptions, amenities, high-quality images, and location details to help guests make informed decisions. The design is clean, responsive, and aligned with MJ Hotel Group’s luxury branding, ensuring a smooth experience across all devices. The result is a visually engaging, user-friendly booking platform that has helped streamline their operations and improve guest engagement.',
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755047243/MJHotelGroup_bzda5f.png',
  images: [],
  tags: ['hotel-booking', 'wordpress', 'hospitality', 'cms'],
  category: 'web',
  featured: true,
  client: 'MJ Hotel Group',
  date: '2024-05-20',
  url: 'https://mjhotelgroup.co.uk',
  githubUrl: '',
  technologies: ['WordPress', 'PHP', 'MySQL', 'Elementor', 'WooCommerce Bookings'],
  teamMembers: ['tasfirul-haque'],
  challenges: [
    'Creating a luxury brand-aligned design for a hospitality website',
    'Integrating a seamless booking system for multiple properties',
    'Ensuring fast performance while using a CMS with rich media content'
  ],
  solutions: [
    'Used a fully customized WordPress theme with premium design elements',
    'Integrated a booking system with live availability and secure payment options',
    'Optimized media assets and implemented caching for smooth performance'
  ],
  results: [
    'Increased online bookings through a more intuitive platform',
    'Positive feedback from guests on the ease of use',
    'Improved operational efficiency for managing reservations and property listings'
  ]
}
,
{
  id: 'kd-managements',
  title: 'Attendance Tracking System',
  shortDescription: 'An employee attendance tracking system built with WordPress',
  longDescription: 'KD Managements, a client needing a reliable method to track employee attendance, requested a user-friendly, web-based system that would simplify in/out recording and provide administrators with actionable insights. Built with WordPress, the system includes custom-developed plugins for punch-in and punch-out functionality, enabling employees to easily check in and out of work. On the admin side, a sleek dashboard displays real-time attendance summaries and analytics, offering at-a-glance visibility into team activity, attendance patterns, and productivity metrics. This polished yet practical solution ensures that both employees and administrators can manage attendance seamlessly without technical hassles.',
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755048591/image_2025-08-13_072948339_ux2lxt.png',
  images: [],
  tags: ['attendance', 'wordpress', 'custom-plugin', 'analytics'],
  category: 'web',
  featured: false,
  client: 'KD Managements',
  date: '2024-09-10',
  url: 'https://kd-managements.com',
  githubUrl: '',
  technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Plugins', 'Chart.js'],
  teamMembers: ['tasfirul-haque'],
  challenges: [
    'Creating a seamless punch-in/punch-out workflow within WordPress',
    'Developing custom plugins that integrate securely into existing CMS architecture',
    'Presenting real-time attendance data in an intuitive dashboard for the admin'
  ],
  solutions: [
    'Built custom WordPress plugins to handle employee check-in and check-out logic',
    'Leveraged secure backend logic with optimized database queries for accurate time tracking',
    'Designed an admin dashboard with attendance summaries and visual analytics using Chart.js'
  ],
  results: [
    'Streamlined attendance tracking for employees with easy punch-in/out functionality',
    'Empowered admins with real-time insights into attendance and team behavior',
    'Reduced manual HR overhead and improved data accuracy in workforce management'
  ]
}
,
{
  id: 'product-page-ui-design',
  title: 'Modern Product Page',
  shortDescription: 'A clean, modern product and archive page UI designed with Figma',
  longDescription: 'As a UI/UX practice project, I designed a modern, user-friendly product page and archive listing using Figma. The design emphasizes clarity, intuitive navigation, and visual hierarchy to enhance user engagement and improve product discovery. Features include a sleek product gallery, detailed product information sections, customer reviews, and an accessible filtering system on the archive page. The project explores responsive layouts, clean typography, and consistent design patterns to create a seamless shopping experience. This work helps hone my skills in modern interface design and prototyping, preparing me for real-world eCommerce projects.',
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755049723/Frame_41_tqtzzc.png',
  images: [],
  tags: ['ui-design', 'figma', 'product-page', 'ecommerce', 'responsive-design'],
  category: 'design',
  featured: false,
  client: 'Practice Project',
  date: '2024-08-10',
  url: '',
  githubUrl: '',
  technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
  teamMembers: ['tasfirul-haque'],
  challenges: [
    'Designing a clean and intuitive UI that improves product discovery and user engagement'
  ],
  solutions: [
    'Utilized Figma’s auto-layout and component features to create a scalable and consistent design system'
  ],
  results: [
    'A polished UI design ready for handoff to developers',
    'Improved user navigation and product discovery through intuitive layout',
    'Enhanced skills in modern UI design and prototyping tools'
  ]
}
,
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
