
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import AnimatedSection from '@/components/AnimatedSection';
import { Code, ShoppingBag, Layout, Globe, BarChart, Server, Lock, RefreshCw, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites tailored to your brand and business goals.",
    icon: <Layout className="h-8 w-8" />,
    services: [
      {
        title: "Custom Website Development",
        description: "Unique, tailor-made websites designed to reflect your brand identity and engage your audience.",
        icon: <Layout className="h-6 w-6" />,
      },
      {
        title: "Responsive Design",
        description: "Mobile-friendly websites that look great on all devices, from desktops to smartphones.",
        icon: <Smartphone className="h-6 w-6" />,
      },
      {
        title: "UI/UX Design",
        description: "Intuitive user interfaces and exceptional user experiences that keep visitors engaged.",
        icon: <Layout className="h-6 w-6" />,
      },
      {
        title: "Website Redesign",
        description: "Modernize your existing website with a fresh look and improved functionality.",
        icon: <RefreshCw className="h-6 w-6" />,
      }
    ]
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Robust online stores to showcase and sell your products.",
    icon: <ShoppingBag className="h-8 w-8" />,
    services: [
      {
        title: "E-commerce Website Development",
        description: "Custom online stores built to drive sales and provide a seamless shopping experience.",
        icon: <ShoppingBag className="h-6 w-6" />,
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure payment processing solutions for your online store.",
        icon: <Lock className="h-6 w-6" />,
      },
      {
        title: "Inventory Management",
        description: "Efficient systems to track and manage your product inventory.",
        icon: <Server className="h-6 w-6" />,
      },
      {
        title: "Product Catalog Design",
        description: "Attractive, organized product displays that showcase your offerings.",
        icon: <Layout className="h-6 w-6" />,
      }
    ]
  },
  {
    id: 3,
    title: "CMS Development",
    description: "Content management systems that make website updates easy.",
    icon: <Code className="h-8 w-8" />,
    services: [
      {
        title: "WordPress Development",
        description: "Custom WordPress websites with tailored themes and plugins.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "Shopify Development",
        description: "Professional Shopify stores with custom features and designs.",
        icon: <ShoppingBag className="h-6 w-6" />,
      },
      {
        title: "Custom CMS Solutions",
        description: "Bespoke content management systems tailored to your specific needs.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "CMS Migration",
        description: "Seamless transition from your current CMS to a new platform.",
        icon: <RefreshCw className="h-6 w-6" />,
      }
    ]
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Strategies to increase your online visibility and reach.",
    icon: <BarChart className="h-8 w-8" />,
    services: [
      {
        title: "SEO Optimization",
        description: "Improve your search engine rankings and attract more organic traffic.",
        icon: <Globe className="h-6 w-6" />,
      },
      {
        title: "Content Marketing",
        description: "Engaging content strategies to connect with your audience and build brand authority.",
        icon: <Layout className="h-6 w-6" />,
      },
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns to engage with your audience and build your brand.",
        icon: <Globe className="h-6 w-6" />,
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive data analysis to track performance and inform future strategies.",
        icon: <BarChart className="h-6 w-6" />,
      }
    ]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-tts-blue/[0.02]">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="chip mb-6">Our Services</span>
              <h1 className="font-medium text-tts-black mb-6">
                Comprehensive Web Solutions for Your Business
              </h1>
              <p className="text-tts-gray text-lg mb-8 max-w-2xl mx-auto">
                From custom web design to e-commerce development and digital marketing, we offer end-to-end services to help your business succeed online.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Services Categories */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-20">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={category.id}>
                  <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
                    <div className="w-16 h-16 bg-tts-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-tts-blue">
                      {category.icon}
                    </div>
                    <h2 className="text-tts-black mb-4">{category.title}</h2>
                    <p className="text-tts-gray">{category.description}</p>
                  </AnimatedSection>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <AnimatedSection 
                        key={serviceIndex}
                        animation="fade-in-up" 
                        delay={serviceIndex * 0.1}
                        className="bg-white rounded-2xl p-6 shadow-card card-hover"
                      >
                        <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mb-5">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-medium text-tts-black mb-3">{service.title}</h3>
                        <p className="text-tts-gray text-sm">{service.description}</p>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <AnimatedSection className="mt-16 text-center">
              <Link to="/contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Services;
