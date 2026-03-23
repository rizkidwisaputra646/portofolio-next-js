import { Hero } from "@/components/home/hero";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { 
  SiNextdotjs, 
  SiGo, 
  SiKubernetes, 
  SiRedis, 
  SiPython, 
  SiClickhouse, 
  SiApachekafka, 
  SiReact,
  SiOpenai,
  SiElasticsearch,
  SiVercel,
  SiTerraform,
  SiSolidity,
  SiEthereum,
  SiTailwindcss,
  SiFramer
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const featuredProjects = [
  {
    title: "E-Commerce Architecture",
    description: "A high-performance microservices architecture for a scaling retail platform.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Go", icon: SiGo },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Redis", icon: SiRedis },
    ],
    link: "/projects/ecommerce",
    image: "/projects/ecommerce.png"
  },
  {
    title: "Real-time Analytics Engine",
    description: "Processing millions of events per second with low latency using Clickhouse and Kafka.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Clickhouse", icon: SiClickhouse },
      { name: "Kafka", icon: SiApachekafka },
      { name: "React", icon: SiReact },
    ],
    link: "/projects/analytics",
    image: "/projects/analytics.png"
  },
  {
    title: "AI-Powered Search Platform",
    description: "Distributed search infrastructure with RAG capabilities and vector embeddings.",
    tech: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Vercel", icon: SiVercel },
      { name: "React", icon: SiReact },
    ],
    link: "/projects/ai-search",
    image: "/projects/ai-search.png"
  },
  {
    title: "Cloud-Native CRM",
    description: "A serverless CRM platform built for high availability and global scale.",
    tech: [
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
      { name: "Go", icon: SiGo },
      { name: "Next.js", icon: SiNextdotjs },
    ],
    link: "/projects/cloud-crm",
    image: "/projects/cloud-crm.png"
  },
  {
    title: "Supply Chain Blockchain",
    description: "Ensuring transparency in global logistics using Ethereum and smart contracts.",
    tech: [
      { name: "Solidity", icon: SiSolidity },
      { name: "Ethereum", icon: SiEthereum },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    link: "/projects/supply-chain",
    image: "/projects/supply-chain.png"
  },
  {
    title: "Vibe Portfolio Engine",
    description: "The very engine powering this portfolio, optimized for core web vitals.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer", icon: SiFramer },
      { name: "React", icon: SiReact },
    ],
    link: "/projects/porto-v2",
    image: "/projects/porto-v2.png"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Selection of my most impactful engineering challenges.</p>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-all">
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <div key={i} className="group relative border rounded-3xl overflow-hidden bg-accent/30 hover:bg-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden bg-slate-900 border-b">
                 <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <div key={t.name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground group-hover:text-primary transition-colors">
                      <t.icon size={14} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{t.name}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <Link 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-indigo-500 transition-colors"
                >
                  Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="glass rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Got a challenge for me?</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            I'm currently open for new projects and collaborations. Let's build something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 h-12 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center hover:opacity-90 transition-all"
            >
              Start a Conversation
            </Link>
            <Link 
              href="/blog" 
              className="px-8 h-12 rounded-full glass font-medium flex items-center justify-center hover:bg-accent/50 transition-all"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
