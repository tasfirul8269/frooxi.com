import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Contact Us</h1>
          <p className="text-gray-600 text-lg mb-4">We&apos;d love to hear from you. Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 text-black" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 text-black" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 text-black" placeholder="Subject" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Message</label>
              <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 text-black" rows={5} placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Our Office</h3>
              <p className="text-gray-600">1234 Innovation Drive<br />Suite 100<br />Tech City, TX 75001</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Email</h3>
              <p className="text-gray-600">contact@softech.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00am - 6:00pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 