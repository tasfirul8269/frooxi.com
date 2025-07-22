import Link from 'next/link';
import Image from 'next/image';
import { TeamMember, teamMembers } from '@/app/data/team';

const TeamMemberCard = ({ member, isFounder = false }: { member: TeamMember; isFounder?: boolean }) => (
  <Link 
    href={`/team/${member.id}`}
    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block"
  >
    <div className={isFounder ? "flex items-start space-x-6" : ""}>
      <div className={`${isFounder ? 'w-24 h-24' : 'w-20 h-20'} bg-gray-100 rounded-full overflow-hidden ${isFounder ? 'flex-shrink-0' : 'mb-6'}`}>
        <Image
          src={member.image}
          alt={member.name}
          width={isFounder ? 96 : 80}
          height={isFounder ? 96 : 80}
          className={`${isFounder ? 'w-24 h-24' : 'w-20 h-20'} rounded-full object-cover`}
        />
      </div>
      <div className={isFounder ? 'flex-1' : ''}>
        <div className="flex items-center space-x-3 mb-3">
          <h3 className={`${isFounder ? 'text-2xl' : 'text-xl'} font-bold text-black`}>
            {member.name}
          </h3>
          <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
            {member.role}
          </span>
        </div>
        <p className={`text-gray-600 ${isFounder ? 'mb-4 leading-relaxed' : 'text-sm mb-4'}`}>
          {isFounder ? member.bio : `${member.bio.split('.').slice(0, 1).join('.')}.`}
        </p>
        {isFounder && (
          <div className="flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span key={tag} className="text-xs bg-black text-white px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </Link>
);

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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