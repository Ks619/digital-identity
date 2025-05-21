
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-tech-600/80"></div>
      <div className="container mx-auto z-10 px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-10">
              Welcome to my Portfolio
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/work-journey">View Work</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
