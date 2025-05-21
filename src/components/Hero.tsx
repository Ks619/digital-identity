
import React from 'react';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
      <div className="absolute inset-0 bg-tech-600/80"></div>
      <div className="container mx-auto z-10 px-4 py-4">
        {/* Empty container with background effect only */}
      </div>
    </div>
  );
};

export default Hero;
