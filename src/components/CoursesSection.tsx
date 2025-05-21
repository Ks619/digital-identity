
import React from 'react';
import CourseCard from './CourseCard';
import SectionHeader from './SectionHeader';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      image: '/lovable-uploads/d0a2b38f-39fd-4dd7-8126-abc2b97d6da0.png',
      clickUrl: '/courses/python-data-science'
    },
    {
      title: 'Certified DevOps Program: Docker, Kubernetes, and Multi-Cloud Environments',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      clickUrl: '/courses/devops-docker-kubernetes'
    },
    {
      title: 'Python for Computer Vision with OpenCV and Deep Learning',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      clickUrl: '/courses/python-computer-vision'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-tech-100/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Courses" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
};

export default CoursesSection;
