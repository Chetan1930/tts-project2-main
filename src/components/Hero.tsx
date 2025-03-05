
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container-custom relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 bg-tts-blue blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 bg-tts-blue blur-[80px]"></div>
        </div>
        
        <AnimatedSection animation="fade-in" className="text-center max-w-4xl mx-auto">
          <span className="chip mb-6">Transforming Ideas into Stunning Websites</span>
          <h1 className="font-medium text-tts-black mb-6">
            Build a Website That Works <span className="text-tts-blue">for You</span>
          </h1>
          
          <AnimatedSection animation="fade-in" delay={0.2} className="max-w-2xl mx-auto">
            <p className="text-tts-gray text-lg mb-8">
              At TTS, we craft visually appealing, high-performance websites designed to engage your audience and drive business growth.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-tts-dark-gray font-medium">Bespoke Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-tts-dark-gray font-medium">E-commerce & CMS Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-tts-dark-gray font-medium">SEO & Performance Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tts-blue/10 text-tts-blue flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-tts-dark-gray font-medium">Fast & Secure Hosting</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
