
import React from 'react';
import SectionHeader from './SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  title: string;
}

const CoreCompetencies: Skill[] = [
  { title: 'Python Development' },
  { title: 'Data Analysis & Automation' },
  { title: 'SQL & Database Integration' },
  { title: 'Software Testing & QA Processes' },
  { title: 'Object-Oriented Programming (OOP)' },
  { title: 'Algorithmic Problem Solving' },
  { title: 'Version Control & Deployment' },
  { title: 'Custom Tool Development' },
];

const TechSkills: string[] = [
  'Python', 'Java', 'C', 'C++', 'HTML', 'SQL', 'NoSQL', 'Linux', 'HTTP', 
  'TCP/IP', 'DNS', 'GitHub', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
  'Microservices', 'Terraform', 'Jenkins', 'CI/CD', 'Data visualization tools', 'Jira'
];

const SkillsSection = () => {
  return (
    <section className="py-8 bg-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Core Competencies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CoreCompetencies.map((skill, index) => (
            <Card 
              key={index} 
              className="border-none shadow hover:shadow-md transition-all duration-300 bg-white hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-tech-500 font-medium">{skill.title}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <SectionHeader title="Technical Skills" />
        
        <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {TechSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-tech-200 text-tech-500 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
