
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const PythonComputerVision = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Python for Computer Vision with OpenCV</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Python for Computer Vision" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Course Overview</h2>
                <p className="mb-4">
                  This specialized course explores the fascinating world of computer vision using Python, OpenCV, 
                  and deep learning frameworks. From image processing basics to advanced neural network models, 
                  the course provides practical skills for real-world applications.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">What You'll Learn</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Image processing fundamentals with OpenCV</li>
                  <li>Feature detection and object tracking</li>
                  <li>Face recognition and biometric systems</li>
                  <li>Convolutional Neural Networks for image classification</li>
                  <li>Object detection with YOLO and SSD</li>
                  <li>Image segmentation techniques</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                <p>
                  Completed in July 2023 with a final project implementing a real-time object detection system
                  using OpenCV and YOLOv5, capable of identifying and tracking multiple object classes in video streams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PythonComputerVision;
