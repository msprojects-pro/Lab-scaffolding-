import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, SERVICES } from '../data/scaffoldingData';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1B33] text-slate-300 border-t border-slate-800">
      {/* Top Footer Ribbon */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BrandLogo variant="light" size="lg" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#5B8DD2]" />
              <span>Kent &amp; the South East</span>
            </div>
            <span className="text-slate-700">|</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-2 font-bold text-white hover:text-[#5B8DD2] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#5B8DD2]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={onQuoteClick}
              className="text-xs font-bold uppercase tracking-wider text-[#F2B233] hover:underline"
            >
              Free Quotation
            </button>
          </div>
        </div>
      </div>

      {/* Middle Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Brief */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              About LAB Scaffolding Ltd
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-4">
              Professional scaffolding contractors serving Kent and the South East. Providing safe, reliable, and precise scaffolding solutions for residential, commercial, and construction projects.
            </p>
            <p className="text-xs font-semibold text-[#F2B233]">
              “{BUSINESS_INFO.tagline}”
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#home" className="hover:text-[#5B8DD2] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#5B8DD2] transition-colors">
                  About LAB Scaffolding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5B8DD2] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#5B8DD2] transition-colors">
                  Our Work Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#5B8DD2] transition-colors">
                  Contact &amp; Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Scaffolding Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Scaffolding Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline-block mx-2 text-slate-700">|</span>
            <span className="block sm:inline-block mt-1 sm:mt-0 text-slate-400">
              Professional Scaffolding Contractor Website Concept
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
