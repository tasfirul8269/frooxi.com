'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { jsPDF } from 'jspdf';

const generateBrochure = async () => {
  if (typeof window === 'undefined') return; // Ensure we're on client side
  
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  
  // Add header with logo
  try {
    const logoResponse = await fetch('/FrooxiHeaderLogo.svg');
    const logoSvg = await logoResponse.text();
    const logoImg = document.createElement('img');
    logoImg.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(logoSvg)));
    await new Promise((resolve) => {
      logoImg.onload = () => {
        doc.addImage(logoImg, 'SVG', margin, 15, 80, 24);
        resolve(true);
      };
      logoImg.onerror = () => resolve(false);
    });
  } catch (error) {
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('FROOXI', margin, 25);
  }
  
  // Add header line
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(margin, 45, pageWidth - margin, 45);
  
  // Main title
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('SERVICES BROCHURE', pageWidth / 2, 65, { align: 'center' });
  
  // Services grid
  const services = [
    { 
      title: 'Website Development', 
      icon: '🌐',
      desc: 'Professional websites for your business'
    },
    { 
      title: 'Application Development', 
      icon: '📱',
      desc: 'Custom apps for web and mobile'
    },
    { 
      title: 'UI/UX Design', 
      icon: '🎨',
      desc: 'Beautiful, intuitive interfaces'
    },
    { 
      title: 'SEO Services', 
      icon: '🔍',
      desc: 'Improve search rankings'
    },
    { 
      title: 'Digital Marketing', 
      icon: '📈',
      desc: 'Grow your online presence'
    },
    { 
      title: 'Cyber Security', 
      icon: '🔒',
      desc: 'Protect your business'
    },
    { 
      title: 'Data Analytics', 
      icon: '📊',
      desc: 'Data-driven insights'
    }
  ];
  
  // Draw service cards
  let yPos = 85;
  services.forEach((service, index) => {
    const x = index % 2 === 0 ? margin : pageWidth / 2 + 5;
    if (index % 2 === 0 && index !== 0) yPos += 50;
    
    // Card background
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(x, yPos, pageWidth/2 - 20, 45, 5, 5, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.roundedRect(x, yPos, pageWidth/2 - 20, 45, 5, 5, 'S');
    
    // Service icon and title
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(service.icon, x + 10, yPos + 15);
    doc.text(service.title, x + 30, yPos + 15);
    
    // Service description
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(service.desc, x + 10, yPos + 30, { maxWidth: pageWidth/2 - 30 });
  });
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('© 2023 Frooxi. All rights reserved.', pageWidth / 2, 280, { align: 'center' });
  
  // Contact info
  doc.setFontSize(12);
  doc.text('Contact us: info@frooxi.com | +8801310846012', pageWidth / 2, 290, { align: 'center' });
  
  // Save the PDF
  doc.save('Frooxi-Services-Brochure.pdf');
};

// Dynamically import the Chatbot component with no SSR
const Chatbot = dynamic(() => import('@/app/components/Chatbot/Chatbot'), {
  ssr: false,
  loading: () => null,
});

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
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Dispatch a custom event that the Chatbot component is listening for
                    const event = new Event('openChat', { bubbles: true });
                    window.dispatchEvent(event);
                  }}
                  className="bg-[#60FCC4] text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                  Get a Quote
                </button>
                <Chatbot />
                <Link href="/our-works">
                <button className="text-black border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                  View Portfolio
                </button>
                </Link>
              </div>
              {/* Chatbot is now a floating button in the bottom right */}
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                <Image 
                  src="/ServiceImage.jpg"
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
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Development */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Website Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional, responsive websites that deliver exceptional user experiences and drive business growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Responsive Design</li>
                <li>• E-commerce Solutions</li>
                <li>• CMS Integration</li>
                <li>• Web Portals</li>
              </ul>
            </div>
            
            {/* Application Development */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Application Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom software solutions designed to streamline your business processes and enhance productivity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cloud Migration</li>
                <li>• Infrastructure Setup</li>
                <li>• DevOps Services</li>
                <li>• Monitoring & Security</li>
              </ul>
            </div>
            
            {/* UI/UX Design */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.486M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intuitive and engaging user experiences that drive customer satisfaction and business growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• User Research</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            
            {/* SEO */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">SEO</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven search engine optimization strategies to improve your online visibility and organic traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technical SEO</li>
                <li>• On-page Optimization</li>
                <li>• Link Building</li>
                <li>• Content Marketing</li>
              </ul>
            </div>
            
            {/* Digital Marketing */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive digital marketing strategies to grow your brand presence and generate quality leads.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Social Media Marketing</li>
                <li>• Content Strategy</li>
                <li>• PPC & Display Advertising</li>
                <li>• Email Marketing</li>
              </ul>
            </div>
            
            {/* Cyber Security */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Cyber Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Robust security solutions to protect your digital assets and ensure business continuity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Security Audits</li>
                <li>• Compliance Management</li>
              </ul>
            </div>
            
            {/* Data Analytics */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Predictive Analytics</li>
                <li>• Custom Dashboards</li>
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
            <a 
              href="https://wa.me/8801310846012?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium inline-block"
            >
              Schedule a Consultation
            </a>
            <button 
              onClick={async () => {
                try {
                  await generateBrochure();
                } catch (error) {
                  console.error('Failed to generate brochure:', error);
                }
              }}
              className="text-white border border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 