'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  comments: z.string().min(10, {
    message: 'Comments must be at least 10 characters.',
  }),
});

export default function ContactUsPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      name: '',
      phone: '',
      email: '',
      comments: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values);
    toast({
      title: 'Form Submitted!',
      description: 'Thank you for your enquiry. We will get back to you soon.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            For Enquiries, Admissions or any other related Information.
          </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Enquiry Form</CardTitle>
                <CardDescription>Please fill up and submit</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Title</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a title" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Mr">Mr</SelectItem>
                                <SelectItem value="Mrs">Mrs</SelectItem>
                                <SelectItem value="Miss">Miss</SelectItem>
                                <SelectItem value="Ms">Ms</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="comments"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Comments</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your comments or questions" className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full">
                          <Send />
                          Submit Enquiry
                        </Button>
                    </form>
                 </Form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
