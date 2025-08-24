'use client';

import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [visibleStages, setVisibleStages] = useState([false, false, false]);
  const [openFAQ, setOpenFAQ] = useState(0); // 0 = first FAQ open by default

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which stage is visible and update image
      const stageElements = document.querySelectorAll('[data-stage]');
      let currentVisibleStage = -1;
      
      stageElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          currentVisibleStage = index;
          if (!visibleStages[index]) {
            // Stage entering view - zoom in
            setVisibleStages(prev => {
              const newStages = [...prev];
              newStages[index] = true;
              return newStages;
            });
          }
        } else if (visibleStages[index]) {
          // Stage leaving view - zoom out
          setVisibleStages(prev => {
            const newStages = [...prev];
            newStages[index] = false;
            return newStages;
          });
        }
      });
      
      // Update current stage based on which one is most visible
      if (currentVisibleStage !== -1) {
        setCurrentStage(currentVisibleStage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStages]);

  // Stage images for different stages
  const stageImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Vision
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Develop
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Launch
  ];

  // Add custom scroll animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-400px * 3 - 2rem * 2)); }
      }
      .animate-scroll {
        animation: scroll 30s linear infinite;
        width: calc(400px * 6 + 2rem * 5);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-x-hidden flex items-center pt-16" style={{
        backgroundImage: `
          linear-gradient(to right, #f8f9fa 1px, transparent 1px),
          linear-gradient(to bottom, #f8f9fa 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative w-full">
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center relative z-10 w-full">
            {/* Left Content - Takes up 2/3 of the space */}
            <div className="lg:col-span-2 space-y-8 relative z-10">
              <div className="space-y-12">
                {/* Badge */}
                <div className="flex items-center space-x-2">
                  <span className="bg-[#60fcc4] text-black text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                  <span className="text-gray-600 text-sm">No. 1 Developer of 2025</span>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.4] text-black">
                  Transforming Your Brand
                  <br />
                  <span className="text-gray-600">Into The Digital World</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                  We specialize in developing custom websites and systems that reflect your brands identity and drive sales.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none">
                <button className="bg-white text-black border border-black/20 px-6 py-3 rounded-lg hover:border-black transition-all duration-300 flex items-center justify-center font-medium text-sm">
                  FREE Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="bg-[#60fcc4] hover:bg-black text-black hover:text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center font-medium text-sm">
                  <Play className="mr-2 h-4 w-4" />
                  Website Features
                </button>
              </div>

              {/* Bottom Logos - Auto-scrolling Carousel */}
              <div className="pt-8 border-t border-gray-200 overflow-hidden max-w-md">
                <div className="flex animate-pulse">
                  {/* First set of logos */}
                  <div className="flex items-center space-x-8 flex-shrink-0">
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                    <div className="w-20 h-6 bg-gray-300 rounded opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Player Section - Positioned at bottom right */}
            <div className="lg:col-span-1 relative flex items-end justify-end">
              <div className="bg-black border border-gray-300 rounded-xl p-6 shadow-lg relative overflow-hidden w-full max-w-sm">
                {/* Abstract Blue Shapes */}
                <div className="relative w-full h-64 bg-black rounded-lg flex items-center justify-center">
                  {/* Complex glowing blue geometric shapes */}
                  <div className="relative">
                    {/* Main star/diamond shape */}
                    <div className="w-40 h-40 bg-[rgb(0,70,241)] opacity-30 rounded-lg transform rotate-45 relative">
                      <div className="absolute inset-0 bg-[rgb(0,70,241)] opacity-20 rounded-lg transform rotate-90"></div>
                    </div>
                    
                    {/* Overlapping V-shapes */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 bg-[rgb(0,70,241)] opacity-40 transform rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgb(0,70,241)] opacity-50 transform -rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Curved glow lines */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[rgb(0,70,241)] opacity-30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-[rgb(0,70,241)] opacity-20 rounded-full"></div>
                  
                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-white">Digital Transformation</div>
                  <div className="text-xs text-gray-400">2:45</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Light Theme */}
      <section className="bg-white text-black py-0 sm:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section - Visual Card */}
            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 relative overflow-hidden aspect-square">
                {/* Person Image */}
                <div className="relative aspect-square w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Person working at desk" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Blue glow at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#60fcc4] to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="space-y-10 h-full flex flex-col justify-center">
              {/* Context Tag */}
              <div className="inline-block">
                <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full border border-gray-200">
                  About Cameron
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-black">
                  Building Stronger Brands
                  <br />
                  <span className="text-gray-600 text-3xl sm:text-4xl lg:text-5xl">Driving Results!</span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-gray-600 text-base leading-relaxed">
                  Delivering high-quality designs with strategic impact.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Elevate your digital presence in style.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Web Design Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Proven Track Record of Driving Online Growth</span>
                </div>
              </div>

              {/* CTA Button and Reviews */}
              <div className="flex items-center space-x-6">
                <button className="bg-[#60fcc4] hover:bg-black hover:text-white text-black px-6 py-3 rounded-lg font-medium transition-colors">
                  Book Consultation Call
                </button>
                
                {/* Reviews */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">64+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="bg-white py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gray-600 text-sm border border-gray-200 px-4 py-2 rounded-full">
                • Our Work
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-gray-900">
              Featured Projects
              <br />
              <span className="text-gray-600">Showcasing Our Best Work</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects and client success stories.
            </p>
          </div>

          {/* Portfolio Cards with Auto-scroll */}
          <div className="relative">
            {/* Left Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade Effect */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Auto-scrolling Cards Container */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 py-4 animate-scroll">
                {[
                  {
                    title: "AdventuresDR",
                    description: "Islands market reach, tapping into new demographics with a driven approach.",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
                  },
                  {
                    title: "VISTAHOME",
                    description: "Automated booking system driving clicks and visibility to site, increasing profits.",
                    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
                  },
                  {
                    title: "FRSH Media",
                    description: "Achieved drastic increase in sales through a customized targeted marketing strategy.",
                    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1000&q=80",
                  },
                  // Duplicate items for seamless loop
                  {
                    title: "AdventuresDR",
                    description: "Islands market reach, tapping into new demographics with a driven approach.",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
                  },
                  {
                    title: "VISTAHOME",
                    description: "Automated booking system driving clicks and visibility to site, increasing profits.",
                    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
                  },
                ].map((project, index) => (
                  <div key={index} className="w-[380px] flex-shrink-0">
                    {/* Main Card Container with 10px gap */}
                    <div className="relative border border-[#c5c5c533] border[2px] h-[480px] rounded-2xl p-2.5 bg-gray-50">
                      {/* Image Container - Fills the parent with 10px gap */}
                      <div className="relative h-full w-full overflow-hidden rounded-lg border border-[#c5c5c5] border[2px]">
                        {/* Image - Fills the container */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Details Card - Positioned absolutely inside image container with 5px gap */}
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white p-5 border border-[#c5c5c5] border[2px] rounded-lg">
                          <h4 className="text-gray-900 font-bold text-xl mb-2">{project.title}</h4>
                          <div className="h-px w-full bg-gray-200 mb-3 mt-2"></div>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                            {project.description}
                          </p>
                          <div className="flex justify-start">
                            <span className="bg-[#c5c5c52e] text-black text-xs font-semibold px-3 py-1.5 rounded-[5px]">
                              New Addition
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-white text-black py-0 sm:py-0 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Section - Scrollable Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Header */}
              <div className="space-y-6">
                                  <div className="inline-block">
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                      • How We Work?
                    </span>
                  </div>
                
                                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-gray-900">
                      We Simplify The Journey
                      <br />
                      <span className="text-gray-600">From Design To Launch</span>
                    </h2>
                    
                    <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                      We make it easy to bring your ideas to life, guiding you from concept to a fully launched site.
                    </p>
                  </div>
              </div>

              {/* Process Cards */}
              <div className="space-y-6">
                {/* Stage 1: Vision */}
                                  <div 
                    data-stage="1"
                    className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 relative transition-all duration-700 ease-out ${
                      visibleStages[0] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        Stage 1
                      </span>
                    </div>
                    
                    <div className="text-left space-y-4">
                      <div className="w-12 h-12 bg-[#77777733] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We kick things off by understanding your brand, goals, and design preferences. From there, we build a clear game plan that aligns with your vision and sets the foundation for a high-converting site.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Brand Discovery
                          </button>
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Strategy Outline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Stage 2: Develop */}
                                  <div 
                    data-stage="2"
                    className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 relative transition-all duration-700 ease-out delay-200 ${
                      visibleStages[1] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        Stage 2
                      </span>
                    </div>
                    
                    <div className="text-left space-y-4">
                      <div className="w-12 h-12 bg-[#77777733] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a10 10 0 100-20 10 10 0 000 20zM7.94 16.24A8 8 0 1110 2a8 8 0 01-2.06 14.24z" clipRule="evenodd" />
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                          <path d="M10 6a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Develop</h3>
                        <p className="text-gray-600 leading-relaxed">
                          With the strategy locked in, we bring your site to life. You&apos;ll get progress updates along the way so you can give feedback, stay involved, and watch it all come together.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Progress Updates
                          </button>
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Real-Time Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Stage 3: Launch */}
                                  <div 
                    data-stage="3"
                    className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 relative transition-all duration-700 ease-out delay-400 ${
                      visibleStages[2] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        Stage 3
                      </span>
                    </div>
                    
                    <div className="text-left space-y-4">
                      <div className="w-12 h-12 bg-[#77777733] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Launch</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Once everything is polished and approved, we finalize revisions and get you ready to launch. You&apos;ll receive all assets, support, and guidance to go live confidently and smoothly.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Handover Resources
                          </button>
                          <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Client-Friendly
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Right Section - Sticky Image */}
            <div className="lg:sticky lg:top-60">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-lg relative overflow-hidden w-full max-w-lg mx-auto">
                {/* Image Container - This can change per stage */}
                <div className="relative w-full h-96 bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                  {/* Stage-specific Image */}
                  <Image 
                    src={stageImages[currentStage - 1]} 
                    alt={`Stage ${currentStage}`} 
                    fill
                    className="object-cover object-center transition-all duration-500 ease-in-out"
                    style={{ objectPosition: 'center center' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                • Testimonials
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-gray-900">
              Customer Reviews About
              <br />
              <span className="text-gray-600">Work, Usability and Design.</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our happy clients! See how we&apos;ve helped them achieve their goals and create lasting impact.
            </p>
          </div>

          {/* Video Testimonial Section */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              {/* Video Player */}
              <div className="relative w-96 h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Video testimonial" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="w-0 h-0 border-l-[12px] border-l-gray-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

          {/* Text Testimonials Grid - 2x3 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Sean Conlon */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Sean Conlon" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;Big shout out to NEXTUP Web Design for designing our new site! It&apos;s live and we love it! Cameron is the best and he will crush a new site for you too!&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Sean Conlon</h4>
                  <p className="text-gray-600 text-xs">Ferrum Films</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Maryanne Memmolo */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Maryanne Memmolo" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;I&apos;ve had so many compliments already and it&apos;s made a real difference to how we present our brand online. I couldn&apos;t recommend NEXTUP more highly.&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Maryanne Memmolo</h4>
                  <p className="text-gray-600 text-xs">Step &apos;N Style</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Lu Polanco */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Lu Polanco" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;I had an awesome experience with NEXTUP through the whole process of my website being built. I plan on creating more projects and ideas with Cameron.&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Lu Polanco</h4>
                  <p className="text-gray-600 text-xs">AdventureDR</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Jack Watson */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Jack Watson" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;Cameron absolutely cooked with our new website. By far the easiest web designer I have ever worked with. A completely new and original website fit our vision perfectly!&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Jack Watson</h4>
                  <p className="text-gray-600 text-xs">Ripple Media</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Richard */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Richard" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Richard</h4>
                  <p className="text-gray-600 text-xs">Local Business Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Kourtney */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Kourtney" 
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    &ldquo;We are super happy with the final result. NEXTUP Web Design delivered a beautifully designed website that perfectly reflects our brand and what we were looking for.&rdquo;
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm">Kourtney</h4>
                  <p className="text-gray-600 text-xs">Video Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-0 sm:py-0 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-8 lg:pr-8">
              <div className="inline-block">
                <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                  • FAQ
                </span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-gray-900">
                  Frequently
                  <br />
                  <span className="text-gray-600">Asked Questions</span>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
                </p>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8">
                      Why should I get a website for my business?
                    </h3>
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === 0 ? -1 : 0)}
                      className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      {openFAQ === 0 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      A website is essential for your business as it provides credibility, reaches a wider audience, helps with growth, and streamlines your operations. It&apos;s your digital storefront that&apos;s always open and accessible to potential customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8">
                      How much does a website cost?
                    </h3>
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === 1 ? -1 : 1)}
                      className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      {openFAQ === 1 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Website costs vary depending on complexity, features, and requirements. We offer transparent pricing starting from $X for basic sites up to $X for custom enterprise solutions. Contact us for a personalized quote based on your specific needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8">
                      How long does it take to develop?
                    </h3>
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === 2 ? -1 : 2)}
                      className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      {openFAQ === 2 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Development time depends on project scope. Simple websites typically take 2-4 weeks, while complex custom solutions may take 6-12 weeks. We&apos;ll provide a detailed timeline during our initial consultation and keep you updated throughout the process.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8">
                      What makes you different to other web design agencies?
                    </h3>
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === 3 ? -1 : 3)}
                      className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      {openFAQ === 3 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      We focus on creating websites that not only look great but also drive results. Our approach combines cutting-edge design with strategic thinking, ensuring your website converts visitors into customers. We also provide ongoing support and optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8">
                      Will my website be mobile-friendly?
                    </h3>
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === 4 ? -1 : 4)}
                      className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      {openFAQ === 4 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Absolutely! All our websites are built with a mobile-first approach, ensuring they work perfectly on all devices. We test across various screen sizes and browsers to guarantee an optimal user experience on smartphones, tablets, and desktops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                • Pricing
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-gray-900">
              Plans For All Businesses,
              <br />
              <span className="text-gray-600">Personal, Agencies & Startups.</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl">
              Prices listed in USD and act as an estimate.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative">
              {/* Top Right Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#dddddd55] text-black text-xs font-medium px-3 py-1 rounded-[5px] ">
                  Budget
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-[#dddddd66]  rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$500</span>
                <span className="text-gray-600 ml-2">/ one-time</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our basic package is designed to offer great value while providing the essential features you need to get started.
              </p>
              
              {/* Reviews Badge */}
              <div className="mb-6">
                <span className="bg-[#dddddd55] text-black text-xs font-medium px-3 py-1 rounded-[5px] ">
                  21+ Reviews
                </span>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#000000] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Branded professional website</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Inquiry forms</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mobile responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Basic SEO optimization</span>
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="w-full border border-black/20 hover:border-black text-black font-medium py-3 px-6 rounded-[8px] transition-colors duration-300">
                Book an Appointment
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative">
              {/* Top Right Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#dddddd55] text-black text-xs font-medium px-3 py-1 rounded-[5px] ">
                  Most Popular
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-[#dddddd66]  rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Quote</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our professional package provides custom professional sites with customizable solutions.
              </p>
              
              {/* Reviews Badge */}
              <div className="mb-6">
                <span className="bg-[#dddddd55] text-black text-xs font-medium px-3 py-1 rounded-[5px] ">
                  53+ Reviews
                </span>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Branded professional custom website</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Customizable solutions</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Inquiry forms</span>
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="w-full bg-[#60fcc4] hover:bg-[#000000] hover:text-white text-black font-medium py-3 px-6 rounded-[8px] transition-colors duration-300">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Now Section */}
      <section className="bg-white pb-20 sm:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-black/100 to-black border border-gray-200 rounded-3xl p-12 relative overflow-hidden ">
              {/* Top Left Badge */}
              <div className="flex justify-center items-center">
                <span className="bg-[#eeeeee22] text-white text-sm font-medium px-4 py-2 rounded-[5px] flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Join Us Now
                </span>
              </div>
              
              
              {/* Content */}
              <div className="text-center pt-10 pb-8">
                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-8 text-gray-100">
                  Each Project we Undertake
                  <br />
                  <span className="text-gray-500">is a Unique Opportunity.</span>
                </h2>
                
                {/* Description */}
                <p className="text-gray-500 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                  Need a site but not sure where to start?
                  <br />
                  Let&apos;s map it out together on a free strategy call.
                </p>
                
                {/* CTA Button */}
                <button className="bg-[#ffffff] hover:bg-[#60fcc4]  text-black font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 transform  ">
                  Book FREE Strategy Call
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#60fcc4] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#60fcc4] opacity-10 rounded-full translate-y-12 translate-x-12"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
