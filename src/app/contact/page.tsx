import { ContactPage } from "@/components/pages/contact-page";
import type { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolioConfig";

export const metadata: Metadata = {
  title: `Contact - ${portfolioConfig.contact.name}`,
  description: `Get in touch with ${portfolioConfig.contact.name}. Full Stack Developer specializing in MERN stack and Next.js.`,
};

export default function Contact() {
  return <ContactPage />;
} 