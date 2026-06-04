import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolioConfig";

export const metadata: Metadata = {
  title: `${portfolioConfig.contact.name} — Resume`,
  description: "Computer Science Student | Developer | My latest resume.",

  openGraph: {
    title: `${portfolioConfig.contact.name} — Resume`,
    description: "My latest resume.",
    type: "article",
    url: `${portfolioConfig.contact.domain}/res`,
    images: [`${portfolioConfig.contact.domain}/resume-preview.png`],
  },

  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.contact.name} — Resume`,
    description: "My latest resume.",
    images: [`${portfolioConfig.contact.domain}/resume-preview.png`],
  },
};

export default function ResumeRedirect() {
  return (
    <html>
      <head>
        {/* Auto-redirect instantly to your PDF */}
        <meta httpEquiv="refresh" content={`0; url=${portfolioConfig.contact.domain}${portfolioConfig.contact.resume}`} />
      </head>
      <body>
        <p>Redirecting to resume...</p>
      </body>
    </html>
  );
}