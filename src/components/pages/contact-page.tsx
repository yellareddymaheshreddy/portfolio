"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Loader2, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"


import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


const PHONE_NUMBER = "+91 63000 39607" 

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.log(error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <Link
        href="/"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        aria-label="Back to Home"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-pretty">Get in Touch</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Have a question or want to work together? Reach out via email, phone, or socials — I’ll respond as soon as
          possible.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <section aria-labelledby="contact-methods">
          <h2 id="contact-methods" className="sr-only">
            Contact methods
          </h2>
          <div className="grid gap-4">
            <Card className="transition-shadow hover:shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:yellareddymaheshreddy@gmail.com"
                      className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                      aria-label="Email: yellareddymaheshreddy at gmail dot com"
                    >
                      yellareddymaheshreddy@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New: Phone contact with tel: hyperlink */}
            <Card className="transition-shadow hover:shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                      aria-label={`Call ${PHONE_NUMBER}`}
                    >
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Available Mon–Fri, 9am–6pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/maheshreddyyellareddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                      aria-label="Open LinkedIn profile in a new tab"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com/yellareddymaheshreddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                      aria-label="Open GitHub profile in a new tab"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Card aria-labelledby="contact-form">
          <CardHeader>
            <CardTitle id="contact-form" className="text-balance">
              Send a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  aria-required="true"
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full" disabled={status.type === "loading"}>
                {status.type === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>

              {/* Accessibility: announce status updates to screen readers */}
              <p
                role="status"
                aria-live="polite"
                className={`text-center text-sm ${
                  status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                      ? "text-red-600"
                      : "text-muted-foreground"
                }`}
              >
                {status.message}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
