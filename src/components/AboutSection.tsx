
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from './SectionHeader';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="About me" />
        <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                Curious and driven Junior Software Engineer with a passion for learning and problem-solving,
              </p>
              <p className="text-lg text-gray-700 mb-4">
                guided by a deep enthusiasm for technology and a strong belief in creating value
              </p>
              <p className="text-lg text-gray-700 mb-4">
                through thoughtful, efficient code. Brings positive energy, adaptability, and a self-taught
              </p>
              <p className="text-lg text-gray-700 mb-4">
                mindset to every challenge balancing academic excellence with real-world impact.
              </p>
              <p className="text-lg text-gray-700">
                Thrives in structured, collaborative environments that enable professional growth and
                continuous improvement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
