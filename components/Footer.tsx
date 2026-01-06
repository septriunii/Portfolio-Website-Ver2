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
    <footer className="bg-node-header border-t border-node-border mt-12">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand/Copyright */}
          <div className="col-span-1">
            <span className="text-xl font-bold text-white tracking-tight">
               Portfolio<span className="text-node-primary">.js</span>
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              {footer.copyright}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
             <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
               Navigation
             </h3>
             <ul className="space-y-3">
                {navLinks.map(link => (
                    <li key={link.label}>
                        <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors">
                            {link.label}
                        </a>
                    </li>
                ))}
             </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-6">
              {footer.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-gray-400 hover:text-node-primary transition-colors"
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
        
        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-500">
                Designed to mimic nodejs.org. Built with React & Tailwind.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;