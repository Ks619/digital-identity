
import React from 'react';
import WorkCard from './WorkCard';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';

const WorkSection = () => {
  const workExperiences = [
    {
      title: 'Automation Developer',
      company: 'Magentiq Eye LTD',
      period: '06/2023-06/2024',
      image: '/lovable-uploads/d13f82e7-822e-4e04-b048-bf781448da5c.png',
      clickUrl: '/work-journey#automation-developer'
    },
    {
      title: 'QA Lead',
      company: 'Magentiq Eye LTD',
      period: '02/2023-06/2023',
      image: '/lovable-uploads/a5b4f658-beb8-4684-9ad4-cd1a1907ab02.png',
      clickUrl: '/work-journey#qa-lead'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-tech-100/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Work Journey" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workExperiences.map((work, index) => (
            <Link key={index} to={work.clickUrl}>
              <WorkCard
                title={work.title}
                company={work.company}
                period={work.period}
                image={work.image}
                clickUrl={work.clickUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
