
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Building2, 
  FileText, 
  ClipboardCheck, 
  Users, 
  Megaphone, 
  Award, 
  CalendarDays 
} from 'lucide-react';
import type { Metadata } from 'next';
import { getAlbumsFromDrive } from '@/lib/google-drive';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Explore photo albums from our events, programs, and premises. See our work in action through the years.',
};

const EmblemOfIndia = () => (
    <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
        alt="Emblem of India"
        width={48}
        height={48}
        className="mx-auto h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent md:h-12 md:w-12"
    />
);

// Map slugs to icons
const programmeIconMap: { [key: string]: React.ElementType } = {
  'ministry-of-social-justice-and-empowerment': EmblemOfIndia,
  'synopsis': FileText,
  'training-programmes': ClipboardCheck,
  'concern-premises': Building2,
  'awareness-programmes': Megaphone,
  'award-recognitions': Award,
};


export default async function GalleryPage() {
  // Fetch albums dynamically from Google Drive
  const programmeAlbums = await getAlbumsFromDrive('Programmes and Events');
  const yearAlbums = (await getAlbumsFromDrive('By Year')).sort((a,b) => b.title.localeCompare(a.title));

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">Photo Gallery</h1>
      
      <section>
        <h2 className="mb-6 text-center text-2xl font-bold text-primary/90 md:text-3xl">Programmes & Events</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {programmeAlbums.map((album) => {
            const IconComponent = programmeIconMap[album.slug] || Users;
            return (
                <Link href={`/gallery/${album.slug}`} key={album.slug} className="group">
                <Card className="flex h-full transform flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <CardHeader>
                        <IconComponent className="mx-auto h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent md:h-12 md:w-12" />
                    </CardHeader>
                    <CardContent>
                    <p className="font-semibold text-sm md:text-base">{album.title}</p>
                    </CardContent>
                </Card>
                </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-primary/90 md:text-3xl">By Year</h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 md:gap-4">
          {yearAlbums.map((album) => (
            <Link href={`/gallery/${album.slug}`} key={album.slug} className="group">
              <Card className="flex h-full transform flex-col items-center justify-center p-2 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                 <CardHeader className="p-2">
                    <CalendarDays className="mx-auto h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent md:h-10 md:w-10" />
                 </CardHeader>
                 <CardContent className="p-2">
                    <p className="font-semibold text-sm md:text-base">{album.title}</p>
                 </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
