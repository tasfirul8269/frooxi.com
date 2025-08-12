'use client';

import { useState } from 'react';

export default function WorkContactForm({ projectTitle }: { projectTitle: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: `I'm interested in learning more about your "${projectTitle}" project.`,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your actual form submission logic
      // Example using fetch:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     subject: `Inquiry about ${projectTitle} project`,
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Failed to send message');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: `I&apos;m interested in learning more about your &ldquo;${projectTitle}&rdquo; project.`,
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-12">
      <h3 className="text-xl font-semibold mb-4">Interested in this project?</h3>
      <p className="text-gray-600 mb-6">
        Have a similar project in mind? Let&apos;s discuss how we can help bring your ideas to life.
      </p>
      
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      ) : status === 'error' ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          Something went wrong. Please try again later.
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              status === 'loading'
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
