
import React from 'react';
import SectionHeading from './SectionHeading';
import PageTransition from './PageTransition';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Business & Analysis",
      skills: [
        "Business Strategy & Execution",
        "Market Research & Competitive Analysis",
        "Client Relationship Management",
        "Data-Driven Decision Making",
        "Risk Assessment & Mitigation",
        "Financial & Business Analytics",
        "MS PowerPoint",
        "MS Excel"
      ]
    },
    {
      title: "Programming & Scripting",
      skills: [
        "Python",
        "SQL",
        "R",
        "JavaScript",
        "C"
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "Keras",
        "OpenCV",
        "NLP (Spacy, NLTK)"
      ]
    },
    {
      title: "Big Data & Cloud Services",
      skills: [
        "AWS (SageMaker, Redshift, DynamoDB, S3, Lambda)",
        "Spark",
        "Hadoop"
      ]
    }
  ];
  
  return (
    <section id="skills" className="section">
      <SectionHeading title="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <PageTransition 
            key={category.title} 
            animation="fade-in" 
            delay={`${0.1 + idx * 0.1}s`}
          >
            <div className="bg-secondary/20 rounded-lg p-6 border border-secondary/50 hover:border-secondary/80 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <div key={skill} className="pill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </PageTransition>
        ))}
      </div>
    </section>
  );
};

export default Skills;
