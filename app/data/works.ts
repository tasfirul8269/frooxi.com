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
    image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755088417/Untitled_design_lb7ifz.png',
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
    image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755088418/Untitled_design_1_ippihn.png',
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
  featured: false,
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
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755090262/Untitled_design_2_mfwkbx.png',
  images: [],
  tags: ['ui-design', 'figma', 'product-page', 'ecommerce', 'responsive-design'],
  category: 'design',
  featured: true,
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
  id: 'ni-mot',
  title: 'NI-MOT – MOT Booking',
  shortDescription: 'A streamlined MOT booking & vehicle collection platform built with WordPress',
  longDescription: 'NI-MOT, Northern Ireland’s first dedicated MOT collection and booking service, simplifies a normally tedious process by handling everything—from appointment scheduling and vehicle collection to testing and return—on behalf of customers. Backed by over 15 years of motor trade experience, the platform caters to a wide range of vehicles including cars, vans, HGVs, and electric vehicles. Built with WordPress and a fully custom-designed theme, the site presents clear service offerings like Full MOT, Full MOT Express (within 3–5 business days), and retests. It emphasizes regional expertise, convenience, and trust by highlighting urgent booking options, services for non-tech users, uninsured or abroad owners, and fleet solutions. The result is a concise, branded, and user-friendly site that enables smooth customer journeys and supports NI-MOT’s mission to make the MOT process fast and stress-free.',
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755091033/Untitled_design_3_h8sc0z.png',
  images: [],
  tags: ['wordpress', 'mot-booking', 'custom-design', 'vehicle-service'],
  category: 'web',
  featured: false,
  client: 'NI-MOT',
  date: '2025-06-15',
  url: 'https://ni-mot.co.uk',
  githubUrl: '',
  technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'Booking Logic'],
  teamMembers: ['tasfirul-haque'],
  challenges: [
    'Communicating a complex, region-specific full-service MOT offering clearly to diverse users'
  ],
  solutions: [
    'Built a custom WordPress theme with structured, service-focused sections and clear user pathways—highlighting express options, collection/return logistics, and support for non-tech users'
  ],
  results: [
    'Delivered a branded, easy-to-use platform that showcases NI-MOT’s unique offering and regional advantage',
    'Enhanced trust and conversion through clarity and professional presentation',
    'Improved customer experience with simplified access to multiple MOT services'
  ]
}
,
{
  id: 'tournia',
  title: 'Tournia – Esports Tournament & Team Management App',
  shortDescription: 'A complete esports management solution for organizers, teams, and players built with Flutter',
  longDescription: 'Tournia is a cross-platform esports management application designed to streamline competitive gaming events. Built with Flutter for a unified Android and iOS experience, the app empowers organizers to create tournaments for multiple games, set rules, schedules, and prize pools. Teams can register, manage rosters, and invite players, while individual players can join teams or participate in solo events. The platform features tournament brackets, live updates, team chat, player profiles, and game-specific customization. Its intuitive design ensures that even first-time users can navigate from tournament discovery to participation without friction. Tournia aims to enhance the esports ecosystem by giving every participant—organizer, team, or player—the tools they need to manage and experience tournaments seamlessly.',
  image: 'https://res.cloudinary.com/dyqqhtmsn/image/upload/v1755092973/Untitled_design_4_n984wx.png',
  images: [],
  tags: ['flutter', 'esports', 'tournament-management', 'team-management'],
  category: 'mobile',
  featured: false,
  client: 'Internal Project',
  date: '2025-07-10',
  url: '',
  githubUrl: '',
  technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Realtime Database'],
  teamMembers: ['tasfirul-haque'],
  challenges: [
    'Creating a flexible tournament system that supports different game formats, team structures, and participation rules while keeping the interface user-friendly'
  ],
  solutions: [
    'Designed a modular tournament architecture in Flutter integrated with Firebase for real-time updates, supporting multiple game types and dynamic team/player management with a simple, intuitive UI'
  ],
  results: [
    'Delivered a scalable, cross-platform esports solution accessible to organizers, teams, and players alike',
    'Enabled real-time tournament tracking and communication, improving engagement and event efficiency',
    'Provided a foundation for future monetization through premium features, sponsorship integration, and analytics'
  ]
}
,
 
];
