import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cafe-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/e1a02fa8-a43c-45d4-9868-1987daac188e.png" 
              alt="Belloso Cafe" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 mb-6">
              Indulge in our cozy atmosphere and savor our exquisite offerings. 
              Experience the perfect blend of comfort and sophistication.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#story" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Our Story
                </a>
              </li>
              <li>
                <Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  123 Coffee Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@belloso.cafe</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary-foreground/60" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium">Monday - Friday</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="pl-7 text-primary-foreground/80">
                <p className="font-medium">Saturday - Sunday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Belloso Cafe. All rights reserved. Crafted with love for coffee enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;