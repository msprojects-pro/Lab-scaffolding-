import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ABOUT_POINTS, BUSINESS_INFO, IMAGES } from '../data/scaffoldingData';

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Professional Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-[#0B1B33] bg-[#0B1B33]">
              <img
                src={IMAGES.about}
                alt="Scaffolding installation around a UK property"
                className="w-full h-[440px] sm:h-[500px] object-cover"
                loading="lazy"
              />

              {/* Accent corner tag in gold */}
              <div className="absolute top-0 left-0 bg-[#F2B233] text-[#0B1B33] font-bold text-xs uppercase tracking-widest px-3 py-1.5">
                Kent &amp; South East
              </div>

              {/* Floating quote badge on the corner */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#0B1B33] text-white p-5 border-2 border-[#5B8DD2] max-w-xs shadow-lg">
                <span className="text-[#F2B233] text-2xl font-serif leading-none block mb-1">“</span>
                <p className="text-xs sm:text-sm font-semibold italic text-slate-100 leading-snug">
                  {BUSINESS_INFO.tagline}
                </p>
                <div className="mt-2 text-[11px] font-bold text-[#5B8DD2] tracking-wider uppercase">
                  LAB Scaffolding Ltd
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Features */}
          <div className="lg:col-span-7">
            {/* Small Blue Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5B8DD2]/10 border border-[#5B8DD2]/30 text-[#5B8DD2] text-xs font-bold uppercase tracking-wider mb-4">
              <span>ABOUT LAB SCAFFOLDING</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight leading-tight mb-6">
              Scaffolding You Can Build On.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              LAB Scaffolding Ltd provides professional scaffolding services across Kent and the South East. With a focus on strength, precision and professional workmanship, we provide scaffolding solutions for a range of construction and property projects.
            </p>

            {/* 3 Strong Feature Points */}
            <div className="space-y-4 mb-8">
              {ABOUT_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="flex items-start gap-4 p-4 bg-[#F5F7FA] border-l-4 border-[#5B8DD2] transition-colors hover:bg-slate-100"
                >
                  <span className="text-lg font-mono font-extrabold text-[#5B8DD2] shrink-0">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B33] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-4 bg-[#0B1B33] border-l-4 border-[#F2B233] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#F2B233] shrink-0" />
                <span className="text-base font-bold tracking-wide">
                  “Built on strength. Raised with precision.”
                </span>
              </div>
              <button
                type="button"
                onClick={onQuoteClick}
                id="about-quote-cta-btn"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B8DD2] hover:text-white transition-colors"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
