
import React from 'react';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const RecommendationsSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-tech-100/30 to-tech-200/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Recommendation Letters" />
        
        <Card className="border-none shadow-lg max-w-3xl mx-auto bg-white/70 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col items-center justify-center">
              <div className="relative mb-6 w-full">
                <div className="absolute -left-3 top-0 h-full w-2 bg-primary rounded-full"></div>
                <p className="text-lg text-center italic text-gray-700">
                  "Read recommendation letters from my previous team leads at Magentiq Eye LTD"
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <div className="w-16 h-1 bg-tech-300/30 rounded-full"></div>
                <div className="w-16 h-1 bg-tech-300/60 rounded-full"></div>
                <div className="w-16 h-1 bg-tech-300 rounded-full"></div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/80 shadow-md transition-all duration-300 transform hover:scale-105">
                <Link to="/recommendations" className="px-8 py-2 flex items-center gap-2">
                  <span>View Recommendations</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecommendationsSection;
