
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface WorkCardProps {
  title: string;
  company: string;
  period: string;
  image: string;
  clickUrl?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, company, period, image }) => {
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
        <div className="text-gray-600">
          <p className="font-medium">{company}</p>
          <p className="text-sm">{period}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <span className="text-primary hover:underline font-medium">
          View details
        </span>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
