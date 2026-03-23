import { Metadata } from 'next';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';
import { 
  SiTypescript, SiJavascript, SiGo, SiPython, SiRust, SiSwift,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiReactquery, SiRedux,
  SiNodedotjs, SiExpress, SiNestjs, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiClickhouse, SiPrisma, SiDrizzle,
  SiDocker, SiKubernetes, SiTerraform, SiGit
} from 'react-icons/si';

import { FaAws } from 'react-icons/fa'; // ✅ TAMBAH INI

export const metadata: Metadata = {
  title: "Skills & Expertise | DevPorto",
  description: "A comprehensive overview of my technical stack, from frontend architecture to cloud infrastructure.",
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Go", icon: SiGo },
      { name: "Python", icon: SiPython },
      { name: "Rust", icon: SiRust },
      { name: "Swift", icon: SiSwift }
    ]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Redux", icon: SiRedux }
    ]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "GraphQL", icon: SiGraphql },
      { name: "gRPC" },
      { name: "WebSockets" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Clickhouse", icon: SiClickhouse },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle }
    ]
  },
  {
    title: "Infrastructure & Tools",
    icon: Terminal,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
      { name: "Git", icon: SiGit },
      { name: "CI/CD" }
    ]
  },
  {
    title: "Engineering Concepts",
    icon: Settings,
    skills: [
      { name: "System Design" },
      { name: "Microservices" },
      { name: "TDD" },
      { name: "Clean Code" },
      { name: "OOP" },
      { name: "Functional Programming" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          The <span className="text-gradient">Tech Stack</span> <br /> 
          Behind the Solutions.
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          My toolbox is constantly evolving, but these are the core technologies and concepts I use daily to build high-quality software.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="group p-8 rounded-[2.5rem] bg-accent/20 border border-border/50 hover:bg-accent/40 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform duration-500">
                <category.icon size={24} />
              </div>
              <h2 className="font-bold text-xl">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <div key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border text-xs font-semibold tracking-wide hover:border-indigo-500/50 hover:text-indigo-500 transition-colors">
                  {skill.icon && <skill.icon size={14} className="opacity-70" />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-32 pt-20 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">Always Learning</h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Software engineering is a lifelong journey. I spend a significant portion of my time researching new architectures, 
            experimenting with emerging languages, and contributing to open source.
          </p>
        </div>
        
        <div className="flex-1 glass p-8 rounded-[2rem] border-indigo-500/20">
           <h3 className="font-bold mb-4">Currently Exploring:</h3>
           <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 transition-all group-hover:scale-150" />
                <span>WebAssembly (WASM) for high-performance edge computing</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Advanced AI integrations in developer workflows</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Zero-knowledge proofs in distributed identity</span>
              </li>
           </ul>
        </div>
      </section>
    </div>
  );
}
