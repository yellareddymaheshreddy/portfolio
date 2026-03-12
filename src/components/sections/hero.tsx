import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Photo from '../../../public/Mahesh.webp'

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
            {/* Background glowing orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse-slow"></div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] -z-10 opacity-40"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full animate-fade-in-up">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8 animate-float">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-md opacity-70"></div>
                        <Image
                            height={180}
                            width={180}
                            className="relative object-cover object-left-top h-40 w-40 md:h-48 md:w-48 rounded-full border-2 border-primary/50 shadow-glow-primary"
                            src={Photo}
                            alt="Mahesh Image"
                            placeholder="blur"
                        />
                    </div>
                    
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
                            Available for Freelance & Full-time Roles
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            Hi, I'm Mahesh <br className="hidden md:block"/>
                            <span className="text-gradient">Full Stack Developer</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
                            I craft premium, high-performance web applications. Specializing in modern React, Next.js, and robust backend architectures to build digital experiences that wow users.
                        </p>
                        
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                            <Button asChild size="lg" className="w-full sm:w-auto text-base font-semibold shadow-glow-primary hover:scale-105 transition-transform rounded-full px-8 py-6">
                                <Link href="#contact">Get in Touch</Link>
                            </Button>
                            <Button variant="outline" asChild size="lg" className="w-full sm:w-auto text-base font-semibold border-border bg-background/50 backdrop-blur-md hover:bg-accent/10 hover:text-accent hover:border-accent/50 hover:shadow-glow-accent transition-all rounded-full px-8 py-6">
                                <Link href="#projects">View Projects</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}