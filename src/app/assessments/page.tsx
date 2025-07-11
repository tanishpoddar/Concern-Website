import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self-Assessments for Alcoholism',
  description: 'Take confidential self-assessment tests for alcoholism, including the SADD questionnaire and a self-diagnosis test based on criteria from John Hopkins University Hospital.',
};

const selfDiagnosisQuestions = [
  "Do you lose time from work due to drinking?",
  "Is drinking making your home life unhappy?",
  "Do you drink because you are shy with other people?",
  "Is drinking affecting your reputation?",
  "Have you ever felt remorse after drinking?",
  "Ever got into financial difficulties as a result of drinking?",
  "Do you turn to lower companions or inferior environment?",
  "Does drinking make you careless of your family’s welfare?",
  "Has your ambition decreased since drinking?",
  "Do you crave for a drink at a definite time daily?",
  "Do you want a drink the next morning?",
  "Does drinking cause you to have difficulty in sleeping?",
  "Has your efficiency decreased since drinking?",
  "Is drinking jeopardizing your job or business?",
  "Do you drink to escape from worries or troubles?",
  "Do you drink alone?",
  "Have you had a complete loss of memory due to drinking?",
  "Has a physician ever treated you for drinking?",
  "Do you drink to build your self-confidence?",
  "Have you been in a hospital or institution due to drinking?",
];

const saddQuestions = [
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

const saddOptions = ['Never', 'Sometimes', 'Often', 'Always'];

export default function AssessmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Self-Assessments</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Confidential questionnaires to help you understand your relationship with alcohol.
          </p>
        </div>

        <Tabs defaultValue="self-diagnosis" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="self-diagnosis">Self Diagnosis</TabsTrigger>
            <TabsTrigger value="sadd">SADD Questionnaire</TabsTrigger>
          </TabsList>
          
          <TabsContent value="self-diagnosis" className="mt-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary md:text-2xl">Do You Border on Alcoholism?</CardTitle>
                <CardDescription className="text-justify">
                  To answer the above questions ask yourself the following test questions and answer them as honestly as you can. (If your answers are ‘NO’ to all the question re-answer them with the help of your spouse or the closest member of your family). Remember there are no right or wrong answers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {selfDiagnosisQuestions.map((question, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-secondary/50 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary md:text-2xl">Scoring Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><span className="font-bold">If you have answered YES to any one of the questions,</span> there is a definite warning that you may be an alcoholic.</p>
                <p><span className="font-bold">If you have answered YES to any two,</span> the chances are that you are an alcoholic.</p>
                <p><span className="font-bold">If you have answered YES to any three or more,</span> you are definitely an alcoholic.</p>
                <p className="pt-4 text-xs text-muted-foreground text-justify">
                  Courtesy and Reference - The above test questions are used by John Hopkins University Hospital, Baltimore in deciding whether or not a patient is alcoholic.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sadd" className="mt-8">
             <p className="text-center text-lg text-muted-foreground text-justify mb-6">
              To measure physiological dependence and cognitive and behavior events. Respond yourself to the following test questions and answer them as honestly as you can. (If in the end you are unsure, re-answer them with the help of your spouse or the closest member of your family). Remember there is no right or wrong answers.
            </p>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary md:text-2xl">SADD Questionnaire</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {saddQuestions.map((question, index) => (
                    <li key={index} className="border-b pb-4 last:border-b-0">
                      <p className="font-semibold">{`${index + 1}. ${question}`}</p>
                      <div className="mt-3 flex flex-col space-y-1 text-sm text-muted-foreground sm:flex-row sm:space-x-6 sm:space-y-0">
                        {saddOptions.map((option, optIndex) => (
                          <span key={optIndex}>{`${optIndex}) ${option}`}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-secondary/50 shadow-md">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
