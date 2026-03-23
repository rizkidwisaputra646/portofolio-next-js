import { Metadata } from "next";
import { getProjectBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/components/mdx-renderer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return {
    title: `${project?.title || 'Project'} | DevPorto`,
    description: project?.description || 'Detailed case study.',
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700 slide-in-from-bottom-10">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-indigo-500 bg-indigo-500/10 px-3 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          {project.title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <time>{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={14} />
            <span>Case Study</span>
          </div>
        </div>
      </header>

      {project.image && (
        <div className="aspect-video relative overflow-hidden rounded-[2.5rem] bg-slate-950 mb-16 border border-white/5">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      )}

      {!project.image && (
        <div className="aspect-video relative overflow-hidden rounded-[2.5rem] bg-slate-950 mb-16 border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-2xl font-mono italic">Primary Visualization</span>
          </div>
        </div>
      )}

      <div className="prose prose-invert prose-indigo max-w-none">
        <MdxRenderer source={project.content} />
      </div>

      <footer className="mt-32 pt-16 border-t">
        <div className="glass p-12 rounded-[2.5rem] flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl font-bold">Interested in the results?</h2>
          <p className="text-muted-foreground max-w-lg">
             Whether you're looking for a deep technical review or want to discuss a similar implementation, I'm always open to talking shop.
          </p>
          <Link 
            href="/contact" 
            className="px-8 h-12 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center hover:opacity-90 transition-all px-12"
          >
            Start a Conversation
          </Link>
        </div>
      </footer>
    </article>
  );
}
