import Link from 'next/link';

// Mock data (in real app, fetch by id)
const brands = [
  {
    id: 'joomshaper',
    name: 'JoomShaper',
    image: 'https://dummyimage.com/120x120/000/fff&text=JS',
    description: 'JoomShaper is a leading provider of Joomla templates and extensions, powering thousands of websites worldwide. Our focus is on innovation, usability, and design excellence.',
    caseStudy: 'JoomShaper has helped businesses and individuals create stunning websites with ease. Our flagship products include SP Page Builder and Helix Ultimate, which have revolutionized Joomla site building.',
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['SP Page Builder', 'Helix Ultimate', 'Joomla Templates'],
    technologies: ['Joomla', 'PHP', 'Bootstrap'],
  },
  // ...add more mock brands as needed
];

export default function BrandDetails({ params }: { params: { id: string } }) {
  const brand = brands.find(b => b.id === params.id) || brands[0];
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 pt-20 pb-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/brands" className="text-gray-500 hover:text-black text-sm mb-8 inline-block">← Back to Brands</Link>
          <div className="flex items-center space-x-6 mb-8">
            <img src={brand.image} alt={brand.name} className="w-20 h-20 rounded-full object-cover bg-gray-100" />
            <h1 className="text-4xl font-bold text-black">{brand.name}</h1>
          </div>
          <p className="text-gray-600 text-lg mb-6">{brand.description}</p>
          <div className="mb-10">
            <h2 className="text-xl font-bold text-black mb-3">Case Study</h2>
            <p className="text-gray-700 mb-6">{brand.caseStudy}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brand.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img src={img} alt={brand.name + ' screenshot ' + (i+1)} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-3">Key Features</h2>
            <div className="flex flex-wrap gap-3">
              {brand.features.map((feature, i) => (
                <span key={i} className="text-xs bg-black text-white px-4 py-1 rounded-full font-medium inline-block">{feature}</span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {brand.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-100 text-black px-4 py-1 rounded-full font-medium inline-block">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 