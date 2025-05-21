
import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-12 bg-tech-100/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center justify-center gap-8">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-tech-500 shadow-xl">
            <img 
              src="/lovable-uploads/a647c2dd-f9c1-4fb9-9379-8ab0edf3185a.png"
              alt="Kfir Shuster" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tech-700 leading-tight">
              Hi, I'm Kfir Shuster
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-tech-500">
                a Junior Software Developer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
