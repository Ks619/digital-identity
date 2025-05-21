
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import RecommendationsSection from '../components/RecommendationsSection';

const Index = () => {
  return (
    <MainLayout>
      <Hero profileImage="/lovable-uploads/9f0c6e4e-fcc7-41b9-afec-7bd8e402bc01.png" />
      <AboutSection />
      <div className="-mt-8">
        <SkillsSection />
      </div>
      <div className="-mt-8">
        <WorkSection />
      </div>
      <div className="-mt-8">
        <EducationSection />
      </div>
      <div className="-mt-8">
        <ProjectsSection />
      </div>
      <div className="-mt-8">
        <RecommendationsSection />
      </div>
      <div className="-mt-8">
        <ContactSection />
      </div>
    </MainLayout>
  );
};

export default Index;
