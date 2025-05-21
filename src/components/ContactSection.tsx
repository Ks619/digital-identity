
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import { Link as LinkIcon } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-tech-500 mb-8">Get in touch at</h2>
        
        <div className="flex justify-center gap-6">
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </Button>
          
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            <span>Website</span>
          </Button>
          
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
