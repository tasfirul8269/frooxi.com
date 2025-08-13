'use client';

import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHeart, FaLightbulb, FaUsers, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';

export default function CareersPage() {
  interface Benefit {
    icon: ReactElement;
    title: string;
    description: string;
  }

  interface Value {
    title: string;
    description: string;
  }

  interface Position {
    id: string;
    title: string;
    type: string;
    location: string;
    department: string;
    description: string;
  }

  const benefits: Benefit[] = [
    { 
      icon: <FaHeart className="text-2xl" />, 
      title: 'Health & Wellness', 
      description: 'Comprehensive health coverage and wellness programs to keep you at your best.'
    },
    { 
      icon: <FaLightbulb className="text-2xl" />, 
      title: 'Learning & Growth', 
      description: 'Continuous learning opportunities and skill development programs.'
    },
    { 
      icon: <FaUsers className="text-2xl" />, 
      title: 'Great Team', 
      description: 'Work with talented and passionate colleagues from around the world.'
    },
  ];

  const companyValues: Value[] = [
    {
      title: 'Innovation',
      description: 'We embrace creativity and are constantly pushing boundaries.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success.'
    },
    {
      title: 'Integrity',
      description: 'We do what\'s right, even when no one is watching.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
  ];

  const openPositions: Position[] = [
    { 
      id: 'senior-developer',
      title: 'Senior Frontend Developer', 
      type: 'Full-time', 
      location: 'San Francisco, CA',
      department: 'Engineering',
      description: 'Build amazing user experiences with our talented team.'
    },
    { 
      id: 'ux-designer',
      title: 'UX/UI Designer', 
      type: 'Full-time', 
      location: 'Remote',
      department: 'Design',
      description: 'Create beautiful and intuitive user interfaces.'
    },
    { 
      id: 'marketing-manager',
      title: 'Marketing Manager', 
      type: 'Full-time', 
      location: 'New York, NY',
      department: 'Marketing',
      description: 'Lead our marketing strategy and campaigns.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              We're on a mission to build the future of digital experiences. Join us in creating meaningful solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#open-positions" 
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                View Open Positions
                <FiArrowRight className="ml-2" />
              </a>
              <a 
                href="#culture" 
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a workplace where talented people can do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-xl hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white"
              >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(benefit.icon, { className: 'text-white text-2xl' })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value: Value, index: number) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented people to join our team.
            </p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <Link href={`/careers/${position.id}`} className="block">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {position.department}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaMapMarkerAlt className="mr-1.5 flex-shrink-0" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaClock className="mr-1.5 flex-shrink-0" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center text-blue-600 font-medium">
                      <span className="mr-2">View Details</span>
                      <FaArrowRight className="w-4 h-4 mt-0.5" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Dream Job?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll contact you when a position matching your skills opens up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
              Submit Your Resume
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working at our company.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">What is your interview process like?</h3>
              <p className="text-gray-600">
                Our interview process typically includes an initial phone screen, followed by technical assessments, and then onsite or virtual interviews with the team. We aim to make the process transparent and efficient.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Do you offer remote work options?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible work arrangements including fully remote, hybrid, and in-office options depending on the role and team.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">What benefits do you offer?</h3>
              <p className="text-gray-600">
                We offer competitive salaries, comprehensive health coverage, retirement plans, professional development budgets, flexible PTO, and more.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">What is your company culture like?</h3>
              <p className="text-gray-600">
                We foster a collaborative, inclusive environment where everyone's voice is valued. We believe in work-life balance, continuous learning, and having fun while doing great work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't see a role that fits?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll be in touch when we have an opening that matches your skills.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}
