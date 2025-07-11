import Link from 'next/link';
import { ConcernLogo } from '@/components/logo';

export default function Header() {
  return (
    <header className="bg-background/95">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-center">
        <Link href="/" className="flex flex-col items-center gap-2">
            <ConcernLogo className="text-4xl" />
            <p className="text-sm text-muted-foreground">where you discover change</p>
        </Link>
      </div>
    </header>
  );
}
