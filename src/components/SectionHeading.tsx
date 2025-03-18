
import React from 'react';
import { cn } from "@/lib/utils";
import PageTransition from './PageTransition';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className }) => {
  return (
    <PageTransition animation="slide-up" delay="0.1s">
      <div className={cn("mb-8", className)}>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
      </div>
    </PageTransition>
  );
};

export default SectionHeading;
