'use client';

import React from 'react';
import { pricingSections } from '@/app/data/pricing';

const PricingCard = ({ tier, isRecommended = false }: { tier: any, isRecommended?: boolean }) => {
  return (
    <div className={`border ${isRecommended ? 'border-2 border-black' : 'border-gray-200'} rounded-xl ${isRecommended ? 'p-10' : 'p-8'} flex flex-col items-center ${isRecommended ? 'bg-white shadow-lg scale-105 z-10 relative' : 'bg-gray-50'}`}>
      {isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">
          {tier.badgeText}
        </div>
      )}
      <h3 className={`text-xl font-bold text-black ${isRecommended ? 'mt-4' : ''} mb-2`}>
        {tier.name}
      </h3>
      <div className="text-4xl font-bold text-black mb-2">{tier.price}</div>
      <div className="text-gray-500 mb-6 text-center">{tier.description}</div>
      <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left w-full">
        {tier.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors ${tier.isCustom ? 'mt-auto' : ''}`}
      >
        {tier.buttonText}
      </button>
    </div>
  );
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      {pricingSections.map((section) => (
        <div key={section.id} className="max-w-5xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-black mb-4">{section.title}</h2>
          <div className="text-gray-600 text-base mb-10">{section.description}</div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {section.tiers.map((tier, index) => (
              <PricingCard 
                key={tier.id} 
                tier={tier} 
                isRecommended={tier.isRecommended} 
              />
            ))}
          </div>
          
          <div className="max-w-5xl mx-auto mt-8">
            <div 
              className="border border-gray-300 rounded-xl p-8 text-gray-700 text-base leading-relaxed bg-white"
              dangerouslySetInnerHTML={{ __html: section.generalDescription }}
            />
          </div>
        </div>
      ))}
    </div>
  );
} 