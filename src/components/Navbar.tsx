
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-tech-600/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">Kfir Shuster</Link>
        
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
          <Menu />
        </Button>
        
        <div className={`absolute top-full left-0 w-full bg-tech-600/95 md:bg-transparent md:relative md:flex md:w-auto md:opacity-100 transition-all duration-300 md:top-0 shadow-md md:shadow-none ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-0">
            <li>
              <Link to="/" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Home</Link>
            </li>
            <li className="relative group hidden md:block">
              <div className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                <span>Work Journey</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-all duration-300" />
              </div>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/work/qa-lead" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  QA Lead
                </Link>
                <Link to="/work/automation-developer" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Automation Developer
                </Link>
              </div>
            </li>
            <li className="md:hidden">
              <Link to="/work/qa-lead" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>QA Lead</Link>
            </li>
            <li className="md:hidden">
              <Link to="/work/automation-developer" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Automation Developer</Link>
            </li>
            <li className="relative group hidden md:block">
              <div className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                <span>Projects</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-all duration-300" />
              </div>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/projects/heart-disease-ml" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Heart Disease ML (Python)
                </Link>
                <Link to="/projects/language-compiler" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Imaginary Language Compiler (C)
                </Link>
              </div>
            </li>
            <li className="md:hidden">
              <Link to="/projects/heart-disease-ml" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Heart Disease ML (Python)</Link>
            </li>
            <li className="md:hidden">
              <Link to="/projects/language-compiler" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Imaginary Language Compiler (C)</Link>
            </li>
            <li className="relative group hidden md:block">
              <div className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 cursor-pointer">
                <span>Courses</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-all duration-300" />
              </div>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/courses/python-data-science" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Python for Data Science
                </Link>
                <Link to="/courses/devops-docker-kubernetes" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  DevOps: Docker & Kubernetes
                </Link>
                <Link to="/courses/python-computer-vision" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Python for Computer Vision
                </Link>
              </div>
            </li>
            <li className="md:hidden">
              <Link to="/courses/python-data-science" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Python for Data Science</Link>
            </li>
            <li className="md:hidden">
              <Link to="/courses/devops-docker-kubernetes" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>DevOps: Docker & Kubernetes</Link>
            </li>
            <li className="md:hidden">
              <Link to="/courses/python-computer-vision" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Python for Computer Vision</Link>
            </li>
            <li>
              <Link to="/recommendations" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Recommendations</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>My Story</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
