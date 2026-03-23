import { Metadata } from "next";
import { getBlogPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/components/mdx-renderer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return {
    title: `${post?.title || 'Blog Post'} | DevPorto`,
    description: post?.description || 'Technical article.',
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700 slide-in-from-bottom-10">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        Back to notes
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{post.readingTime}</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
             <button className="flex items-center gap-2 hover:text-primary transition-colors">
               <Share2 size={14} />
               <span>Share</span>
             </button>
          </div>
        </div>
      </header>

      <div className="prose prose-invert prose-indigo max-w-none">
        <MdxRenderer source={post.content} />
      </div>

      <footer className="mt-24 pt-12 border-t flex flex-col items-center gap-8 text-center">
         <div className="space-y-4">
            <h3 className="font-bold text-xl">Enjoyed this note?</h3>
            <p className="text-muted-foreground max-w-md">
               I regularly write about system design, performance, and engineering leadership. Subscribe to my newsletter to stay updated.
            </p>
         </div>
         <div className="flex w-full max-w-md gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-full border bg-accent/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
               Subscribe
            </button>
         </div>
      </footer>
    </article>
  );
}
