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

export default function ContactForm() {
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
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Contact Us</h1>
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

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
            <CardDescription>Find us on the map</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.184202221021!2d80.16922699999999!3d12.895874099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52594b3f02af09%3A0x4fcf3c1d53b75ecf!2sCONCERN%20DDAC%20Rehabilitation%20Center!5e1!3m2!1sen!2sin!4v1752213696055!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="CONCERN Location Map"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md"
                ></iframe>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
