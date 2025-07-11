import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const therapies = [
  {
    title: 'DETOXIFICATION',
    points: [
      'A process supervised by medical professionals to treat withdrawals due to chemical abuse.',
      'This process normally takes 3 to 4 days depending on the individual’s impact of addiction.',
      'It also provides to diagnose other physical complications which had been neglected.',
      'It enables the recovery process to take off smoothly.',
    ],
  },
  {
    title: 'PSYCHO THERAPY',
    points: [
      "It's a systematic application of learning techniques in treatment.",
      "This therapy focuses on the change in patients' overall functioning.",
      'This includes behavior problems from the childhood.',
      'Educative sessions lead to total abstinence.',
      'Needs are assessed with coping skills.',
    ],
  },
  {
    title: 'COGNITIVE THERAPY',
    description: "Cognitive Behavior Therapy is a psychotherapeutic approach, a talking therapy that aims to solve problems conveying dysfunctional behavior. It's a systematic procedure done with professionalism, making the person do their own inventory and accept their behaviors.",
  },
  {
    title: 'GROUP THERAPY',
    points: [
      'Is a technique in treating patients in a group.',
      'This therapy breaks denial syndrome and acceptance of self is mooted.',
      'All significant people sit in a circle and discuss specific topics.',
      'Peer support in open sharing attracts them to open up their feelings without hesitation.',
      'Therapist without prejudice conducts within the norms of therapy.',
      'It is a type of confrontation towards self, so as to come to terms within oneself.',
    ],
  },
  {
    title: 'INDIVIDUAL COUNSELING',
    points: [
      'Involves insight to see the problems realistically.',
      'Helps the patient to maintain abstinence and needs are assessed with coping skills on an ongoing basis.',
      'Sensitive issues are also discussed with utmost confidentiality.',
      'This is a continuous process, even after treatment and discharge.',
    ],
  },
  {
    title: 'FAMILY THERAPY',
    points: [
      'While treating the chemical dependent, the entire family is brought together to discuss the related issues.',
      'This also helps the person to maintain abstinence and improve family situations and relationships.',
      'Helps them to come out of co-dependency.',
      'One support person is given intensive counseling to help their emotive interdependence.',
    ],
  },
  {
    title: 'CHILD COUNSELING',
    points: [
      'Children experience challenges and problems associated with their alcoholic parent.',
      'The impact ranges from minimal effect to serious lifelong problems.',
      'It may be simple or unnoticed of magnified results proved due to addictions.',
      'They are given counseling to handle their stressful situations and make them aware of help to be taken.',
      'Coping skills to manage their life situation.',
    ],
  },
    {
    title: 'TRANSIT',
    description: "Is for our Patients to go to work from CONCERN and be with us and go for the meetings in the evening. This stay is only for three months.",
  },
];

export default function TherapyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-8 text-center text-4xl font-bold">Therapy</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {therapies.map((therapy) => (
          <Card key={therapy.title}>
            <CardHeader>
              <CardTitle>{therapy.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {therapy.description ? (
                <p className="text-muted-foreground">{therapy.description}</p>
              ) : (
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {therapy.points?.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
