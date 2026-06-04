import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Chat } from '@/components/Chat';
import { portfolioConfig } from '@/config/portfolioConfig';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${portfolioConfig.contact.name} - Full Stack Developer`,
  description: 'Full Stack Developer specializing in MERN stack and Next.js. Computer Science student at BIET Hyderabad with expertise in building user-friendly, production-ready websites.',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React.js, Node.js, Web Development, BIET Hyderabad',
  metadataBase: new URL(portfolioConfig.contact.domain),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: portfolioConfig.contact.domain,
    title: `${portfolioConfig.contact.name} - Full Stack Developer`,
    description: 'Full Stack Developer specializing in MERN stack and Next.js',
    siteName: `${portfolioConfig.contact.name} Portfolio`,
    images: [
      {
        url: `${portfolioConfig.contact.domain}/portfolio-dark.png`,
        width: 1200,
        height: 630,
        alt: `${portfolioConfig.contact.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioConfig.contact.name} - Full Stack Developer`,
    description: 'Full Stack Developer specializing in MERN stack and Next.js',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className='dark'>
      <head>
        <link rel="canonical" href={portfolioConfig.contact.domain} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: portfolioConfig.contact.name,
              url: portfolioConfig.contact.domain,
              sameAs: [
                portfolioConfig.contact.github,
                portfolioConfig.contact.linkedin
              ],
              jobTitle: 'Full Stack Developer',
              alumniOf: 'BIET Hyderabad',
              knowsAbout: ['Web Development', 'MERN Stack', 'Next.js', 'React.js']
            })
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-full relative bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col overflow-x-hidden w-full relative">
          <Navbar />
          <main className="flex-1 overflow-x-hidden w-full">{children}</main>
          {portfolioConfig.dynamicSections.chatbot && <Chat />}
          <Footer />
        </div>
      </body>
    </html>
  );
}