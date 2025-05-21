
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const LanguageCompiler = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Imaginary Language Compiler</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-lg">
            <div className="bg-tech-500 text-white p-6">
              <h2 className="text-2xl font-bold">Imaginary Language Compiler (C)</h2>
            </div>
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Code on screen representing language compiler project" 
                className="w-full h-full object-cover"
              />
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
      </section>
    </MainLayout>
  );
};

export default LanguageCompiler;
