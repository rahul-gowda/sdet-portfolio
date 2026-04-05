import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

function AnimatedPlanet() {
  const meshRef = React.useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} ref={meshRef}>
        <MeshDistortMaterial 
          color="#6366f1" 
          attach="material" 
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
          <AnimatedPlanet />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 fade-in-up">
            Software Development Engineer in Testing
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto fade-in-up delay-100">
            Crafting robust test automation frameworks and ensuring software quality excellence
          </p>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 fade-in-up delay-200 pointer-events-auto">
            View My Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 fade-in-up delay-300">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;