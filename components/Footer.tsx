import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Github: <Github className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
};

const Footer: React.FC = () => {
  const { footer, navLinks } = PORTFOLIO_DATA;

  return (
    <footer className="bg-node-header border-t border-node-border w-full">
      <div className="max-w-3xl mx-auto py-20 px-6 sm:px-12 text-center">
        <div className="flex flex-col items-center gap-10">
          
          {/* Brand/Copyright */}
          <div>
            <span className="text-2xl font-bold text-white tracking-tight">
               Anton<span className="text-node-primary">.dev</span>
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              {footer.copyright}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-node-primary transition-colors">
                    {link.label}
                </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs font-semibold text-gray-500 tracking-[0.3em] uppercase mb-6">
              Connect
            </h3>
            <div className="flex space-x-8">
              {footer.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-gray-400 hover:text-node-primary transition-all duration-300 hover:scale-125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.platform}</span>
                  {IconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em]">
                Designed with Node.js Aesthetics • v1.0.0 Stable
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;