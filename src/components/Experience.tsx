
import React from 'react';
import SectionHeading from './SectionHeading';
import PageTransition from './PageTransition';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-secondary/40">
      <SectionHeading title="Experience" />
      
      <div className="space-y-8">
        <PageTransition animation="fade-in-right" delay="0.2s">
          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-[1px] before:h-full before:bg-primary/20">
            <div className="absolute left-[-10px] top-1 w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center">
              <Briefcase size={12} className="text-primary" />
            </div>
            
            <div className="mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h4 className="text-lg font-semibold">Associate Engineer (AI-ML)</h4>
                <div className="text-sm text-primary/70 font-medium">Aalho Consulting Private Limited</div>
              </div>
              <div className="text-sm text-muted-foreground">April 2024 – Present</div>
            </div>
            
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Collaborated with team members and engaged with clients during the implementation of iReceivables, ensuring smooth integration and issue resolution.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Maintained relationships with previous clients, acting as a relationship manager to provide continued support, address concerns, and explore new opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contributed to the development of Oracle iReceivables solutions, ensuring alignment with client requirements and business goals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developed and deployed AI-driven solutions using AWS, Django, and YOLO-based computer vision models to optimize business processes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Worked closely with cross-functional teams to implement data-driven strategies that enhance operational efficiency.</span>
              </li>
            </ul>
          </div>
        </PageTransition>
      </div>
    </section>
  );
};

export default Experience;
