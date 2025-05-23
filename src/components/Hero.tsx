
import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title,
  subtitle,
  backgroundImage = "/digital-identity/lovable-uploads/87e4de3b-ea7a-4c20-8117-4e048a051f7f.png"
}) => {
  return (
    <div className="min-h-[25vh] relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-tech-600/60"></div>
      </div>
      <div className="container mx-auto z-10 px-4 py-4">
        {title && <h1 className="text-4xl font-bold text-white text-center">{title}</h1>}
        {subtitle && <p className="text-xl text-white/90 text-center mt-2">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;
