import Header from '../components/Header';
import Footer from '../components/Footer';

const brands = [
  {
    id: 'joomshaper',
    name: 'JoomShaper',
    subtitle: 'Flagship Platform',
    initials: 'JS',
    description: 'JoomShaper provides a marketplace of over 100 digital products and services, serving thousands of developers and businesses worldwide with cutting-edge solutions.',
    stats: ['100+ Products', '10K+ Users'],
    cta: 'Explore Platform',
    ctaLink: '#',
    products: [
      { icon: 'WP', name: 'WordPress Themes', subtitle: 'Premium templates', rating: '4.9★' },
      { icon: 'UI', name: 'UI Components', subtitle: 'Reusable elements', rating: '4.8★' },
      { icon: 'API', name: 'API Tools', subtitle: 'Development kits', rating: '4.7★' },
    ],
    productsStatus: 'Live',
  },
  {
    id: 'droip',
    name: 'Droip',
    subtitle: 'Website Builder',
    initials: 'DP',
    description: 'Droip is a next-generation website builder for modern web professionals, offering advanced features and seamless workflows.',
    stats: ['Next-Gen', 'Website Builder'],
    cta: 'Learn More',
    ctaLink: '#',
    products: [
      { icon: 'BLD', name: 'Site Builder', subtitle: 'Drag & drop', rating: '4.8★' },
      { icon: 'TM', name: 'Templates', subtitle: 'Modern designs', rating: '4.7★' },
    ],
    productsStatus: 'Beta',
  },
  {
    id: 'henosum',
    name: 'Henosum',
    subtitle: 'Manufacturing',
    initials: 'HN',
    description: 'Henosum manufactures and delivers flagship products to the global market, trusted by industry leaders.',
    stats: ['Global Reach', 'Flagship Products'],
    cta: 'Discover',
    ctaLink: '#',
    products: [
      { icon: 'TL', name: 'Tool Sets', subtitle: 'Industrial grade', rating: '4.9★' },
      { icon: 'PLT', name: 'Platforms', subtitle: 'Custom solutions', rating: '4.8★' },
    ],
    productsStatus: 'Live',
  },
];

export default function Brands() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Our Brands</h1>
          <p className="text-gray-600 text-lg mb-8">Explore our family of brands, each delivering unique value and innovation.</p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {brands.map((brand, idx) => (
            <div key={brand.id} className={`flex flex-col lg:flex-row items-stretch gap-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Brand Info Card */}
              <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col justify-between min-h-[18rem]">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="w-14 h-14 bg-black rounded-lg flex items-center justify-center text-white text-2xl font-bold">{brand.initials}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-1">{brand.name}</h2>
                      <div className="text-gray-500 text-sm">{brand.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base mb-8 max-w-xl leading-relaxed mt-4">{brand.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                  <a href={brand.ctaLink} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium w-fit">{brand.cta}</a>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    {brand.stats.map((stat, i) => (
                      <span key={i}>{stat}{i < brand.stats.length - 1 && <span className="mx-2">•</span>}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Brand Features Card */}
              <div className="w-full lg:w-[28rem] flex-shrink-0 flex flex-col justify-center bg-white rounded-2xl border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-black">Popular Products</h4>
                  <span className={`text-sm font-medium ${brand.productsStatus === 'Live' ? 'text-green-600' : 'text-yellow-600'}`}>{brand.productsStatus}</span>
                </div>
                <div className="space-y-3">
                  {brand.products.map((prod, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{prod.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-black">{prod.name}</p>
                        <p className="text-xs text-gray-500">{prod.subtitle}</p>
                      </div>
                      <span className="text-xs text-gray-400">{prod.rating}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 