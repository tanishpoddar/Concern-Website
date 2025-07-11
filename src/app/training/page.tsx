import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const trainingSections = [
  {
    title: 'STAFF TRAINING',
    content: 'We conduct training programs for staff of Rehabilitation centers for de-addiction. The trainees who work on community based organization also consist of recovering persons; hence, training enables them to cope with the demands of running a center.',
  },
  {
    title: 'INTERNS',
    content: 'We have imparted Internship to MSW college students, Law college students, Nurses from various reputed Institutions from Tamil Nadu, Kerala and Karnataka. They have benefitted largely by our training.',
  },
  {
    title: 'TRAINING PROGRAMMES',
    content: 'We also conduct training programs for students and people working for addiction. We provide training on addiction issues - including alcohol and drug addictions and also provide printed manual and hand out for references.',
  },
  {
    title: 'HR POLICY',
    content: 'We specialize in working with HR Departments in Organizations and assist them in employee assessment programs for problems in absenteeism and performance.',
  },
];

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Training</h1>
        </div>

        <p className="text-center text-lg text-muted-foreground">
          CONCERN in association with CSIM (Centre for Social Initiative and Management) conduct twice in a year "Certificate Programme in Social Entrepreneurship with De-Addiction treatment techniques"
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {trainingSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/10">
          <CardHeader>
            <CardTitle>If we can help you, please contact us:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>Registered Trust No. 628 / 08</p>
            <p>IMH License No. RII-1645 Dt. 08/09/2023</p>
            <p>ISO 9001 : 2008 Certified</p>
            <p>Social Audit Network - United Kingdom</p>
            <p className="pt-2 text-sm">
              (Donations are IT Exempted U/S 80G of IT Act 1961 Vide Approval No. AAATC9995QF20210 Dt. 24.09.2021)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}