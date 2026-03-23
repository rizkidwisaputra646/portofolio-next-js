import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Github', href: 'https://github.com', icon: Github },
  { name: 'Linkedin', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Email', href: 'mailto:your@email.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <Link href="/" className="font-bold text-xl tracking-tight">DevPorto</Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Building digital experiences with focus on performance, design, and user journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Main</span>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Technical</span>
            <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Social</span>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} DevPorto. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
