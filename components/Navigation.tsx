'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { glowPulse } = useGSAPAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Use requestAnimationFrame for smooth scroll detection
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{ 
        WebkitBackfaceVisibility: 'hidden', 
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform, background-color, box-shadow',
      }}
    >
      {/* Futuristic gradient overlay on scroll */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-[#FB8500]/5 via-transparent to-[#FFAC4F]/5 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      
      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="flex items-center gap-3 no-underline group relative"
            onClick={handleNavClick}
          >
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Amakhuma Investment Holding"
                width={50}
                height={50}
                className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(251,133,0,0.5)]"
              />
              {/* Futuristic glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold uppercase leading-tight tracking-wider text-[#3B3C4D] transition-all duration-300 group-hover:text-[#FB8500] group-hover:drop-shadow-[0_0_10px_rgba(251,133,0,0.3)]">
                AMAKHUMA
              </div>
              <div className="text-sm font-normal leading-tight tracking-wide text-[#3B3C4D]/70 group-hover:text-[#3B3C4D] transition-colors duration-300">
                Investment Holding
              </div>
            </div>
          </a>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2.5 px-4 text-base font-medium leading-6 text-[#3B3C4D]/80 hover:text-[#FB8500] no-underline transition-all duration-300 group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Futuristic hover effect */}
                <span 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FB8500]/10 to-[#FFAC4F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" 
                  aria-hidden="true" 
                />
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FB8500] to-[#FFAC4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" 
                  aria-hidden="true" 
                />
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#3B3C4D] transition-all duration-300 touch-manipulation relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="absolute inset-0 rounded-lg bg-[#FB8500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                  className="transition-all duration-300"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="transition-all duration-300"
                />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div 
            className="absolute top-full left-0 right-0 mt-2 mx-4 w-auto bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-4 flex flex-col space-y-1 md:hidden z-50 border border-white/20"
            style={{ animation: 'slideDown 0.3s ease-out' }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 min-h-[44px] flex items-center text-base font-medium text-[#3B3C4D] hover:text-[#FB8500] no-underline transition-all duration-300 active:bg-gradient-to-r active:from-[#FB8500]/10 active:to-[#FFAC4F]/10 touch-manipulation rounded-xl relative group"
                onClick={handleNavClick}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FB8500] to-[#FFAC4F] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r-full" />
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
