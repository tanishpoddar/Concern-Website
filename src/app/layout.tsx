import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import dynamic from 'next/dynamic';
import PageTransition from '@/components/page-transition';
import { Inter } from 'next/font/google';
import ClientNavbar from '@/components/client-navbar';

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });
const BackToTop = dynamic(() => import('@/components/back-to-top'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'CONCERN | Where You Discover Change',
    template: '%s | CONCERN',
  },
  description: 'A Non-Governmental Organisation (NGO) working in the field of addiction treatment and rehabilitation. We offer detoxification, psychotherapy, counseling, and community awareness programs.',
  keywords: ['rehabilitation center', 'addiction treatment', 'NGO', 'de-addiction', 'substance abuse', 'Chennai'],
  creator: 'CONCERN',
  publisher: 'CONCERN',
  openGraph: {
    title: 'CONCERN | Where You Discover Change',
    description: 'A leading NGO for addiction treatment and rehabilitation in Chennai.',
    url: 'https://your-website-url.com',
    siteName: 'CONCERN',
    images: [
      {
        url: 'https://cijik.com/uploads/rehabs/1273.jpg',
        width: 400,
        height: 100,
        alt: 'CONCERN Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CONCERN | Where You Discover Change',
    description: 'A leading NGO for addiction treatment and rehabilitation in Chennai.',
    images: ['https://cijik.com/uploads/rehabs/1273.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <ClientNavbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
