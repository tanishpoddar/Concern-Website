import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
    {
        title: 'Integrated Rehabilitation Centre for Addicts (IRCA)',
        description: 'In-Patient free treatment and rehabilitation with staying and food facility. Whole person recovery is the main purpose of this facility. The treatment and rehabilitation includes individual counselling, group therapy, medical assistance, recreation, art therapy, In-house meetings and all related support.'
    },
    {
        title: 'Out-Reach Drop-in Centre (ODIC)',
        description: 'The substance abusers can make use of this free facility by availing the day care assistance viz. medical assessment, counselling, first aid, motivation counselling for IRCA, recreation and relaxation.'
    },
    {
        title: 'Community based Peer Led Intervention (CPLI)',
        description: 'Our centre CONCERN will reach out to the community by visiting them. Conduct various awareness programmes to educate the ill effects of substance abuse. Motivate them to form peer groups and lead them to ODCI and IRCA. The main purpose of this scheme is to concentrate on children, Teens and youths for early prevention of substance abuse. ‘Catch them Young’ is the theme.'
    }
]

export default function MosjePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
           <h1 className="text-4xl font-bold">Ministry of Social Justice and Empowerment (MoSJE)</h1>
           <p className="text-xl text-muted-foreground">National Action Plan for Drug Demand Reduction (NAPDDR)</p>
        </div>

        <div className="flex justify-center">
            <Image
                src="https://placehold.co/800x400.png"
                alt="Ministry of Social Justice and Empowerment"
                width={800}
                height={400}
                data-ai-hint="government building"
                className="rounded-lg object-cover"
            />
        </div>

        <div className="space-y-4 text-center">
            <p className="text-muted-foreground">
                We are glad to announce that our centre viz. CONCERN has been approved and sanctioned by MoSJE for the above scheme to launch
            </p>
            <h2 className="text-3xl font-bold text-primary">
                District De-Addiction Centre (DDAC)
            </h2>
             <p className="text-muted-foreground">
                From 1st of January 2024.
            </p>
            <p className="text-muted-foreground">
                DDAC comprises of Integrated Rehabilitation Centre for Addicts (IRCA), Out-Reach Drop-in Centre (ODIC) and Community based Peer Led Intervention (CPLI). All the three facilities are free of any cost.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            {programs.map(program => (
                 <Card key={program.title}>
                    <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <p className="text-center text-lg font-semibold">
          Avail these facilities to prevent and treat substance abusers. Guide and show the way to your known people who are affected by addiction.
        </p>

      </div>
    </div>
  );
}
