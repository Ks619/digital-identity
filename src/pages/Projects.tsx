
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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
    <MainLayout>
      <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Projects</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Featured Projects" />
          
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
    </MainLayout>
  );
};

export default Projects;
