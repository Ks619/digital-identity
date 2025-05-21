
import React from 'react';
import SectionHeader from './SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-tech-100/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Education" />
        
        <Card className="border-none shadow-lg mx-auto max-w-2xl">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-tech-500 mb-2">BSc in Computer Science</h3>
              <p className="text-lg mb-2">The Open University of Israel, 2020 – 2024</p>
              <p className="text-lg mb-4">GPA: 85</p>
              <a 
                href="https://drive.google.com/file/d/1hD7E9BsucBBzQXYjx9_J70y64C-O7M_P/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                Grade Sheet
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
