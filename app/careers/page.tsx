'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';

export default function CareersPage() {
  type Value = { title: string; description: string };
  type Position = {
    id: string;
    title: string;
    department: string;
    workMode: 'Onsite' | 'Remote' | 'Hybrid';
    type: 'Full Time' | 'Part Time' | 'Contract';
    level: 'Entry Level' | 'Mid Level' | 'Senior';
    salary: string;
  };

  const heroPoints = "Driven by an endless curiosity, we offer the freedom to forge new paths and the support to grow at your own pace. Embrace continuous learning and explore the vast opportunities ahead.";

  const benefits: string[] = [
    'Flexible Work Hours',
    'Fully Remote Work from Anywhere',
    'Competitive Project-Based & Monthly Pay',
    'Internet Allowance Support',
    'Performance Bonuses',
    'Paid Leave & Sick Days',
    'Access to Premium Tools & Software',
    'Skill Development & Training Sessions',
    'Career Growth Opportunities',
    'Team Bonding Virtual Events'
  ];

  const values: Value[] = [
    { title: 'Excellence and innovation', description: 'Prioritizing continuous improvement and creative solutions.' },
    { title: 'Empathy and respect', description: 'Understanding and consideration in our diverse, inclusive culture.' },
    { title: 'Integrity and accountability', description: 'Commitment to ethical practices and responsibility.' },
    { title: 'Teamwork and collaboration', description: 'Cooperative efforts and shared achievements for success.' },
    { title: 'Growth and development', description: 'Personal and professional growth through learning.' },
    { title: 'Supportive culture', description: 'Helping each other with a proactive and caring approach.' },
    { title: 'Joy and engagement', description: 'A vibrant atmosphere where passion drives fulfilling work.' },
    { title: 'Adaptability and agility', description: 'Embracing change and responding swiftly to needs.' }
  ];

  const openings: Position[] = [
    { id: 'ux-designer', title: 'UI/UX Designer', department: 'Design', workMode: 'Onsite', type: 'Full Time', level: 'Entry Level', salary: '৳25,000–৳40,000 /month' },
    { id: 'senior-developer', title: 'Senior Frontend Developer', department: 'Engineering', workMode: 'Remote', type: 'Full Time', level: 'Senior', salary: 'Negotiable' },
    { id: 'marketing-manager', title: 'Marketing Manager', department: 'Marketing', workMode: 'Remote', type: 'Full Time', level: 'Mid Level', salary: 'Negotiable' }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [deptFilter, setDeptFilter] = useState<string>('All');
  
  const faqs = [
    { q: 'How to apply?', a: 'Review our current openings to find a role that aligns with your skills and expertise. Provide your email address, then verify it to receive a link to proceed with your application.' },
    { q: 'What are the steps involved?', a: 'Typically: application review, intro call, skills/portfolio review, technical or role interview, and a culture/values conversation.' },
    { q: 'What is the timeline for the application process to begin?', a: 'Most candidates hear from us within 3–5 business days. If your profile is a strong match, interviews start shortly after.' }
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section id="overview" className="px-4 sm:px-6 pt-8 pb-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black/80 mb-4">Careers</h1>
            <p className="text-gray-600 max-w-xl mb-6">{heroPoints}</p>
            <Link href="#openings" className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700">
              See our openings <FiArrowRight className="ml-2" />
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700">Hybrid-first</span>
              <span className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700">Design-led</span>
              <span className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700">Apply in 5 minutes</span>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-200">
            <Image src="/HeroImage1.jpg" alt="Team at work" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Benefits numbered list */}
      <section id="benefits" className="px-4 sm:px-6 py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1].map((col) => (
              <ol key={col} className="space-y-4">
                {benefits
                  .filter((_, i) => (i % 2 === col))
                  .map((b, i) => {
                    const index = i * 2 + col + 1;
                    const num = String(index).padStart(2, '0');
                    return (
                      <li key={b} className="flex items-start gap-4">
                        <span className="text-xs text-gray-400 w-10">/{num}</span>
                        <div>
                          <div className="text-sm font-medium text-black">{b}</div>
          </div>
                      </li>
                    );
                  })}
              </ol>
            ))}
          </div>
        </div>
      </section>

      {/* Culture large image */}
      <section id="culture" className="px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200">
            <Image src="/ServiceImage.jpg" alt="Our culture and workspace" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 p-5 bg-white">
                <div className="w-8 h-8 rounded-full bg-gray-100 mb-3" />
                <div className="text-sm font-semibold text-black mb-1">{v.title}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="px-4 sm:px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            {(() => {
              const departments = ['All', ...Array.from(new Set(openings.map(o => o.department)))];
              return (
                <FilterChips label="Department" options={departments} selected={deptFilter} onChange={setDeptFilter} />
              );
            })()}
          </div>

          <OpeningsGrid openings={openings} deptFilter={deptFilter} />
        </div>
      </section>

      {/* Floating quick apply */}
      <Link href="/careers/apply/general" className="hidden sm:flex fixed bottom-6 right-6 bg-[#60FCC4] text-black px-4 py-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors text-sm items-center">
        Quick Apply <FiArrowRight className="ml-2" />
      </Link>

      {/* FAQs */}
      <section id="faqs" className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">Faqs</h2>
            </div>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-4 focus:outline-none hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-black">{f.q}</span>
                  {openFaq === i ? <FiMinus className="text-gray-500" /> : <FiPlus className="text-gray-500" />}
            </div>
                {openFaq === i && (
                  <p className="mt-2 text-xs text-gray-600">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterChips({ label, options, selected, onChange }: { label: string; options: string[]; selected: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 mr-1">{label}:</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            selected === opt ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          {opt}
          </button>
      ))}
    </div>
  );
}

function OpeningsGrid({ openings, deptFilter }: { openings: { id: string; title: string; department: string; workMode: string; type: string; level: string; salary: string }[]; deptFilter: string }) {
  const filtered = useMemo(() => {
    return openings.filter((o) => {
      const deptOk = deptFilter === 'All' || o.department === deptFilter;
      return deptOk;
    });
  }, [openings, deptFilter]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {filtered.map((job) => (
        <div key={job.id} className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="text-xs text-gray-500 mb-1">{job.department}</div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-black/90">{job.title}</h3>
            <Link href={`/careers/${job.id}`} className="text-sm text-gray-600 hover:text-black inline-flex items-center">
              Apply <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="text-xs text-gray-500 mt-2">{job.workMode} · {job.type} · {job.level}</div>
          <div className="mt-3 inline-block text-[11px] px-2 py-1 rounded bg-gray-100 text-gray-700">{job.salary}</div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="md:col-span-2 text-sm text-gray-600">No openings match your filters right now.</div>
      )}
    </div>
  );
}
