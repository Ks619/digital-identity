
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
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
                      I found my way into development through problem-solving, and the first time I used code to fix something real; it made an immediate impression on me. While studying a programming course at the Open University, I realized that coding gave me practical tools for creating working solutions and solving real-world problems.
                    </p>
                    <p>
                      That momentum led me to a student role at a medical startup. I started in QA but ended up building their first testing framework and coding standards within a few weeks. Four months later, I wrote Python full-time, automating labeling workflows and leading development on a real-time BI system. The project was then used to pitch a client renewal, and it became a deciding factor in keeping that relationship going.
                    </p>
                    <p>
                      Working and studying simultaneously took a toll, so I paused to finish my degree properly. That time gave me a renewed focus when I came back. Since then, I've kept learning with side projects, internal DevOps tools, new languages, and deep dives into unfamiliar tech. At one point, I joined an image-processing course to prepare for a new team at the request of a former manager. I landed the role, and though it was cut before it started, what I'd learned stuck with me.
                    </p>
                    <p>
                      I care about reliable tools and teammates who ask good questions and explain things clearly. I work best when collaboration leads to simple, working solutions, whether I'm debugging with QA or brainstorming with stakeholders. I stay calm under pressure and focus on what helps the people using the product.
                    </p>
                    <p>
                      I look forward to what's next, continuing to learn and build to contribute to a team where I can keep learning and see my work make someone's job, or day, a little easier.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
    </MainLayout>
  );
};

export default About;
