
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Python Project',
      description: 'Developed a machine learning model to predict heart disease risk using health data and statistical analysis.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      clickUrl: '#'
    },
    {
      title: 'C Project',
      description: 'Built a compiler to an imaginary assembly language.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      clickUrl: '#'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              clickUrl={project.clickUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
