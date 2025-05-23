import React from 'react';
import MainLayout from '../../layout/MainLayout';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '../../components/Hero';

const DevOpsDockerKubernetes = () => {
  return (
    <MainLayout>
      <Hero title="DevOps: Docker, Kubernetes, and Multi-Cloud" />

      <section className="py-8 bg-gradient-to-b from-white to-tech-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
              <div className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="DevOps Docker Kubernetes" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-tech-500 mb-4">Summary</h2>
                  <p className="mb-6">
                    This course provided a comprehensive, hands-on introduction to DevOps tools, workflows, and cloud platforms. 
                    I gained practical experience with Docker, Kubernetes, Jenkins, Azure DevOps, Terraform, and Ansible while 
                    building and deploying CI/CD pipelines across AWS, Azure, and Google Cloud. The course emphasized containerization, 
                    infrastructure as code, microservices deployment, and cloud-native automation. It also covered provisioning and 
                    managing cloud infrastructure, implementing DevOps pipelines, and deploying containerized applications with real-world scenarios.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-tech-500 mt-6 mb-3">Course Completion</h3>
                  <p>
                    Completed in November 2023 with a capstone project deploying a microservice architecture
                    across AWS and Google Cloud using Kubernetes, Helm charts, and Terraform for infrastructure management.
                  </p>
                </CardContent>
              </div>
            </Card>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tech-500 mb-4">Syllabus</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">DevOps Foundations</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>DevOps principles</li>
                      <li>Continuous Integration (CI), Continuous Delivery (CD), Infrastructure as Code (IaC)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Docker & Containerization</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Building and running Docker containers</li>
                      <li>Creating Docker images for Python, JavaScript, and Java apps</li>
                      <li>Deploying microservices using Docker</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Kubernetes & Orchestration</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Deploying containers to Kubernetes clusters</li>
                      <li>Service discovery, load balancing, and centralized config</li>
                      <li>Kubernetes basics on GKE, EKS, and AKS</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Infrastructure as Code with Terraform</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provisioning AWS and Azure resources (EC2, Load Balancer, K8s)</li>
                      <li>Writing and running Terraform configs</li>
                      <li>Running Terraform in Azure DevOps pipelines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Configuration Management with Ansible</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Automating server setup with Ansible</li>
                      <li>Writing playbooks for configuration tasks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">CI/CD with Jenkins and Azure DevOps</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Building full pipelines with Azure DevOps</li>
                      <li>Integrating Jenkins for CI workflows</li>
                      <li>Deploying containers to Kubernetes via pipelines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Multi-Cloud DevOps Practice</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Working across AWS, Azure, and Google Cloud</li>
                      <li>Adapting deployment to each cloud platform</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-tech-500 mb-2">Real-World Projects</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>End-to-end DevOps pipeline implementation</li>
                      <li>Microservices deployment with full automation</li>
                      <li>Combining Docker, Kubernetes, Terraform, Jenkins, and Ansible in live scenarios</li>
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

export default DevOpsDockerKubernetes;
