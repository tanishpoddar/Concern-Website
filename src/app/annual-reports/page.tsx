import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Reports',
  description: 'Download the annual reports from CONCERN to see our activities, financial statements, and impact over the years.',
};

const reports = [
  {
    year: '2024-2025',
    description: 'Our latest report detailing activities, achievements, and financial overview for the fiscal year.',
    fileUrl: '/pdfs/Annual Report 2024-2025.pdf',
  },
  {
    year: '2023-2024',
    description: 'A comprehensive summary of our work and progress throughout the 2023-2024 period.',
    fileUrl: '/pdfs/Annual Report 2023-2024.pdf',
  },
  {
    year: '2022-2023',
    description: 'An overview of our initiatives, community outreach, and financial health from 2022-2023.',
    fileUrl: '/pdfs/Annual Report 2022-2023.pdf',
  },
    {
    year: '2021-2022',
    description: 'Details on our programs and their impact during the 2021-2022 fiscal year.',
    fileUrl: '/pdfs/Annual Report 2021-2022.pdf',
  },
];

export default function AnnualReportsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Annual Reports</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Review our progress and impact over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reports.map((report) => (
            <Card key={report.year} className="flex flex-col shadow-md transition-shadow hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">Annual Report {report.year}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{report.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full">
                    <a href={report.fileUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
