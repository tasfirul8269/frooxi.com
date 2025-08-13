'use client';

import { useState, useEffect } from 'react';
import { works } from '@/app/data/works';
import Image from 'next/image';
import Link from 'next/link';

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredWorks, setFilteredWorks] = useState(works);
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(works.map(work => work.category)))];
  
  // Get all unique tags
  const allTags = Array.from(new Set(works.flatMap(work => work.tags)));
  
  // Filter works based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredWorks(works);
    } else if (allTags.includes(activeFilter)) {
      setFilteredWorks(works.filter(work => work.tags.includes(activeFilter)));
    } else {
      setFilteredWorks(works.filter(work => work.category === activeFilter));
    }
  }, [activeFilter, allTags]);
  
  const featuredWorks = filteredWorks.filter(work => work.featured);
  const otherWorks = filteredWorks.filter(work => !work.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-20 pb-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-xs sm:text-sm mb-2">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-black/80 mb-4">
              Our Works
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Works' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-1">
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeFilter === tag
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredWorks.length > 0 && (
        <section className="px-4 sm:px-6 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Featured Case Studies</h2>
              <p className="text-gray-600">
                Our most impactful projects that demonstrate our expertise and results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorks.map((work) => (
                <FeaturedWorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      {otherWorks.length > 0 && (
        <section className="px-4 sm:px-6 py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Our Works</h2>
              <p className="text-gray-600">
                A comprehensive collection of our work across different services and industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your ideas to life and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/contact" 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedWorkCard({ work }: { work: any }) {
  return (
    <Link href={`/our-works/${work.id}`} className="group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col p-6">
          <div className="mt-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Featured Project
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
              {work.title}
            </h3>
            <p className="text-gray-200 mb-4 line-clamp-2 text-sm leading-relaxed">
              {work.shortDescription}
            </p>
            <div className="flex items-center">
              <span className="text-sm font-medium text-white bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                View Case Study
                <svg className="w-3.5 h-3.5 inline-block ml-1.5 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function WorkCard({ work }: { work: any }) {
  return (
    <Link href={`/our-works/${work.id}`} className="group block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-1">{work.title}</h3>
            <span className="text-sm opacity-90">{work.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 