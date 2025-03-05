
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding overflow-hidden" id="cta">
      <div className="container-custom">
        <AnimatedSection className="bg-gradient-to-br from-tts-blue to-tts-blue/90 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 bg-white blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 bg-white blur-[60px]"></div>
          </div>
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-6">
            Let's Get Started
          </span>
          
          <h2 className="text-white font-medium text-3xl md:text-4xl mb-6 max-w-2xl mx-auto">
            Turn Your Ideas into a Powerful Online Presence
          </h2>
          
          <p className="text-white/80 max-w-xl mx-auto mb-10">
            Our expert team at TTS is ready to design and develop the perfect website for your business. Let's create something impactful together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-full bg-white text-tts-blue font-medium px-6 py-3 shadow-sm hover:bg-white/90 transition-all duration-300"
            >
              Get Started Now!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-white">Call Us: (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-white">Email: hello@ttswebdesign.com</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
