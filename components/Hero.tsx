import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import ActionButtons from './ActionButtons';

const Hero: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;
  
  // Splitting headline for text coloring
  const nameParts = hero.headline.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div id="hero" className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 relative py-12 lg:py-0 text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#212121] to-[#1a1a1a] pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-4 lg:mb-6 leading-[1.1]">
          {firstName} <span className="text-node-primary">{lastName}</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-node-primary font-bold tracking-tight mb-4 lg:mb-6">
          {hero.subHeadline}
        </p>

        <p className="mt-2 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 lg:mb-10 max-w-lg font-medium opacity-90">
          {hero.bio}
        </p>

        <div className="mb-8 w-full flex justify-center">
          <ActionButtons />
        </div>
        
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-node-muted opacity-40">
           Current Version: v1.0.0 (Stable)
        </div>
      </div>
    </div>
  );
};

export default Hero;