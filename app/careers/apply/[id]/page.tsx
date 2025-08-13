'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { careerPositions, CareerPosition } from '@/app/data/careers';

const positions: CareerPosition[] = careerPositions;

export default function ApplyPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isGeneral = params.id === 'general';
  const [step, setStep] = useState<number>(isGeneral ? 0 : 2);
  const [selectedRoleId, setSelectedRoleId] = useState<string>(isGeneral ? '' : params.id);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedRole: CareerPosition | undefined = useMemo(
    () => positions.find((p) => p.id === selectedRoleId),
    [selectedRoleId]
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="min-h-[60vh] bg-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-black mb-2">Application received</h1>
          <p className="text-gray-600 mb-6">Thanks for applying. We will review your profile and get back to you soon.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/careers" className="px-5 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50">Back to Careers</Link>
            <button onClick={() => router.push(`/careers/${selectedRoleId || 'our-works'}`)} className="px-5 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800">View role</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href={selectedRoleId ? `/careers/${selectedRoleId}` : '/careers'} className="text-sm text-gray-500 hover:text-black">← Back</Link>
          <div className="text-xs text-gray-500">Step {step + 1} of {isGeneral ? 3 : 1}</div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">Quick Apply</h1>
        {!isGeneral && <p className="text-gray-600 mb-8">You are applying for <span className="font-semibold">{selectedRole?.title}</span>.</p>}

        {/* Step 1: Choose position (general only) */}
        {isGeneral && step === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-black mb-4">Select a position</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {positions.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedRoleId(p.id)}
                  className={`text-left rounded-lg border px-4 py-3 hover:bg-gray-50 transition-colors ${selectedRoleId === p.id ? 'border-black' : 'border-gray-200'}`}
                >
                  <div className="text-sm font-medium text-black">{p.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{p.department} · {p.type}</div>
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                disabled={!selectedRoleId}
                onClick={() => setStep(1)}
                className={`px-5 py-2 rounded-lg text-sm font-medium ${selectedRoleId ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Overview */}
        {isGeneral && step === 1 && selectedRole && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-4">
            <h2 className="text-lg font-semibold text-black">{selectedRole.title}</h2>
            <div className="text-sm text-gray-700">{selectedRole.department} · {selectedRole.type} {selectedRole.level ? `· ${selectedRole.level}` : ''}</div>
            <div className="text-sm text-gray-600">{selectedRole.location} {selectedRole.experience ? `· ${selectedRole.experience}` : ''}</div>
            {selectedRole.salary && <div className="text-sm text-gray-800 font-medium">{selectedRole.salary}</div>}
            {selectedRole.description && <p className="text-gray-700 leading-relaxed">{selectedRole.description}</p>}
            {selectedRole.responsibilities && selectedRole.responsibilities.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-black mb-2">What You'll Do</h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  {selectedRole.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedRole.requirements && selectedRole.requirements.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-black mb-2">What We're Looking For</h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  {selectedRole.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedRole.whyJoinUs && selectedRole.whyJoinUs.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-black mb-2">Why Join Us</h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  {selectedRole.whyJoinUs.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="pt-2 flex justify-between">
              <button onClick={() => setStep(0)} className="px-5 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 text-black">Back</button>
              <button onClick={() => setStep(2)} className="px-5 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800">Continue to form</button>
            </div>
          </div>
        )}

        {/* Step 3 or direct: Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-6 mt-6">
            {!isGeneral && (
              <input type="hidden" name="position" value={selectedRoleId} />
            )}
            {isGeneral && (
              <div>
                <label className="block text-sm font-medium text-black mb-1">Position *</label>
                <input readOnly value={selectedRole?.title || ''} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 text-black" />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Full name *</label>
                <input required name="name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Email *</label>
                <input required type="email" name="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Phone *</label>
                <input required name="phone" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Location</label>
                <input name="location" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Portfolio URL *</label>
              <input required type="url" name="portfolio" placeholder="https://…" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
              <p className="text-xs text-gray-500 mt-1">Please include your best work. Dribbble/Behance/Figma/Website links accepted.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">LinkedIn</label>
              <input type="url" name="linkedin" placeholder="https://linkedin.com/in/…" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Cover letter</label>
              <textarea name="cover" rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" required className="accent-black" />
                I agree to the processing of my data for recruitment.
              </label>
              <button disabled={submitting} className="bg-[#60FCC4] text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition-colors">
                {submitting ? 'Submitting…' : 'Submit application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


