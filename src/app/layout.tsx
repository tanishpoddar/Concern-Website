
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import ClientNavbar from '@/components/client-navbar';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';
import AppClientShell from '@/components/app-client-shell';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteConfig = {
  name: 'CONCERN',
  title: 'CONCERN | Where You Discover Change',
  url: 'https://your-website-url.com',
  description: 'A Non-Governmental Organisation (NGO) working in the field of addiction treatment and rehabilitation. We offer detoxification, psychotherapy, counseling, and community awareness programs.',
  logo: 'https://cijik.com/uploads/rehabs/1273.jpg',
  keywords: "rehabilitation center, addiction treatment, NGO, de-addiction, substance abuse, Chennai",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.logo,
        width: 400,
        height: 100,
        alt: `${siteConfig.name} Logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  icons: {
    icon: '/favicon.ico',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <AppClientShell>
          {children}
        </AppClientShell>
      </body>
    </html>
  );
}
