import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/mybiet.webp";

const projects = [
  {
    title: "mybiet.me",
    description: "A Next.js-powered platform with authentication and user management",
    image: logo,//https://mybiet.me/icons/MyBiet-BlackBG-512.png
    github: "https://github.com/yellareddymaheshreddy",
    demo: "https://mybiet.me",
    tech: ["Next.js", "React", "Tailwind CSS", "Authentication"]
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10 scroll-m-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden max-w-80">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  placeholder="blur"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}