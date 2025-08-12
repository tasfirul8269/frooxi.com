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
    id: 'tanvir-almas',
    name: 'Tanvir Almas',
    role: 'Founder & CEO',
    image: '/Tanvir.jpg',
    bio: 'Visionary leader with 15+ years of experience in software development and business strategy. Passionate about innovation and team growth, John leads our company with a clear vision for the future.',
    tags: ['Leadership', 'Strategy', 'Innovation'],
    isFounder: true
  },
  {
    id: 'tasfirul-haque',
    name: 'Tasfirul Haque',
    role: 'Founder & CTO',
    image: '/Tasfirul.png',
    bio: 'Technical expert specializing in scalable architectures and emerging technologies. Sarah drives our technical innovation and ensures we stay ahead of industry trends.',
    tags: ['Architecture', 'Innovation', 'Technology'],
    isFounder: true
  },
  
  // Team Members
  {
    id: 'nabil-bin-kamal',
    name: 'Nabil Bin Kamal',
    role: 'UI/UX Designer',
    image: '/Nabil.png',
    bio: 'Full-stack developer with expertise in modern web technologies. Alex leads our development team and ensures high-quality code delivery.',
    tags: ['React', 'Node.js', 'TypeScript']
  },
  {
    id: 'omar-saliheen',
    name: 'Omar Saliheen',
    role: 'Wordpress Developer',
    image: '/ProfilePlaceholder.jpg',
    bio: 'Experienced full-stack developer specializing in React and Node.js. Creates robust, scalable web applications.',
    tags: ['React', 'Node.js', 'JavaScript']
  },
  {
    id: 'sayeed-al-tahsin',
    name: 'Sayeed Al Tahsin',
    role: 'Cyber Security Expert',
    image: '/ProfilePlaceholder.jpg',
    bio: 'Skilled developer with expertise in Python and Django. Builds comprehensive web solutions from frontend to backend.',
    tags: ['Python', 'Django', 'PostgreSQL']
  },
  
];
