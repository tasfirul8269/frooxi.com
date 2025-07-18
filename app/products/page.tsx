import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    id: 'app1',
    name: 'TaskFlow',
    type: 'Mobile Application',
    icon: '📱',
    description: 'A productivity app to manage your daily tasks and projects efficiently on the go. Organize, prioritize, and track your work with smart reminders, collaboration tools, and seamless cloud sync across devices.',
    cta: 'Learn More',
    ctaLink: '#',
    price: 'Free',
  },
  {
    id: 'saas1',
    name: 'CloudSuite',
    type: 'SaaS',
    icon: '☁️',
    description: 'A cloud-based suite for business management, analytics, and collaboration. Includes CRM, invoicing, project management, and real-time reporting for growing teams and enterprises.',
    cta: 'Learn More',
    ctaLink: '#',
    price: '$19/mo',
  },
  {
    id: 'web1',
    name: 'ShopEase',
    type: 'Ecommerce Website',
    icon: '🛒',
    description: 'A modern ecommerce platform for seamless online shopping experiences. Features customizable storefronts, secure payments, inventory management, and marketing tools.',
    cta: 'Learn More',
    ctaLink: '#',
    price: '$299 setup',
  },
  {
    id: 'app2',
    name: 'FitTrack',
    type: 'Mobile Application',
    icon: '🏃‍♂️',
    description: 'A fitness tracking app to monitor workouts, nutrition, and progress. Set goals, join challenges, and get personalized insights to stay motivated and healthy.',
    cta: 'Learn More',
    ctaLink: '#',
    price: 'Free',
  },
  {
    id: 'web2',
    name: 'EduPortal',
    type: 'Educational Website',
    icon: '🎓',
    description: 'An interactive learning platform for students and educators. Access courses, track progress, and collaborate in a secure, user-friendly environment.',
    cta: 'Learn More',
    ctaLink: '#',
    price: 'Contact Us',
  },
];

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