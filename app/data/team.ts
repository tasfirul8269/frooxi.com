export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  tags: string[];
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  // Founders
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Visionary leader with 15+ years of experience in software development and business strategy. Passionate about innovation and team growth, John leads our company with a clear vision for the future.',
    tags: ['Leadership', 'Strategy', 'Innovation'],
    isFounder: true
  },
  {
    id: 'sarah-miller',
    name: 'Sarah Miller',
    role: 'Founder & CTO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Technical expert specializing in scalable architectures and emerging technologies. Sarah drives our technical innovation and ensures we stay ahead of industry trends.',
    tags: ['Architecture', 'Innovation', 'Technology'],
    isFounder: true
  },
  
  // Team Members
  {
    id: 'alex-lee',
    name: 'Alex Lee',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Full-stack developer with expertise in modern web technologies. Alex leads our development team and ensures high-quality code delivery.',
    tags: ['React', 'Node.js', 'TypeScript']
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Experienced full-stack developer specializing in React and Node.js. Creates robust, scalable web applications.',
    tags: ['React', 'Node.js', 'JavaScript']
  },
  {
    id: 'emily-chen',
    name: 'Emily Chen',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Skilled developer with expertise in Python and Django. Builds comprehensive web solutions from frontend to backend.',
    tags: ['Python', 'Django', 'PostgreSQL']
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Backend specialist with deep knowledge of Java and Spring framework. Architects robust server-side solutions.',
    tags: ['Java', 'Spring', 'Microservices']
  },
  {
    id: 'lisa-wang',
    name: 'Lisa Wang',
    role: 'Mobile Developer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Mobile development expert creating native iOS and Android applications. Focuses on performance and user experience.',
    tags: ['Swift', 'Kotlin', 'React Native']
  },
  {
    id: 'sophie-turner',
    name: 'Sophie Turner',
    role: 'Senior UX Designer',
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Creates intuitive user experiences with a focus on accessibility and user research. Ensures products are user-centered.',
    tags: ['UX Research', 'Prototyping', 'User Testing']
  },
  {
    id: 'marcus-rodriguez',
    name: 'Marcus Rodriguez',
    role: 'UI Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Specializes in creating beautiful, modern interfaces with attention to detail and brand consistency.',
    tags: ['Visual Design', 'Branding', 'Figma']
  },
  {
    id: 'zara-ahmed',
    name: 'Zara Ahmed',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    bio: 'Focuses on product strategy and design systems that scale across multiple platforms and devices.',
    tags: ['Product Strategy', 'Design Systems', 'User Flows']
  }
];
