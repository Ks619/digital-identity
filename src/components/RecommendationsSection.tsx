
import React from 'react';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const RecommendationsSection = () => {
  return (
    <section className="py-8 bg-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Recommendation Letters" />
        
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg text-center mb-6 max-w-2xl">
            Read recommendation letters from my previous team leads at Magentiq Eye LTD
          </p>
          
          <Button asChild className="bg-primary hover:bg-primary/80">
            <Link to="/recommendations">View Recommendations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
