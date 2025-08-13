import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Team member data
const teamMembers = {
  'john-doe': {
    id: 'john-doe',
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    bio: 'Visionary leader with 15+ years of experience in software development and business strategy. Passionate about innovation and team growth. John has led multiple successful startups and has a proven track record of building high-performing teams.',
    experience: '15+ years',
    location: 'San Francisco, CA',
    email: 'john.doe@softech.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    skills: ['Leadership', 'Strategy', 'Innovation', 'Business Development', 'Team Building'],
    education: 'MBA, Stanford University',
    achievements: [
      'Led company to 500% growth in 5 years',
      'Featured in Forbes 30 Under 30',
      'Speaker at TechCrunch Disrupt',
      'Mentored 50+ startup founders'
    ],
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce solution serving 1M+ users',
        tech: ['React', 'Node.js', 'AWS'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Mobile Banking App',
        description: 'Developed secure mobile banking application for 500K+ users',
        tech: ['React Native', 'Firebase', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'AI-Powered Analytics',
        description: 'Created machine learning platform for business intelligence',
        tech: ['Python', 'TensorFlow', 'Docker'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  'sarah-miller': {
    id: 'sarah-miller',
    name: 'Sarah Miller',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    bio: 'Technical expert specializing in scalable architectures and emerging technologies. Drives our technical innovation and excellence. Sarah has architected systems that handle millions of users and has deep expertise in cloud-native development.',
    experience: '12+ years',
    location: 'New York, NY',
    email: 'sarah.miller@softech.com',
    linkedin: 'https://linkedin.com/in/sarahmiller',
    skills: ['Architecture', 'Innovation', 'Technology', 'Cloud Computing', 'System Design'],
    education: 'MS Computer Science, MIT',
    achievements: [
      'Architected systems serving 10M+ users',
      'Led migration to microservices architecture',
      'Reduced infrastructure costs by 60%',
      'Published 20+ technical papers'
    ],
    portfolio: [
      {
        title: 'Microservices Platform',
        description: 'Designed and implemented scalable microservices architecture',
        tech: ['Docker', 'Kubernetes', 'AWS'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Real-time Analytics',
        description: 'Built real-time data processing pipeline for IoT devices',
        tech: ['Apache Kafka', 'Elasticsearch', 'Redis'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Security Framework',
        description: 'Developed enterprise-grade security framework',
        tech: ['OAuth2', 'JWT', 'Encryption'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  'nabil-bin-kamal': {
    id: 'alex-lee',
    name: 'Alex Lee',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    bio: 'Creative director focused on user experience and beautiful, functional interfaces. Ensures our products delight users. Alex has designed award-winning interfaces and has a deep understanding of user psychology and design principles.',
    experience: '10+ years',
    location: 'Los Angeles, CA',
    email: 'alex.lee@softech.com',
    linkedin: 'https://linkedin.com/in/alexlee',
    skills: ['UX/UI', 'Design', 'Creativity', 'User Research', 'Prototyping'],
    education: 'BFA Design, Parsons School of Design',
    achievements: [
      'Winner of 5 design awards',
      'Featured in Awwwards Hall of Fame',
      'Speaker at Design Week',
      'Mentored 100+ designers'
    ],
    portfolio: [
      {
        title: 'Fintech Dashboard',
        description: 'Designed intuitive dashboard for financial analytics platform',
        tech: ['Figma', 'React', 'D3.js'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Mobile App Design',
        description: 'Created user-centered design for fitness tracking app',
        tech: ['Sketch', 'Principle', 'Framer'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Brand Identity',
        description: 'Developed complete brand identity for startup ecosystem',
        tech: ['Illustrator', 'Photoshop', 'Brand Guidelines'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  }
};

export default function TeamMemberProfile({ params }: { params: { id: string } }) {
  const member = teamMembers[params.id as keyof typeof teamMembers];

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/team" className="text-gray-500 hover:text-black text-sm flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Team</span>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Info */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden mb-6 mx-auto">
                  <div className="w-32 h-32 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 768px) 32px, 32px"
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-black mb-2">{member.name}</h1>
                  <p className="text-gray-500 text-lg mb-6">{member.role}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{member.email}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-black text-sm">Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="text-xs bg-black text-white px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-black mb-6">About</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We&apos;re committed to delivering exceptional software solutions that drive business growth and create lasting value for our clients.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-black mb-3">Education</h3>
                    <p className="text-gray-600">{member.education}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-3">Experience</h3>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Key Achievements</h2>
                <div className="space-y-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Portfolio</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of {member.name}&apos;s best work and projects that demonstrate expertise and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {member.portfolio.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index < 3} // Only prioritize first 3 images for better performance
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-black text-white px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
} 