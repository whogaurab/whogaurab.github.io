
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import PageTransition from '@/components/PageTransition';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  const currentIndex = post ? blogPosts.findIndex(p => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    } else {
      document.title = `${post.title} | Gaurab's Blog`;
      window.scrollTo(0, 0);
    }
  }, [post, navigate, slug]);
  
  if (!post) return null;
  
  // Convert markdown content to HTML (more comprehensive version)
  const renderMarkdown = (content: string) => {
    let html = content;
    
    // Convert headings
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mt-5 mb-2">$1</h3>');
    
    // Convert bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert lists with proper spacing and formatting
    const replaceList = (match: string) => {
      const items = match.split('\n- ').filter(Boolean);
      if (items.length === 0) return match;
      
      return '<ul class="list-disc pl-6 space-y-2 my-4">\n' + 
        items.map(item => `<li>${item.trim()}</li>`).join('\n') + 
        '\n</ul>';
    };
    
    // Find list blocks and replace them
    const listPattern = /(?:^|\n)- .+(?:\n- .+)*/g;
    html = html.replace(listPattern, replaceList);
    
    // Convert paragraphs (with better handling)
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(para => {
      if (
        para.startsWith('<h1') || 
        para.startsWith('<h2') || 
        para.startsWith('<h3') || 
        para.startsWith('<ul') ||
        para.trim() === ''
      ) {
        return para;
      }
      return `<p class="my-4 text-muted-foreground">${para}</p>`;
    }).join('\n');
    
    return html;
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background thin-scrollbar">
      <Header />
      
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 md:px-6 py-8">
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Back to all posts</span>
            </Link>
          </div>
          
          <PageTransition animation="fade-in">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary dark:text-white">{post.title}</h1>
              <div className="text-muted-foreground">{post.date}</div>
            </div>
            
            <div className="mb-10 h-[250px] md:h-[350px] overflow-hidden rounded-lg">
              <img 
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="content prose prose-sm md:prose-base max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
            
            <div className="mt-12 border-t border-secondary/50 pt-6">
              <Pagination>
                <PaginationContent>
                  {prevPost && (
                    <PaginationItem>
                      <PaginationPrevious href={`/blog/${prevPost.slug}`} />
                    </PaginationItem>
                  )}
                  
                  <PaginationItem>
                    <PaginationLink href="/blog">Blog Home</PaginationLink>
                  </PaginationItem>
                  
                  {nextPost && (
                    <PaginationItem>
                      <PaginationNext href={`/blog/${nextPost.slug}`} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </PageTransition>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
