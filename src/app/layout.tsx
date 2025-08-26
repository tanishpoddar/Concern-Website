
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import ClientNavbar from '@/components/client-navbar';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/splash-screen';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// This metadata can't be exported from a client component.
// We will move it to a separate metadata export.
// export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Splash screen will be visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
          {/* Metadata can be placed here or exported from the page/layout as a const */}
          <title>CONCERN | Where You Discover Change</title>
          <meta name="description" content="A Non-Governmental Organisation (NGO) working in the field of addiction treatment and rehabilitation. We offer detoxification, psychotherapy, counseling, and community awareness programs." />
          <meta name="keywords" content="rehabilitation center, addiction treatment, NGO, de-addiction, substance abuse, Chennai" />
          <meta name="creator" content="CONCERN" />
          <meta name="publisher" content="CONCERN" />
          <meta property="og:title" content="CONCERN | Where You Discover Change" />
          <meta property="og:description" content="A leading NGO for addiction treatment and rehabilitation in Chennai." />
          <meta property="og:url" content="https://your-website-url.com" />
          <meta property="og:site_name" content="CONCERN" />
          <meta property="og:image" content="https://cijik.com/uploads/rehabs/1273.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="100" />
          <meta property="og:image:alt" content="CONCERN Logo" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CONCERN | Where You Discover Change" />
          <meta name="twitter:description" content="A leading NGO for addiction treatment and rehabilitation in Chennai." />
          <meta name="twitter:image" content="https://cijik.com/uploads/rehabs/1273.jpg" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <SplashScreen isVisible={isLoading} />
        <Header />
        <ClientNavbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
