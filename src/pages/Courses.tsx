
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import CourseCard from '../components/CourseCard';
import RecommendationsSection from '../components/RecommendationsSection';

const Courses = () => {
  const courses = [
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      clickUrl: '#'
    },
    {
      title: 'Certified DevOps Program: Docker, Kubernetes, and Multi-Cloud Environments',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      clickUrl: '#'
    },
    {
      title: 'Python for Computer Vision with OpenCV and Deep Learning',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      clickUrl: '#'
    }
  ];

  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Courses & Recommendations</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Professional Development" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                image={course.image}
                clickUrl={course.clickUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <RecommendationsSection />
    </MainLayout>
  );
};

export default Courses;
