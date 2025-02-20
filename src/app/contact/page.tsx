import { ContactPage } from "@/components/pages/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Mahesh Reddy",
  description: "Get in touch with Mahesh Reddy. Full Stack Developer specializing in MERN stack and Next.js.",
};

export default function Contact() {
  return <ContactPage />;
} 