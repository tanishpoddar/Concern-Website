import Link from 'next/link';
import { ConcernLogo } from '@/components/logo';

export default function Header() {
  return (
    <header className="bg-background/95 py-4">
      <div className="container flex h-auto max-w-screen-2xl flex-col items-center justify-center text-center">
        <Link href="/" className="flex flex-col items-center gap-2">
            <ConcernLogo className="text-4xl md:text-5xl" />
        </Link>
      </div>
    </header>
  );
}
