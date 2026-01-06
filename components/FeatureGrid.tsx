import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Layout, Server, Cloud, Cpu, Database, Globe, Box, Code, Award, ExternalLink, User } from 'lucide-react';

// Icon mapper
const IconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-8 w-8" />,
  Server: <Server className="h-8 w-8" />,
  Cloud: <Cloud className="h-8 w-8" />,
  Cpu: <Cpu className="h-8 w-8" />,
  Database: <Database className="h-8 w-8" />,
  Globe: <Globe className="h-8 w-8" />,
  Box: <Box className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
};

const FeatureGrid: React.FC = () => {
  const { projects, skills, certifications, about } = PORTFOLIO_DATA;

  return (
    <div className="w-full">
      
      {/* About Section */}
      <div id="about" className="py-20 px-8 sm:px-12 bg-[#1f1f1f] border-b border-node-border">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
             <User className="h-8 w-8 text-node-primary" />
             <h2 className="text-3xl font-bold text-white">
              {about.title}
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 px-8 sm:px-12 bg-node-bg border-b border-node-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-left text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-center md:text-left text-gray-400 mb-12">
            My core technology stack and expertise.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-md p-4 flex flex-col items-center text-center hover:border-node-primary transition-colors duration-200 group"
              >
                <div className="text-node-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {IconMap[skill.icon] || <Code className="h-6 w-6" />}
                </div>
                <h3 className="text-sm font-semibold text-gray-200">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-8 sm:px-12 bg-[#1f1f1f] border-b border-node-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-left text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center md:text-left text-gray-400 mb-12">
             Recent work showcasing web architecture and design.
          </p>

          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-lg p-8 hover:shadow-[0_4px_14px_0_rgba(51,153,51,0.2)] transition-all duration-300 flex flex-col relative overflow-hidden group"
              >
                {/* Green top bar accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-node-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-node-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#1a1a1a] text-xs font-mono text-node-muted rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-bold text-white hover:text-node-primary transition-colors uppercase tracking-wide"
                >
                  View Source <code className="ml-2 bg-[#1a1a1a] px-1 text-xs rounded border border-gray-700">&gt;_</code>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div id="certifications" className="py-20 px-8 sm:px-12 bg-node-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-left text-white mb-4">
            Certifications
          </h2>
          <p className="text-center md:text-left text-gray-400 mb-12">
            Continuous learning and professional verification.
          </p>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-lg p-6 flex items-start sm:items-center justify-between hover:border-node-primary transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a1a1a] p-3 rounded-full border border-node-border text-node-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-node-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                
                {cert.link && (
                  <a href={cert.link} className="hidden sm:block text-gray-500 hover:text-white transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeatureGrid;