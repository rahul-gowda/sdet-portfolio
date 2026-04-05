import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "🤖 AI API Tester – Autonomous Validation Tool",
    description: "AI-powered tool using LLM integration to auto-generate assertions & detect anomalies. Enabled non-technical QA and reduced false positives by 70%.",
    tech: ["Python", "OpenAI API", "FastAPI", "JSON Schema", "Pytest"],
    impact: "50% faster script creation • 70% fewer false positives",
    link: "https://github.com/rahul-gowda"
  },
  {
    title: "🔍 Browser Extension for Auto-Locator Capture",
    description: "Chrome/Firefox extension capturing multi-strategy locators with one click for dynamic fintech UIs. Adopted by 3 global teams.",
    tech: ["JavaScript", "Chrome Extension API", "Playwright Selector Engine"],
    impact: "3x faster script development • 44% less flakiness",
    link: "https://github.com/rahul-gowda"
  },
  {
    title: "🛡️ 3DS 2.0 Playwright Automation Framework",
    description: "Specialized Playwright framework with context isolation & dynamic challenge detection for iframe auth & MFA redirects.",
    tech: ["Playwright (TypeScript)", "Docker", "Jenkins", "3DS 2.0 Protocol"],
    impact: "100% automated coverage • 3 days → 4 hours regression",
    link: "https://github.com/rahul-gowda"
  },
  {
    title: "⚡ One-Click Release Pipeline",
    description: "Integrated Jira→Zephyr→Jenkins pipeline automating deployment sign-offs and reducing manual intervention.",
    tech: ["Jenkins", "GitHub Actions", "Jira API", "Zephyr"],
    impact: "20+ hrs/week saved • 3 days → 4 hours deployment sign-off",
    link: "https://github.com/rahul-gowda"
  }
];

const Projects = () => {
  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Showcasing AI-driven automation tools and fintech testing solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover-lift group"
          >
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
              <span className="text-purple-300 text-lg font-medium px-4 text-center">{project.title}</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4 p-3 bg-purple-600/10 border border-purple-600/20 rounded-lg">
                <p className="text-purple-300 text-sm font-medium">{project.impact}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 inline-flex items-center"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;