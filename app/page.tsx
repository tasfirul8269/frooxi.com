import HeroSection from '@/components/HeroSection';
import InteractiveServicesSection from '@/components/InteractiveServicesSection';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <InteractiveServicesSection />

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Frooxi</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We&apos;re a team of passionate developers and designers who believe in creating software that makes a difference. Our approach combines technical expertise with creative thinking to deliver solutions that not only work but inspire.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">100+ successful projects delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
              </div>
              <Link href="/about" className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                <Image 
                  src="/ServiceImage.jpg"
                  alt="About Frooxi" 
                  width={600} height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Frooxi?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine technical excellence with creative innovation to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our diverse team of experts brings years of experience and specialized knowledge to every project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality through rigorous testing and continuous improvement processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#60FCC4] text-black px-8 py-4 rounded-lg hover:bg-white transition-colors font-medium">
              Get Started Today
            </Link>
            <Link href="/our-works" className="text-white border border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}