import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/40 text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
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
            <Link href="#" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin />
            </Link>
          </div>
           <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4" />
            <a href="mailto:concernrehab@gmail.com" className="hover:text-foreground">
              concernrehab@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-6 border-t pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CONCERN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
