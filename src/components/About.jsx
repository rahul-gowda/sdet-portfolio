import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I specialize in architecting high-scale automation frameworks for complex payment systems. My focus: reducing release cycles through 'One-Click' DevOps pipelines, building AI-powered testing tools, and leading global SDET teams to deliver PCI-DSS compliant solutions.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Core Strengths:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              3DS 2.0 & Payment Flow Automation
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              AI-Integrated Test Tool Development
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Playwright/Cypress/Karate Framework Architecture
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              DevOps Pipeline Optimization (Jenkins/GitHub Actions)
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Global Team Leadership & Quality Strategy
            </li>
          </ul>
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
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Fintech Domain</h4>
            <p className="text-gray-300 text-sm">3DS 2.0 (Ravelin/Cardinal) • Hosted Checkout • Recurring Billing • PCI-DSS Compliance • Tokenization/Encryption • CNP Flows • PSD2/SCA</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Automation Frameworks</h4>
            <p className="text-gray-300 text-sm">Playwright (TypeScript) • Cypress (JS) • Karate (BDD) • Selenium (C#) • RestSharp • TestNG/JUnit</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Languages & Tools</h4>
            <p className="text-gray-300 text-sm">C# • .NET Core • JavaScript/TypeScript • Python • SQL • Git • Postman</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-2">DevOps & Cloud</h4>
            <p className="text-gray-300 text-sm">Jenkins • GitHub Actions • Docker • Kubernetes (K8s) • Azure/AWS Basics</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-2">AI & Innovation</h4>
            <p className="text-gray-300 text-sm">AI API Tester • GitHub Copilot Integration • Browser Extensions • LLM-Powered Testing</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;