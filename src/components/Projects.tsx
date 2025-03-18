
import React from 'react';
import SectionHeading from './SectionHeading';
import PageTransition from './PageTransition';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string[];
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "RNN-LSTM Price Movement Predictions for Trading Algorithms",
      description: [
        "Designed an RNN-LSTM model for forecasting stock, forex, and crypto price movements.",
        "Integrated technical indicators like RSI & Moving Averages to enhance predictive accuracy.",
        "Applied findings to support financial decision-making and business strategy."
      ],
      githubUrl: "https://github.com/GaurabKC/stock-prediction"
    },
    {
      title: "Deepfake Image Generator using DCGAN",
      description: [
        "Developed a deep convolutional GAN model to generate hyper-realistic synthetic human faces.",
        "Explored applications of generative AI in media, security, and digital identity verification."
      ],
      githubUrl: "https://github.com/GaurabKC/deepfake-generator"
    }
  ];
  
  return (
    <section id="projects" className="section">
      <SectionHeading title="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <PageTransition key={project.title} animation="scale-in" delay={`${0.1 + idx * 0.1}s`}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg -m-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-full bg-white rounded-lg border border-secondary/80 p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {project.description.map((desc, descIdx) => (
                    <li key={descIdx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  <div className="pill">AI/ML</div>
                  <div className="pill">Python</div>
                  {project.title.includes("RNN-LSTM") && (
                    <>
                      <div className="pill">TensorFlow</div>
                      <div className="pill">Finance</div>
                    </>
                  )}
                  {project.title.includes("Deepfake") && (
                    <>
                      <div className="pill">GAN</div>
                      <div className="pill">Computer Vision</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </PageTransition>
        ))}
      </div>
    </section>
  );
};

export default Projects;
