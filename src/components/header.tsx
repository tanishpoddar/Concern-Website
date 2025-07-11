import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ConcernLogo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/our-team', label: 'Our Team' },
  { href: '/events', label: 'Events' },
  { href: '/self-diagnosis', label: 'Self Diagnosis' },
  { href: '/sadd', label: 'SADD' },
  { href: '/therapy', label: 'Therapy' },
  { href: '/training', label: 'Training' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <ConcernLogo className="text-2xl" />
            <p className="text-xs text-muted-foreground">where you discover change</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                   <ConcernLogo className="text-3xl" />
                </Link>
                {navLinks.map((link) => (
                   <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
                 <Button asChild>
                    <Link href="/contact-us">Contact Us</Link>
                  </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
