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
              <h2 className="text-2xl font-bold text-black mb-2">All Case Studies</h2>
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
              Let's discuss how we can help bring your ideas to life and create something amazing together.
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
    <Link href={`/our-works/${work.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
              Featured
            </span>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{work.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{work.date}</span>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
            {work.title}
          </h3>
          <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
            {work.shortDescription}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1 mb-3">
              {work.tags.slice(0, 2).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-black">View Case Study</span>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function WorkCard({ work }: { work: any }) {
  return (
    <Link href={`/our-works/${work.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 h-full flex flex-col">
        <div className="relative h-32 overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{work.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{work.date}</span>
          </div>
          <h3 className="text-sm font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors line-clamp-1">
            {work.title}
          </h3>
          <p className="text-gray-600 mb-2 line-clamp-2 text-xs leading-relaxed">
            {work.shortDescription}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1 mb-2">
              {work.tags.slice(0, 1).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-1 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-black">View Details</span>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 