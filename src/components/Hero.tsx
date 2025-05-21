
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-tech-600/80"></div>
      <div className="container mx-auto z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full text-left mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to my Portfolio
            </h1>
            <div className="flex flex-wrap gap-4">
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
