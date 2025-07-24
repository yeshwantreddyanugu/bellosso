import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Coffee, Heart, Star, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BellosoLogo from '@/assets/BellosoLogo.svg?react';


const Index = () => {
  const featuredItems = [
    {
      name: "Signature Espresso",
      description: "Rich, bold shot of our premium Italian coffee beans",
      price: "$3.50",
      image: "photo-1509042239860-f550ce710b93"
    },
    {
      name: "Avocado Toast",
      description: "Fresh avocado on multigrain bread with seasonings",
      price: "$8.50",
      image: "photo-1541519227354-08fa5d50c44d"
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee and mascarpone",
      price: "$6.50",
      image: "photo-1571877227200-a0d98ea607e9"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            {/* <img
              src="/Belloso_image.jpg"
              alt="Belloso Cafe"
              className="h-32 w-auto mx-auto mb-8"
            /> */}

            

           {/* <BellosoLogo className="h-32 w-auto mx-auto mb-8 text-white" /> */}


            
            <h1 className="text-white text-5xl md:text-7xl font-script mb-6 animate-in slide-in-from-bottom duration-1000">
              Welcome to Belloso
            </h1>

            <p className="text-xl md:text-2xl mb-8 animate-in slide-in-from-bottom duration-1000 delay-300">
              Indulge in our cozy atmosphere and savor our exquisite offerings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-500">
              <Link to="/menu">
                <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                  Explore Menu
                  {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                </Button>
              </Link>
              <a href="#story">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                  Our Story
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div> */}
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-script text-cafe-primary mb-6">
                Discover Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in the heart of the city, Belloso Cafe began as a dream to create a space where
                  community, comfort, and exceptional coffee converge. Our journey started with a simple
                  belief: that every cup should tell a story.
                </p>
                <p className="text-lg leading-relaxed">
                  We source our beans from sustainable farms around the world, working directly with growers
                  who share our passion for quality and ethical practices. Each roast is carefully crafted
                  to bring out the unique characteristics of the origin.
                </p>
                <p className="text-lg leading-relaxed">
                  More than just a cafe, we're a gathering place where ideas brew, friendships flourish,
                  and every visit feels like coming home. Welcome to the Belloso family.
                </p>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cafe-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cafe-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cafe-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Menu Items</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                  alt="Coffee being poured"
                  className="rounded-lg shadow-large w-full"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cafe-gold rounded-full flex items-center justify-center shadow-glow">
                  <Coffee className="h-12 w-12 text-cafe-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-script text-cafe-primary mb-4">
              Taste the Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From expertly crafted beverages to artisanal pastries, discover what makes our menu special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item, index) => (
              <Card key={index} className="card-hover bg-card border border-border/50">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
                    <Badge variant="secondary" className="bg-cafe-gold/10 text-cafe-gold border-cafe-gold/20">
                      {item.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-script text-cafe-primary mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, special offers, and behind-the-scenes moments
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com/bellosocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="h-8 w-8 text-muted-foreground group-hover:text-[#E4405F] transition-colors" />
            </a>
            <a
              href="https://facebook.com/bellosocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
            >
              <Facebook className="h-8 w-8 text-muted-foreground group-hover:text-[#1877F2] transition-colors" />
            </a>
            <a
              href="https://twitter.com/bellosocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-card rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="h-8 w-8 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "photo-1501339847302-ac426a4a7cbb",
              "photo-1509042239860-f550ce710b93",
              "photo-1541519227354-08fa5d50c44d",
              "photo-1571877227200-a0d98ea607e9"
            ].map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <img
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=300&q=80`}
                  alt={`Belloso moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-script text-cafe-primary mb-6">
                Visit Us Today
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cafe-gold/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-cafe-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Coffee Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cafe-gold/10 rounded-lg">
                    <Star className="h-6 w-6 text-cafe-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cafe-gold/10 rounded-lg">
                    <Heart className="h-6 w-6 text-cafe-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">What Makes Us Special</h3>
                    <p className="text-muted-foreground">
                      Free WiFi, cozy atmosphere, locally sourced ingredients,
                      and a commitment to sustainability in every cup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Get Directions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              {/* Map placeholder */}
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden shadow-large">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
