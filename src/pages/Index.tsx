
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
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
    </MainLayout>
  );
};

export default Index;
