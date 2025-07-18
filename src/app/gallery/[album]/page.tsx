'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from "@/components/ui/carousel";
import React from 'react';

const albums: { [key: string]: { title: string; hint: string } } = {
  'ministry-of-social-justice-empowerment': { title: 'Ministry of Social Justice & Empowerment', hint: 'government building' },
  'synopsis': { title: 'Synopsis', hint: 'summary document' },
  'training-programmes': { title: 'Training Programmes', hint: 'training session' },
  'concern-premises': { title: 'Concern Premises', hint: 'office building' },
  'awareness-programmes': { title: 'Awareness Programmes', hint: 'community event' },
  'award-recognitions': { title: 'Award Recognitions', hint: 'award ceremony' },
  '2025': { title: '2025', hint: 'future event' },
  '2024': { title: '2024', hint: 'event' },
  '2023': { title: '2023', hint: 'celebration' },
  '2022': { title: '2022', hint: 'gathering' },
  '2021': { title: '2021', hint: 'presentation' },
  '2020': { title: '2020', hint: 'meeting' },
  '2019': { title: '2019', hint: 'conference' },
  '2018': { title: '2018', hint: 'workshop' },
  '2017': { title: '2017', hint: 'seminar' },
  '2016': { title: '2016', hint: 'people' },
  '2014': { title: '2014', hint: 'group photo' },
  '2013': { title: '2013', hint: 'charity event' },
  '2012': { title: '2012', hint: 'social work' },
  '2011': { title: '2011', hint: 'volunteer' },
  '2009': { title: '2009', hint: 'archive photo' },
};

export default function AlbumPage({ params }: { params: { album: string } }) {
  const albumDetails = albums[params.album];
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  if (!albumDetails) {
    notFound();
  }

  const images = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">{albumDetails.title}</h1>
      <div className="flex justify-center">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-sm md:max-w-4xl"
        >
          <CarouselContent>
            {images.map((index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0">
                     <Image
                        src={`https://placehold.co/1280x720.png`}
                        alt={`Image ${index} for ${albumDetails.title}`}
                        width={1280}
                        height={720}
                        data-ai-hint={albumDetails.hint}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex"/>
          <CarouselNext className="hidden md:inline-flex"/>
        </Carousel>
      </div>
       <div className="py-4 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
    </div>
  );
}
