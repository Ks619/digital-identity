import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Hero from '../../components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const HeartDiseaseMl = () => {
  return (
    <MainLayout>
      <Hero title="Heart Disease ML Project" />

      <section className="py-8 bg-gradient-to-b from-white to-tech-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Data visualization representing heart disease machine learning project" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Project Overview</h2>
                <p className="mb-4">
                  Built a machine learning model to estimate the likelihood of heart disease based on patient health data. 
                  The project includes comprehensive data analysis, model training, and a simple web interface for making predictions.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Key Technologies</h3>
                <p>
                  Python, scikit-learn, Pandas, NumPy, HTML/CSS, and Flask were used to develop both the machine learning model
                  and the web interface for practical use in a healthcare setting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Key Features</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Comprehensive Data Analysis</h3>
                    <p className="text-gray-700">
                      Explored trends, correlations, and feature importance to better understand risk factors.
                      Used visualization techniques to identify patterns in patient data.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Data Preprocessing</h3>
                    <p className="text-gray-700">
                      Cleaned and prepared the dataset to ensure reliable model input.
                      Applied normalization, handling of missing values, and feature engineering.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Model Development</h3>
                    <p className="text-gray-700">
                      Trained and evaluated several machine learning models for classification.
                      Implemented cross-validation and hyperparameter tuning for optimal performance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Web Interface</h3>
                    <p className="text-gray-700">
                      Created an HTML form for entering patient data and displaying model predictions.
                      Built an intuitive UI to make the tool accessible to healthcare professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Important Files</h2>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filename</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">main.ipynb</TableCell>
                      <TableCell>Includes the full analysis pipeline, from data cleaning to model evaluation.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">heart_2020_cleaned.csv</TableCell>
                      <TableCell>Dataset used for training and validation.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">main.html</TableCell>
                      <TableCell>Front-end interface for user input and result display.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">requirements.txt</TableCell>
                      <TableCell>Lists the Python dependencies needed to run the project.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HeartDiseaseMl;
