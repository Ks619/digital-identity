
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import WorkCard from '../components/WorkCard';

const WorkJourney = () => {
  const workExperiences = [
    {
      title: 'Automation Developer',
      company: 'Magentiq Eye LTD',
      period: '06/2023-06/2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      description: 'Led the development of automation solutions for quality assurance and testing processes.',
      clickUrl: '#'
    },
    {
      title: 'QA Lead',
      company: 'Magentiq Eye LTD',
      period: '02/2023-06/2023',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: 'Managed the quality assurance team and implemented testing strategies for software releases.',
      clickUrl: '#'
    }
  ];

  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Work Journey</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Professional Experience" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workExperiences.map((work, index) => (
              <div key={index} className="mb-8">
                <WorkCard
                  title={work.title}
                  company={work.company}
                  period={work.period}
                  image={work.image}
                  clickUrl={work.clickUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WorkJourney;
