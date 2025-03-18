
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add a class to enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update document title
    document.title = "Gaurab Kumar Choudhary | Portfolio";
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background thin-scrollbar">
      <Header />
      
      <main className="flex-1">
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
