import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import BackToTop from '@/components/back-to-top';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'CONCERN | Where you discover change',
  description: 'A Non-Governmental Organisation (NGO) working in the field of addiction - rehabilitation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${ptSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <Navbar />
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
