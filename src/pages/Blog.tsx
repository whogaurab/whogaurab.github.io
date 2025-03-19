
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import SectionHeading from '@/components/SectionHeading';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import PageTransition from '@/components/PageTransition';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background thin-scrollbar">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-6 py-8 w-full">
        <PageTransition animation="fade-in">
          <h1 className="text-3xl font-bold mb-8 text-primary dark:text-white">Blog</h1>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`} 
                className="group block"
              >
                <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-border hover:bg-secondary/10 transition-colors rounded-md">
                  <div className="flex-shrink-0 w-full md:w-32 h-32 overflow-hidden rounded-md">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                    <h3 className="text-lg font-medium text-primary dark:text-white group-hover:text-primary/80 dark:group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
