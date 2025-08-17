'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  subServices: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Custom Development',
    description: 'We specialize in building custom software solutions tailored to your business needs, from strategy and design to development and support.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    subServices: ['Web Applications', 'API Development', 'Database Design', 'System Integration']
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces designed to enhance user experience and drive engagement with modern design principles.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    subServices: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    subServices: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    subServices: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Services', 'Monitoring & Security']
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    subServices: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting Systems']
  }
];

export default function InteractiveServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInSection) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 100) return; // Throttle scrolling

      e.preventDefault();

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 'down' : 'up';
      scrollDirection.current = direction;

      if (direction === 'down') {
        if (activeService < services.length - 1) {
          setIsScrolling(true);
          setActiveService(prev => prev + 1);
          lastScrollTime.current = now;
        } else {
          // Allow normal scroll to next section
          window.scrollBy(0, e.deltaY);
        }
      } else {
        if (activeService > 0) {
          setIsScrolling(true);
          setActiveService(prev => prev - 1);
          lastScrollTime.current = now;
        } else {
          // Allow normal scroll to previous section
          window.scrollBy(0, e.deltaY);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInSection) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeService < services.length - 1) {
          setIsScrolling(true);
          setActiveService(prev => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeService > 0) {
          setIsScrolling(true);
          setActiveService(prev => prev - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeService, isScrolling]);

  useEffect(() => {
    if (isScrolling) {
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  const handleServiceClick = (index: number) => {
    if (index !== activeService && !isScrolling) {
      setIsScrolling(true);
      setActiveService(index);
    }
  };

  const handleNextService = () => {
    if (activeService < services.length - 1 && !isScrolling) {
      setIsScrolling(true);
      setActiveService(prev => prev + 1);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="h-screen bg-white overflow-hidden relative"
      id="services"
    >
      <div className="h-full flex">
        {/* Left Column - Service Menu */}
        <div className="w-1/3 lg:w-2/5 bg-black text-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-[#60FCC4] text-sm font-medium tracking-wider uppercase">
              ✦ SERVICES
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 leading-tight">
              We Provide Digital
              <br />
              <span className="text-[#60FCC4]">Services for You</span>
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(index)}
                className={`text-left w-full transition-all duration-500 ${
                  activeService === index
                    ? 'opacity-100 scale-105'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-sm font-mono ${
                    activeService === index ? 'text-[#60FCC4]' : 'text-gray-400'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-lg lg:text-xl font-semibold transition-colors duration-300 ${
                    activeService === index ? 'text-[#60FCC4]' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Service Content */}
        <div className="flex-1 bg-gray-50 relative overflow-hidden">
          <div 
            ref={contentRef}
            className="h-full p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              {/* Service Image */}
              <div className={`relative h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 transition-all duration-600 ${
                isScrolling ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
              }`}>
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>

              {/* Service Content */}
              <div className={`transition-all duration-600 delay-200 ${
                isScrolling ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
              }`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                {/* Sub-services */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].subServices.map((subService, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#60FCC4] rounded-full" />
                      <span className="text-gray-700 text-sm font-medium">
                        {subService}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextService}
                  disabled={activeService === services.length - 1}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeService === services.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#60FCC4] text-black hover:bg-black hover:text-white'
                  }`}
                >
                  <span className="font-medium">Next Service</span>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 right-8">
              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-[#60FCC4]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden absolute inset-0 bg-white">
        <div className="h-full flex flex-col">
          {/* Mobile Header */}
          <div className="bg-black text-white p-6">
            <span className="text-[#60FCC4] text-sm font-medium tracking-wider uppercase">
              ✦ SERVICES
            </span>
            <h2 className="text-2xl font-bold mt-2">
              We Provide Digital Services
            </h2>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className={`transition-all duration-600 ${
              isScrolling ? 'opacity-0' : 'opacity-100'
            }`}>
              {/* Service Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {services[activeService].title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {services[activeService].description}
              </p>

              {/* Sub-services */}
              <div className="space-y-2 mb-6">
                {services[activeService].subServices.map((subService, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#60FCC4] rounded-full" />
                    <span className="text-gray-700 text-sm">
                      {subService}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="bg-gray-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                {activeService + 1} of {services.length}
              </span>
              <div className="flex space-x-1">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      activeService === index ? 'bg-[#60FCC4]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleServiceClick(Math.max(0, activeService - 1))}
                disabled={activeService === 0}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
                  activeService === 0
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-black text-white'
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => handleServiceClick(Math.min(services.length - 1, activeService + 1))}
                disabled={activeService === services.length - 1}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
                  activeService === services.length - 1
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-[#60FCC4] text-black'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}