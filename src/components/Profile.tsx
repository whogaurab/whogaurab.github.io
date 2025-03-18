
import React from 'react';
import PageTransition from './PageTransition';

const Profile: React.FC = () => {
  return (
    <section id="about" className="section pt-32 pb-20">
      <PageTransition animation="fade-in">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/80">GK</div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <PageTransition animation="slide-up" delay="0.2s">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Gaurab Kumar Choudhary</h1>
            </PageTransition>
            
            <PageTransition animation="slide-up" delay="0.3s">
              <h2 className="text-xl text-primary/80 mb-5">Associate Engineer (AI-ML) at Aalho Consulting Private Limited</h2>
            </PageTransition>
            
            <PageTransition animation="slide-up" delay="0.4s">
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Strategic and data-driven professional with expertise in AI/ML, business analytics, and client management.
                Skilled in market research, process optimization, and data-driven decision-making to drive business growth.
                Experienced in collaborating with leadership, executing strategic initiatives, and leveraging technology for
                operational efficiency. Passionate about aligning insights with business objectives to fuel innovation and
                expansion.
              </p>
            </PageTransition>
            
            <PageTransition animation="slide-up" delay="0.5s">
              <div className="flex flex-wrap gap-2">
                <div className="pill">
                  <span>Garulia, West Bengal</span>
                </div>
                <div className="pill">
                  <span>gaurab3854@gmail.com</span>
                </div>
                <div className="pill">
                  <span>9875544510</span>
                </div>
              </div>
            </PageTransition>
          </div>
        </div>
      </PageTransition>
    </section>
  );
};

export default Profile;
