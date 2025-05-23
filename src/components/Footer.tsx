import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Contact Me</h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <a 
                href="https://www.linkedin.com/in/kfir-shuster/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="tel:+972584954950" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone size={20} />
                <span>Call</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&to=kfirshuster3@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© {currentYear} Kfir Shuster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
