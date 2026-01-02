'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md backdrop-blur-sm' : ''
      }`}
      style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="flex items-center gap-3 no-underline"
            onClick={handleNavClick}
          >
            <Image
              src="/images/logo.png"
              alt="Amakhuma Investment Holding"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <div className="text-2xl font-bold uppercase leading-tight tracking-wider text-[#3B3C4D]">
                AMAKHUMA
              </div>
              <div className="text-sm font-normal leading-tight tracking-wide text-[#3B3C4D]">
                Investment Holding
              </div>
            </div>
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2.5 px-3 text-base font-normal leading-6 text-[#3B3C4D]/70 hover:text-[#FB8500] no-underline transition-all duration-200"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-lg bg-[#FB8500]/10 opacity-0 hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#3B3C4D] transition-colors touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 w-auto bg-white rounded-xl shadow-lg p-4 flex flex-col space-y-2 md:hidden z-50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 min-h-[44px] flex items-center text-base font-medium text-[#3B3C4D] hover:text-[#FB8500] no-underline transition-all duration-200 active:bg-[#FB8500]/10 touch-manipulation rounded-lg"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
