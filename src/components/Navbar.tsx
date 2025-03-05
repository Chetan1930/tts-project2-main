
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-subtle' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold text-tts-black">TTS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-tts-blue',
                location.pathname === link.path 
                  ? 'text-tts-blue' 
                  : 'text-tts-dark-gray'
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-tts-dark-gray"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 md:hidden animate-fade-in">
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'py-3 px-4 text-lg font-medium transition-colors rounded-md',
                    location.pathname === link.path
                      ? 'bg-secondary text-tts-blue'
                      : 'text-tts-dark-gray hover:bg-secondary/50'
                  )}
                >
                  {link.title}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-4 text-center">
                Start Your Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
