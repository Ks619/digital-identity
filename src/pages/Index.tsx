
import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import CoursesSection from '../components/CoursesSection';
import EducationSection from '../components/EducationSection';
import RecommendationsSection from '../components/RecommendationsSection';
import ContactSection from '../components/ContactSection';
import WelcomeDialog from '../components/WelcomeDialog';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    // Show the welcome dialog when the component mounts
    setShowWelcome(true);
    
    // You could add logic here to only show it once using localStorage
    // const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    // if (!hasSeenWelcome) {
    //   setShowWelcome(true);
    //   localStorage.setItem('hasSeenWelcome', 'true');
    // }
  }, []);

  return (
    <MainLayout>
      <WelcomeDialog open={showWelcome} onOpenChange={setShowWelcome} />
      <Hero title="Welcome to my portfolio" />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <CoursesSection />
      <RecommendationsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
