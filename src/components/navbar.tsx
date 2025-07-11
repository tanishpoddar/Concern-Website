import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <div className="container flex h-auto min-h-14 max-w-screen-2xl flex-wrap items-center justify-center gap-y-2 py-2 md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
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
        <Button asChild>
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
}
