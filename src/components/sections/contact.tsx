"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Loader2, Send, MapPin } from "lucide-react";


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
    <section id="contact" className="py-24 relative scroll-m-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="animate-fade-in-up space-y-8 lg:pr-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s build something <span className="text-gradient">epic.</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Whether you have a groundbreaking idea, need an expert full-stack developer, or just want to connect, I&apos;m always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a href="mailto:yellareddymaheshreddy@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow-primary transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email Me</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">yellareddymaheshreddy@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/maheshreddyyellareddy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Connect on LinkedIn</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-[#0A66C2] transition-colors">Mahesh Reddy</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="text-lg font-semibold text-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in-up delay-[200ms]">
            <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/50 border border-border/50 rounded-xl p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Arjun Reddy"
                    required
                  />
                </div>
                  
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-border/50 rounded-xl p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="arjun@gmail.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background/50 border border-border/50 rounded-xl p-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-foreground placeholder:text-muted-foreground min-h-[160px] resize-y"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={status.type === "loading"}
                    className="w-full rounded-xl py-6 text-base font-bold shadow-glow-primary hover:scale-[1.02] transition-transform bg-primary text-primary-foreground"
                  >
                    {status.type === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send inquiry <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  
                  {status.message && (
                    <div className={`mt-4 p-3 rounded-lg text-sm font-medium text-center border ${
                      status.type === "success" 
                        ? "bg-green-500/10 text-green-500 border-green-500/20" 
                        : status.type === "error" 
                          ? "bg-red-500/10 text-red-500 border-red-500/20" 
                          : "bg-muted/50 text-muted-foreground border-border/50"
                    }`}>
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}