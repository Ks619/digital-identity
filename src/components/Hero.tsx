
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
      <div className="absolute inset-0 bg-tech-600/80"></div>
      <div className="container mx-auto z-10 px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Hi, I'm Kfir Shuster, a Junior Software Developer with a B.Sc. in Computer Science.
            </h1>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/a647c2dd-f9c1-4fb9-9379-8ab0edf3185a.png"
                alt="Kfir Shuster" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
