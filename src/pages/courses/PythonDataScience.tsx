
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Python for Data Science and Machine Learning" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Summary</h2>
                <p className="mb-6">
                  This course provided a hands-on introduction to data science and machine learning using Python. I learned how to analyze and visualize data with libraries like Pandas, NumPy, Matplotlib, Seaborn, and Plotly. 
                  The course also covered essential machine learning algorithms, including regression, classification, clustering, natural language processing, neural networks, and deep learning using Scikit-Learn. 
                  In addition, I explored working with SQL, Excel, and web scraping tools, preparing data pipelines and predictive models for real-world use.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                <p>
                  Completed in May 2023 with final project implementing a predictive model for stock market analysis
                  using time-series data and ensemble learning techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Syllabus</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Python Programming for Data Science</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Python fundamentals & scripting</li>
                      <li>Working with Jupyter Notebooks</li>
                      <li>Functions, loops, conditionals, and file I/O</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Numerical & Data Analysis</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>NumPy – numerical operations and array processing</li>
                      <li>Pandas – working with DataFrames, cleaning and analyzing data</li>
                      <li>Handling Excel, CSV, and missing data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Data Visualization</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Matplotlib – static plotting</li>
                      <li>Seaborn – statistical visualization</li>
                      <li>Plotly – interactive visualizations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Data Sources & Integration</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Web scraping with requests and BeautifulSoup</li>
                      <li>Connecting Python to SQL databases</li>
                      <li>Reading Excel and text files</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Machine Learning with Scikit-Learn</h3>
                    <h4 className="font-medium text-tech-500 mb-1">Supervised learning:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Linear Regression, Logistic Regression</li>
                      <li>Decision Trees, Random Forests</li>
                      <li>Support Vector Machines</li>
                    </ul>
                    <h4 className="font-medium text-tech-500 mb-1">Unsupervised learning:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>K-Means Clustering</li>
                      <li>PCA for dimensionality reduction</li>
                    </ul>
                    <h4 className="font-medium text-tech-500 mb-1">Model evaluation:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Train/test split, cross-validation</li>
                      <li>Metrics: accuracy, precision, recall</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Natural Language Processing (NLP)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Text processing and feature extraction</li>
                      <li>Spam detection and sentiment analysis</li>
                      <li>Working with CountVectorizer and TF-IDF</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Neural Networks & Deep Learning</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Basics of deep learning with Keras</li>
                      <li>Building simple neural networks</li>
                      <li>Training custom classifiers</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Big Data Tools (Overview)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Introduction to Spark for large-scale data processing</li>
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

export default PythonDataScience;
