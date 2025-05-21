
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const DevOpsDockerKubernetes = () => {
  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">DevOps: Docker, Kubernetes, and Multi-Cloud</h1>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="DevOps Docker Kubernetes" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Course Overview</h2>
                <p className="mb-4">
                  This certification program provides comprehensive training on modern DevOps practices, container technologies, 
                  and orchestration tools. It covers the entire CI/CD pipeline implementation across multiple cloud environments.
                </p>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">What You'll Learn</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Docker containerization fundamentals</li>
                  <li>Kubernetes architecture and deployment</li>
                  <li>CI/CD pipeline implementation</li>
                  <li>Multi-cloud strategy and management</li>
                  <li>Infrastructure as Code with Terraform</li>
                  <li>Monitoring and logging best practices</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                <p>
                  Completed in November 2023 with a capstone project deploying a microservice architecture
                  across AWS and Google Cloud using Kubernetes, Helm charts, and Terraform for infrastructure management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DevOpsDockerKubernetes;
