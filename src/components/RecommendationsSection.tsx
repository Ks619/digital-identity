
import React from 'react';
import SectionHeader from './SectionHeader';

const RecommendationsSection = () => {
  const recommendations = [
    {
      name: 'Yaniv Development Team Lead',
      url: '#'
    },
    {
      name: 'Aviv Development Team Lead',
      url: '#'
    }
  ];

  return (
    <section className="py-20 bg-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Recommendation Letters" />
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-tech-500 mb-3">{rec.name}</h3>
              <a href={rec.url} className="text-primary hover:underline">click here</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
