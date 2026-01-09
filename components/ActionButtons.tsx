import React from 'react';
import { Download, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const ActionButtons: React.FC = () => {
  const { actions } = PORTFOLIO_DATA.hero;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links (anchors) for smooth scroll
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // External links or file downloads (non-hash) proceed normally
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      {/* Primary Button (Mimics Node LTS) - Now Download Resume */}
      <a
        href={actions.primary.url}
        onClick={(e) => handleScroll(e, actions.primary.url)}
        className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-node-primary hover:bg-node-primaryDark md:py-4 md:text-lg md:px-10 transition-all duration-200 cursor-pointer"
      >
        <span>{actions.primary.label}</span>
        <span className="block text-xs font-normal opacity-80 ml-2">(LTS)</span>
        <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
      </a>

      {/* Secondary Button (Mimics Node Current) - Now Contact Me */}
      <a
        href={actions.secondary.url}
        onClick={(e) => handleScroll(e, actions.secondary.url)}
        className="group inline-flex items-center justify-center px-8 py-4 border border-node-primary text-lg font-bold rounded-md text-node-primary bg-transparent hover:bg-node-card md:py-4 md:text-lg md:px-10 transition-all duration-200 cursor-pointer"
      >
         <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col items-start">
             <span className="leading-none">{actions.secondary.label}</span>
             <span className="text-xs font-normal opacity-80 mt-1">Get in Touch</span>
        </div>
      </a>
    </div>
  );
};

export default ActionButtons;