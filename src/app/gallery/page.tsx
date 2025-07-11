import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';

const albums = [
  { slug: 'training-programmes', title: 'Training Programmes' },
  { slug: 'social-audit', title: 'Social Audit' },
  { slug: 'ministry-of-social-justice-empowerment', title: 'Ministry of social justice & Empowerment' },
  { slug: 'concern-premises', title: 'Concern Premises' },
  { slug: 'awareness-programmes', title: 'Awareness Programmes' },
  { slug: 'award-recognitions', title: 'Award Recognitions' },
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

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">Photo Gallery</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albums.map((album) => (
          <Link href={`/gallery/${album.slug}`} key={album.slug} className="group">
            <Card className="flex h-full transform flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <CardHeader>
                <ImageIcon className="mx-auto h-12 w-12 text-primary transition-colors duration-300 group-hover:text-accent" />
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{album.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
