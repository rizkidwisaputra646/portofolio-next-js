import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | DevPorto",
  description: "Technical notes, system design patterns, and engineering insights.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Technical <span className="text-gradient">Notes</span>.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          A collection of thoughts on system architecture, engineering challenges, and the occasional deep dive into new tech.
        </p>
      </section>

      <div className="flex flex-col gap-8">
        {posts.map((post, i) => (
          <Link 
            key={i} 
            href={`/blog/${post.slug}`}
            className="group block p-8 rounded-3xl bg-accent/20 border border-border/50 hover:bg-accent/40 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readingTime}</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold group-hover:text-indigo-500 transition-colors">{post.title}</h2>
              <p className="text-muted-foreground text-base leading-relaxed line-clamp-2">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-background border text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
