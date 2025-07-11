import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Programs',
  description: 'CONCERN offers training programs for staff, interns, and organizations on addiction issues, de-addiction treatment techniques, and HR policies for employee assessment.',
};

const trainingSections = [
  {
    title: 'Staff Training',
    content: 'We conduct training programs for staff of Rehabilitation centers for de-addiction. The trainees who work on community based organization also consist of recovering persons; hence, training enables them to cope with the demands of running a center.',
  },
  {
    title: 'Interns',
    content: 'We have imparted Internship to MSW college students, Law college students, Nurses from various reputed Institutions from Tamil Nadu, Kerala and Karnataka. They have benefitted largely by our training.',
  },
  {
    title: 'Training Programmes',
    content: 'We also conduct training programs for students and people working for addiction. We provide training on addiction issues - including alcohol and drug addictions and also provide printed manual and hand out for references.',
  },
  {
    title: 'HR Policy',
    content: 'We specialize in working with HR Departments in Organizations and assist them in employee assessment programs for problems in absenteeism and performance.',
  },
];

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Training</h1>
        </div>

        <p className="text-center text-lg text-muted-foreground text-justify">
          CONCERN in association with CSIM (Centre for Social Initiative and Management) conduct twice in a year "Certificate Programme in Social Entrepreneurship with De-Addiction treatment techniques".
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {trainingSections.map((section) => (
            <Card key={section.title} className="shadow-md transition-shadow hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-justify">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-secondary/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-primary">If we can help you, please contact us.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Registered Trust No. 628 / 08</Badge>
              <Badge variant="secondary">IMH License No. RII-1645 Dt. 08/09/2023</Badge>
              <Badge variant="secondary">ISO 9001 : 2008 Certified</Badge>
              <Badge variant="secondary">Social Audit Network - United Kingdom</Badge>
            </div>
            <p className="pt-2 text-sm text-justify">
              (Donations are IT Exempted U/S 80G of IT Act 1961 Vide Approval No. AAATC9995QF20210 Dt. 24.09.2021)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
