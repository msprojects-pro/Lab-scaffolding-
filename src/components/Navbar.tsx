import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/scaffoldingData';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#0B1B33] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#5B8DD2]" />
              <span>Kent &amp; the South East</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2B233]" />
              <span>Professional Scaffolding Contractors</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block text-slate-400">
              Free quotations available
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              id="topbar-phone-link"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#5B8DD2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#5B8DD2]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none"
            aria-label="LAB Scaffolding Ltd Home"
            id="nav-logo-link"
          >
            <BrandLogo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-[#0B1B33] hover:text-[#5B8DD2] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B8DD2] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              id="header-call-cta"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-[#0B1B33] border border-slate-300 hover:border-[#5B8DD2] hover:text-[#5B8DD2] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#5B8DD2]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={onQuoteClick}
              id="header-quote-cta"
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#5B8DD2] hover:bg-[#4a7ec4] transition-colors shadow-sm focus:ring-2 focus:ring-[#5B8DD2] focus:ring-offset-2"
            >
              <span>Free Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.phoneTel}
              id="mobile-call-button-header"
              className="inline-flex sm:hidden p-2 text-[#0B1B33] border border-slate-300 hover:bg-slate-50"
              aria-label={`Call LAB Scaffolding at ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-4 h-4 text-[#5B8DD2]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-[#0B1B33] hover:text-[#5B8DD2] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-6"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-base font-bold text-[#0B1B33] hover:text-[#5B8DD2] py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                id="mobile-drawer-call-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 font-bold text-[#0B1B33] border-2 border-[#0B1B33] hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5B8DD2]" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                id="mobile-drawer-quote-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 font-bold text-white bg-[#5B8DD2] hover:bg-[#4a7ec4] transition-colors"
              >
                <span>Get A Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-500 pt-2">
                Serving Kent and the South East
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
