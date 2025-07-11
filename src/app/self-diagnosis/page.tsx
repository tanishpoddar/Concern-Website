import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const questions = [
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

export default function SelfDiagnosisPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Self Diagnosis</h1>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p>
            The problem of addiction must have existed from time immemorial when man started crushing grapes. However, addiction was not defined as a disease till a few decades ago, despite a few medical professionals who recognized addiction as a disease process, but could not prove it. Only in the late 1950's it was recognized formally and officially as a disease. Then many lines of treatment were put forward by various people and professionals around the world.
          </p>
          <p>
            All along, addiction has taken its toll, affecting not only the persons suffering from the addiction, but also their families and friends. Countless families have been traumatized, affecting the lives of children from these broken homes for generations to come. The social stigma continued to haunt even those who tried to recover from this disease. In the arena of work and career, people shied away from those affected by the disease.
          </p>
           <p>
            These problems continue to be on the rise, and yet there is hope in the horizon. Today, there is a growing awareness and recognition of addiction as a disease - a change in attitude that releases the suffering ones from the fierce moral condemnation that was their lot in the earlier days. There are many individuals and organizations doing yeoman service to treat people suffering from the disease of addiction.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Do you border Alcoholism?</CardTitle>
            <CardDescription>
              To answer the above questions ask yourself the following test questions and answer them as honestly as you can. (If your answers are ‘NO’ to all the question re-answer them with the help of your spouse or the closest member of your family). Remember there is no right or wrong answers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
           <CardHeader>
            <CardTitle>Scoring Stage of addiction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
             <p>If you have answered YES to any one of the questions, there is a definite warning that you may be an alcoholic.</p>
             <p>If you have answered YES to any two, the chances are that you are an alcoholic.</p>
             <p>If you have answered YES to any three or more you are definitely an alcoholic.</p>
             <p className="pt-4 text-sm text-muted-foreground">
                Courtesy and Reference - The above test questions are used by John Hopkins University Hospital, Baltimore in deciding whether or not a patient is alcoholic.
             </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}