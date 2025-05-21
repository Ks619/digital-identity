
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from './SectionHeader';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="About me" />
        <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                I found my way into development through problem-solving, and the first time I used code to fix something real; it made an immediate impression on me.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I care about reliable tools and teammates who ask good questions and explain things clearly.
              </p>
              <p className="text-lg text-gray-700">
                I look forward to what's next, continuing to learn and build to contribute to a team where I can keep learning and see my work make someone's job, or day, a little easier.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
