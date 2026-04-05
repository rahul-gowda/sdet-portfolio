import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Fiserv",
    role: "Tech Lead – Fintech Automation Architecture",
    period: "Apr 2022 – Present",
    achievements: [
      {
        title: "3DS Automation Framework",
        description: "Architected Playwright-based framework for iframe auth & MFA redirects",
        impact: "65% reduction in manual effort, 40% faster regression cycles"
      },
      {
        title: "One-Click Release Pipeline",
        description: "Integrated Jira→Zephyr→Jenkins",
        impact: "20+ hrs/week saved, 3 days → 4 hours deployment sign-off"
      },
      {
        title: "AI API Tester & Browser Plugin",
        description: "Built autonomous validation tool + auto-locator extension",
        impact: "50% faster script creation, 44% reduction in flakiness, 12 hrs saved/service"
      },
      {
        title: "Global Team Leadership",
        description: "Led 10 SDETs for K8s migration",
        impact: "30% fewer production defects"
      }
    ]
  },
  {
    company: "Dell Technologies",
    role: "Senior SDET / Automation Lead",
    period: "Jun 2015 – Apr 2022",
    achievements: [
      {
        title: "Global Test Strategy",
        description: "Redesigned global test strategy for .NET/C#",
        impact: "50% boost in operational efficiency"
      },
      {
        title: "Zero-Touch Deployment",
        description: "Implemented zero-touch blue-green deployment",
        impact: "Zero downtime across 50+ microservices"
      },
      {
        title: "Risk-Based Testing",
        description: "Risk-based testing for payment flows",
        impact: "40% fewer production defects, 25% higher CSAT"
      }
    ]
  }
];

const Experience = () => {
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
          Work Experience
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Leading quality engineering and automation architecture in fintech
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-blue-600 hidden lg:block"></div>
            )}
            
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 hover:border-purple-600/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-purple-400 font-medium">{exp.role}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-600/30">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                    className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                    <p className="text-purple-400 text-sm font-medium">{achievement.impact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Achievements Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-purple-400 mr-3">🎓</span>
            Education
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-purple-600 pl-4">
              <p className="text-white font-medium">M.Sc. Microelectronic Systems</p>
              <p className="text-gray-400 text-sm">University of Liverpool, UK | 2014</p>
            </div>
            <div className="border-l-2 border-purple-600 pl-4">
              <p className="text-white font-medium">B.E. Electronics & Communication</p>
              <p className="text-gray-400 text-sm">SJB Institute of Technology, India | 2012</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-purple-400 mr-3">🏆</span>
            Achievements
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-white font-medium">Dell Inspire Award (FY19–FY21)</p>
                <p className="text-gray-400 text-sm">Top-tier technical contributor</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🥉</span>
              <div>
                <p className="text-white font-medium">Dell Bronze Award</p>
                <p className="text-gray-400 text-sm">Outstanding R&D contribution</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;