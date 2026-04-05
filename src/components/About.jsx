import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm John Doe, a passionate Software Development Engineer in Testing with over 5 years of experience in creating comprehensive test strategies, building scalable automation frameworks, and driving quality assurance initiatives that ensure robust software delivery.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const skills = [
    { name: 'Test Automation', level: 95 },
    { name: 'API Testing', level: 90 },
    { name: 'Performance Testing', level: 85 },
    { name: 'CI/CD Integration', level: 92 },
    { name: 'Security Testing', level: 80 },
    { name: 'Agile Methodologies', level: 88 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="text-lg text-gray-300 leading-relaxed">
          <p className="mb-4">{displayText}<span className="cursor"></span></p>
          <p>
            I specialize in developing end-to-end testing solutions that bridge the gap between development and quality assurance, 
            ensuring seamless user experiences across all platforms and devices.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-purple-400">Skills & Expertise</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 * index }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;