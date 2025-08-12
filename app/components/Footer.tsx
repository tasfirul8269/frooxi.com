import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center" aria-label="Frooxi Home">
                <div className="w-24 md:w-32 h-6 md:h-8 relative">
                  <Image
                    src="/FrooxiHeaderLogo.svg"
                    alt="Frooxi"
                    fill
                    className="object-contain brightness-0 invert"
                    priority
                  />
                </div>
              </Link>
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
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 pr-10 py-2 bg-gray-800 text-white text-sm rounded border-0 focus:outline-none focus:ring-2 focus:ring-white w-full"
              />
              <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-white">
                {/* Paper plane icon (Heroicons outline or SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21l16.5-9-16.5-9v7.5l11.25 1.5-11.25 1.5V21z" />
                </svg>
              </span>
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