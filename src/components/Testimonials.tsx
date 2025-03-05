
import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Tech Innovators',
    quote: 'TTS delivered exactly what we needed – a sleek and high-performing website. Our customer engagement has increased significantly!',
    rating: 5,
    delay: 0.1,
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Retail Solutions',
    quote: 'Highly professional team! Our website is now lightning-fast and SEO-friendly. We\'ve seen a boost in leads since the launch.',
    rating: 5,
    delay: 0.2,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-tts-blue/[0.02]" id="testimonials">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-4">Testimonials</span>
          <h2 className="text-tts-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-tts-gray">
            We're proud to have helped businesses transform their online presence. Here's what some of our clients have to say.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <AnimatedSection 
              key={testimonial.id} 
              animation="fade-in-up" 
              delay={testimonial.delay}
              className="bg-white rounded-2xl p-8 shadow-card card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-tts-dark-gray text-lg font-medium italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tts-blue/10 flex items-center justify-center text-tts-blue font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-tts-black font-medium">{testimonial.name}</p>
                  <p className="text-tts-gray text-sm">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
