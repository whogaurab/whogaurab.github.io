
import React from 'react';
import SectionHeading from './SectionHeading';
import PageTransition from './PageTransition';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  percentage: string;
  courses: string[];
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "University Of Kalyani",
      degree: "Master of Science In Data Science",
      period: "Nov 2022 – July 2024",
      percentage: "68.14%",
      courses: [
        "Mathematics & Statistics: Mathematical Foundation, Statistics & Data Analytics",
        "Programming & Algorithms: Algorithms & Data Structures, Scientific Computing, Advanced Programming",
        "Database & Systems: Database Management Systems, Operating Systems, Data Warehousing",
        "Artificial Intelligence & Machine Learning: Artificial Intelligence, Machine Learning & Deep Learning, Data Mining & Visualization",
        "Big Data & Analytics: Big Data Algorithms & Analytics"
      ]
    },
    {
      institution: "R.B.C Collage (W.B.S.U)",
      degree: "Bachelor of Science in Mathematics (Hons)",
      period: "July 2019 – July 2022",
      percentage: "80%",
      courses: [
        "Core Mathematics: Calculus, Real Analysis, Algebra, Multivariate Calculus, Numerical Methods",
        "Linear & Abstract Algebra: Group Theory, Ring Theory, Linear Algebra",
        "Applied Mathematics: Partial & Ordinary Differential Equations, Metric Spaces, Complex Analysis, Mechanics",
        "Probability & Statistics: Number Theory, Probability & Statistics, Linear Programming",
        "Programming & Logic: C Programming, Boolean Algebra, Automata Theory, Logic & Sets"
      ]
    },
    {
      institution: "Garulia Mill High School",
      degree: "12th With PCM(B)",
      period: "2017 – 2019",
      percentage: "75%",
      courses: []
    },
    {
      institution: "Garulia Gouri Shankar Jute Mills Hindi Vidyalaya High School",
      degree: "10th",
      period: "",
      percentage: "69%, Garulia",
      courses: []
    }
  ];
  
  return (
    <section id="education" className="section bg-secondary/40">
      <SectionHeading title="Education" />
      
      <div className="space-y-8">
        {educationItems.map((item, idx) => (
          <PageTransition key={item.institution} animation="fade-in-left" delay={`${0.1 + idx * 0.1}s`}>
            <div className="bg-white/50 rounded-lg p-6 border border-secondary/80 hover:border-primary/20 transition-all">
              <div className="mb-3">
                <h4 className="text-lg font-semibold">{item.institution}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <div className="text-primary/80 font-medium">{item.degree}</div>
                  <div className="hidden sm:block text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">{item.percentage}</div>
                </div>
                {item.period && <div className="text-sm text-muted-foreground">{item.period}</div>}
              </div>
              
              {item.courses.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {item.courses.map((course, courseIdx) => (
                    <li key={courseIdx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </PageTransition>
        ))}
      </div>
    </section>
  );
};

export default Education;
