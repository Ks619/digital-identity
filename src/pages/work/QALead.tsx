
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const QALead = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Magentiq Eye LTD | 02/2023-06/2023</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Company Information */}
          <div className="mb-12">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4">About The Company</h2>
                <p className="text-gray-700 text-center mb-4">
                  Magentiq Eye is an Israeli medical device company specializing in AI-powered solutions designed to enhance the performance of endoscopic procedures, with a focus on gastroenterology.
                </p>
                <p className="text-gray-700 text-center mb-4">
                  The company's main product, <strong>MAGENTIQ-COLO™</strong>, is a real-time system that assists physicians in detecting polyps during colonoscopy, which helps increase detection rates and reduce the chances of missing pre-cancerous lesions.
                </p>
                <p className="text-gray-700 text-center">
                  Magentiq Eye's technology is currently deployed in leading hospitals across Israel, Europe, and the United States, setting a new standard for the quality of colonoscopy procedures and making a significant contribution to the prevention of colorectal cancer.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* QA Lead Position */}
          <div className="mb-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-tech-500 text-white p-6">
                <h2 className="text-2xl font-bold">QA Lead</h2>
                <p className="text-lg">Magentiq Eye LTD | 02/2023-06/2023</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Role Summary</h3>
                  <p className="text-gray-700">
                    Led the quality assurance team and implemented testing strategies for software releases, ensuring high-quality product delivery.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Designed and implemented the company's first internal QA processes, establishing a structured testing workflow from scratch.</li>
                    <li>Introduced formal testing documentation (STD, STR, SRS, ECO, TRR), improving process consistency, traceability, and compliance with regulatory standards.</li>
                    <li>Led verification and validation (V&V) efforts for all product changes, increasing release confidence and reducing the number of bugs reaching production.</li>
                    <li>Elevated testing quality and transparency by creating clear reporting methods for test results and system readiness.</li>
                    <li>Collaborated closely with external QA vendors during formal software releases, ensuring alignment and smooth delivery.</li>
                    <li>Regularly defined and executed new test plans for each software update in a Linux environment, with a strong focus on edge cases and stability.</li>
                    <li>Provided technical field support in hospitals, including on-site system validation, Linux-based updates, and hardware troubleshooting.</li>
                    <li>Gained hands-on experience with hospital IT infrastructure and video streaming systems, supporting real-world deployments and ensuring high reliability in medical environments.</li>
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

export default QALead;
