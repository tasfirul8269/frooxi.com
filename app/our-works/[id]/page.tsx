import Link from 'next/link';
import Image from 'next/image';

// Mock data (in real app, fetch by id)
const works = [
  {
    title: 'Crafty Workshop',
    category: 'Business',
    summary: 'A modern, clean template for creative workshops and studios. This project involved a full design and development process, focusing on usability and aesthetics.',
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    categories: ['Business', 'Portfolio'],
  },
  // ...add more mock works as needed
];

export default function WorkDetails({ params }: { params: { id: string } }) {
  const work = works[parseInt(params.id, 10)] || works[0];
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 pt-20 pb-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/our-works" className="text-gray-500 hover:text-black text-sm mb-8 inline-block">← Back to Works</Link>
          <h1 className="text-4xl font-bold text-black mb-2">{work.title}</h1>
          <div className="mb-4">
            <span className="text-xs bg-black text-white px-4 py-1 rounded-full font-medium inline-block mr-2">{work.category}</span>
            {work.categories.slice(1).map((cat, i) => (
              <span key={i} className="text-xs bg-gray-100 text-black px-4 py-1 rounded-full font-medium inline-block mr-2">{cat}</span>
            ))}
          </div>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">{work.summary}</p>
          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {work.images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <Image 
                  src={work.images[i]} 
                  alt={work.title + ' screenshot ' + (i+1)} 
                  width={800} height={256}
                  className="w-full h-64 object-cover" 
                />
              </div>
            ))}
          </div>
          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {work.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-black text-white px-4 py-1 rounded-full font-medium inline-block">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 