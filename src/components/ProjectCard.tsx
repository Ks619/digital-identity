
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  clickUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, clickUrl }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-tech-500 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {clickUrl && (
          <div className="mt-4">
            <a 
              href={clickUrl} 
              className="text-primary hover:underline font-medium"
            >
              View project details
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
