import { Metadata } from "next";
import { getAllProjects } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | DevPorto",
  description: "Detailed case studies of engineering challenges and system design patterns I've implemented.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          The <span className="text-gradient">Portfolio</span> <br /> 
          Archive.
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A documented history of complex engineering problems, technical trade-offs, and lessons learned across various systems.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group relative border rounded-3xl overflow-hidden bg-accent/30 hover:bg-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
            <div className="aspect-video relative overflow-hidden bg-slate-900 border-b">
               {project.image ? (
                 <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                 />
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-700" />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="p-8 pb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-2 py-1 rounded-md bg-background border">{t}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <Link 
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-indigo-500 transition-colors"
              >
                Case Study
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
