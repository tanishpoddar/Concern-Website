
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Send } from 'lucide-react';
import { ConcernLogo } from './logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/self-diagnosis', label: 'Self Diagnosis' },
  { href: '/sadd', label: 'SADD' },
  { href: '/therapy', label: 'Therapy' },
  { href: '/training', label: 'Training' },
  { href: '/mosje', label: 'MoSJE' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden flex-wrap items-center justify-center gap-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
        <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact-us">
            <Send />
            Contact Us
          </Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
            <ConcernLogo className='text-2xl' />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <ConcernLogo className="mb-4 text-3xl" />
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
