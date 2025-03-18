
import React from 'react';
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-down" | "scale-in" | "fade-in-right" | "fade-in-left";
  delay?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children,
  className,
  animation = "fade-in",
  delay = "0s",
}) => {
  return (
    <div
      className={cn(
        `animate-${animation}`,
        className,
      )}
      style={{ 
        animationDelay: delay,
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
