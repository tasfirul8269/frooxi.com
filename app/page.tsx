'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { useState, useRef } from 'react';
import { works } from '@/app/data/works';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const [showStoryVideo, setShowStoryVideo] = useState(false);
  const knowMoreBtnRef = useRef(null);
  
  // Get featured works
  const featuredWorks = works.filter(work => work.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Brands Section - Temporarily Hidden */}
      {false && (
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
            <div>
              <h2 className="text-4xl sm:text-6xl font-semibold text-black/80 mb-4 sm:mb-6">Our Brands</h2>
            </div>
            <div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We offer a comprehensive suite of digital solutions — from smart task management and intuitive team collaboration tools to robust finance systems, advanced eCommerce platforms, dynamic eLearning software, and professional Figma-based UI/UX design assets — all crafted to streamline workflows, enhance collaboration, and drive modern business growth.
              </p>
            </div>
          </div>
          {/* Featured Brand - Large Card */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-black opacity-5 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-black opacity-5 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                <div>
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-base sm:text-lg font-bold">S</span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black">SKILSE</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">Online Learning Platform</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Skilse offers a growing library of expert-led online courses focused on web and app development, empowering learners to build real-world skills and stay ahead in the digital age.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <Link href="#" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto text-center">
                      Explore Platform
                    </Link>
                    <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                      <span>300+ Classes</span>
                      <span>•</span>
                      <span>1K+ Students</span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <h4 className="font-semibold text-black text-sm sm:text-base">Topics</h4>
                      <span className="text-green-600 text-xs sm:text-sm font-medium">Live</span>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">WP</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-black">Web Development</p>
                          <p className="text-[10px] sm:text-xs text-gray-500">Learn to build websites</p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400">4.9★</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">UI</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-black">UI Components</p>
                          <p className="text-[10px] sm:text-xs text-gray-500">Reusable elements</p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400">4.8★</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">API</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-black">API Tools</p>
                          <p className="text-[10px] sm:text-xs text-gray-500">Development kits</p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400">4.7★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other Brands - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-gray-300">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black">ATTOWEAR</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Clothing Brand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Attowear is a modern men’s clothing brand offering a curated selection of essential and trend-forward apparel, including shirts, pants, and outerwear, designed for comfort, versatility, and effortless everyday style for men.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <Link href="#" className="text-black font-medium hover:underline transition-colors text-sm sm:text-base">
                  Learn More →
                </Link>
                <div className="text-xs text-gray-400">20+ Products</div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-gray-300">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg font-bold">U</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black">UiVo</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">UI/UX Design Assets</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Uivo is a collection of professional Figma-based UI/UX design assets, including components, templates, and patterns, designed to help developers and designers create beautiful and functional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <Link href="#" className="text-black font-medium hover:underline transition-colors text-sm sm:text-base">
                  Learn More →
                </Link>
                <div className="text-xs text-gray-400">100+ Assets</div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-gray-300">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg font-bold">J</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black">Jooloud</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">No-Code Website Builder</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Jooloud is a no-code website builder that allows users to create professional websites without writing code, using a drag-and-drop interface and pre-built templates. It also provides hosting, so your site is live instantly—no extra setup required.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <Link href="#" className="text-black font-medium hover:underline transition-colors text-sm sm:text-base">
                  Learn More →
                </Link>
                <div className="text-xs text-gray-400">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Who We Are Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
            <div>
              <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">About Us</p>
              <h2 className="text-4xl sm:text-6xl font-bold text-black/80 mb-4 sm:mb-6">Who We Are</h2>
            </div>
            <div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At the heart of our software company is a passion for innovation and a commitment to excellence. We specialize in delivering user-friendly, high-impact digital solutions that empower businesses to thrive in a rapidly evolving world. With a seasoned team of experts and a proven track record, we blend creativity, technology, and strategic insight to turn your ideas into powerful, reliable software—driving real results and lasting success.
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Story & Approach */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 relative">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black">Our Story</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Founded in 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Frooxi was built with one goal in mind — to create digital solutions that truly understand people.

We don&apos;t just build what you ask for. We listen, think deeply, and treat every project like our own. That&apos;s what makes us different.

Every product we create is driven by purpose and care. This mindset is what shaped Frooxi into what it is today.

We&apos;re not here to follow trends. We&apos;re here to build things that matter.


                </p>
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 w-full">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span>500+ Projects</span>
                    <span>•</span>
                    <span>50+ Clients</span>
                    <span>•</span>
                    <span>10+ Years</span>
                  </div>
                  <button
                    ref={knowMoreBtnRef}
                    className="text-black hover:text-[#30d6c4] underline underline-offset-2 transition-colors p-0 bg-transparent border-none shadow-none font-medium ml-4"
                    style={{background: 'none', border: 'none'}}
                    onClick={() => setShowStoryVideo(true)}
                  >
                    Know More
                  </button>
                  {/* Overlay Popup */}
                  {showStoryVideo && (
                    <>
                      <div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowStoryVideo(false)}
                      />
                      <div
                        className="fixed z-50 right-0 top-0 h-full flex items-center"
                        style={{ pointerEvents: 'none' }}
                      >
                        <div
                          className="relative bg-white rounded-l-2xl shadow-2xl border border-gray-200 w-[90vw] max-w-md p-6 sm:p-8 flex flex-col items-center justify-center animate-slideIn"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl font-bold"
                            onClick={() => setShowStoryVideo(false)}
                            aria-label="Close"
                          >
                            ×
                          </button>
                          <div className="mb-4 text-center">
                            <h4 className="text-lg font-bold text-black mb-1">Our Story</h4>
                            <p className="text-xs text-gray-500">Watch our journey</p>
                          </div>
                          <video
                            src="/StoryVideo.mp4"
                            autoPlay
                            controls
                            className="rounded-xl w-full max-w-full max-h-[60vh] object-contain border border-gray-200 shadow-lg bg-black"
                          />
                        </div>
                      </div>
                      <style jsx global>{`
                        @keyframes slideIn {
                          from { transform: translateX(100%); opacity: 0; }
                          to { transform: translateX(0); opacity: 1; }
                        }
                        .animate-slideIn {
                          animation: slideIn 0.4s cubic-bezier(0.4,0,0.2,1);
                        }
                      `}</style>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-4">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  At Frooxi we keep things simple and focused. We take time to understand your needs then design and build with purpose.

Whether it&apos;s an app a website or a complete brand experience we care about what works best for you and your goals
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">User-centered design thinking</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">Agile development methodology</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">Continuous testing and optimization</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Values Grid */}
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Innovation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Fresh solutions delivered on time with cutting-edge technology
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Reliability</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Reliable solutions for complex problems with proven track record
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Quality</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Top-quality software solutions with attention to every detail
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Growth</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Scalable solutions that grow with your business needs
                  </p>
                </div>
              </div>
              {/* Team Stats */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 pb-8 sm:pb-10 pt-8 sm:pt-10 ">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-black">25+</div>
                    <div className="text-xs text-gray-500">Developers</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-black">8+</div>
                    <div className="text-xs text-gray-500">Designers</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-black">5+</div>
                    <div className="text-xs text-gray-500">Managers</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 mb-2">
                <Link href="/about" className="inline-block w-full lg:w-auto">
                  <button className="bg-transparent text-[black] hover:text-[#30d6c4] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors w-full underline underline-offset-2 lg:w-auto">
                    <div className="flex items-center space-x-2">
                      <p>Learn More About Us</p>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
            <div>
              <h2 className="text-4xl sm:text-6xl font-semibold text-black/80 mb-4 sm:mb-6">Our Services</h2>
            </div>
            <div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We provide comprehensive software development services with a focus on quality and efficiency, delivering solutions that drive business growth.
              </p>
            </div>
          </div>
          {/* Featured Service - Large Card */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-black opacity-5 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-black opacity-5 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-xl flex items-center justify-center">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black">Custom Development</h3>
                      <p className="text-gray-500 text-base sm:text-lg">Our Core Service</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  We specialize in building custom software solutions tailored to your business needs, from strategy and design to development and support. Our team delivers robust, scalable applications that help you achieve measurable results and drive growth.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <button className="bg-transparent text-[black] hover:text-[#30d6c4] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:text-[#30d6c4] transition-colors w-full text-center">
                        <div className="flex items-center space-x-2 justify-center">
                          <p>Start Project</p>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </button>
                    </Link>
                    <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                      <span>90+ Projects</span>
                      <span>•</span>
                      <span>98% Success Rate</span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-8 border border-gray-200">
                    <h4 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg">What We Deliver</h4>
                    <div className="space-y-2 sm:space-y-4">
                      <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-4 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm sm:text-base">Web Applications</p>
                          <p className="text-xs sm:text-sm text-gray-500">Scalable & responsive</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-4 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm sm:text-base">API Development</p>
                          <p className="text-xs sm:text-sm text-gray-500">RESTful & GraphQL</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-4 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm sm:text-base">Mobile Apps</p>
                          <p className="text-xs sm:text-sm text-gray-500">iOS & Android</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-4 bg-white rounded-lg border border-gray-200">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm sm:text-base">Cloud Solutions</p>
                          <p className="text-xs sm:text-sm text-gray-500">AWS, Azure, GCP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other Services - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-white text-lg">🎨</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Beautiful, intuitive user interfaces designed to enhance user experience and drive engagement.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• User Research</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-white text-lg">🔒</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-4">Security Services</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Comprehensive security solutions to protect your applications and data from threats and vulnerabilities.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• Compliance</li>
                <li>• Data Protection</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Data Visualization</li>
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
                <li>• Reporting Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

             {/* Our Work Section */}
       <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
         <div className="max-w-7xl mx-auto">
           {/* Header */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
             <div>
               <h2 className="text-4xl sm:text-6xl font-semibold text-black/80 mb-4 sm:mb-6">Our Work</h2>
             </div>
             <div>
               <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                 Explore some of our recent projects and successful case studies that showcase our expertise and results.
               </p>
             </div>
           </div>
           
           {/* Featured Works Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
             {featuredWorks.map((work) => (
               <Link 
                 key={work.id} 
                 href={`/our-works/${work.id}`} 
                 className="group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
               >
                 <div className="relative aspect-square w-full overflow-hidden">
                   <Image
                     src={work.image}
                     alt={work.title}
                     fill
                     className="object-cover transition-all duration-500 group-hover:scale-110"
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="inline-flex w-[130px] items-center bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                       <span className="relative flex h-2 w-2 mr-2">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                       </span>
                       Featured Project
                     </div>
                     <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                         {work.title}
                       </h3>
                       <p className="text-gray-200 text-sm line-clamp-2 mb-3">
                         {work.shortDescription}
                       </p>
                       <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                         <span className="text-xs font-medium text-white bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                           View Case Study
                           <svg className="w-3 h-3 inline-block ml-1.5 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                           </svg>
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
           
           {/* CTA */}
           <div className="text-center mt-12">
             <Link 
               href="/our-works" 
               className="inline-flex items-center space-x-2 bg-transparent text-[black] px-8 py-4 rounded-lg hover:text-[#60FCC4] transition-colors font-medium"
             >
               <span>View All Case Studies</span>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>
           </div>
         </div>
       </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white border-t border-gray-200 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-black mb-1 sm:mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-black mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-black mb-1 sm:mb-2">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-black mb-1 sm:mb-2">5+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold text-black/80 mb-4 sm:mb-6">Our Teams</h2>
            </div>
            <div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Explore diverse areas such as Software Engineering, Design & UX, and more to find where your unique talents can shine and drive impact.
              </p>
            </div>
          </div>
          
          {/* Featured Team - Large Card */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-black opacity-5 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-black opacity-5 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-xl flex items-center justify-center">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black">Development Teams</h3>
                      <p className="text-gray-500 text-base sm:text-lg">Core Development Team</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Our largest and most dynamic team, working with complex challenges to build scalable systems and innovative solutions that power the future.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <Link href="/careers" className="w-full sm:w-auto">
                      <button className="bg-transparent text-[black] hover:text-[#30d6c4] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:text-[#30d6c4] transition-colors w-full text-center">
                        <div className="flex items-center space-x-2 justify-center">
                          <p>Join Our Team</p>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </button>
                    </Link>
                    
                    <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                      <span>25+ Developers</span>
                      <span>•</span>
                      <span>Full-Stack</span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="bg-white rounded-xl p-4 sm:p-8 border border-gray-200">
                    <h4 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg">Technologies We Use</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">React</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">N</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">Node.js</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">NJ</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">Next.js</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">K</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">Kotlin</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">J</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">Java</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">Swift</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-black">MongoDB</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3  rounded-lg">
                        
                        <span className="text-xs sm:text-sm font-medium text-black">More...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Development Teams */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Creative Teams</h3>
                  <p className="text-gray-500 text-sm">Design & UX</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">UI & UX</span>
                  </div>
                  <span className="text-xs text-gray-400">8+ Members</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">Graphics Design</span>
                  </div>
                  <span className="text-xs text-gray-400">6+ Members</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">Video & Photography</span>
                  </div>
                  <span className="text-xs text-gray-400">4+ Members</span>
                </div>
              </div>
            </div>
            
            {/* Business Teams */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Business Teams</h3>
                  <p className="text-gray-500 text-sm">Management & Growth</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">Project Management</span>
                  </div>
                  <span className="text-xs text-gray-400">5+ Members</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">Marketing & Sales</span>
                  </div>
                  <span className="text-xs text-gray-400">7+ Members</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-black">Research</span>
                  </div>
                  <span className="text-xs text-gray-400">3+ Members</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Join Our Team?</h3>
              <p className="text-gray-600 mb-8">
                We&apos;re always looking for talented individuals who are passionate about technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/careers" className="w-full sm:w-auto">
                  <button className="bg-[#60FCC4] text-black hover:text-white px-8 py-4 rounded-lg hover:bg-black hover:text-black transition-colors w-full">
                    View Open Positions
                  </button>
                </Link>
                <button className="text-black border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}