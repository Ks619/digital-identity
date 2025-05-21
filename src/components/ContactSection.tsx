
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import { Link as LinkIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ContactSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-tech-100/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Get In Touch" />
        
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center mb-2">
              <div className="w-16 h-1 bg-tech-300/30 rounded-full"></div>
              <div className="w-16 h-1 bg-tech-300/60 rounded-full"></div>
              <div className="w-16 h-1 bg-tech-300 rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="flex items-center gap-2 bg-white/80 hover:bg-white border border-tech-300/30 hover:border-tech-300 transition-all">
                <Linkedin className="h-5 w-5 text-tech-500" />
                <span>LinkedIn</span>
              </Button>
              
              <Button variant="outline" size="lg" className="flex items-center gap-2 bg-white/80 hover:bg-white border border-tech-300/30 hover:border-tech-300 transition-all">
                <LinkIcon className="h-5 w-5 text-tech-500" />
                <span>Website</span>
              </Button>
              
              <Button variant="outline" size="lg" className="flex items-center gap-2 bg-white/80 hover:bg-white border border-tech-300/30 hover:border-tech-300 transition-all">
                <Mail className="h-5 w-5 text-tech-500" />
                <span>Email</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
