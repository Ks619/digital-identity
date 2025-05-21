
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const HeartDiseaseMl = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Heart Disease ML Project</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-lg">
            <div className="bg-[#1e2938] text-white p-6">
              <h2 className="text-2xl font-bold">Heart Disease ML (Python)</h2>
            </div>
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Data visualization representing heart disease machine learning project" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-tech-500 mb-4">Project Overview</h3>
                <p className="text-gray-700 mb-4">
                  Built a machine learning model to estimate the likelihood of heart disease based on patient health data. 
                  The project includes comprehensive data analysis, model training, and a simple web interface for making predictions.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><span className="font-medium">Comprehensive Data Analysis:</span> Explored trends, correlations, and feature importance to better understand risk factors.</li>
                  <li><span className="font-medium">Data Preprocessing:</span> Cleaned and prepared the dataset to ensure reliable model input.</li>
                  <li><span className="font-medium">Model Development:</span> Trained and evaluated several machine learning models for classification.</li>
                  <li><span className="font-medium">Web Interface:</span> Created an HTML form for entering patient data and displaying model predictions.</li>
                  <li><span className="font-medium">Deployment:</span> Integrated the trained model into a basic web app for easy testing.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-tech-500 mb-4">Important Files</h3>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default HeartDiseaseMl;
