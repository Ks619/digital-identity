import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const Projects = () => {
  const location = useLocation();
  const heartDiseaseRef = useRef<HTMLDivElement>(null);
  const compilerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to the corresponding section
    if (location.hash) {
      setTimeout(() => {
        const targetId = location.hash.substring(1); // Remove the # from the hash
        
        if (targetId === 'heart-disease-ml' && heartDiseaseRef.current) {
          // Scroll to the element with offset to make the title visible
          const yOffset = -120; // Adjust this value to show the title properly
          const element = heartDiseaseRef.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
        
        if (targetId === 'compiler' && compilerRef.current) {
          // Scroll to the element with offset to make the title visible
          const yOffset = -120; // Adjust this value to show the title properly
          const element = compilerRef.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }, 100);
    }
  }, [location]);

  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Projects</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Heart Disease ML Project - reduced top margin */}
          <div id="heart-disease-ml" ref={heartDiseaseRef} className="mb-16 pt-8 -mt-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-[#1e2938] text-white p-6">
                <h2 className="text-2xl font-bold">Heart Disease ML (Python)</h2>
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
          
          {/* Compiler Project - reduced top margin */}
          <div id="compiler" ref={compilerRef} className="mb-8 pt-8 -mt-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-tech-500 text-white p-6">
                <h2 className="text-2xl font-bold">Imaginary Language Compiler (C)</h2>
              </div>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Project Overview</h3>
                  <p className="text-gray-700 mb-4">
                    Developed a modular two-pass assembler in C as part of the System Programming Laboratory course at the Open University of Israel. 
                    The assembler processes simplified assembly language source files, building a symbol table in the first pass and generating machine 
                    code in the second. This project demonstrates expertise in low-level programming, memory management, and compiler construction principles.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Custom implementation of input parsing and linked data structures</li>
                    <li>Modular C codebase with separate components for each stage</li>
                    <li>Automated build process using a Makefile</li>
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
                        <TableCell className="font-medium">first_pass.c</TableCell>
                        <TableCell>Analyzes the assembly code to build the symbol table and determine memory addresses.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">second_pass.c</TableCell>
                        <TableCell>Generates the final machine code from the symbol table and memory address information.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">input_functions.c</TableCell>
                        <TableCell>Manages reading and parsing the input files, ensuring accurate syntax processing.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">linked_lists.c</TableCell>
                        <TableCell>Implements linked list structures for efficient storage of symbols and instructions.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">utils.h</TableCell>
                        <TableCell>Contains helper functions and constants used throughout the assembler.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">main.c</TableCell>
                        <TableCell>Coordinates the overall assembly process, calling functions from all modules.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Makefile</TableCell>
                        <TableCell>Automates the compilation and linking process, simplifying the build and execution steps.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
