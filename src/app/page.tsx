'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const managementCommittee = [
  { name: 'Mrs. Bhanu Suresh Babu, M.A., (M.Phil.) (Psy)', role: 'President, CONCERN Trust' },
  { name: 'Mr. P. Suresh Babu, M.B.A., C.A.I.I.B., D.C.A.', role: 'Secretary, CONCERN Trust' },
  { name: 'Mrs. Pavithra Chamraj, M.Sc., (Med. Bio Genetics)', role: 'Treasurer, CONCERN Trust' },
  { name: 'Mrs. Asha Vinay, M.S.W., (Med Psy)., MPhil., B.Ed.', role: 'Trust Board Advisory member' },
];

const facilities = [
  'In-Patient / Out-Patient Services',
  'De-Toxification, Psychotherapy, Group Therapy',
  'Individual, Family, Child, And Marital Counselling',
  'Community Awareness Programmes',
  'Transit Home And Peer Support',
  'Free Drop-In Counseling Center For Children And Women Of Chemical Dependants',
  'Life Style Modifications',
  'Guide To Various Related References',
  'In House Kitchen',
  'Guide To Alcoholics Anonymous (AA), Narcotics Anonymous And Al-Anon',
  'Free Drop-In Counselling Centre For Children & Women Of Chemical Dependants',
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://picsum.photos/1200/800"
          alt="Community gathering"
          fill
          className="object-cover"
          data-ai-hint="community support group"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Where You Discover Change
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            A Non-Governmental Organisation dedicated to addiction treatment and rehabilitation.
          </p>
        </div>
      </section>

      {/* About Us & Vision/Mission Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground text-justify">
                We are a Non-Governmental Organisation (NGO) working in the field of addiction - rehabilitation. We wish to share the benefits with other suffering men and women and their families. Members of <span className="font-semibold text-primary">CONCERN</span> have enormous experience in dealing with addiction at various levels with both men and women. Equipped with academic, professional and practical experience in the area of addiction treatment. We made it our Mission to Share our Very Personal Experience and Success. At <span className="font-semibold text-primary">CONCERN</span> we perceive the grip of addiction as a specific disorder and treat them in simple, medical and psychological method with Holistic Approach.
              </p>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                <span className="font-semibold text-primary">Bhanu Suresh Babu</span> (Project Director) treats with a Dedicated Tailor Made Program to suit individuals' need and people of <span className="font-semibold text-primary">CONCERN</span> have practical experience with professional training and academics. We walk hand in hand with the clients exploring the problem areas and finding solutions to guide them in the process of recovery.
              </p>
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">VISION</h3>
                <p className="text-muted-foreground italic text-justify">
                  <span className="font-semibold text-primary">CONCERN'S</span> concern is to Identify, Explore and Guide to Change.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">MISSION</h3>
                <p className="text-muted-foreground text-justify">
                  To address the perils of alcoholism as a disease and not condemn. Suggest studied CHANGE Plan for sustained recovery. Growing and expanding for wider reach of <span className="font-semibold text-primary">CONCERN'S</span> concern in terms of Quality and Quantity.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">VALUES</h3>
                <p className="text-muted-foreground text-justify">
                  Transparency, Empathy, Learning and Listening, Parting knowledge and experience Belongingness, Eventual CHANGE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Committee Section */}
       <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold text-primary md:text-4xl mb-12">
            Meet Our Management Committee
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {managementCommittee.map((member, index) => (
                <Card key={index} className="text-center transition-shadow hover:shadow-xl">
                <CardContent className="flex flex-col items-center pt-6">
                    <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={`https://picsum.photos/200/200?random=${index}`} alt={member.name} data-ai-hint="person professional" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-lg">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>


      {/* Facilities Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Our Facilities
            </h2>
             <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
                The Comprehensive care with coping skills in our rehabilitation program guides the individual to cope up with the demands of daily living without addictive substance. The Holistic approach of our protocol is adapted to these special individuals' needs.
              </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <Card key={index} className="flex flex-col p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-start">
                    <CheckCircle className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-base text-card-foreground">{facility}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
