"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
        <Card className="max-w-2xl mx-auto p-8">
          <p className="text-center text-lg text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-6">
            <Button asChild>
              <Link href="mailto:yellareddymaheshreddy@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/maheshreddyyellareddy/">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}