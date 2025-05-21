
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kfir Shuster</h3>
            <p className="text-gray-300">Junior Software Developer</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work-journey" className="text-gray-300 hover:text-white transition-colors">Work Journey</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">My Story</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
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
                href="mailto:kfirshuster3@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Kfir Shuster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
