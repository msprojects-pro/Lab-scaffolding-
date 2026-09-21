import React from 'react';
import { ArrowRight, Home, Building2, HardHat, Hammer } from 'lucide-react';
import { SERVICES } from '../data/scaffoldingData';

interface ServicesProps {
  onQuoteClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onQuoteClick }) => {
  const serviceIcons: Record<string, React.ReactNode> = {
    residential: <Home className="w-6 h-6 text-[#5B8DD2]" />,
    commercial: <Building2 className="w-6 h-6 text-[#5B8DD2]" />,
    construction: <HardHat className="w-6 h-6 text-[#5B8DD2]" />,
    renovation: <Hammer className="w-6 h-6 text-[#5B8DD2]" />,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1B33] text-white text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-[#F2B233]" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight leading-tight mb-4">
            Scaffolding For The Job At Hand.
          </h2>
          <p className="text-base sm:text-lg text-slate-700">
            Professional scaffolding contractors providing structured, safe, and dependable access solutions across Kent and the South East.
          </p>
        </div>

        {/* Structured Services Grid - Strong horizontal/vertical panels, NO generic rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-panel-${service.id}`}
              className="group relative bg-white border border-slate-300 p-8 hover:border-[#5B8DD2] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              {/* Top Row: Blue numbering + Icon + Small Gold Detail */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#5B8DD2]">
                    {service.number}
                  </span>
                  <span className="w-1 h-1 bg-[#F2B233]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    LAB Scaffolding
                  </span>
                </div>

                <div className="p-2.5 bg-[#F5F7FA] border border-slate-200 group-hover:bg-[#5B8DD2]/10 group-hover:border-[#5B8DD2]/30 transition-colors">
                  {serviceIcons[service.id]}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B33] mb-3 group-hover:text-[#5B8DD2] transition-colors">
                {service.title}
              </h3>

              {/* Exact Service Description */}
              <p className="text-base text-slate-700 font-medium leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Typical Scope Breakdown */}
              <p className="text-xs text-slate-500 leading-relaxed mb-6 pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-700">Applications: </span>
                {service.scope}
              </p>

              {/* Action Link */}
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1B33] group-hover:text-[#5B8DD2] transition-colors"
              >
                <span>Enquire For This Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Subtle Blue Bottom Accent Line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5B8DD2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B1B33] border border-slate-700 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-[#F2B233] hidden sm:block shrink-0" />
            <div>
              <p className="text-base sm:text-lg font-bold text-white">
                Need scaffolding for an upcoming project in Kent or the South East?
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                We provide prompt site evaluations and clear, no-obligation quotations.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onQuoteClick}
            id="services-bottom-quote-btn"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5B8DD2] hover:bg-[#4a7ec4] text-white font-bold text-sm tracking-wider uppercase transition-colors shrink-0"
          >
            <span>Request A Free Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
