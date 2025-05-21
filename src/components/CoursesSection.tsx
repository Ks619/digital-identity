
import React from 'react';
import CourseCard from './CourseCard';
import SectionHeader from './SectionHeader';

const CoursesSection = () => {
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
    <section className="py-20 bg-white">
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
