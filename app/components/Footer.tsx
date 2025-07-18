import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">F</span>
              </div>
              <span className="text-lg font-semibold">Frooxi</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We build clean, efficient software that solves real problems. No complexity, just results.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white">Custom Development</Link></li>
              <li><Link href="#" className="hover:text-white">Mobile Applications</Link></li>
              <li><Link href="#" className="hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="#" className="hover:text-white">Security Services</Link></li>
              <li><Link href="#" className="hover:text-white">Performance Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm rounded-l border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-4 py-2 text-sm rounded-r hover:bg-gray-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SofTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 