import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahesh Reddy - Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack and Next.js. Computer Science student at BIET Hyderabad with expertise in building user-friendly, production-ready websites.',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React.js, Node.js, Web Development, BIET Hyderabad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maheshreddy.online',
    title: 'Mahesh Reddy - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack and Next.js',
    siteName: 'Mahesh Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahesh Reddy - Full Stack Developer',
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
        <link rel="canonical" href="https://maheshreddy.online" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mahesh Reddy',
              url: 'https://maheshreddy.online',
              sameAs: [
                'https://github.com/yellareddymaheshreddy',
                'https://linkedin.com/in/maheshreddyyellareddy'
              ],
              jobTitle: 'Full Stack Developer',
              alumniOf: 'BIET Hyderabad',
              knowsAbout: ['Web Development', 'MERN Stack', 'Next.js', 'React.js']
            })
          }}
        />
      </head>
      <body className={inter.className}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}