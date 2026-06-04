import { redirect ,notFound} from "next/navigation";
import { portfolioConfig } from "@/config/portfolioConfig";

const links: Record<string, string> = {
  whatsapp: `https://wa.me/${portfolioConfig.contact.phoneLink}`,
  linkedin: portfolioConfig.contact.linkedin,
  github: portfolioConfig.contact.github,
  email: `mailto:${portfolioConfig.contact.email}`,
  tel: `tel:${portfolioConfig.contact.phoneLink}`,
  wp: `https://wa.me/${portfolioConfig.contact.phoneLink}`,
};

export default async function ContactRedirect({ params }: { params:Promise< { platform: string } >}) {
  const url = links[(await params).platform.toLowerCase()];

  if (!url) {
    // If unknown platform → fallback
    notFound();
  }

  redirect(url);
}

