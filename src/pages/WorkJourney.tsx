
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const WorkJourney = () => {
  const location = useLocation();
  const automationDeveloperRef = useRef<HTMLDivElement>(null);
  const qaLeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to the corresponding section
    if (location.hash) {
      setTimeout(() => {
        const targetId = location.hash.substring(1); // Remove the # from the hash
        
        if (targetId === 'automation-developer' && automationDeveloperRef.current) {
          automationDeveloperRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (targetId === 'qa-lead' && qaLeadRef.current) {
          qaLeadRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Work Journey</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Professional Experience" />
          
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
          
          {/* Automation Developer Position */}
          <div id="automation-developer" ref={automationDeveloperRef} className="mb-16">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-[#1e2938] text-white p-6">
                <h2 className="text-2xl font-bold">Automation Developer</h2>
                <p className="text-lg">Magentiq Eye LTD | 06/2023-06/2024</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Role Summary</h3>
                  <p className="text-gray-700 mb-4">
                    After 4 months as QA Lead, I transitioned into a Python Automation Developer role. I led the design and implementation of automation tools to streamline workflows across departments and improve company-wide operational efficiency.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">Key Responsibilities & Projects</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">QA Document Automation</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Developed automation scripts to streamline QA documentation workflows (e.g., STD, STR, SRS) involving .docx and .pdf file parsing and formatting.</li>
                      <li>Integrated scripts with Google Drive API to automate document storage and versioning.</li>
                      <li><span className="font-medium">Technologies & Tools:</span> Python, python-docx, PyPDF2, google-api-python-client, os, shutil</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Business Intelligence System (Company-Wide BI Platform)</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Built the entire BI infrastructure using the open-source Metabase platform deployed in a Docker container.</li>
                      <li>Integrated with PostgreSQL for structured data storage and built custom dashboards for each department.</li>
                      <li>Presented the BI system to all teams and provided hands-on training per department.</li>
                      <li><span className="font-medium">Technologies & Tools:</span> Metabase (Docker), PostgreSQL, SQL, Python for data prep and validation</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Internal GUI Tool for Annotation Team</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Created a user-friendly internal Python GUI (Tkinter-based) for the annotation team to scan and extract data from structured and semi-structured files.</li>
                      <li>Implemented pattern recognition to auto-detect data; for inconsistent formats, the UI prompts the user to fill in missing fields manually.</li>
                      <li>Data is then validated and uploaded to the relevant PostgreSQL tables according to the tagging type.</li>
                      <li><span className="font-medium">Technologies & Tools:</span> Python, SQL, PostgreSQL, tkinter, re, pandas, psycopg2, os, glob</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Automation for Training Data Updates (Dev Team Support)</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Developed automation for updating machine learning training datasets from .csv files, reducing manual work and ensuring data consistency.</li>
                      <li>Automated parsing, validation, and integration of new data into the training pipeline.</li>
                      <li><span className="font-medium">Technologies & Tools:</span> Python, pandas, csv, os, schedule, logging</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-tech-500 mb-4">General Technologies & Skills</h3>
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
                        <TableCell>Python (advanced), SQL</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tools & Libraries</TableCell>
                        <TableCell>pandas, psycopg2, tkinter, re, python-docx, PyPDF2, google-api-python-client, csv, os, glob, schedule, Docker</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Databases</TableCell>
                        <TableCell>PostgreSQL</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">BI & Data Visualization</TableCell>
                        <TableCell>Metabase</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Collaboration & Deployment</TableCell>
                        <TableCell>Git, internal servers, cross-functional communication with product, annotation, and development teams</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* QA Lead Position */}
          <div id="qa-lead" ref={qaLeadRef} className="mb-8">
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

export default WorkJourney;
