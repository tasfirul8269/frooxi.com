import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      {/* Website Development Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-black mb-4">Website Development</h2>
        <div className="text-gray-600 text-base mb-10">We build modern, responsive websites tailored to your brand and business goals. From simple landing pages to complex web applications, our team ensures your online presence is fast, secure, and easy to manage.</div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Starts From */}
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center bg-gray-50">
            <h3 className="text-xl font-bold text-black mb-2">Starts From</h3>
            <div className="text-4xl font-bold text-black mb-2">$1,200</div>
            <div className="text-gray-500 mb-6">Basic, modern website for small businesses or portfolios.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Up to 5 pages</li>
              <li>• Responsive design</li>
              <li>• Contact form</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Started</button>
          </div>
          {/* Recommended */}
          <div className="border-2 border-black rounded-xl p-10 flex flex-col items-center bg-white shadow-lg scale-105 z-10 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">Recommended</div>
            <h3 className="text-xl font-bold text-black mb-2 mt-4">Professional</h3>
            <div className="text-4xl font-bold text-black mb-2">$2,500</div>
            <div className="text-gray-500 mb-6">Custom website with CMS, blog, and advanced features.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Up to 15 pages</li>
              <li>• CMS integration</li>
              <li>• Blog & SEO setup</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Choose Plan</button>
          </div>
          {/* Custom */}
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center bg-gray-50">
            <h3 className="text-xl font-bold text-black mb-2">Custom</h3>
            <div className="text-4xl font-bold text-black mb-2">Contact Us</div>
            <div className="text-gray-500 mb-6">For e-commerce, web apps, or unique requirements.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Unlimited pages</li>
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Request Quote</button>
          </div>
        </div>
        {/* General Pricing Description Box for Website Development */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="border border-gray-300 rounded-xl p-8 text-gray-700 text-base leading-relaxed bg-white">
            Our pricing is designed to be transparent and flexible. All listed prices are starting points and may vary depending on your project’s complexity, features, and timeline. If your requirements expand or you need additional services, we’ll always discuss and update the pricing with you in advance. Once you select a plan or request a custom quote, we’ll schedule a consultation to define your needs and provide a detailed proposal. Most projects begin with a deposit, with the remainder due upon completion or at agreed milestones. If you have questions or unique needs, <a href="/contact" className="underline text-black hover:text-gray-800">contact us</a> for a tailored solution.
          </div>
        </div>
      </div>

      {/* UI/UX Design Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-black mb-4">UI/UX Design</h2>
        <div className="text-gray-600 text-base mb-10">We create user-focused, modern interfaces to boost engagement and usability. Our design process ensures your product is intuitive, visually appealing, and aligned with your brand.</div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Starts From */}
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center bg-gray-50">
            <h3 className="text-xl font-bold text-black mb-2">Starts From</h3>
            <div className="text-4xl font-bold text-black mb-2">$800</div>
            <div className="text-gray-500 mb-6">Basic UI/UX for small projects or MVPs.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Up to 5 screens/pages</li>
              <li>• Wireframes</li>
              <li>• Simple prototype</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Started</button>
          </div>
          {/* Recommended */}
          <div className="border-2 border-black rounded-xl p-10 flex flex-col items-center bg-white shadow-lg scale-105 z-10 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">Recommended</div>
            <h3 className="text-xl font-bold text-black mb-2 mt-4">Professional</h3>
            <div className="text-4xl font-bold text-black mb-2">$1,500</div>
            <div className="text-gray-500 mb-6">Comprehensive UI/UX for web or mobile apps.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Up to 15 screens/pages</li>
              <li>• Interactive prototype</li>
              <li>• Design system</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Choose Plan</button>
          </div>
          {/* Custom */}
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center bg-gray-50">
            <h3 className="text-xl font-bold text-black mb-2">Custom</h3>
            <div className="text-4xl font-bold text-black mb-2">Contact Us</div>
            <div className="text-gray-500 mb-6">Enterprise design, branding, or ongoing design support.</div>
            <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
              <li>• Unlimited screens/pages</li>
              <li>• Branding</li>
              <li>• Dedicated designer</li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Request Quote</button>
          </div>
        </div>
        {/* General Pricing Description Box for UI/UX Design */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="border border-gray-300 rounded-xl p-8 text-gray-700 text-base leading-relaxed bg-white">
            Our pricing is designed to be transparent and flexible. All listed prices are starting points and may vary depending on your project’s complexity, features, and timeline. If your requirements expand or you need additional services, we’ll always discuss and update the pricing with you in advance. Once you select a plan or request a custom quote, we’ll schedule a consultation to define your needs and provide a detailed proposal. Most projects begin with a deposit, with the remainder due upon completion or at agreed milestones. If you have questions or unique needs, <a href="/contact" className="underline text-black hover:text-gray-800">contact us</a> for a tailored solution.
          </div>
        </div>
      </div>

      {/* You can add more services here in the same format if needed */}
    </div>
  );
} 