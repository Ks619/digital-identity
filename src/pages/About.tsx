
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import { Card, CardContent } from '@/components/ui/card';
import ContactSection from '../components/ContactSection';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">About Me</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="My Story" />
          
          <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm mb-16">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/9f0c6e4e-fcc7-41b9-afec-7bd8e402bc01.png"
                      alt="Kfir Shuster" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-tech-500 mb-4">
                    Hi, I'm Kfir Shuster
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Curious and driven Junior Software Engineer with a passion for learning and problem-solving,
                      guided by a deep enthusiasm for technology and a strong belief in creating value through thoughtful, efficient code.
                    </p>
                    <p>
                      I bring positive energy, adaptability, and a self-taught mindset to every challenge balancing academic excellence with real-world impact.
                    </p>
                    <p>
                      I thrive in structured, collaborative environments that enable professional growth and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </MainLayout>
  );
};

export default About;
