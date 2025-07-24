'use client';

import Link from 'next/link';
import Image from 'next/image';
import { WorkItem } from '@/app/data/works';

interface RelatedWorksProps {
  currentWork: WorkItem;
  allWorks: WorkItem[];
  maxItems?: number;
}

export default function RelatedWorks({ currentWork, allWorks, maxItems = 3 }: RelatedWorksProps) {
  // Find related works by matching tags, excluding the current work
  const relatedWorks = allWorks
    .filter(work => work.id !== currentWork.id)
    .map(work => ({
      ...work,
      // Calculate a relevance score based on tag matches
      relevance: work.tags.filter(tag => currentWork.tags.includes(tag)).length
    }))
    .filter(work => work.relevance > 0) // Only include works with at least one matching tag
    .sort((a, b) => b.relevance - a.relevance) // Sort by relevance
    .slice(0, maxItems); // Limit the number of related works

  if (relatedWorks.length === 0) {
    return null; // Don't render if no related works
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Related Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedWorks.map((work) => (
          <Link 
            key={work.id} 
            href={`/works/${work.id}`}
            className="group block"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  {work.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {work.shortDescription}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {work.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
