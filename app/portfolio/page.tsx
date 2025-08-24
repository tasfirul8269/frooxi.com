'use client';

import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  <span className="bg-[rgb(0,70,241)] text-white text-xs font-bold px-3 py-1 rounded-full">
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
                <button className="bg-white text-black border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center font-medium text-sm">
                  FREE Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center font-medium text-sm">
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
      <section className="bg-white text-black py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section - Visual Card */}
            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 relative overflow-hidden aspect-square">
                {/* Person Image */}
                <div className="relative aspect-square w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Person working at desk" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Blue glow at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(0,70,241)] to-transparent opacity-60"></div>
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
                  <div className="w-5 h-5 bg-[rgb(0,70,241)] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Web Design Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[rgb(0,70,241)] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Proven Track Record of Driving Online Growth</span>
                </div>
              </div>

              {/* CTA Button and Reviews */}
              <div className="flex items-center space-x-6">
                <button className="bg-[rgb(0,70,241)] hover:bg-[rgb(0,60,220)] text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
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

    </div>
  );
}
