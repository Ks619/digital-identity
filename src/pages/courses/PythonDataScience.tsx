
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const PythonDataScience = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Python for Data Science and Machine Learning</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Python for Data Science and Machine Learning" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Course Overview</h2>
                <p className="mb-4">
                  This comprehensive bootcamp covers all aspects of data analysis, visualization, and machine learning with Python.
                  From NumPy and Pandas to Scikit-Learn and TensorFlow, this course provides hands-on experience with the most
                  essential libraries in the data science ecosystem.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">What You'll Learn</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Data manipulation with Pandas</li>
                  <li>Numerical computing with NumPy</li>
                  <li>Data visualization with Matplotlib and Seaborn</li>
                  <li>Machine learning algorithms with Scikit-Learn</li>
                  <li>Deep learning fundamentals with TensorFlow</li>
                  <li>Real-world data science project workflows</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                <p>
                  Completed in May 2023 with final project implementing a predictive model for stock market analysis
                  using time-series data and ensemble learning techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PythonDataScience;
