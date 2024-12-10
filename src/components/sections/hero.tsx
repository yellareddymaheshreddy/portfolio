import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Photo from '../../../public/Mahesh.webp'

export function Hero() {
    return (
        <>
            <section className="relative overflow-hidden pb-48 pt-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-center mb-10">
                    <Image
                        height={160}
                        width={160}
                        className="object-cover object-left-top h-40 w-40 rounded-full shadow-lg dark:grayscale"
                        src={Photo}
                        alt="Mahesh Image"
                        placeholder="blur"
                    />
                </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl xs:text-4xl font-bold tracking-tight sm:text-6xl">
                            Full Stack Developer
                        </h1>
                        <div className="absolute -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                            <div className="relative aspect-[1155/678] w-[20rem] md:w-[26rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30" />
                        </div>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Computer Science student passionate about building sleek, user-friendly websites with modern tech.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild>
                                <Link href="#contact">Get in Touch</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#projects">View Projects</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}