
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  slug, 
  title, 
  date, 
  imageUrl, 
  index 
}) => {
  return (
    <PageTransition animation="fade-in" delay={`${0.1 + index * 0.05}s`}>
      <Link 
        to={`/blog/${slug}`} 
        className="group flex flex-col md:flex-row items-start md:items-center gap-4 py-4 border-b border-secondary/50 hover:bg-secondary/10 transition-colors px-2 rounded-md"
      >
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-1">
          <div className="text-sm text-muted-foreground">{date}</div>
          <h3 className="text-lg font-medium text-primary dark:text-white group-hover:text-primary/80 dark:group-hover:text-white/80 transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    </PageTransition>
  );
};

export default BlogCard;
