import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-muted/40 text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                ConcernConnect
              </span>
            </Link>
            <p className="text-sm">Connecting communities for a better world.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#initiatives" className="hover:text-foreground">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-foreground">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#stories" className="hover:text-foreground">
                  Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-foreground">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-foreground">
                <Twitter />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-foreground">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ConcernConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
