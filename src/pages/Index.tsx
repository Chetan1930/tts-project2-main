
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="chip mb-4">Why Choose TTS</span>
              <h2 className="text-tts-black mb-4">
                Web Design Excellence
              </h2>
              <p className="text-tts-gray">
                We combine creativity with technical expertise to deliver websites that not only look great but also perform exceptionally well.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customized for Your Brand",
                  description: "Every website is unique and tailored to your business needs and brand identity.",
                  delay: 0.1
                },
                {
                  title: "User-Friendly & Mobile Responsive",
                  description: "Optimized for seamless browsing on all devices, ensuring a great user experience.",
                  delay: 0.2
                },
                {
                  title: "SEO-Optimized for Better Visibility",
                  description: "Higher search rankings and organic traffic with our SEO-friendly development.",
                  delay: 0.3
                },
                {
                  title: "Advanced Security & Speed",
                  description: "Reliable hosting with top-notch security and optimized performance.",
                  delay: 0.4
                },
                {
                  title: "Ongoing Support & Maintenance",
                  description: "Keeping your website updated and running smoothly long after launch.",
                  delay: 0.5
                },
                {
                  title: "Goal-Oriented Design",
                  description: "Focused on converting visitors into customers with strategic design elements.",
                  delay: 0.6
                }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in-up" 
                  delay={item.delay}
                  className="bg-white rounded-2xl p-6 shadow-card"
                >
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-tts-blue flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-tts-black mb-2">{item.title}</h3>
                      <p className="text-tts-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <Services />
        <Portfolio />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
