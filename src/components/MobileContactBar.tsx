import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/scaffoldingData';

interface MobileContactBarProps {
  onQuoteClick: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onQuoteClick }) => {
  return (
    <div
      id="mobile-sticky-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1B33] border-t-2 border-[#5B8DD2] p-2.5 sm:hidden shadow-2xl flex items-center gap-2"
    >
      <a
        href={BUSINESS_INFO.phoneTel}
        id="mobile-sticky-call-btn"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-white text-[#0B1B33] font-black text-xs uppercase tracking-wider active:bg-slate-100"
      >
        <Phone className="w-4 h-4 text-[#5B8DD2]" />
        <span>Call {BUSINESS_INFO.phoneFormatted}</span>
      </a>

      <button
        type="button"
        onClick={onQuoteClick}
        id="mobile-sticky-quote-btn"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[#5B8DD2] text-white font-black text-xs uppercase tracking-wider active:bg-[#4a7ec4]"
      >
        <FileText className="w-4 h-4" />
        <span>Free Quote</span>
      </button>
    </div>
  );
};
