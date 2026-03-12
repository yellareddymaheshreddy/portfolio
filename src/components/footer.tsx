import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 relative z-10 border-t border-border/50">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/yellareddymaheshreddy"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maheshreddyyellareddy/"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:yellareddymaheshreddy@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            aria-label="Send an email to yellareddymaheshreddy@gmail.com"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Mahesh Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
