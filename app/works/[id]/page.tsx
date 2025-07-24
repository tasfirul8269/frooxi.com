import { notFound } from 'next/navigation';
import { works, WorkItem } from '@/app/data/works';
import Image from 'next/image';
import Link from 'next/link';
import RelatedWorks from '@/app/components/RelatedWorks';
import WorkContactForm from '@/app/components/WorkContactForm';

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/works" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Works
        </Link>

        <article>
          <header className="mb-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{work.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              {work.client && (
                <div>
                  <span className="font-medium">Client:</span> {work.client}
                </div>
              )}
              <div>
                <span className="font-medium">Date:</span> {new Date(work.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </div>
              <div>
                <span className="font-medium">Category:</span> {work.category.charAt(0).toUpperCase() + work.category.slice(1)}
              </div>
            </div>
          </header>

          <div className="prose max-w-none">
            <h2>About the Project</h2>
            <p className="text-lg">{work.longDescription}</p>

            {work.images && work.images.length > 0 && (
              <div className="my-12">
                <h3>Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {work.images.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${work.title} - Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.technologies && work.technologies.length > 0 && (
              <div className="my-8">
                <h3>Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(work.challenges || work.solutions || work.results) && (
              <div className="my-8">
                <h3>Project Highlights</h3>
                
                {work.challenges && work.challenges.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg">Challenges</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      {work.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {work.solutions && work.solutions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg">Our Solutions</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      {work.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {work.results && work.results.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg">Results</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      {work.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  View Live Project
                </a>
              )}
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          </footer>

          {/* Contact Form */}
          <WorkContactForm projectTitle={work.title} />

          {/* Related Works */}
          <RelatedWorks currentWork={work} allWorks={works} />
        </article>
      </div>
    </div>
  );
}
