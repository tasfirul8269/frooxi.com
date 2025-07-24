import { products } from '@/app/data/products';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg mb-8">Explore the mobile apps, SaaS platforms, websites, and digital solutions we’ve built for our clients and users.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-start shadow-sm hover:border-black transition-colors group min-h-[340px]">
              <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center text-2xl text-white mb-6">
                <span>{product.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-1 group-hover:underline">{product.name}</h3>
              <div className="text-xs bg-gray-100 text-black px-3 py-1 rounded-full mb-4 font-medium inline-block">{product.type}</div>
              <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
              {product.price && (
                <div className="text-base font-semibold text-black mb-4">{product.price}</div>
              )}
              <a href={product.ctaLink} className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm mt-auto">{product.cta}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 