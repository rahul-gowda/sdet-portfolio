import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Enterprise API Testing Framework",
    description: "Developed a comprehensive API testing framework supporting 500+ endpoints with automated regression testing.",
    tech: ["Python", "Pytest", "Requests", "Docker"],
    image: "api-framework.jpg"
  },
  {
    title: "Mobile App Automation Suite",
    description: "Built cross-platform mobile testing solution covering iOS and Android with real device testing capabilities.",
    tech: ["Appium", "Selenium", "Java", "TestNG"],
    image: "mobile-testing.jpg"
  },
  {
    title: "Performance Testing Platform",
    description: "Created scalable performance testing infrastructure supporting load tests up to 1M concurrent users.",
    tech: ["JMeter", "Gatling", "Kubernetes", "Prometheus"],
    image: "performance-test.jpg"
  },
  {
    title: "CI/CD Quality Gate Implementation",
    description: "Integrated automated quality gates into CI/CD pipelines reducing production defects by 75%.",
    tech: ["Jenkins", "GitHub Actions", "SonarQube", "JUnit"],
    image: "ci-cd-quality.jpg"
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
          Showcasing impactful testing solutions and quality engineering initiatives
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
              <span className="text-purple-300 text-lg font-medium">{project.title}</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
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
              
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                View Case Study →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;