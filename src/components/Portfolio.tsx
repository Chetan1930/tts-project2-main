
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=1000&auto=format&fit=crop',
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Corporate Website',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    delay: 0.3,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-4">Our Work</span>
          <h2 className="text-tts-black mb-4">
            Featured Projects
          </h2>
          <p className="text-tts-gray">
            Take a look at some of our recent work. We've helped businesses of all sizes establish a powerful online presence.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <AnimatedSection 
              key={item.id}
              animation="fade-in-up" 
              delay={item.delay}
              className="group overflow-hidden rounded-2xl shadow-card card-hover"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tts-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-xs font-medium text-white/80 uppercase">{item.category}</span>
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="fade-in" delay={0.4} className="mt-12 text-center">
          <Link to="/portfolio" className="btn-primary">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
