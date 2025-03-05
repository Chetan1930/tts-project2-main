
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import AnimatedSection from '@/components/AnimatedSection';
import { ExternalLink } from 'lucide-react';

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'A fully responsive e-commerce platform with integrated payment gateways and inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Shopify', 'Custom Development', 'UI/UX Design'],
  },
  {
    id: 2,
    title: 'Corporate Website',
    category: 'Business',
    description: 'A professional corporate website with modern design and optimized for lead generation.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
    tags: ['WordPress', 'SEO', 'Responsive Design'],
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    category: 'Portfolio',
    description: 'A visually stunning portfolio website showcasing creative work with interactive elements.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    tags: ['Custom Development', 'Animation', 'UI/UX Design'],
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'Food & Beverage',
    description: 'An elegant website for a restaurant featuring online reservations and a digital menu.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    tags: ['WordPress', 'Booking System', 'Responsive Design'],
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'Real Estate',
    description: 'A comprehensive real estate platform with property listings, search functionality, and agent profiles.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    tags: ['Custom Development', 'MLS Integration', 'Search Functionality'],
  },
  {
    id: 6,
    title: 'Health & Wellness App',
    category: 'Healthcare',
    description: 'A web application for a health and wellness company with booking and user account features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
    tags: ['Web App', 'User Authentication', 'Appointment Booking'],
  },
];

// Categories for filtering
const allCategories = ['All', ...new Set(projects.map(project => project.category))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-tts-blue/[0.02]">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="chip mb-6">Our Work</span>
              <h1 className="font-medium text-tts-black mb-6">
                Portfolio of Our Best Web Projects
              </h1>
              <p className="text-tts-gray text-lg mb-8 max-w-2xl mx-auto">
                Explore our collection of successful projects. Each website we create is custom-designed to meet our clients' specific needs and goals.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Portfolio Gallery */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Category Filters */}
            <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
              {allCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-tts-blue text-white shadow-sm'
                      : 'bg-secondary text-tts-dark-gray hover:bg-secondary/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </AnimatedSection>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.id}
                  animation="fade-in-up" 
                  delay={index * 0.1}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-tts-dark-gray backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-tts-black mb-2">{project.title}</h3>
                    <p className="text-tts-gray text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-tts-blue/10 text-tts-blue rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-tts-blue hover:underline"
                    >
                      View Project 
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
