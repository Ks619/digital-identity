
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
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
            <li>
              <Link to="/work-journey" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Work Journey</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/courses" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>Courses</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-primary transition-colors duration-300" onClick={closeMenu}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
