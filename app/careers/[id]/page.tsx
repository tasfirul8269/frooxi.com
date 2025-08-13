'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaClock, FaArrowRight } from 'react-icons/fa';

// This would typically come from an API or CMS in a real application
const jobDetails = {
  'senior-developer': {
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building user interfaces and implementing features using modern web technologies.',
    responsibilities: [
      'Develop and maintain high-quality web applications using React/Next.js',
      'Collaborate with designers to implement responsive and accessible UIs',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and mentor junior developers',
      'Work closely with product managers and other stakeholders'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Strong proficiency in JavaScript/TypeScript, React, and Next.js',
      'Experience with modern frontend build pipelines and tools',
      'Familiarity with RESTful APIs and GraphQL',
      'Strong understanding of web performance optimization'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work hours and remote work options',
      'Health, dental, and vision insurance',
      'Professional development budget',
      'Generous vacation policy'
    ]
  },
  'ux-designer': {
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    description: 'Join our design team to create beautiful and intuitive user experiences. You will be responsible for designing user flows, wireframes, and high-fidelity mockups.',
    responsibilities: [],
    requirements: [],
    benefits: []
  },
  'marketing-manager': {
    title: 'Marketing Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Lead our marketing efforts and help grow our brand presence. You will be responsible for developing and executing marketing strategies.',
    responsibilities: [],
    requirements: [],
    benefits: []
  }
};

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const job = jobDetails[params.id as keyof typeof jobDetails];
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Job Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center text-sm text-black hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Careers
          </button>
        </div>

        {/* Job Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-black/80">{job.title}</h1>
            <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
              Apply for this position
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FaBriefcase className="mr-2 text-gray-400" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <FaBuilding className="mr-2 text-gray-400" />
              <span>{job.department}</span>
            </div>
          </div>
        </div>

        {/* Job Content */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
          {/* Job Description */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-black mb-4">Job Description</h2>
            <p className="text-gray-600 mb-6">{job.description}</p>
            
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">Requirements</h3>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">What We Offer</h3>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Bottom CTA */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-black mb-1">Interested in this position?</h3>
              <p className="text-gray-600 text-sm">We'd love to hear from you.</p>
            </div>
            <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base whitespace-nowrap">
              Apply Now <FaArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
