'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartTooltipContent,
  ChartContainer,
} from '@/components/ui/chart';

const chartData = [
  { category: 'People Helped', value: 12580 },
  { category: 'Projects', value: 342 },
  { category: 'Volunteers', value: 1230 },
  { category: 'Countries', value: 15 },
  { category: 'Funds Raised ($M)', value: 5.2 },
];

const chartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--primary))',
  },
};

export function ImpactChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Our Global Impact</CardTitle>
        <CardDescription>
          Visualizing our progress over the last year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} accessibilityLayer margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
              />
               <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey="value"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
