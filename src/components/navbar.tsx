
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Send } from 'lucide-react';
import { ConcernLogo } from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/self-diagnosis', label: 'Self Diagnosis' },
  { href: '/sadd', label: 'SADD' },
  { href: '/therapy', label: 'Therapy' },
  { href: '/training', label: 'Training' },
  { href: '/mosje', label: 'MoSJE' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-x-8 lg:flex">
          <div className="flex items-center gap-x-4 text-sm font-medium">
            {navLinks.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-secondary text-primary font-semibold"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Button asChild className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact-us">
            <Send />
            Contact Us
          </Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between lg:hidden">
           <ConcernLogo className="text-2xl" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw]">
                <SheetHeader className="mb-6 text-left border-b pb-4">
                  <SheetTitle>
                    <ConcernLogo className="text-3xl" />
                  </SheetTitle>
                </SheetHeader>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-md px-4 py-3 text-base font-medium",
                        pathname === link.href
                          ? "bg-secondary text-primary"
                          : "text-muted-foreground hover:bg-secondary/50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <SheetClose asChild>
                    <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact-us">
                            <Send />
                            Contact Us
                        </Link>
                    </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
