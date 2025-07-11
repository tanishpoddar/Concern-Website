import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon, CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';

const programmeAlbums = [
  { slug: 'training-programmes', title: 'Training Programmes' },
  { slug: 'social-audit', title: 'Social Audit' },
  { slug: 'ministry-of-social-justice-empowerment', title: 'Ministry of social justice & Empowerment' },
  { slug: 'concern-premises', title: 'Concern Premises' },
  { slug: 'awareness-programmes', title: 'Awareness Programmes' },
  { slug: 'award-recognitions', title: 'Award Recognitions' },
];

const yearAlbums = [
  { slug: '2024', title: '2024' },
  { slug: '2023', title: '2023' },
  { slug: '2022', title: '2022' },
  { slug: '2021', title: '2021' },
  { slug: '2020', title: '2020' },
  { slug: '2019', title: '2019' },
  { slug: '2018', title: '2018' },
  { slug: '2017', title: '2017' },
  { slug: '2016', title: '2016' },
  { slug: '2014', title: '2014' },
  { slug: '2013', title: '2013' },
  { slug: '2012', title: '2012' },
  { slug: '2011', title: '2011' },
  { slug: '2009', title: '2009' },
];

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Explore photo albums from our events, programs, and premises. See our work in action through the years.',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">Photo Gallery</h1>
      
      <section>
        <h2 className="mb-6 text-center text-2xl font-bold text-primary/90 md:text-3xl">Programmes & Events</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {programmeAlbums.map((album) => (
            <Link href={`/gallery/${album.slug}`} key={album.slug} className="group">
              <Card className="flex h-full transform flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <CardHeader>
                  <ImageIcon className="mx-auto h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent md:h-12 md:w-12" />
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-sm md:text-base">{album.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
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
