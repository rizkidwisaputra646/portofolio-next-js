'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker, 
  SiTailwindcss,
  SiPython,
  SiGo
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Python', icon: SiPython },
  { name: 'Go', icon: SiGo },
];

export function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-8 border border-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Crafting <span className="text-gradient">Robust Systems</span> <br className="hidden md:block" />
          with Minimalist Design.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          I'm a Full-stack Engineer specializing in building scalable web applications. 
          Focused on clean code, system architecture, and exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/projects" 
            className="group inline-flex items-center justify-center gap-2 px-10 h-12 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
          >
            See My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/80 transition-all border border-border"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Hero Tech Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t w-full max-w-4xl"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8 text-center">
            Mastered Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {techStack.map(tech => (
               <div key={tech.name} className="flex flex-col items-center gap-2">
                 <tech.icon size={28} />
                 <span className="text-[10px] font-bold tracking-tighter uppercase">{tech.name}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}