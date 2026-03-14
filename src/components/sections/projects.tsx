import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolioConfig";

const projects = portfolioConfig.projects

export function Projects() {
  return (
    <section id="projects" className="py-24 scroll-m-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A selection of my recent projects, from personal experiments to production-ready scalable solutions.</p>
        </div>

        {/* Personal Projects */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-12 text-center text-primary/80">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.personal.map((project, idx) => (
              <Card key={project.title} className={`group overflow-hidden bg-card/60 backdrop-blur-md border-border/50 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col`} style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    placeholder="blur"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <Button variant="outline" asChild className="flex-1 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5">
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
                    <Button asChild className="flex-1 rounded-full shadow-glow-primary hover:scale-[1.02] transition-transform">
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
          <h3 className="text-3xl font-semibold mb-12 text-center text-accent/80">Client Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.client.map((project, idx) => (
              <Card key={project.title} className={`group overflow-hidden bg-card/60 backdrop-blur-md border-border/50 hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2 animate-fade-in-up flex flex-col`} style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    placeholder="blur"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full shadow-glow-accent hover:scale-[1.02] transition-transform bg-accent text-accent-foreground hover:bg-accent/90 mt-auto">
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
