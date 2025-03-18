
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrollPosition > 50 
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-background/80 dark:shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-medium">Gaurab KC</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm text-primary/80 hover:text-primary link-underline"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-sm text-primary/80 hover:text-primary link-underline"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-sm text-primary/80 hover:text-primary link-underline"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-sm text-primary/80 hover:text-primary link-underline"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm text-primary/80 hover:text-primary link-underline"
          >
            Projects
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <a 
            href="mailto:gaurab3854@gmail.com" 
            className="text-primary/80 hover:text-primary transition-colors" 
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://github.com/GaurabKC" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary/80 hover:text-primary transition-colors" 
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/gaurabkc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary/80 hover:text-primary transition-colors" 
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#resume" 
            className="hidden md:flex items-center space-x-1 text-xs font-medium py-1.5 px-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors dark:bg-primary dark:text-primary-foreground"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
