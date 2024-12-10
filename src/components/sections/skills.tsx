import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Code, Server, Terminal, PenToolIcon as Tool } from 'lucide-react'
const skillCategories = [
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Recoil", "HTML", "CSS"], icon: Code },
  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Django", "PostgreSQL", "MySQL"], icon: Server },
  { title: "Programming", skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "R"], icon: Terminal },
  { title: "Tools & Others", skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Nginx", "Socket.io", "SEO"], icon: Tool },
] 

export function Skills() {
  return (
    <>
      <section id="skills" className="pb-10 scroll-m-36">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-6 hover:shadow-lg transition-all max-w-80 aspect-video  duration-300 hover:scale-105 bg-card/50">
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}