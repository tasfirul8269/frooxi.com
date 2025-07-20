import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 min-h-[80vh] flex items-center  bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-6">
                Our Services
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                We&apos;re committed to delivering exceptional software solutions that drive business growth and create lasting value for our clients.
                From custom development to cloud infrastructure, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
                  Get a Quote
                </button>
                <button className="text-black border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                <Image 
                  src="/ServiceImage.png"
                  alt="Service Hero" 
                  width={800} height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tailored software solutions built from the ground up to meet your specific business requirements and goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• Desktop Software</li>
                <li>• API Development</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cloud Migration</li>
                <li>• Infrastructure Setup</li>
                <li>• DevOps Services</li>
                <li>• Monitoring & Security</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beautiful, intuitive user interfaces designed to enhance user experience and drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• User Research</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Security Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive security solutions to protect your applications and data from threats and vulnerabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• Compliance</li>
                <li>• Data Protection</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data Visualization</li>
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
                <li>• Reporting Systems</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ongoing maintenance, updates, and technical support to keep your applications running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bug Fixes</li>
                <li>• Performance Optimization</li>
                <li>• Feature Updates</li>
                <li>• 24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Offerings */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Process</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We follow a proven methodology to ensure successful project delivery and maximum value for your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-0 relative">
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center px-2 py-4">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We start by understanding your business needs, goals, and technical requirements through detailed consultation.
              </p>
            </div>
            {/* Line */}
            <div className="hidden lg:block h-0.5 w-10 bg-gray-300 mx-2"></div>
            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center px-2 py-4">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team creates a comprehensive project plan with timelines, milestones, and resource allocation.
              </p>
            </div>
            {/* Line */}
            <div className="hidden lg:block h-0.5 w-10 bg-gray-300 mx-2"></div>
            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center px-2 py-4">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build your solution using modern technologies and best practices, with regular progress updates.
              </p>
            </div>
            {/* Line */}
            <div className="hidden lg:block h-0.5 w-10 bg-gray-300 mx-2"></div>
            {/* Step 4 */}
            <div className="flex-1 flex flex-col items-center text-center px-2 py-4">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We deploy your solution with thorough testing and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-black mb-4">Technologies We Use</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              We leverage proven, modern technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Frontend</h3>
              <div className="text-gray-500 text-xs mb-2">Modern, interactive user interfaces</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Vue.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Angular</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Nuxt.js</span>
              </div>
            </div>
            {/* Backend */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Backend</h3>
              <div className="text-gray-500 text-xs mb-2">Scalable, secure server-side logic</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Java</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Express</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Django</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Spring</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">GraphQL</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">REST APIs</span>
              </div>
            </div>
            {/* Database */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Database</h3>
              <div className="text-gray-500 text-xs mb-2">Reliable, scalable data storage</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Redis</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Elasticsearch</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">AWS RDS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Azure SQL</span>
              </div>
            </div>
            {/* Cloud & DevOps */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Cloud & DevOps</h3>
              <div className="text-gray-500 text-xs mb-2">Automated, scalable infrastructure</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">AWS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Azure</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Google Cloud</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Docker</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Kubernetes</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">CI/CD</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border">Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Schedule a Consultation
            </button>
            <button className="text-white border border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 