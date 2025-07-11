import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ConcernLogo } from './logo';

export default function Footer() {
  return (
    <footer className="bg-muted/40 text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-1">
             <ConcernLogo className="mb-4 text-2xl justify-center md:justify-start"/>
            <p className="text-sm">
              A Non-Governmental Organisation (NGO) working in the field of addiction - rehabilitation.
            </p>
             <div className="mt-4 flex justify-center space-x-4 md:justify-start">
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
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Registered Office</h3>
            <address className="space-y-2 not-italic text-sm">
              <p className="flex items-start justify-center md:justify-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                <span>CONCERN, Plot No 60, First Cross Street, Kanakadhara Nagar, Valasaravakkam, Chennai - 600 087.</span>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Rehabilitation Centre</h3>
            <address className="space-y-2 not-italic text-sm">
              <p className="flex items-start justify-center md:justify-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                <span>CONCERN, Zonta Resource Centre, No.5, Manikam nagar, Noothancheri, Madambakam, Chennai - 126.</span>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
             <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center md:justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href="mailto:concernrehab@gmail.com" className="hover:text-foreground">
                    concernrehab@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>9840800816</span>
                </p>
              </div>
          </div>

        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CONCERN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
