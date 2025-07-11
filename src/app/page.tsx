'use client';
import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import {ConcernLogo} from '@/components/logo';
import Image from 'next/image';

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
       <Image
          src="https://cijik.com/uploads/rehabs/1273.jpg"
          alt="Concern Building"
          width={400}
          height={100}
          className="h-auto w-64 rounded-lg object-contain md:w-80"
          priority
        />
    </div>
  );
}

const facilities = [
  'In-Patient / Out-Patient services',
  'De-toxification, Psychotherapy, Group therapy',
  'Individual, Family, child, and marital counselling',
  'Community awareness programmes',
  'Transit home and peer support',
  'Free Drop-in counseling center for children and women of chemical dependants',
  'Life style modifications',
  'Guide to various related References',
  'In house kitchen',
  'Guide to Alcoholics Anonymous (AA), Narcotics Anonymous and Al-Anon',
  'Free Drop-In Counselling Centre for Children & Women of Chemical Dependants',
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('splashShownThisSession')) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashShownThisSession', 'true');
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="flex flex-col">
        <section className="bg-secondary/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
                  About Us
                </h1>
                <p className="text-lg text-muted-foreground text-justify">
                  We are a Non-Governmental Organisation (NGO) working in the field of addiction - rehabilitation. We wish to share the benefits with other suffering men and women and their families. Members of <span className="text-primary font-semibold">CONCERN</span> have enormous experience in dealing with addiction at various levels with both men and women. Equipped with academic, professional and practical experience in the area of addiction treatment. We made it our Mission to Share our Very Personal Experience and Success. At <span className="text-primary font-semibold">CONCERN</span> we perceive the grip of addiction as a specific disorder and treat them in simple, medical and psychological method with Holistic Approach.
                </p>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                  <span className="text-primary font-semibold">Bhanu Suresh Babu</span> (Project Director) treats with a Dedicated Tailor Made Program to suit individuals' need and people of <span className="text-primary font-semibold">CONCERN</span> have practical experience with professional training and academics. We walk hand in hand with the clients exploring the problem areas and finding solutions to guide them in the process of recovery.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Group therapy session"
                  width={600}
                  height={400}
                  data-ai-hint="community support group"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Facilities</h2>
              <ul className="space-y-4">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-justify">
                The Comprehensive care with coping skills in our rehabilitation program guides the individual to cope up with the demands of daily living without addictive substance. The Holistic approach of our protocol is adapted to these special individuals' needs.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">VISION</h3>
                <p className="text-muted-foreground italic text-justify">
                  "<span className="text-primary font-semibold">CONCERN’S</span> concern is to Identify, Explore and Guide to Change."
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">MISSION</h3>
                <p className="text-muted-foreground text-justify">
                  "To address the perils of alcoholism as a disease and not condemn. Suggest studied CHANGE Plan for sustained recovery. Growing and expanding for wider reach of <span className="text-primary font-semibold">CONCERN’S</span> concern in terms of Quality and Quantity."
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">VALUES</h3>
                <p className="text-muted-foreground text-justify">
                  "Transparency, Empathy, Learning and Listening, Parting knowledge and experience Belongingness, Eventual CHANGE"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
