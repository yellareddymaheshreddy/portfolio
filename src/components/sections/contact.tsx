"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Loader2 } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 rounded-md border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 rounded-md border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-2 rounded-md border bg-background min-h-[150px]"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={status.type === "loading"}>
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
              {status.message && (
                <p
                  className={`text-center ${
                    status.type === "success"
                      ? "text-green-500"
                      : status.type === "error"
                      ? "text-red-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <div className="flex justify-center gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="mailto:yellareddymaheshreddy@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email Direct
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/maheshreddyyellareddy/">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}