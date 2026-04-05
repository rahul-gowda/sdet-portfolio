import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef();
  
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
      gsap.fromTo(section.querySelector('.fade-in-up'), 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div ref={containerRef} className="scroll-container">
        <section className="section relative">
          <Hero />
        </section>

        <section className="section px-4 md:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <About />
          </div>
        </section>

        <section className="section px-4 md:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <Experience />
          </div>
        </section>

        <section className="section px-4 md:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <Projects />
          </div>
        </section>

        <section className="section px-4 md:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;