'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(e => console.error("Error playing video:", e));
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-gray-500 text-sm mb-2">About Us</p>
              <h1 className="text-6xl font-bold text-black/80 mb-6">Who We Are</h1>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At the heart of our software company is a passion for innovation and a commitment to excellence. We specialize in delivering user-friendly, high-impact digital solutions that empower businesses to thrive in a rapidly evolving world. With a seasoned team of experts and a proven track record, we blend creativity, technology, and strategic insight to turn your ideas into powerful, reliable software—driving real results and lasting success.
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
                    <p className="text-gray-500 text-sm">Founded in 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                Frooxi was built with one goal in mind — to create digital solutions that truly understand people.

We don&apos;t just build what you ask for. We listen, think deeply, and treat every project like our own. That&apos;s what makes us different.

Every product we create is driven by purpose and care. This mindset is what shaped Frooxi into what it is today.

We&apos;re not here to follow trends. We&apos;re here to build things that matter.
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
                  At Frooxi we keep things simple and focused. We take time to understand your needs then design and build with purpose.

Whether it&apos;s an app, a website, or a complete brand experience, we care about what works best for you and your goals.
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
            
            {/* Video on the right - matching height of left column */}
            <div className="relative rounded-xl overflow-hidden w-full bg-black group">
              <video
                ref={videoRef}
                src="/StoryVideo.mp4"
                loop
                playsInline
                onClick={togglePlayPause}
                className="w-full h-[600px] object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Semi-transparent overlay */}
              <div 
                className={`absolute inset-0 transition-all duration-300 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)'
                }}
              ></div>
              
              {/* Play/Pause button overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
                onClick={togglePlayPause}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                  {isPlaying ? (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Bottom gradient overlay with controls */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm font-medium">Our Story</div>
                      <div className="text-white/80 text-xs">Watch our journey</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (videoRef.current) {
                            videoRef.current.muted = !videoRef.current.muted;
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                        aria-label={videoRef.current?.muted ? 'Unmute' : 'Mute'}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {videoRef.current?.muted ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                          )}
                        </svg>
                      </button>
                      <button 
                        onClick={togglePlayPause}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
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
              We see a future where technology feels natural, helpful, and truly human.

Our vision is to build solutions that empower people and businesses to grow, create, and reach their full potential — not through complexity, but through clarity and purpose.
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
                  We strive to be at the forefront of technological innovation, constantly pushing boundaries and exploring new possibilities to create solutions that haven&apos;t been imagined yet.
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
                We&apos;re committed to delivering exceptional software solutions that drive business growth and create lasting value for our clients.
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

      {/* Gallery Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-semibold text-black/80 mb-6">Our Gallery</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A glimpse into our world of creativity, innovation, and the amazing projects we&apos;ve had the privilege to work on.
              </p>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Team Collaboration', desc: 'Our team working together on innovative solutions' },
              { id: 2, title: 'Office Space', desc: 'Our modern and creative workspace' },
              { id: 3, title: 'Project Meeting', desc: 'Brainstorming session with clients' },
              { id: 4, title: 'Product Launch', desc: 'Celebrating successful project delivery' },
              { id: 5, title: 'Tech Conference', desc: 'Sharing knowledge at industry events' },
              { id: 6, title: 'Awards Ceremony', desc: 'Recognizing excellence in our team' }
            ].map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-square">
                <Image
                  src={`https://picsum.photos/seed/frooxi-${item.id}/800/800`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{item.desc}</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Founders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder 1 - Tasfirul */}
            <div className="group relative overflow-hidden">
              <div className="aspect-square relative rounded overflow-hidden border border-black/10">
                <Image
                  src="/Tasfirul.png"
                  alt="Tasfirul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">Tasfirul</h3>
                  <p className="text-gray-200">Co-Founder & CEO</p>
                </div>
              </div>
            </div>
            
            {/* Founder 2 - Tanvir */}
            <div className="group relative overflow-hidden">
              <div className="aspect-square relative rounded overflow-hidden border border-black/10">
                <Image
                  src="/Tanvir.jpg"
                  alt="Tanvir"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">Tanvir</h3>
                  <p className="text-gray-200">Co-Founder & CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 