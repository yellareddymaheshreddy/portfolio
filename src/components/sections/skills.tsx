import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Code, Server, Terminal, PenToolIcon as Tool } from 'lucide-react'

const skillCategories = [
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Recoil", "HTML", "CSS"], icon: Code, delay: "delay-[100ms]" },
  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Django", "PostgreSQL", "MySQL"], icon: Server, delay: "delay-[200ms]" },
  { title: "Programming", skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "R"], icon: Terminal, delay: "delay-[300ms]" },
  { title: "Tools & Others", skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Nginx", "Socket.io", "SEO"], icon: Tool, delay: "delay-[400ms]" },
] 

export function Skills() {
  return (
    <section id="skills" className="pb-24 pt-10 scroll-m-36 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Technologies I leverage to build robust, scalable, and visually stunning applications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className={`p-8 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-md border-border/50 animate-fade-in-up ${category.delay} group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow-primary">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground border-transparent px-3 py-1.5 transition-colors rounded-full font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}