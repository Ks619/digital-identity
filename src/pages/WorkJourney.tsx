
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const WorkJourney = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-16 bg-tech-700 bg-circuit-pattern bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Work Journey</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Professional Experience" />
          
          {/* Automation Developer Position */}
          <div id="automation-developer" className="mb-16">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-tech-500 text-white p-6">
                <h2 className="text-2xl font-bold">Automation Developer</h2>
                <p className="text-lg">Magentiq Eye LTD | 06/2023-06/2024</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Position Overview</h3>
                  <p className="text-gray-700">
                    Led the development of automation solutions for quality assurance and testing processes, focusing on improving efficiency and reducing manual testing effort.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Developed and maintained automation frameworks using Python and Selenium</li>
                    <li>Created test scripts for web applications to ensure functionality and reliability</li>
                    <li>Collaborated with development teams to identify and resolve software issues</li>
                    <li>Implemented CI/CD pipelines for automated testing</li>
                    <li>Generated detailed reports of test results and bug tracking</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Technical Skills Utilized</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Skills</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Programming</TableCell>
                        <TableCell>Python, JavaScript</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Testing Tools</TableCell>
                        <TableCell>Selenium, PyTest, TestNG</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">CI/CD</TableCell>
                        <TableCell>Jenkins, GitHub Actions</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Other</TableCell>
                        <TableCell>Git, JIRA, Docker</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* QA Lead Position */}
          <div id="qa-lead" className="mb-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-tech-500 text-white p-6">
                <h2 className="text-2xl font-bold">QA Lead</h2>
                <p className="text-lg">Magentiq Eye LTD | 02/2023-06/2023</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Position Overview</h3>
                  <p className="text-gray-700">
                    Managed the quality assurance team and implemented testing strategies for software releases, ensuring high-quality product delivery.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Led a team of QA engineers, providing mentorship and guidance</li>
                    <li>Developed and executed comprehensive test plans and test cases</li>
                    <li>Coordinated with product and development teams to ensure requirements were met</li>
                    <li>Managed bug tracking and resolution processes</li>
                    <li>Conducted regular code reviews and quality assessments</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Technical Skills Utilized</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Skills</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Testing Types</TableCell>
                        <TableCell>Functional, Regression, Performance, User Acceptance</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tools</TableCell>
                        <TableCell>JIRA, Confluence, TestRail</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Management</TableCell>
                        <TableCell>Team Leadership, Agile Methodologies</TableCell>
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

export default WorkJourney;
