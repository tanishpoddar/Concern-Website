import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-background/95 py-4">
      <div className="container flex h-auto max-w-screen-2xl flex-col items-center justify-center text-center">
        <Link href="/" className="flex flex-col items-center gap-2">
           <Image
              src="https://cijik.com/uploads/rehabs/1273.jpg"
              alt="Concern Logo"
              width={200}
              height={50}
              className="h-auto w-40 object-contain md:w-48"
              priority
            />
        </Link>
      </div>
    </header>
  );
}
