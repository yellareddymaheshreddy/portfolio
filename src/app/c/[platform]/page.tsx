import { redirect ,notFound} from "next/navigation";

const links: Record<string, string> = {
  whatsapp: "https://wa.me/916300039697",
  linkedin: "https://www.linkedin.com/in/maheshreddyyellareddy/",
  github: "https://github.com/yellareddymaheshreddy",
  email:"mailto:yellareddymaheshreddy@gmail.com",
  tel:"tel:916300039607",
  wp:"https://wa.me/916300039607",
};

export default async function ContactRedirect({ params }: { params:Promise< { platform: string } >}) {
  const url = links[(await params).platform.toLowerCase()];

  if (!url) {
    // If unknown platform → fallback
    notFound();
  }

  redirect(url);
}

