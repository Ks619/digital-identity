
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import RecommendationsSection from '../components/RecommendationsSection';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <RecommendationsSection />
    </MainLayout>
  );
};

export default Index;
