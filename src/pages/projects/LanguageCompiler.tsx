import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import Hero from '../../components/Hero';

const LanguageCompiler = () => {
  return (
    <MainLayout>
      <Hero title="Imaginary Language Compiler" />

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
              <div className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Code on screen representing language compiler project" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-tech-500 mb-4">Project Overview</h2>
                  <p className="mb-6">
                    Developed a modular two-pass assembler in C as part of the System Programming Laboratory course at the Open University of Israel. 
                    The assembler processes simplified assembly language source files, building a symbol table in the first pass and generating machine 
                    code in the second. This project demonstrates expertise in low-level programming, memory management, and compiler construction principles.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Key Technologies</h3>
                  <p>
                    C programming language, UNIX development environment, GNU Make, and data structures including linked lists
                    were used to create an efficient and robust assembler implementation.
                  </p>
                </CardContent>
              </div>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Key Features</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Two-Pass Assembly Architecture</h3>
                    <p className="text-gray-700">
                      Implemented a classic two-pass design where the first pass builds symbol tables and 
                      the second pass generates the machine code.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Custom Data Structures</h3>
                    <p className="text-gray-700">
                      Created efficient linked list implementations for storing symbols and instructions,
                      optimizing memory usage and lookup performance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Advanced Input Parsing</h3>
                    <p className="text-gray-700">
                      Built a robust parsing system to handle complex assembly syntax, comments, and macros
                      while providing clear error messages for debugging.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Automated Build System</h3>
                    <p className="text-gray-700">
                      Designed a comprehensive Makefile to automate the build process and manage dependencies,
                      simplifying compilation across different environments.
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LanguageCompiler;
