
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Gaurab Kumar Choudhary</h3>
            <p className="text-white/70 text-sm">Associate Engineer (AI-ML)</p>
            <p className="text-white/70 text-sm">Garulia, West Bengal</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:gaurab3854@gmail.com" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/whogaurab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/whogaurab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <div>
              <p className="text-white/70 text-sm">Interests: Travelling, Tracking, Lifting Weights</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Gaurab Kumar Choudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
