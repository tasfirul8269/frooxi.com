'use client';

import React, { useState } from 'react';
import { pricingSections } from '@/app/data/pricing';

const PricingCard = ({ tier, isRecommended = false }: { tier: any, isRecommended?: boolean }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const maxVisibleFeatures = 3;
  const isProfessionalPlan = tier.id === 'website-professional';
  const featuresToShow = (isProfessionalPlan && !showAllFeatures) ? tier.features.slice(0, maxVisibleFeatures) : tier.features;
  const hasMoreFeatures = isProfessionalPlan && tier.features.length > maxVisibleFeatures;

  return (
    <div className={`border ${isRecommended ? 'border-2 border-[#60fcc4]' : 'border-gray-200'} rounded-xl ${isRecommended ? 'p-10' : 'p-8'} flex flex-col h-full ${isRecommended ? 'bg-white shadow-lg scale-105 z-10 relative' : 'bg-gray-50'}`}>
      {isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#60fcc4] text-black text-xs px-4 py-1 rounded-full font-semibold tracking-wide">
          {tier.badgeText}
        </div>
      )}
      <div className="flex-1">
        <h3 className={`text-xl font-bold text-black ${isRecommended ? 'mt-4' : ''} mb-2`}>
          {tier.name}
        </h3>
        <div className="text-4xl font-bold text-black mb-2">{tier.price}</div>
        <div className="text-gray-500 mb-6 text-center">{tier.description}</div>
        <ul className="text-gray-600 text-sm mb-4 space-y-2 text-left w-full">
          {featuresToShow.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {hasMoreFeatures && (
          <button 
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="text-black text-sm font-medium mb-4 hover:underline self-start"
          >
            {showAllFeatures ? 'Show Less' : `+${tier.features.length - maxVisibleFeatures} More`}
          </button>
        )}
      </div>
      <div className="mt-6 w-full">
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            isRecommended 
              ? 'bg-[#60fcc4] text-black hover:bg-black hover:text-white' 
              : 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
          }`}
        >
          {tier.buttonText}
        </button>
      </div>
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