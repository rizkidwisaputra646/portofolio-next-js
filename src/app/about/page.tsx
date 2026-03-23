import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Cpu, Globe, Rocket, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About | DevPorto",
  description: "Learn about my professional journey, engineering principles, and core values.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Scalability First",
      description: "Designing systems that grow with the business, anticipating bottlenecks before they happen.",
      icon: Rocket
    },
    {
      title: "Clean Architecture",
      description: "Writing maintainable, testable code that teams can understand and evolve easily.",
      icon: Code
    },
    {
      title: "User-Centric Performance",
      description: "Speed is a feature. I optimize for the critical rendering path and overall responsiveness.",
      icon: Zap
    },
    {
      title: "Security by Design",
      description: "Implementing robust security patterns from the ground up, not as an afterthought.",
      icon: Shield
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      {/* Intro Section */}
      <section className="flex flex-col gap-8 mb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Engineering with <span className="text-gradient">Purpose</span>.
        </h1>
        
        <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a software engineer who loves solving complex problems at the intersection of business logic and systems architecture. 
            My journey started with a curiosity for how things work under the hood, leading me to a deep passion for building robust digital ecosystems.
          </p>
          <p>
            Unlike a traditional CV, I view my work as a series of stories. Every project has its own set of constraints, trade-offs, and lessons. 
            I thrive in environments where engineering excellence is valued alongside pragmatic delivery.
          </p>
        </div>
      </section>

      {/* Values/Principles */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <Cpu className="text-indigo-500" />
          My Core Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl bg-accent/20 border border-border/50 hover:bg-accent/40 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <p.icon size={24} />
              </div>
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="glass rounded-[2rem] p-10 md:p-16 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -z-10" />
        <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Technical skills are just one part of the equation. I believe effective communication, cross-functional collaboration, 
          and a deep understanding of the "Why" behind every feature are what transform good software into great products.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all underline decoration-indigo-500 underline-offset-8"
        >
          Let's discuss your next project
          <ArrowLeft className="rotate-180" size={18} />
        </Link>
      </section>

      {/* Mini-Stack Recap */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Globe className="text-purple-500" />
          Quick Tech Summary
        </h2>
        <div className="flex flex-wrap gap-3">
          {['Frontend Architecture', 'Distributed Systems', 'Cloud Infrastructure', 'API Design', 'Performance Tuning', 'Database Optimization'].map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full border bg-background text-sm font-medium">{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
