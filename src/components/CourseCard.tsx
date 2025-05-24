
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  image: string;
  clickUrl?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, image, clickUrl }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-tech-500 mb-2">{title}</h3>
        
        {clickUrl ? (
          <Link to={clickUrl} className="text-primary hover:underline font-medium">
            View details
          </Link>
        ) : (
          <span className="text-primary hover:underline font-medium">
            View details
          </span>
                )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
