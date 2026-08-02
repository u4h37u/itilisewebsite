import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "Thank you for your inquiry! We will get back to you soon.",
      });
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error Sending Message",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      iconColor: "bg-itilise-blue",
      title: "Address",
      content: "ITILISE Ltd\n124 City Road\nLondon\nEC1V 2NX",
    },
  ];

  const serviceOptions = [
    { value: "prince2", label: "PRINCE2© Training" },
    { value: "prince2-agile", label: "PRINCE2 Agile© Training" },
    { value: "agilepm", label: "AgilePM© Training" },
    { value: "fitSM", label: "FitSM Training" },
    { value: "itil", label: "ITIL© Training" },
    { value: "scrum", label: "SCRUM Training" },
    { value: "consultancy", label: "Consultancy Services" },
    { value: "custom", label: "Custom Training Program" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-itilise-gray max-w-3xl mx-auto">
            Ready to enhance your organization's capabilities? Let's discuss how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${info.iconColor} rounded-lg p-3 mr-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-itilise-gray whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-itilise-light border-none">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Response</h4>
                <p className="text-itilise-gray mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-itilise-teal" />
                  <span className="text-itilise-gray">Monday - Friday: 9:00 AM - 6:00 PM GMT</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-xl border">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-itilise-gray">
                        Your message has been sent successfully. We will get back to you within 24 hours.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-itilise-blue text-itilise-blue hover:bg-itilise-blue hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input {...field} className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input {...field} className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input {...field} className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent">
                                    <SelectValue placeholder="Select a service..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {serviceOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  rows={4}
                                  placeholder="Tell us about your requirements..."
                                  className="focus:ring-2 focus:ring-itilise-blue focus:border-transparent" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={contactMutation.isPending}
                          className="w-full bg-itilise-blue text-white py-3 px-6 rounded-lg hover:bg-itilise-blue-dark transition-colors font-semibold"
                        >
                          {contactMutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
