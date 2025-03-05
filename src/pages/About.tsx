
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, Code, Award, Coffee, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Company stats
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '100+', label: 'Happy Clients' },
    { icon: <Code className="h-6 w-6" />, value: '250+', label: 'Projects Completed' },
    { icon: <Award className="h-6 w-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Coffee className="h-6 w-6" />, value: '5000+', label: 'Cups of Coffee' },
  ];

  // Team members
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Michael Rodriguez',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Emma Wilson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // Core values
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from the first design concept to the final delivery.',
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative solutions and stay at the forefront of web design and technology trends.',
    },
    {
      title: 'Integrity',
      description: 'We value honesty and transparency in our client relationships and business practices.',
    },
    {
      title: 'Client Focus',
      description: 'Your success is our success. We listen closely to understand and fulfill your unique needs.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-tts-blue/[0.02]">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="chip mb-6">About Us</span>
              <h1 className="font-medium text-tts-black mb-6">
                We're TTS, Your Digital Partner
              </h1>
              <p className="text-tts-gray text-lg mb-8 max-w-2xl mx-auto">
                TTS is a team of passionate web designers and developers dedicated to crafting exceptional digital experiences that drive business growth.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                    alt="TTS Team" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up">
                <span className="chip mb-4">Our Story</span>
                <h2 className="text-tts-black mb-6">
                  Transforming Ideas into Digital Reality Since 2014
                </h2>
                <p className="text-tts-gray mb-6">
                  Founded in 2014, TTS began with a simple mission: to help businesses establish a powerful online presence through thoughtful design and technical excellence. What started as a small team of three passionate web enthusiasts has grown into a full-service digital agency.
                </p>
                <p className="text-tts-gray mb-6">
                  We've worked with hundreds of clients across various industries, from startups to established brands, helping them achieve their business goals through custom web solutions. Our approach combines creative design thinking with technical expertise to deliver websites that not only look beautiful but also drive results.
                </p>
                <p className="text-tts-gray">
                  Today, we continue to innovate and evolve, staying at the forefront of web design trends and technologies to provide our clients with cutting-edge solutions that set them apart in their industries.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-tts-light">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in-up" 
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-tts-black mb-2">{stat.value}</h3>
                  <p className="text-tts-gray">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="chip mb-4">Our Values</span>
              <h2 className="text-tts-black mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-tts-gray">
                Our core values define who we are as a company and shape how we work with our clients.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in-up" 
                  delay={index * 0.1}
                  className="bg-white rounded-2xl p-6 shadow-card"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="h-6 w-6 text-tts-blue" />
                    <h3 className="text-lg font-medium text-tts-black">{value.title}</h3>
                  </div>
                  <p className="text-tts-gray text-sm">{value.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="section-padding bg-tts-blue/[0.02]">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="chip mb-4">Our Team</span>
              <h2 className="text-tts-black mb-4">
                The Experts Behind TTS
              </h2>
              <p className="text-tts-gray">
                Meet our talented team of designers, developers, and digital strategists who bring your vision to life.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in-up" 
                  delay={index * 0.1}
                  className="bg-white rounded-2xl overflow-hidden shadow-card card-hover"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium text-tts-black mb-1">{member.name}</h3>
                    <p className="text-tts-gray text-sm">{member.role}</p>
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

export default About;
