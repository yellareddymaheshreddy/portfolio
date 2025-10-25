import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/projects/mybiet.webp";
import tvault from "../../../public/projects/tvault.png";
import autoskaler from "../../../public/projects/autoskaler.png";
import ecobil from "../../../public/projects/ecobill.png";
import loopify from "../../../public/projects/loopify.png";
// import ecommerceLogo from "../../../public/ecommerce.webp";

const projects = {
  personal: [
    {
      title: "mybiet.me",
      description: "A Next.js-powered platform with authentication and user management",
      image: logo,//https://mybiet.me/icons/MyBiet-BlackBG-512.png
      github: "https://github.com/yellareddymaheshreddy",
      demo: "https://biet.mahs.me",
      tech: ["Next.js", "React", "Tailwind CSS", "Authentication"]
    },
    {
      title:"Ecobill",
      description:"A billing system for businesses",
      image:ecobil,
      github:"https://github.com/yellareddymaheshreddy",
      demo:"https://b.mahs.me",
      tech:["Next.js","React","Tailwind CSS","Node.js","Postgress"]
    },
    {
      title: "T-Vault",
      description: "A Text sharing platform without any signin lablalalalalsd asdfj asdlkfjasf",
      image: tvault,
      github: "https://github.com/yellareddymaheshreddy",
      demo: "https://tvault.mahs.me",
      tech: ["Next.js", "React", "Tailwind CSS", "Redis"]
    },
    // Add more personal projects here
  ],
  client: [
    {
      "title": "Autoskaler",
      "description": "A company portfolio project with blogs and user roles",
      "image": autoskaler, // Replace with actual image link
      "demo": "https://autoskaler.com",
      "tech": ["Next.js", "React", "Node.js", "Postgress"]
    },
    {
      "title": "Loopify",
      "description": "A website development and marketing company portfolio and services platform",
      "image": loopify, // Replace with actual image link
      "demo": "https://loopifymedia.com",
      "tech": ["Next.js", "React", "Tailwind CSS", "Node.js"]
    }
    // Add more client projects here
  ]
};

export function Projects() {
  return (
    <section id="projects" className="py-10 scroll-m-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        
        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {projects.personal.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    placeholder="blur"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" asChild>
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
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

        {/* Client Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Client Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {projects.client.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    placeholder="blur"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
