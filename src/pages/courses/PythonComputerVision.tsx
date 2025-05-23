import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const PythonComputerVision = () => {
  return (
    <MainLayout>
      <Hero title="Python for Computer Vision with OpenCV" />

      <section className="py-8 bg-gradient-to-b from-white to-tech-100/30">
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
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Summary</h2>
                <p className="mb-4">
                  This course provides a comprehensive introduction to computer vision using Python and OpenCV. It covers essential topics like image processing, video streaming, object detection, face recognition, and deep learning with Keras and TensorFlow. Through hands-on projects, I learned how to manipulate images, analyze video data, and build custom image classifiers using state-of-the-art models like YOLO. The course also included foundational skills with NumPy and explored real-world computer vision applications in modern industries.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                <p>
                  Completed in July 2023 with a final project implementing a real-time object detection system
                  using OpenCV and YOLOv5, capable of identifying and tracking multiple object classes in video streams.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Syllabus</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Image Processing Fundamentals</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>NumPy basics for image arrays</li>
                      <li>Reading, writing, and manipulating images</li>
                      <li>Drawing on images (shapes, text)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Advanced Image Techniques with OpenCV</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Color mappings & histograms</li>
                      <li>Blurring, smoothing, and thresholding</li>
                      <li>Morphological operations (erosion, dilation)</li>
                      <li>Gradient and edge detection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Video Analysis</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reading & streaming video</li>
                      <li>Webcam integration</li>
                      <li>Object tracking & optical flow</li>
                      <li>Face detection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Object Detection & Segmentation</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Template matching</li>
                      <li>Corner & contour detection</li>
                      <li>Watershed algorithm</li>
                      <li>Feature matching</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Deep Learning for Computer Vision</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Keras & TensorFlow basics</li>
                      <li>Convolutional Neural Networks (CNNs)</li>
                      <li>Image classification</li>
                      <li>Training on custom datasets</li>
                      <li>YOLO object detection (You Only Look Once)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PythonComputerVision;
