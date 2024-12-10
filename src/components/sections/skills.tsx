import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const skillCategories = [
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Recoil", "Html","Css"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Fast Api", "Django", "postgres", "MySQL"] },
  { title: "Programming", skills: ["C", "C++", "Java","Js","Ts","Python", "R"] },
  { title: "Tools & Others", skills: ["Git", "Docker", "AWS","Vercel","Linux","Nginx", "Socket.io","SEO"] },
]; 

export function Skills() {
  return (
    <>
      <section id="skills" className="pb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-8 hover:shadow-lg transition-shadow max-w-80 aspect-video">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
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