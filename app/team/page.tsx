import Link from 'next/link';
import Image from 'next/image';

export default function Team() {
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
            {/* Founder & CEO */}
            <Link href="/team/john-doe" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                    alt="John Doe" 
                    width={96} height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-2xl font-bold text-black">John Doe</h3>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Founder & CEO</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Visionary leader with 15+ years of experience in software development and business strategy. 
                    Passionate about innovation and team growth, John leads our company with a clear vision for the future.
                  </p>
                  <div className="flex space-x-3">
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Leadership</span>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Strategy</span>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Innovation</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Founder & CTO */}
            <Link href="/team/sarah-miller" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Miller" 
                    width={96} height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-2xl font-bold text-black">Sarah Miller</h3>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Founder & CTO</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Technical expert specializing in scalable architectures and emerging technologies. 
                    Sarah drives our technical innovation and ensures we stay ahead of industry trends.
                  </p>
                  <div className="flex space-x-3">
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Architecture</span>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Innovation</span>
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Technology</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Meet Our Team</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Were&apos; a diverse group of professionals passionate about technology and innovation, working together to deliver exceptional results.
              </p>
            </div>
          </div>
          
          {/* All Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/team/alex-lee" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Alex Lee" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Alex Lee</h4>
              <p className="text-gray-500 mb-4">Head of Design</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creative director focused on user experience and beautiful, functional interfaces. Ensures our products delight users.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">UX/UI</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Design</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Creativity</span>
              </div>
            </Link>
            
            <Link href="/team/mike-johnson" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Mike Johnson" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Mike Johnson</h4>
              <p className="text-gray-500 mb-4">Senior Developer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experienced full-stack developer specializing in React and Node.js. Creates robust, scalable web applications.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">JavaScript</span>
              </div>
            </Link>
            
            <Link href="/team/emily-chen" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Emily Chen" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Emily Chen</h4>
              <p className="text-gray-500 mb-4">Full Stack Developer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Skilled developer with expertise in Python and Django. Builds comprehensive web solutions from frontend to backend.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Python</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Django</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
            </Link>
            
            <Link href="/team/david-kim" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="David Kim" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">David Kim</h4>
              <p className="text-gray-500 mb-4">Backend Developer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Backend specialist with deep knowledge of Java and Spring framework. Architects robust server-side solutions.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Java</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Spring</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Microservices</span>
              </div>
            </Link>
            
            <Link href="/team/lisa-wang" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Lisa Wang" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Lisa Wang</h4>
              <p className="text-gray-500 mb-4">Mobile Developer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mobile development expert creating native iOS and Android applications. Focuses on performance and user experience.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Swift</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Kotlin</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">React Native</span>
              </div>
            </Link>
            
            <Link href="/team/sophie-turner" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Sophie Turner" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Sophie Turner</h4>
              <p className="text-gray-500 mb-4">Senior UX Designer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creates intuitive user experiences with a focus on accessibility and user research. Ensures products are user-centered.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">UX Research</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Prototyping</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">User Testing</span>
              </div>
            </Link>
            
            <Link href="/team/marcus-rodriguez" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Marcus Rodriguez" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Marcus Rodriguez</h4>
              <p className="text-gray-500 mb-4">UI Designer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Specializes in creating beautiful, modern interfaces with attention to detail and brand consistency.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Visual Design</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Branding</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Figma</span>
              </div>
            </Link>
            
            <Link href="/team/zara-ahmed" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow block">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Zara Ahmed" 
                  width={80} height={80}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Zara Ahmed</h4>
              <p className="text-gray-500 mb-4">Product Designer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Focuses on product strategy and design systems that scale across multiple platforms and devices.
              </p>
              <div className="flex space-x-3">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Product Strategy</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Design Systems</span>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Strategy</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Join Our Team</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who are passionate about technology and innovation. 
            Join us in building the future of software development.
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