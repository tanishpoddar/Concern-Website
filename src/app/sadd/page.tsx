import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const questions = [
  'Do you find difficulty in getting the thought of drink out of your mind?',
  'Is getting drunk more important than your next meal?',
  'Do you plan your day so that you know you will be able to get a drink?',
  'Do you start drinking in the morning and continue drinking in the afternoon and evening as well?',
  'Do you drink for the effect of alcohol without caring what kind of drink you have?',
  'Do you drink as much as you want without considering what you have to do the next day?',
  'Given that many problems might be caused by alcohol, do you still drink too much?',
  'Do you find yourself unable to stop Drinking once you start?',
  'Do you try to control your drinking by deliberately giving it up completely for days or weeks at a time?',
  'The morning after a heavy drinking session, do you need your first alcoholic drink to get you going?',
  'The morning after a heavy drinking session, do you wake up with a definite shakiness in your hands?',
  'After a heavy drinking session do you vomit (throw up)?',
  'The morning after a heavy drinking session, do you go out of your way to avoid people?',
  'After a heavy drinking session do you see frightening things that you later realize were not real?',
  'Do you go drinking and the next day find that you have forgotten what happened the night before?',
];

const options = ['Never', 'Sometimes', 'Often', 'Always'];

export default function SaddPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Short Alcohol Dependence Data (SADD)</h1>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Drunk person on a table"
            width={600}
            height={400}
            data-ai-hint="despair alcohol bottle"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        <p className="text-center text-lg text-muted-foreground text-justify">
          To measure physiological dependence and cognitive and behavior events. Respond yourself to the following test questions and answer them as honestly as you can. (If in the end you are unsure, re-answer them with the help of your spouse or the closest member of your family). Remember there is no right or wrong answers.
        </p>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-primary md:text-2xl">SADD Questionnaire</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {questions.map((question, index) => (
                <li key={index} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold">{`${index + 1}. ${question}`}</p>
                  <div className="mt-3 flex flex-col space-y-1 text-sm text-muted-foreground sm:flex-row sm:space-x-6 sm:space-y-0">
                    {options.map((option, optIndex) => (
                      <span key={optIndex}>{`${optIndex}) ${option}`}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-primary md:text-2xl">Scoring Stage of Addiction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:text-left">
              <div>
                <p className="font-semibold">Points per Answer</p>
                <p><span className="font-semibold">Never</span> - 0 points</p>
                <p><span className="font-semibold">Sometimes</span> - 1 point</p>
                <p><span className="font-semibold">Often</span> - 2 points</p>
                <p><span className="font-semibold">Always</span> - 3 points</p>
              </div>
              <div>
                <p className="font-semibold">Dependence Level</p>
                <p><span className="font-semibold">Absence of alcohol dependence</span> - 0</p>
                <p><span className="font-semibold">Low level</span> - 1 to 9</p>
                <p><span className="font-semibold">Medium level</span> - 10 to 19</p>
                <p><span className="font-semibold">High level</span> - 20 to 45</p>
              </div>
            </div>
            <p className="pt-4 text-xs text-muted-foreground text-justify">
              Courtesy and Reference - Raistrick, Dunbar and R.Davidson. Questionnaire to measure alcohol dependence British Journal of addiction 78.pp. 89-95. 1983.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
