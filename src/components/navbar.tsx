import Link from 'next/link';
import { Button } from '@/components/ui/button';
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

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
            <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-6 text-lg font-medium">
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

        <Button asChild className="hidden lg:inline-flex">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
}
