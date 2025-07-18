import Link from 'next/link';
import { useRouter } from 'next/router';

const categories = ['Business', 'Ecommerce', 'Portfolio', 'Travel', 'More...'];
const works = [
  {
    title: 'Crafty Workshop',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    description: 'A modern, clean template for creative workshops and studios.'
  },
  {
    title: 'Product Landing',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Showcase your product with style and clarity.'
  },
  {
    title: 'Event Promo',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Perfect for events, conferences, and meetups.'
  },
  {
    title: 'Smart Decisions',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    description: 'A business template for modern companies.'
  },
  {
    title: 'Art Agency',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Showcase your creative agency and portfolio.'
  },
  {
    title: 'Immersive Events',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'A bold template for immersive event experiences.'
  },
  {
    title: 'Legal Services',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Professional and trustworthy legal services template.'
  },
  {
    title: 'Team Careers',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    description: 'Highlight your team and open positions.'
  },
  {
    title: 'Photography Book',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A minimal template for books and portfolios.'
  },
];

export default function OurWorks() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Works</h1>
          <p className="text-gray-600 text-lg mb-8">A showcase of our best projects and solutions.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full bg-gray-50 text-black font-medium hover:bg-black hover:text-white border border-gray-200 transition-colors text-sm"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex justify-end mb-8">
            <Link href="#" className="text-black font-semibold flex items-center gap-2 hover:underline text-base">
              Explore all works <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {works.map((work, idx) => (
            <Link key={idx} href={`/our-works/${idx}`} className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white group block">
              <img
                src={work.image}
                alt={work.title}
                className="w-full object-cover block"
                style={{ minHeight: '220px', maxHeight: '420px', aspectRatio: '4/5' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-200 opacity-0 group-hover:opacity-100">
                <div className="px-6 pb-6 pt-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-2 truncate">{work.title}</h3>
                  <div className="text-xs bg-white bg-opacity-20 text-white px-4 py-1 rounded-full mb-2 font-medium inline-block">Business</div>
                  <p className="text-gray-100 text-sm line-clamp-3" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {work.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 