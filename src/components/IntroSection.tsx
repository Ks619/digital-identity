
import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tech-700 leading-tight">
              Hi, I'm Kfir Shuster, a Junior Software Developer with a B.Sc. in Computer Science.
            </h1>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-tech-500 shadow-xl">
              <img 
                src="/lovable-uploads/a647c2dd-f9c1-4fb9-9379-8ab0edf3185a.png"
                alt="Kfir Shuster" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
