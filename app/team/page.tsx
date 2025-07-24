import Link from 'next/link';
import Image from 'next/image';
import { TeamMember, teamMembers } from '@/app/data/team';

const TeamMemberCard = ({ member, isFounder = false }: { member: TeamMember; isFounder?: boolean }) => {
  if (isFounder) {
    return (
      <Link 
        href={`/team/${member.id}`}
        className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 block group"
      >
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 group-hover:ring-4 group-hover:ring-black/5 transition-all duration-300">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                {member.name}
              </h3>
              <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                {member.role}
              </span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {member.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {member.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-900 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <Link href={`/team/${member.id}`} className="block flex-1 flex flex-col">
        {/* 1:1 Square Image */}
        <div className="relative w-full pt-[100%] bg-gray-100 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          
          {/* Role */}
          <p className="text-gray-600 text-sm font-medium mb-3">
            {member.role}
          </p>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {member.bio.split('.').slice(0, 1).join('.')}.
          </p>
          
          {/* Social Links (Shown on hover) */}
          <div className="mt-auto pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.595 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function Team() {
  const founders = teamMembers.filter(member => member.isFounder);
  const team = teamMembers.filter(member => !member.isFounder);

  return (
    <div className="min-h-screen bg-white">
      {/* Featured Founders Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Founders</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the visionary leaders who started our journey and continue to drive innovation forward.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {founders.map((member) => (
              <TeamMemberCard key={member.id} member={member} isFounder={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Meet Our Team</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're a diverse group of professionals passionate about technology and innovation, working together to deliver exceptional results.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Join Our Team</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              View Open Positions
            </button>
            <button className="text-black border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}