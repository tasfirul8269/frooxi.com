'use client';

import { useState, useEffect } from 'react';
import { works } from '@/app/data/works';
import Image from 'next/image';
import Link from 'next/link';

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [selectedWork, setSelectedWork] = useState<any>(null);
  
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
      <section className="px-4 sm:px-6 pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
            <p className="text-gray-500 text-xs sm:text-sm mb-2">Portfolio</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-black/80 mb-6">
              Our Works
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and case studies that showcase our expertise in creating innovative digital solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{works.length}+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">50+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category === 'all' ? 'All Works' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
          ))}
        </div>
        
        {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === tag
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
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
        <section className="px-4 sm:px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black/80 mb-4">Featured Projects</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our most impactful and innovative projects that demonstrate our expertise and commitment to excellence.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Featured</div>
                  <div className="text-lg font-semibold text-black">Handpicked Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredWorks.map((work) => (
                <FeaturedWorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
        </section>
      )}

      {/* All Projects Section */}
      {otherWorks.length > 0 && (
        <section className="px-4 sm:px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black/80 mb-4">All Projects</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A comprehensive collection of our work across different technologies and industries.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
        <div>
                  <div className="text-sm text-gray-500">Portfolio</div>
                  <div className="text-lg font-semibold text-black">Complete Collection</div>
                </div>
              </div>
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black/80 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your ideas to life and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="text-black border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-medium"
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
    <Link href={`/works/${work.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-200">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{work.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{work.date}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
            {work.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {work.shortDescription}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {work.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-black">View Project</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <Link href={`/works/${work.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-200">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{work.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{work.date}</span>
          </div>
          <h3 className="text-lg font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
            {work.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {work.shortDescription}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {work.tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-black">View Details</span>
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
