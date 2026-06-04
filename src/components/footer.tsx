import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { portfolioConfig } from "@/config/portfolioConfig"


export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 relative z-10 border-t border-border/50">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href={portfolioConfig.contact.github}
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href={portfolioConfig.contact.linkedin}
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href={`mailto:${portfolioConfig.contact.email}`}
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label={`Send an email to ${portfolioConfig.contact.email}`}
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} {portfolioConfig.contact.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
