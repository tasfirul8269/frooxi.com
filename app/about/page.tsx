import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-gray-500 text-sm mb-2">About Us</p>
              <h1 className="text-4xl font-bold text-black mb-6">Who We Are</h1>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're a team of passionate developers, designers, and innovators dedicated to creating software that makes a difference. Founded in 2014, we've grown from a small startup to a trusted partner for businesses worldwide.
              </p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Our Story</h3>
                    <p className="text-gray-500 text-sm">Founded in 2014</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Started as a small team with big dreams, we've grown into a trusted partner for businesses worldwide. Our journey has been marked by continuous innovation and unwavering commitment to quality.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>500+ Projects</span>
                  <span>•</span>
                  <span>50+ Clients</span>
                  <span>•</span>
                  <span>10+ Years</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-black mb-4">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe in clean code, clear communication, and practical solutions. Every project starts with understanding your needs and ends with software that truly works.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">User-centered design thinking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Agile development methodology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Continuous testing and optimization</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Image on the right */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Our team working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Overlay elements */}
                <div className="absolute top-6 left-6 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-sm text-gray-600">Team: 25 Members</div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-sm font-medium text-black">Remote First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Vision</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a future where technology seamlessly enhances human potential, creating solutions that empower businesses and individuals to achieve their goals.
              </p>
            </div>
          </div>
          
          {/* Vision Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Innovation Leadership</h3>
                    <p className="text-gray-500 text-sm">Pioneering the Future</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We strive to be at the forefront of technological innovation, constantly pushing boundaries and exploring new possibilities to create solutions that haven't been imagined yet.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Emerging technologies adoption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Research-driven development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Sustainable technology solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-black mb-4">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our vision extends beyond borders, aiming to create technology solutions that positively impact communities worldwide while fostering inclusive growth and digital transformation.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black">15+</div>
                    <div className="text-xs text-gray-500">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">500+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">50+</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-black mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  To empower businesses and individuals through innovative software solutions that drive growth, efficiency, and positive change in the digital landscape.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black">Empowerment</p>
                      <p className="text-sm text-gray-500">Enabling success through technology</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black">Innovation</p>
                      <p className="text-sm text-gray-500">Pushing technological boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black">Impact</p>
                      <p className="text-sm text-gray-500">Creating positive change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Core Values</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our core values guide everything we do, from how we approach problems to how we treat our clients and team members.
              </p>
            </div>
          </div>
          
          {/* Compact Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Innovation</h3>
              <p className="text-gray-600 text-xs">Cutting-edge solutions</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Quality</h3>
              <p className="text-gray-600 text-xs">Excellence in code</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Client Focus</h3>
              <p className="text-gray-600 text-xs">Your success first</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Team Excellence</h3>
              <p className="text-gray-600 text-xs">Diverse expertise</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Reliability</h3>
              <p className="text-gray-600 text-xs">Trusted delivery</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="font-bold text-black text-sm mb-1">Growth</h3>
              <p className="text-gray-600 text-xs">Continuous improvement</p>
            </div>
          </div>
          
          {/* Additional Content */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're committed to delivering exceptional software solutions that drive business growth and create lasting value for our clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">100% client satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">On-time project delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">24/7 technical support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We promise to be transparent, reliable, and innovative in everything we do, ensuring your success is our priority.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-xs text-gray-500">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">10+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">99%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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
          
          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Tanvir Almas</h4>
                <p className="text-gray-500 mb-4">Co-Founder & CEO</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visionary leader with 15+ years of experience in software development and business strategy. Passionate about innovation and team growth.
                </p>
                <div className="flex space-x-3">
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Leadership</span>
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Strategy</span>
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Innovation</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Miller" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Tasfirul Haque</h4>
                <p className="text-gray-500 mb-4">Co-Founder & CTO</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Technical expert specializing in scalable architectures and emerging technologies. Drives our technical innovation and excellence.
                </p>
                <div className="flex space-x-3">
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Architecture</span>
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Innovation</span>
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Technology</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                    alt="Alex Lee" 
                    className="w-full h-full object-cover"
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
              </div>
            </div>
          </div>
          

          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-8">
                We're always looking for talented individuals who are passionate about technology and innovation.
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
          </div>
        </div>
      </section>
    </div>
  );
} 