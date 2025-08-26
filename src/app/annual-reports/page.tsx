
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const reports = [
  {
    year: '2024-2025',
    description: 'Our latest report detailing activities, achievements, and financial overview for the fiscal year.',
    fileUrl: '/pdfs/Annual Report 2024-2025.pdf',
  },
  {
    year: '2023-2024',
    description: 'A comprehensive summary of our work and progress throughout the 2023-2024 period.',
    fileUrl: '/pdfs/Annual Report 2023-24.pdf',
  },
  {
    year: '2022-2023',
    description: 'An overview of our initiatives, community outreach, and financial health from 2022-2023.',
    fileUrl: '/pdfs/Annual Report 2022-23.pdf',
  },
    {
    year: '2021-2022',
    description: 'Details on our programs and their impact during the 2021-2022 fiscal year.',
    fileUrl: '/pdfs/Annual Report 2021-22.pdf',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};


export default function AnnualReportsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Annual Reports</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Review our progress and impact over the years.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {reports.map((report) => (
            <motion.div key={report.year} variants={itemVariants}>
                <Card className="flex flex-col shadow-md transition-shadow hover:shadow-xl h-full">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
