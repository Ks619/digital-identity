
import React from 'react';

interface HeroProps {
  title?: string;
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        {title && <h1 className="text-4xl font-bold text-white text-center">{title}</h1>}
      </div>
    </div>
  );
};

export default Hero;
