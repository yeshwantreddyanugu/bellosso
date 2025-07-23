import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-script text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-script text-cafe-primary mb-6">
                Send us a Message
              </h2>
              <Card className="border border-border/50 shadow-medium">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Your last name"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="w-full"
                        required
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-script text-cafe-primary mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {/* Address Card */}
                <Card className="border border-border/50 shadow-medium">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-foreground">
                      <MapPin className="h-5 w-5 mr-3 text-cafe-primary" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      123 Coffee Street<br />
                      Downtown District<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="border border-border/50 shadow-medium">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-foreground">
                      <Phone className="h-5 w-5 mr-3 text-cafe-primary" />
                      Phone Number
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:text-cafe-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available during business hours
                    </p>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="border border-border/50 shadow-medium">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-foreground">
                      <Mail className="h-5 w-5 mr-3 text-cafe-primary" />
                      Email Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@belloso.cafe" className="hover:text-cafe-primary transition-colors">
                        hello@belloso.cafe
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll get back to you within 24 hours
                    </p>
                  </CardContent>
                </Card>

                {/* Hours Card */}
                <Card className="border border-border/50 shadow-medium">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-foreground">
                      <Clock className="h-5 w-5 mr-3 text-cafe-primary" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>8:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>8:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-script text-cafe-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of downtown, easily accessible by public transport
            </p>
          </div>
          
          {/* Map Placeholder - In a real app, you'd integrate with Google Maps */}
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden shadow-medium">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-cafe-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map would be integrated here<br />
                  123 Coffee Street, Downtown District, NY 10001
                </p>
              </div>
            </div>
            {/* This would be replaced with actual map integration */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0362176316!2d-74.30932858652306!3d40.69753995830908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635180000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Belloso Cafe Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;