
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, ShoppingBag, Layout, Globe, BarChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className, delay = 0 }) => (
  <AnimatedSection 
    animation="fade-in-up" 
    delay={delay}
    className={cn("bg-white rounded-2xl p-6 shadow-card card-hover", className)}
  >
    <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-tts-black mb-3">{title}</h3>
    <p className="text-tts-gray text-sm mb-4">{description}</p>
    <Link 
      to="/services" 
      className="inline-flex items-center text-sm font-medium text-tts-blue hover:underline"
    >
      Learn more
      <ArrowRight className="ml-1 h-3 w-3" />
    </Link>
  </AnimatedSection>
);

const Services: React.FC = () => {
  return (
    <section className="section-padding bg-tts-light" id="services">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-4">Our Core Services</span>
          <h2 className="text-tts-black mb-4">
            Elevate Your Online Presence
          </h2>
          <p className="text-tts-gray">
            We offer comprehensive web solutions tailored to your specific needs, helping businesses of all sizes establish a powerful digital presence.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Layout className="h-6 w-6" />}
            title="Custom Website Development"
            description="Stunning, tailor-made websites designed to reflect your brand identity and engage your audience."
            delay={0.1}
          />
          
          <ServiceCard
            icon={<ShoppingBag className="h-6 w-6" />}
            title="E-commerce Solutions"
            description="Build, manage, and grow your online store with our secure and scalable e-commerce platforms."
            delay={0.2}
          />
          
          <ServiceCard
            icon={<Code className="h-6 w-6" />}
            title="CMS Development"
            description="Powerful content management systems built on WordPress, Shopify, and other leading platforms."
            delay={0.3}
          />
          
          <ServiceCard
            icon={<Layout className="h-6 w-6" />}
            title="Website Redesign"
            description="Give your existing website a fresh, modern look while improving functionality and user experience."
            delay={0.4}
          />
          
          <ServiceCard
            icon={<Globe className="h-6 w-6" />}
            title="SEO Optimization"
            description="Improve your search engine rankings and attract more organic traffic to your website."
            delay={0.5}
          />
          
          <ServiceCard
            icon={<BarChart className="h-6 w-6" />}
            title="Digital Marketing"
            description="Comprehensive digital marketing strategies to help you reach and engage your target audience."
            delay={0.6}
          />
        </div>
        
        <AnimatedSection animation="fade-in" delay={0.7} className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
