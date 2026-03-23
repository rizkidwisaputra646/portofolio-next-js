import { Metadata } from 'next';
import { Mail, Linkedin, Twitter, Github, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact | DevPorto",
  description: "Get in touch for collaborations, project inquiries, or technical discussions.",
};
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      name: "Email",
      value: "hello@yourdomain.com",
      href: "mailto:hello@yourdomain.com",
      icon: Mail,
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      name: "Twitter",
      value: "@yourhandle",
      href: "https://twitter.com/yourhandle",
      icon: Twitter,
      color: "text-sky-500",
      bg: "bg-sky-500/10"
    },
    {
      name: "GitHub",
      value: "github.com/yourprofile",
      href: "https://github.com/yourprofile",
      icon: Github,
      color: "text-slate-500",
      bg: "bg-slate-500/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Let's Start a <span className="text-gradient">Conversation</span>.
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Whether you have a specific project in mind or just want to discuss the latest in system architecture, I'm always open to connecting.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, i) => (
            <a 
              key={i} 
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2.5rem] bg-accent/20 border border-border/50 hover:bg-accent/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${method.bg} flex items-center justify-center ${method.color} mb-6 group-hover:scale-110 transition-transform`}>
                <method.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">{method.name}</h3>
              <p className="text-muted-foreground text-sm break-all">{method.value}</p>
            </a>
          ))}
          
          <div className="sm:col-span-2 p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 flex items-center gap-6">
             <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                <MapPin size={24} />
             </div>
             <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground text-sm">Working Remotely • GMT +7</p>
             </div>
          </div>
        </div>

        {/* Quick Contact Form Placeholder/Visual */}
        <div className="glass rounded-[3rem] p-10 md:p-12 border-primary/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -z-10" />
           <h2 className="text-2xl font-bold mb-8">Send a Quick Message</h2>
           <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                Send Message
                <Send size={18} />
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
