import { Code, Server, Terminal, PenToolIcon as Tool } from 'lucide-react'
import logo from "@/../public/projects/mybiet.webp";
import tvault from "@/../public/projects/tvault.png";
import dctech from "@/../public/projects/dctech.png"
import ecobil from "@/../public/projects/ecobill.png";
import subhasampada from "@/../public/projects/subhasampada.png";
import topgunstudios from "@/../public/projects/topgunstudio.png";




export const portfolioConfig = {
    contact: {
        email: "yellareddymaheshreddy@gmail.com",
        phone: "+91 63000 39607",
        linkedin: "https://linkedin.com/in/maheshreddyyellareddy",
        github: "https://github.com/yellareddymaheshreddy",
        resume: "/Mahesh-Resume.pdf"
    },

    projects: {
        personal: [
            {
                title: "mybiet.me",
                description:
                    "A Next.js powered platform with authentication and user management features.",
                image: logo,
                github: "https://github.com/yellareddymaheshreddy",
                demo: "https://mybiet.vercel.app",
                tech: ["Next.js", "React", "Tailwind CSS", "Authentication"],
                features: [
                    "Secure authentication system",
                    "User account management",
                    "Responsive dashboard UI",
                    "Modern Next.js architecture"
                ]
            },
            {
                title: "Ecobill",
                description:
                    "A billing and invoice management system designed for small businesses.",
                image: ecobil,
                github: "https://github.com/yellareddymaheshreddy",
                demo: "https://eco-bill.vercel.app",
                tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
                features: [
                    "Invoice and billing management",
                    "Business transaction tracking",
                    "Responsive UI for business users",
                    "Modern full-stack architecture"
                ]
            },
            {
                title: "T-Vault",
                description:
                    "A simple text sharing platform that allows users to quickly share notes without signup.",
                image: tvault,
                github: "https://github.com/yellareddymaheshreddy",
                demo: "https://tsvault.vercel.app",
                tech: ["Next.js", "React", "Tailwind CSS", "Redis"],
                features: [
                    "Instant text sharing links",
                    "No signup required",
                    "Fast Redis based storage",
                    "Minimal and clean interface"
                ]
            }
        ],

        client: [
            {
                title: "Subha Sampada - Real Estate Website",
                description:
                    "Modern real estate website showcasing Shamshine City @ Kothur.",
                image: subhasampada,
                demo: "https://subhasampada.com",
                tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                features: [
                    "Responsive real estate landing pages",
                    "Premium location advantage section",
                    "Project gallery and highlights",
                    "Lead generation contact forms",
                    "SEO optimized pages"
                ]
            },
            {
                title: "Top Gun Studios - Web Development Agency",
                description:
                    "A modern agency website presenting web development services, portfolio projects, and company expertise.",
                image: topgunstudios,
                demo: "https://topgunstudio.com",
                tech: ["Framer", "CMS", "Responsive Design"],
                features: [
                    "Modern agency landing page design",
                    "Service showcase for web development",
                    "Interactive portfolio and project case studies",
                    "Smooth animations and responsive layout",
                    "CMS powered content management"
                ]
            },
            {
                title: "DcTech - Cloud Hosting Platform",
                description:
                    "Cloud hosting platform providing virtual machines and scalable cloud infrastructure services.",
                image: dctech,
                demo: "https://dctech.cloud",
                tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
                features: [
                    "Cloud infrastructure service landing pages",
                    "Virtual machine deployment platform",
                    "Service plans and pricing sections",
                    "Scalable cloud hosting architecture",
                    "Secure backend with modern web stack"
                ]
            }
        ]

    }
};

export const skillCategories = [
    { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Recoil", "HTML", "CSS"], icon: Code, delay: "delay-[100ms]" },
    { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Django", "PostgreSQL", "MySQL"], icon: Server, delay: "delay-150" },
    { title: "Programming", skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "R"], icon: Terminal, delay: "delay-[300ms]" },
    { title: "Tools & Others", skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Nginx", "Socket.io", "SEO"], icon: Tool, delay: "delay-[400ms]" },
] 