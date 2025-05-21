
import React from 'react';
import WorkCard from './WorkCard';
import SectionHeader from './SectionHeader';

const WorkSection = () => {
  const workExperiences = [
    {
      title: 'Automation Developer',
      company: 'Magentiq Eye LTD',
      period: '06/2023-06/2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      clickUrl: '#'
    },
    {
      title: 'QA Lead',
      company: 'Magentiq Eye LTD',
      period: '02/2023-06/2023',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      clickUrl: '#'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-tech-100/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Work Journey" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workExperiences.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              company={work.company}
              period={work.period}
              image={work.image}
              clickUrl={work.clickUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
