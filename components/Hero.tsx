import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import ActionButtons from './ActionButtons';

const Hero: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;

  return (
    <div id="hero" className="w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#212121] to-[#1a1a1a] pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto md:mx-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          {hero.headline}
        </h1>
        
        <p className="text-xl sm:text-2xl text-node-primary font-semibold mb-6">
          {hero.subHeadline}
        </p>

        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
          {hero.bio}
        </p>

        <div className="mb-8 flex justify-center md:justify-start">
          <ActionButtons />
        </div>
        
        <div className="text-sm text-node-muted opacity-60">
           Current Version: v1.0.0 (Stable)
        </div>
      </div>
    </div>
  );
};

export default Hero;