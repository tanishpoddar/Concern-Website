import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const navLinks = [
  { href: '/our-team', label: 'Our Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/self-diagnosis', label: 'Self Diagnosis' },
  { href: '/sadd', label: 'SADD' },
  { href: '/therapy', label: 'Therapy' },
  { href: '/training', label: 'Training' },
  { href: '/mosje', label: 'MoSJE' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-auto min-h-16 max-w-screen-2xl flex-wrap items-center justify-center gap-y-2 py-2 md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact-us">
            <Send />
            Contact Us
          </Link>
        </Button>
      </div>
    </nav>
  );
}
