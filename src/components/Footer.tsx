
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tts-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold text-tts-black">TTS</span>
            </Link>
            <p className="text-tts-gray mb-6 text-sm">
              Transforming ideas into stunning websites. We design and develop custom web solutions to help businesses grow online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center transition-colors hover:bg-tts-blue hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center transition-colors hover:bg-tts-blue hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center transition-colors hover:bg-tts-blue hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center transition-colors hover:bg-tts-blue hover:text-white">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-tts-black font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-tts-gray hover:text-tts-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-tts-gray hover:text-tts-blue transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-tts-gray hover:text-tts-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-tts-gray hover:text-tts-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-tts-black font-medium text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">Web Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">E-commerce Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">CMS Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">Website Redesign</Link>
              </li>
              <li>
                <Link to="/services" className="text-tts-gray hover:text-tts-blue transition-colors">SEO Optimization</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-tts-black font-medium text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-tts-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-tts-gray">
                  123 Design Street, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-tts-blue mr-3 flex-shrink-0" />
                <span className="text-tts-gray">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-tts-blue mr-3 flex-shrink-0" />
                <span className="text-tts-gray">hello@ttswebdesign.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-tts-gray text-sm mb-4 md:mb-0">
              © {currentYear} TTS Web Design. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-tts-gray text-sm hover:text-tts-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-tts-gray text-sm hover:text-tts-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-tts-gray text-sm hover:text-tts-blue transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
