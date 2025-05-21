
import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Heart Disease ML (Python)',
      description: 'Developed a machine learning model to predict heart disease risk using health data and statistical analysis.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      url: '/projects/heart-disease-ml'
    },
    {
      title: 'Imaginary Language Compiler (C)',
      description: 'Built a compiler to an imaginary assembly language.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      url: '/projects/language-compiler'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Projects</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tech-500 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div className="mt-4">
                    <Link 
                      to={project.url} 
                      className="text-primary hover:underline font-medium"
                    >
                      View project details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
