
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Heart Disease ML (Python)',
      description: 'Developed a machine learning model to predict heart disease risk using health data and statistical analysis.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      clickUrl: '/projects#heart-disease-ml'
    },
    {
      title: 'Imaginary Language Compiler (C)',
      description: 'Built a compiler to an imaginary assembly language.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      clickUrl: '/projects#compiler'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
