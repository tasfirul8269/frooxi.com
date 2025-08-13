'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Building2,
  Clock,
  ArrowRight,
  Check,
  Share2,
  Linkedin,
  Facebook,
  Link2
} from 'lucide-react';
import { careerPositions } from '@/app/data/careers';

// Source data from centralized model
const jobDetails = Object.fromEntries(
  careerPositions.map((p) => [p.id, p])
) as Record<string, (typeof careerPositions)[number]>;

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
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Top summary bar */}
      <section className="bg-black text-white pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs opacity-80">{job.department}</div>
              <h1 className="text-3xl md:text-4xl font-bold">{job.title} {job.level ? <span className="text-white/70 text-base font-medium">({job.level})</span> : null}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                {job.salary && (
                  <div>
                    <div className="text-white font-semibold">{job.salary}</div>
                    <div className="text-white/60 text-[11px]">BDT/month</div>
                  </div>
                )}
                <div className="space-y-1">
                  <div className="text-white/90">Location</div>
                  <div className="text-white/70 text-sm flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/90">Job Type</div>
                  <div className="text-white/70 text-sm flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.type}</div>
                </div>
                {job.experience && (
                  <div className="space-y-1">
                    <div className="text-white/90">Experience</div>
                    <div className="text-white/70 text-sm flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.experience}</div>
                  </div>
                )}
              </div>
            </div>
            <Link href="/careers" className="hidden sm:inline-flex bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">View all open roles</Link>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-xs text-gray-500 hover:text-black mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <article className="lg:col-span-2 space-y-10">
            <section>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </section>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-black mb-3">What You&apos;ll Do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 mr-3 text-black" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-black mb-3">What We&apos;re Looking For</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 mr-3 text-black" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.whyJoinUs && job.whyJoinUs.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-black mb-3">Why Join Us</h2>
                <ul className="space-y-3">
                  {job.whyJoinUs.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 mr-3 text-black" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Bottom CTA */}
            <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-base font-semibold text-black mb-1">Ready to apply?</h3>
                <p className="text-gray-600 text-sm">We&apos;d love to hear from you.</p>
              </div>
              <Link href={`/careers/apply/${params.id}`} className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">
                Apply Now <ArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-black mb-2">Ready to apply? We can&apos;t wait to meet you!</h3>
              <Link href={`/careers/apply/${params.id}`} className="w-full inline-flex items-center justify-center bg-[#60FCC4] text-black px-4 py-2 rounded-lg font-medium hover:bg-black hover:text-white transition-colors">Apply now</Link>
              <p className="text-xs text-gray-600 mt-3">Next, you&apos;ll face an assessment to proceed. Apply for one job at a time and prepare well.</p>
              <p className="text-[11px] text-gray-400 mt-2">By applying to this job listing, you agree to our terms for recruitment and job applications.</p>
            </div>

            {(job.benefits && job.benefits.length > 0) && (
              <div className="rounded-xl border border-gray-200 p-6">
                <h4 className="font-semibold text-black mb-3">Basics & Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {job.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start"><Check className="w-4 h-4 mt-0.5 mr-2 text-black" /> {b}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <div className="text-xs text-gray-500 mb-2">Share</div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Share2 className="w-4 h-4" />
                    <Linkedin className="w-4 h-4" />
                    <Facebook className="w-4 h-4" />
                    <Link2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
