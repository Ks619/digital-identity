
import React from 'react';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const RecommendationsSection = () => {
  const recommendations = [
    {
      name: "Yaniv",
      title: "Development Team Lead",
      snippet: "כפיר הוא מישהו שאפשר לסמוך עליו, הוא לומד מהר, ניגש לכל משימה בגישה חיובית, ויודע לקחת אחריות אמיתית.",
      language: "he"
    },
    {
      name: "Aviv",
      title: "Development Team Lead",
      snippet: "כפיר הראה לאורך כל הדרך מחויבות גבוהה, סקרנות מקצועית וגישה עצמאית לפתרון בעיות.",
      language: "he"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-tech-100/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Recommendation Letters" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg bg-white/70 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-tech-500 mb-1">{recommendation.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{recommendation.title}</p>
                
                <div className="relative mb-6">
                  <div className="absolute -left-3 top-0 h-full w-1 bg-primary/70 rounded-full"></div>
                  <blockquote className="text-sm italic text-gray-700" dir={recommendation.language === 'he' ? 'rtl' : 'ltr'} lang={recommendation.language}>
                    "{recommendation.snippet}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-primary hover:bg-primary/80 shadow-md transition-all duration-300 transform hover:scale-105">
            <Link to="/recommendations" className="px-8 py-2 flex items-center gap-2">
              <span>View All Recommendations</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
