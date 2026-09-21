import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.22em]',
    lg: 'text-[13px] tracking-[0.25em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="brand-logo">
      {/* Heraldic Shield / Scaffold Mark */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 border border-[#5B8DD2]/40 bg-[#0B1B33]`}
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(242, 178, 51, 0.15)',
        }}
      >
        {/* Scaffolding Cross-Brace & Upright Grid (Vector) */}
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vertical standards */}
          <line x1="8" y1="4" x2="8" y2="36" stroke="#5B8DD2" strokeWidth="2.2" strokeLinecap="square" />
          <line x1="32" y1="4" x2="32" y2="36" stroke="#5B8DD2" strokeWidth="2.2" strokeLinecap="square" />
          {/* Horizontal ledgers */}
          <line x1="6" y1="12" x2="34" y2="12" stroke="#5B8DD2" strokeWidth="1.8" />
          <line x1="6" y1="28" x2="34" y2="28" stroke="#5B8DD2" strokeWidth="1.8" />
          {/* Diagonal cross brace */}
          <line x1="8" y1="12" x2="32" y2="28" stroke="#5B8DD2" strokeWidth="1.2" strokeDasharray="2 2" />
          
          {/* Central Heraldic Lion Mark in Gold (#F2B233) */}
          <path
            d="M17 14.5C17 13.5 18 12.5 19.5 12.5C21 12.5 22.5 13.2 23 14.5C23.5 15.8 22.8 17 22 17.8L22.5 19C23.5 19 24.5 19.5 24.8 20.5C25 21.2 24.8 22 24.2 22.8L25 25.5H23.2L22.5 23.5H20.5L20 25.5H18L18.8 22.5C18.2 21.8 17.8 21 18 20.2C18.2 19.5 19 19 20 19L19.2 17.5C18 17.2 17 16 17 14.5Z"
            fill="#F2B233"
          />
          {/* Gold accent crown / crest pip */}
          <circle cx="20" cy="10" r="1.5" fill="#F2B233" />
        </svg>

        {/* Small gold corner accent */}
        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#F2B233]" />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-[#0B1B33]'
            }`}
          >
            LAB
          </span>
          <span className="text-[#5B8DD2] font-semibold text-xs tracking-wider">
            SCAFFOLDING
          </span>
          <span className="text-[#F2B233] font-bold text-[10px] tracking-wide">
            LTD
          </span>
        </div>
        <span
          className={`font-semibold uppercase mt-0.5 ${subtitleSizes[size]} ${
            isLight ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Kent &amp; South East
        </span>
      </div>
    </div>
  );
};
