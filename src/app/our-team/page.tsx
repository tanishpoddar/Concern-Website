
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Briefcase, Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated team behind CONCERN, including our management committee, medical professionals, staff, and technical supporters.',
};

const managementCommittee = [
  { name: 'Mrs. Bhanu Suresh Babu, M.A., (M.Phil.) (Psy)', role: 'President, CONCERN Trust' },
  { name: 'Mr. P. Suresh Babu, M.B.A., C.A.I.I.B., D.C.A.', role: 'Secretary, CONCERN Trust' },
  { name: 'Mrs. Pavithra Chamraj, M.Sc., (Med. Bio Genetics)', role: 'Treasurer, CONCERN Trust' },
  { name: 'Mrs. Asha Vinay, M.S.W., (Med Psy)., MPhil., B.Ed.', role: 'Trust Board Advisory member' },
];

const medicalTeam = [
  { name: 'Dr. Mohamed Nidhal S, M.D., FNR., PGDHM.', role: 'Medical Officer' },
  { name: 'Dr. Sathish Kumar, M.B.B.S., D.P.M., D.N.B.', role: 'Consultant Psychiatrist' },
  { name: 'Dr. G. Manjari, B.D.S., M.P.H.', role: 'Psychologist and Counsellor' },
  { name: 'Mrs. Kavitha, Phd.', role: 'Psychologist and Counsellor' },
  { name: 'Nurses and Ward boys', role: '' },
];

const managementStaff = [
  { name: 'Mr. T. Rajesh, M.S.W.', role: 'Manager cum In-charge' },
  { name: 'Mr. V. Subramani', role: 'Manager' },
  { name: 'Mrs. P Lanthangi, B.A., M.Sc. (Yoga)', role: 'Project Coordinator' },
  { name: 'Mr. J. Ethuraj, D.P.T.', role: 'Project Coordinator' },
  { name: 'Honorary Volunteers', role: '' },
  { name: 'Trainer cum supervisors, Outreach Workers, Peer Educators, Cook, House-keepers And Chowkidars', role: '' },
];

const technicalSupporters = [
  { name: 'Arch. Chamraj Suresh Babu, M.L.A.', role: 'Design Consultant' },
  { name: 'Mr. Tanish Poddar, B.Tech CSE (SRMIST)', role: 'Web Developer' },
  { name: 'Mr. Madhavan', role: 'Web Designer' },
];

const TeamCard = ({ title, members, icon: Icon }: { title: string; members: { name: string; role: string }[]; icon: React.ElementType }) => (
  <Card className="shadow-md transition-shadow hover:shadow-xl">
    <CardHeader className="flex flex-row items-center gap-4">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl md:text-2xl text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li key={index}>
            <p className="font-semibold text-base">{member.name}</p>
            {member.role && <p className="text-sm text-muted-foreground">{member.role}</p>}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function OurTeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">Our Team</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <TeamCard title="Management Committee" members={managementCommittee} icon={Users} />
        <TeamCard title="Medical Team" members={medicalTeam} icon={Stethoscope} />
        <TeamCard title="Management Staff" members={managementStaff} icon={Briefcase} />
        <TeamCard title="Technical Supporters" members={technicalSupporters} icon={Wrench} />
      </div>
    </div>
  );
}
