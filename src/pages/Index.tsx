
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <MainLayout>
      <Hero profileImage="/lovable-uploads/9f0c6e4e-fcc7-41b9-afec-7bd8e402bc01.png" />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
