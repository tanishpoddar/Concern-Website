'use client';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ConcernLogo } from './logo';

const XLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-6 w-6"
      aria-label="X formerly Twitter"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
    </svg>
  );

export default function Footer() {
  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <ConcernLogo className="mb-4 text-3xl"/>
            <p className="text-sm">
              A Non-Governmental Organisation (NGO) working in the field of addiction - rehabilitation.
            </p>
             <div className="mt-4 flex justify-center space-x-4 md:justify-start">
                <Link href="#" aria-label="Facebook page for CONCERN" className="text-muted-foreground hover:text-[#1877F2] transition-colors">
                  <Facebook />
                </Link>
                <Link href="#" aria-label="X page for CONCERN" className="text-muted-foreground hover:text-black transition-colors">
                  <XLogo />
                </Link>
                <Link href="#" aria-label="Instagram page for CONCERN" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
                  <Instagram />
                </Link>
                <Link href="#" aria-label="LinkedIn page for CONCERN" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                  <Linkedin />
                </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-2 font-semibold text-foreground uppercase tracking-wider">Registered Office</h3>
            <address className="space-y-1 not-italic text-sm">
              <p className="flex items-start text-left">
                <span>CONCERN, Plot No 60, First Cross Street, Kanakadhara Nagar, Valasaravakkam, Chennai - 600 087.</span>
              </p>
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-2 font-semibold text-foreground uppercase tracking-wider">Rehab Centre</h3>
            <address className="space-y-1 not-italic text-sm">
              <p className="flex items-start text-left">
                <span>CONCERN, Zonta Resource Centre, No.5, Manikam nagar, Noothancheri, Madambakam, Chennai - 126.</span>
              </p>
            </address>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-2 font-semibold text-foreground uppercase tracking-wider">Contact</h3>
             <div className="space-y-1 text-sm">
                <a href="mailto:concernrehab@gmail.com" className="flex items-center hover:text-primary transition-colors">
                  <Mail className="mr-3 h-4 w-4 text-primary" />
                  <span>concernrehab@gmail.com</span>
                </a>
                <p className="flex items-center">
                  <Phone className="mr-3 h-4 w-4 text-primary" />
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
