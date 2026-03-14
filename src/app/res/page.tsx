import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahesh — Resume",
  description: "Computer Science Student | Developer | My latest resume.",

  openGraph: {
    title: "Mahesh — Resume",
    description: "My latest resume.",
    type: "article",
    url: "https://ymaheshreddy.vercel.app/res",
    images: ["https://ymaheshreddy.vercel.app/resume-preview.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mahesh YR — Resume",
    description: "My latest resume.",
    images: ["https://ymaheshreddy.vercel.app/resume-preview.png"],
  },
};

export default function ResumeRedirect() {
  return (
    <html>
      <head>
        {/* Auto-redirect instantly to your PDF */}
        <meta httpEquiv="refresh" content="0; url=https://ymaheshreddy.vercel.app/Mahesh-Resume.pdf" />
      </head>
      <body>
        <p>Redirecting to resume...</p>
      </body>
    </html>
  );
}