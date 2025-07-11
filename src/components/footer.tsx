import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ConcernLogo } from './logo';

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
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-[#1877F2] transition-colors">
                  <Facebook />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
                  <Twitter />
                </Link>
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
                  <Instagram />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
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
