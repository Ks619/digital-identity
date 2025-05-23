
import React from 'react';
import WorkCard from './WorkCard';
import SectionHeader from './SectionHeader';

const WorkSection = () => {
  const workExperiences = [
    {
      title: 'Automation Developer',
      company: 'Magentiq Eye LTD',
      period: '06/2023-06/2024',
      image: '/digital-identity/lovable-uploads/d13f82e7-822e-4e04-b048-bf781448da5c.png',
      clickUrl: '/work/automation-developer'
    },
    {
      title: 'QA Lead',
      company: 'Magentiq Eye LTD',
      period: '02/2023-06/2023',
      image: '/digital-identity/lovable-uploads/a5b4f658-beb8-4684-9ad4-cd1a1907ab02.png',
      clickUrl: '/work/qa-lead'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-tech-100/30 to-white">
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
