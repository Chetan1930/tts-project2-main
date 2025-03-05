
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-tts-blue/[0.02]">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="chip mb-6">Contact Us</span>
              <h1 className="font-medium text-tts-black mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-tts-gray text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind or want to learn more about our services? We'd love to hear from you. Get in touch with our team today.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              <AnimatedSection 
                animation="fade-in-up" 
                delay={0.1}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mb-5">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-tts-black mb-2">Call Us</h3>
                <p className="text-tts-gray text-sm mb-4">We're available Monday to Friday, 9am to 6pm.</p>
                <a href="tel:+15551234567" className="text-tts-blue font-medium hover:underline">(555) 123-4567</a>
              </AnimatedSection>
              
              <AnimatedSection 
                animation="fade-in-up" 
                delay={0.2}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mb-5">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-tts-black mb-2">Email Us</h3>
                <p className="text-tts-gray text-sm mb-4">We'll respond to your email within 24 hours.</p>
                <a href="mailto:hello@ttswebdesign.com" className="text-tts-blue font-medium hover:underline">hello@ttswebdesign.com</a>
              </AnimatedSection>
              
              <AnimatedSection 
                animation="fade-in-up" 
                delay={0.3}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-tts-blue/10 text-tts-blue flex items-center justify-center mb-5">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-tts-black mb-2">Visit Us</h3>
                <p className="text-tts-gray text-sm mb-4">123 Design Street, Suite 456</p>
                <p className="text-tts-blue font-medium">San Francisco, CA 94103</p>
              </AnimatedSection>
            </div>
            
            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-2xl font-medium text-tts-black mb-6">
                  Send Us a Message
                </h2>
                <p className="text-tts-gray mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-tts-dark-gray">
                        Full Name <span className="text-tts-blue">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tts-blue focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-tts-dark-gray">
                        Email Address <span className="text-tts-blue">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tts-blue focus:border-transparent transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-tts-dark-gray">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tts-blue focus:border-transparent transition-colors"
                        placeholder="Your phone"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-tts-dark-gray">
                        Subject <span className="text-tts-blue">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tts-blue focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="Web Design">Web Design</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="CMS Development">CMS Development</option>
                        <option value="SEO">SEO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-tts-dark-gray">
                      Message <span className="text-tts-blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tts-blue focus:border-transparent transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <div className="aspect-square w-full">
                    <iframe
                      title="TTS Office Location"
                      className="w-full h-full border-0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948554!3d37.75781499657619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623252076002!5m2!1sen!2sus"
                      loading="lazy"
                    ></iframe>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-tts-black mb-4">Business Hours</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-tts-blue mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-tts-dark-gray font-medium">Monday - Friday</p>
                          <p className="text-tts-gray text-sm">9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-tts-blue mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-tts-dark-gray font-medium">Saturday</p>
                          <p className="text-tts-gray text-sm">10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-tts-blue mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-tts-dark-gray font-medium">Sunday</p>
                          <p className="text-tts-gray text-sm">Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
