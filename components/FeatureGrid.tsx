import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Layout, Server, Cloud, Cpu, Database, Globe, Box, Code, Award, ExternalLink, User } from 'lucide-react';

// Icon mapper
const IconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-full w-full" />,
  Server: <Server className="h-full w-full" />,
  Cloud: <Cloud className="h-full w-full" />,
  Cpu: <Cpu className="h-full w-full" />,
  Database: <Database className="h-full w-full" />,
  Globe: <Globe className="h-full w-full" />,
  Box: <Box className="h-full w-full" />,
  Code: <Code className="h-full w-full" />,
};

const FeatureGrid: React.FC = () => {
  const { projects, skills, certifications, about } = PORTFOLIO_DATA;

  return (
    <div className="w-full">
      
      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-6 sm:px-12 bg-[#1c1c1c] border-b border-node-border w-full">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
             <User className="h-8 w-8 text-node-primary mb-4" />
             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {about.title}
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-medium">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32 px-6 sm:px-12 bg-node-bg border-b border-node-border w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Technical Skills
          </h2>
          <p className="text-gray-500 mb-12 text-lg font-medium">
            My core technology stack and expertise.
          </p>
          
          <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-xl p-6 flex flex-col items-center text-center hover:border-node-primary/30 transition-all duration-300 group hover:bg-node-primary/5"
              >
                <div className="w-8 h-8 text-node-primary/80 mb-4 group-hover:scale-110 group-hover:text-node-primary transition-all duration-300">
                  {IconMap[skill.icon] || <Code className="h-full w-full" />}
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 px-6 sm:px-12 bg-[#1c1c1c] border-b border-node-border w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-500 mb-12 text-lg font-medium">
             Recent work showcasing web architecture and design.
          </p>

          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-2xl p-8 sm:p-10 hover:shadow-[0_8px_30px_0_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col items-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-node-primary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-node-primary transition-colors mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black/30 text-xs font-bold uppercase tracking-wider text-node-muted rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-black text-gray-400 hover:text-node-primary transition-colors uppercase tracking-widest mt-auto border-b border-transparent hover:border-node-primary pb-1"
                >
                  Explore Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 sm:py-32 px-6 sm:px-12 bg-node-bg w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Certifications
          </h2>
          <p className="text-gray-500 mb-12 text-lg font-medium">
            Continuous learning and professional verification.
          </p>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-node-card border border-node-border rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between hover:border-node-primary/20 transition-all group gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="bg-black/20 p-3 rounded-full border border-node-border text-node-primary/60 group-hover:text-node-primary transition-colors">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-node-primary transition-colors leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                
                {cert.link && (
                  <a href={cert.link} className="text-gray-500 hover:text-white transition-colors p-2 hidden sm:block">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default FeatureGrid;