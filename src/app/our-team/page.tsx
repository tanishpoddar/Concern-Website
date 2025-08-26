
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Briefcase, Wrench, Handshake, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated team behind CONCERN, including our medical professionals, staff, and technical supporters.',
};

const medicalTeam = [
  { name: 'Dr. Mohamed Nidhal S, M.D., FNR., PGDHM.', role: 'Medical Officer' },
  { name: 'Dr. Sathish Kumar, M.B.B.S., D.P.M., D.N.B.', role: 'Consultant Psychiatrist' },
  { name: 'Dr. Thiruvikraman, M.B.B.S., D.P.M.', role: 'Visiting Consultant Neuro Psychiatrist' },
  { name: 'Dr. G. Manjari, B.D.S., M.P.H.', role: 'Psychologist and Counsellor' },
  { name: 'Mr. M. Kabilan, M.Sc. (Applied Psychology)', role: 'Psychologist and Counsellor' },
  { name: 'Nurses and Ward boys', role: '' },
];

const managementStaff = [
  { name: 'Mr. T. Rajesh, M.S.W.', role: 'Manager cum In-charge' },
  { name: 'Mr. V. Subramani', role: 'Manager' },
  { name: 'Mrs. P Lanthangi, B.A., M.Sc. (Yoga)', role: 'Project Coordinator' },
  { name: 'Mr. J. Ethuraj, D.P.T.', role: 'Project Coordinator' },
  { name: 'Honorary Volunteers', role: '' },
  { name: 'Trainer cum supervisors, Outreach Workers, Peer Educators, Cooks, House-keepers & Chowkidars', role: '' },
];

const technicalSupporters = [
  { name: 'Arch. Chamraj Suresh Babu, M.L.A.', role: 'Design Consultant' },
  { name: 'Mr. Tanish Poddar, B.Tech.', role: 'Web Developer' },
  { name: 'Mr. Madhavan', role: 'Web Designer' },
];

const committeeOfSupporters = [
    { name: 'Ar. Kalpana. S.', role: 'Trustee, Zonta Resource Centre' },
    { name: 'Ms. Latha Suresh', role: 'Director SAN INDIA Social Auditor' },
    { name: 'Ms. Marie Banu', role: 'Director CSIM' },
    { name: 'Mr. R. Vijayakrishnan, B.com., F.C.A.', role: 'Chartered Accountant' },
    { name: 'Mr. P.S. Kamalakara Rao, F.C.A.', role: 'Chartered Accountant' },
    { name: 'Dr. Benhur B.V.Sc.', role: 'Nutricon Bio-Science P Ltd' },
    { name: 'Mr. Suresh', role: 'Kothagiri, Nilgiris' },
    { name: 'Mrs. Pavithra Sharath', role: 'Idea Guru, Media Partner' },
    { name: 'Mr. Suresh Govindraj', role: '' },
];

const pillarsOfStrength = [
    { name: 'Ministry of Social Justice and Empowerment (MSJE)', role: '' },
    { name: 'State Bank of India', role: '' },
    { name: 'Centre for Social Initiative and Management (CSIM)', role: '' },
    { name: 'Zonta Resource center', role: '' },
    { name: 'Link up garments for CSR activities', role: '' },
    { name: 'Milestone Specialty Equipment P Ltd', role: '' },
    { name: 'Vastarakala Export P Ltd', role: '' },
    { name: 'CGS Fashion P Ltd', role: '' },
];


const TeamCard = ({ title, members, icon: Icon }: { title: string; members: { name: string; role: string }[]; icon: React.ElementType }) => (
  <Card className="shadow-md transition-shadow hover:shadow-xl flex flex-col">
    <CardHeader className="flex flex-row items-center gap-4">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl md:text-2xl text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
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
      <h1 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">Our Team</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TeamCard title="Medical Team" members={medicalTeam} icon={Stethoscope} />
        <TeamCard title="Management Staff" members={managementStaff} icon={Briefcase} />
        <TeamCard title="Technical Supporters" members={technicalSupporters} icon={Wrench} />
      </div>

       <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <TeamCard title="Our Committee of Supporters" members={committeeOfSupporters} icon={Handshake} />
            <TeamCard title="Our Pillars of Strength" members={pillarsOfStrength} icon={Shield} />
        </div>
      </div>
    </div>
  );
}
