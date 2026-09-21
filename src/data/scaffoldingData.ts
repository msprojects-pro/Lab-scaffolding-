import { GalleryProject, ScaffoldingService } from '../types';

export const BUSINESS_INFO = {
  name: 'LAB Scaffolding Ltd',
  legalName: 'LAB Scaffolding Ltd',
  category: 'Scaffolding Contractor / Construction Company',
  tagline: 'Built on strength. Raised with precision.',
  phone: '07865291694',
  phoneFormatted: '07865 291694',
  phoneTel: 'tel:07865291694',
  serviceArea: 'Kent & the South East',
  serviceAreaFull: 'Kent & the South East of England',
  description: 'Professional scaffolding contractors serving Kent & the South East.',
  facebookFollowers: 879,
  quotation: 'Free quotations available',
  heroLabel: 'PROFESSIONAL SCAFFOLDING CONTRACTORS',
  credibilityLine: 'Professional Scaffolding Contractors',
};

export const BRAND_COLORS = {
  primaryBlue: '#5B8DD2',
  deepNavy: '#0B1B33',
  goldAccent: '#F2B233',
  white: '#FFFFFF',
  lightBg: '#F5F7FA',
};

export const SERVICES: ScaffoldingService[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Scaffolding',
    description: 'Scaffolding solutions for domestic building, maintenance and renovation projects.',
    scope: 'Domestic property access, extensions, exterior redecoration, re-roofing, and chimney maintenance.',
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Scaffolding',
    description: 'Professional scaffolding for commercial and larger-scale property work.',
    scope: 'Retail, office premises, industrial units, and multi-occupancy building maintenance access.',
  },
  {
    id: 'construction',
    number: '03',
    title: 'Construction Scaffolding',
    description: 'Scaffolding designed to provide practical access during construction projects.',
    scope: 'New build developments, structural works, groundwork progression, and trade access platforms.',
  },
  {
    id: 'renovation',
    number: '04',
    title: 'Renovation & Maintenance',
    description: 'Reliable access solutions for property renovation, repair and maintenance work.',
    scope: 'Fascia and soffit replacements, window restoration, brickwork repointing, and weather protection.',
  },
];

export const ABOUT_POINTS = [
  {
    number: '01',
    title: 'Professional Approach',
    description: 'Every project is planned and erected with dedicated attention to safety, property care, and trade requirements.',
  },
  {
    number: '02',
    title: 'Strength & Precision',
    description: 'Robust scaffolding structures erected to exact specifications, ensuring stability and reliable working platforms.',
  },
  {
    number: '03',
    title: 'Kent & South East Coverage',
    description: 'Prompt, dependable scaffolding service across Kent and the wider South East for homeowners, builders, and contractors.',
  },
];

/**
 * CENTRALIZED PROJECT GALLERY DATA
 * 
 * Replace these placeholder URLs with real LAB Scaffolding project photographs
 * when available. The layout will adapt automatically.
 */
export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'project-1',
    title: 'Residential Scaffolding Installation',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    alt: 'Scaffolding installation around a multi-level residential property',
    summary: 'Full perimeter access scaffold erected for exterior restoration and roof works.',
  },
  {
    id: 'project-2',
    title: 'Multi-Storey Property Scaffolding',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    alt: 'Scaffolding around a multi-storey brick building in the UK',
    summary: 'Multi-lift access scaffold providing safe working levels across all storeys.',
  },
  {
    id: 'project-3',
    title: 'New Build Construction Scaffolding',
    category: 'Construction',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    alt: 'Heavy duty steel scaffolding structure on an active construction site',
    summary: 'Progressive brickwork and structural trades scaffolding for new building construction.',
  },
  {
    id: 'project-4',
    title: 'Roof-Level Access & Platform Scaffolding',
    category: 'Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    alt: 'Scaffolding platform with handrails providing safe roof and chimney access',
    summary: 'Specialist roof edge protection and chimney stack work platform with safety handrails.',
  },
  {
    id: 'project-5',
    title: 'Commercial Access Structure',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    alt: 'Commercial building scaffolding structure with safety netting and debris screens',
    summary: 'Robust commercial facade scaffolding with safety access ladders and debris protection.',
  },
  {
    id: 'project-6',
    title: 'Precision Domestic Scaffold Installation',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    alt: 'Precision scaffold structure around residential dwelling',
    summary: 'Clean, level scaffold erection engineered to protect grounds and adjacent structures.',
  },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2000&q=85',
  about: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85',
};
