export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Full Time' | 'Part Time';
  level?: 'Entry Level' | 'Mid Level' | 'Senior';
  experience?: string;
  salary?: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  whyJoinUs?: string[];
}

export const careerPositions: CareerPosition[] = [
  {
    id: 'ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Dhaka, Bangladesh',
    type: 'Full Time',
    level: 'Mid Level',
    experience: '2–3 years',
    salary: '৳70,000 – ৳100,000 /month',
    description:
      'We are looking for a highly creative, visually strong UI/UX Designer with a solid understanding of modern UI design, layout systems and motion-friendly interfaces.',
    responsibilities: [
      'Design complete web templates focusing on modern layout and user experience',
      'Create visually appealing interfaces based on current design trends',
      'Apply strong visual hierarchy, typography, spacing, and color theory',
      'Collaborate with product managers, developers, and other designers',
      'Ensure design consistency and usability across all components',
    ],
    requirements: [
      'Strong portfolio with modern UI designs, especially web layouts',
      'Excellent understanding of color, shapes, whitespace, and visual hierarchy',
      'Proficiency in Figma or similar design tools',
      'Experience designing scalable design systems',
    ],
    benefits: [
      'Exceptional work culture and environment',
      'Free meals, coffee, and snacks',
      'Full-size gym to support wellness and fitness',
      'Facilities for both indoor and outdoor sports',
      'Free shuttle service (subject to route availability)',
      'Parking facility (subject to availability)',
      'Two festival bonuses',
      'Leave encashment',
      'Loyalty bonus',
      'Maternity and paternity leaves',
      'Designated areas for male and female Muslim prayers',
    ],
    whyJoinUs: [
      'Opportunity to work on impactful projects.',
      'Cultivate creativity and innovation within a supportive culture.',
      'Competitive salary and benefits.',
    ],
  },
  {
    id: 'senior-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full Time',
    level: 'Senior',
    experience: '5+ years',
    salary: 'Negotiable',
    description:
      'We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building user interfaces and implementing features using modern web technologies.',
    responsibilities: [
      'Develop and maintain high-quality web applications using React/Next.js',
      'Collaborate with designers to implement responsive and accessible UIs',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and mentor junior developers',
      'Work closely with product managers and other stakeholders',
    ],
    requirements: [
      'Strong proficiency in JavaScript/TypeScript, React, and Next.js',
      'Experience with modern frontend build pipelines and tools',
      'Familiarity with REST APIs and GraphQL',
      'Understanding of web performance optimization',
    ],
    benefits: [
      'Flexible work hours and remote work options',
      'Health, dental, and vision insurance',
      'Professional development budget',
      'Generous vacation policy',
    ],
    whyJoinUs: [
      'Ship high-impact features used by real customers.',
      'Mentor a talented team and grow your leadership skills.',
      'Competitive compensation with flexibility.',
    ],
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full Time',
    level: 'Mid Level',
    experience: '3+ years',
    salary: 'Negotiable',
    description:
      'Lead our marketing efforts and help grow our brand presence. You will be responsible for developing and executing marketing strategies.',
    responsibilities: [
      'Plan and execute multi-channel marketing campaigns',
      'Collaborate with design and product teams on go-to-market',
      'Analyze performance and iterate for growth',
    ],
    requirements: [
      'Proven experience with digital marketing and analytics',
      'Strong communication and project management skills',
    ],
    whyJoinUs: [
      'Own strategy end-to-end and see measurable results.',
      'Work cross-functionally with design and product.',
      'Supportive team with room to experiment and grow.',
    ],
  },
];


