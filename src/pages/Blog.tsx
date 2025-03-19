
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
      
      <main className="flex-1">
        <section className="section">
          <PageTransition animation="fade-in">
            <SectionHeading title="Blog" />
          </PageTransition>
          
          <div className="mt-8 space-y-2">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                date={post.date}
                imageUrl={post.imageUrl}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
