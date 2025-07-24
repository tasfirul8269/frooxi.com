'use client';

import { useState, useEffect } from 'react';
import { works } from '@/app/data/works';
import Image from 'next/image';
import Link from 'next/link';

export default function WorksPage() {
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
  }, [activeFilter]);
  
  const featuredWorks = filteredWorks.filter(work => work.featured);
  const otherWorks = filteredWorks.filter(work => !work.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore our portfolio of successful projects and case studies
        </p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Works
          </button>
          
          {categories.map((category) => (
            category !== 'all' && (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            )
          ))}
        </div>
        
        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {featuredWorks.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      )}

      {otherWorks.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function WorkCard({ work }: { work: any }) {
  return (
    <Link href={`/works/${work.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {work.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{work.shortDescription}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {work.tags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
