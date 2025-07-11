import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Chatbot } from '@/components/chatbot';
import { ImpactChart } from '@/components/impact-chart';
import Image from 'next/image';
import {
  BookOpen,
  Droplets,
  HeartHandshake,
  Lightbulb,
  Quote,
} from 'lucide-react';

const initiatives = [
  {
    icon: Droplets,
    title: 'Clean Water Access',
    description:
      'Providing clean and safe drinking water to communities in need.',
    image: 'https://placehold.co/600x400',
    hint: 'water well',
  },
  {
    icon: BookOpen,
    title: 'Education for All',
    description:
      'Building schools and providing educational resources for children.',
    image: 'https://placehold.co/600x400',
    hint: 'children classroom',
  },
  {
    icon: HeartHandshake,
    title: 'Healthcare Support',
    description: 'Offering medical supplies and support to remote areas.',
    image: 'https://placehold.co/600x400',
    hint: 'doctor patient',
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Energy',
    description: 'Implementing solar power projects in off-grid villages.',
    image: 'https://placehold.co/600x400',
    hint: 'solar panels',
  },
];

const events = [
  {
    title: 'Annual Charity Gala',
    date: 'October 26, 2024',
    description: 'Join us for a night of inspiration and fundraising.',
    image: 'https://placehold.co/600x400',
    hint: 'charity event',
  },
  {
    title: 'Community Build Day',
    date: 'November 12, 2024',
    description: 'Help us build a new community center. No experience necessary!',
    image: 'https://placehold.co/600x400',
    hint: 'volunteers building',
  },
  {
    title: 'Online Awareness Campaign',
    date: 'December 1-31, 2024',
    description: 'Spread the word about our clean water initiative.',
    image: 'https://placehold.co/600x400',
    hint: 'social media',
  },
];

const testimonials = [
  {
    quote:
      'ConcernConnect changed my life. The new well in our village means my children are healthier and can attend school instead of fetching water.',
    author: 'Amina, Village Resident',
    image: 'https://placehold.co/100x100',
    hint: 'woman portrait',
  },
  {
    quote:
      "Volunteering for the school build was an incredibly rewarding experience. Seeing the joy on the children's faces was unforgettable.",
    author: 'John D., Volunteer',
    image: 'https://placehold.co/100x100',
    hint: 'man portrait',
  },
  {
    quote:
      'The transparency in their impact reporting is what convinced me to become a monthly donor. I know my contribution is making a real difference.',
    author: 'Sarah L., Donor',
    image: 'https://placehold.co/100x100',
    hint: 'person portrait',
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-10 bg-black/50" />
          <Image
            src="https://placehold.co/1920x1080"
            alt="Volunteers working together"
            data-ai-hint="volunteers community"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container space-y-4 px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter md:text-6xl">
              Connecting Concern with Action
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
              We are a global movement of compassionate individuals dedicated to
              creating sustainable change through community-led initiatives.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="#donate">Make a Difference</a>
            </Button>
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 space-y-3 text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Our Global Initiatives
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                From local communities to a global scale, we're committed to
                projects that create lasting, positive change.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {initiatives.map((item, index) => (
                <Card
                  key={index}
                  className="group flex flex-col overflow-hidden"
                >
                  <div className="relative h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      data-ai-hint={item.hint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <item.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="bg-muted/40 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 space-y-3 text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Our Impact, By the Numbers
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We believe in transparency. Here's a look at what we've
                achieved together with your support.
              </p>
            </div>
            <ImpactChart />
          </div>
        </section>

        {/* Impact Stories Section */}
        <section id="stories" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 space-y-3 text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Stories of Change
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The real impact of our work is told through the lives we touch.
              </p>
            </div>
            <Carousel
              opts={{ loop: true }}
              className="mx-auto w-full max-w-4xl"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-0 bg-muted/40">
                        <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center">
                          <Quote className="mb-4 h-10 w-10 text-primary" />
                          <p className="mb-4 text-lg font-medium">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-3">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              data-ai-hint={testimonial.hint}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <span className="font-semibold">
                              {testimonial.author}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="bg-muted/40 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 space-y-3 text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Upcoming Events & Campaigns
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Get involved! Join our events to support our causes and connect
                with our community.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {events.map((event, index) => (
                <Card key={index} className="group overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      data-ai-hint={event.hint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-12 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  Your Contribution Matters
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every donation, big or small, empowers communities and fuels
                  our initiatives. Join us in making a lasting impact today.
                </p>
                <div className="relative aspect-video">
                   <Image
                    src="https://placehold.co/600x400"
                    alt="Happy children receiving aid"
                    data-ai-hint="children smiling"
                    fill
                    className="rounded-lg object-cover shadow-md"
                  />
                </div>
              </div>
              <Card className="p-6 sm:p-8">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    Secure Donation
                  </CardTitle>
                  <CardDescription>
                    Choose an amount and make a difference.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="one-time">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="one-time">One-Time</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                    <TabsContent value="one-time" className="mt-4">
                      <DonationForm />
                    </TabsContent>
                    <TabsContent value="monthly" className="mt-4">
                      <DonationForm isMonthly={true} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Chatbot />
    </>
  );
}

function DonationForm({ isMonthly = false }: { isMonthly?: boolean }) {
  const amounts = [25, 50, 100, 250];
  return (
    <div className="space-y-6">
      <RadioGroup
        defaultValue="50"
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {amounts.map((amount) => (
          <div key={amount}>
            <RadioGroupItem
              value={String(amount)}
              id={`amount-${amount}-${isMonthly}`}
              className="peer sr-only"
            />
            <Label
              htmlFor={`amount-${amount}-${isMonthly}`}
              className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              ${amount}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex">
        <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 bg-muted px-3">
          $
        </span>
        <Input
          type="number"
          placeholder="Custom Amount"
          className="rounded-l-none"
        />
      </div>
      <Button className="w-full" size="lg">
        Donate {isMonthly ? 'Monthly' : 'Now'}
      </Button>
    </div>
  );
}
