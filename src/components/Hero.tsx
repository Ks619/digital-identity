
import React from 'react';

interface HeroProps {
  title?: string;
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="min-h-[15vh] relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/lovable-uploads/87e4de3b-ea7a-4c20-8117-4e048a051f7f.png')" }}
      >
        <div className="absolute inset-0 bg-tech-600/60"></div>
      </div>
      <div className="container mx-auto z-10 px-4 py-4">
        {title && <h1 className="text-4xl font-bold text-white text-center">{title}</h1>}
      </div>
    </div>
  );
};

export default Hero;
