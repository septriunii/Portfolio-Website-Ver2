import React from 'react';
import { Download, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const ActionButtons: React.FC = () => {
  const { actions } = PORTFOLIO_DATA.hero;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
      {/* Primary Button */}
      <a
        href={actions.primary.url}
        onClick={(e) => handleScroll(e, actions.primary.url)}
        className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-sm sm:text-base font-black uppercase tracking-widest rounded-md text-white bg-node-primary hover:bg-node-primaryDark transition-all duration-300 cursor-pointer shadow-lg shadow-node-primary/10 active:scale-[0.98]"
      >
        <span>{actions.primary.label}</span>
        <Download className="ml-3 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
      </a>

      {/* Secondary Button */}
      <a
        href={actions.secondary.url}
        onClick={(e) => handleScroll(e, actions.secondary.url)}
        className="group inline-flex items-center justify-center px-8 py-4 border border-node-primary/40 text-sm sm:text-base font-black uppercase tracking-widest rounded-md text-node-primary hover:text-white bg-transparent hover:bg-node-primary/10 transition-all duration-300 cursor-pointer active:scale-[0.98]"
      >
         <Mail className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform" />
         <span className="leading-none">{actions.secondary.label}</span>
      </a>
    </div>
  );
};

export default ActionButtons;