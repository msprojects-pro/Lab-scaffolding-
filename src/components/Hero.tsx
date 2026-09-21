import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/scaffoldingData';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-28 pb-16 bg-[#0B1B33] overflow-hidden"
    >
      {/* Background Photography with solid Navy Overlay - NO gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Professional scaffolding installation on a construction site"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Deep Navy solid overlay for maximum legibility and contrast */}
        <div className="absolute inset-0 bg-[#0B1B33]/85" />
      </div>

      {/* Decorative structural scaffolding lines / subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, #5B8DD2 1px, transparent 1px), linear-gradient(to bottom, #5B8DD2 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Service-area and Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0B1B33] border border-[#5B8DD2]/50 text-white text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-[#F2B233]" />
            <span>{BUSINESS_INFO.heroLabel}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Built On Strength. <br />
            <span className="text-[#5B8DD2]">Raised With Precision.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            {BUSINESS_INFO.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={onQuoteClick}
              id="hero-quote-btn"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#5B8DD2] hover:bg-[#4a7ec4] transition-colors focus:ring-2 focus:ring-[#5B8DD2] focus:ring-offset-2 focus:ring-offset-[#0B1B33]"
            >
              <span>Get A Free Quotation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Secondary CTA */}
            <a
              href={BUSINESS_INFO.phoneTel}
              id="hero-call-btn"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#0B1B33] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#5B8DD2]" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Credibility & Service Area Badges */}
          <div className="pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2.5 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-[#5B8DD2] shrink-0" />
              <div>
                <span className="font-semibold text-white block">Service Area</span>
                <span className="text-xs text-slate-300">Kent &amp; The South East</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 text-sm">
              <ShieldCheck className="w-4 h-4 text-[#F2B233] shrink-0" />
              <div>
                <span className="font-semibold text-white block">Contractor Standard</span>
                <span className="text-xs text-slate-300">{BUSINESS_INFO.credibilityLine}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#5B8DD2] shrink-0" />
              <div>
                <span className="font-semibold text-white block">Direct Pricing</span>
                <span className="text-xs text-slate-300">Free Quotations Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
