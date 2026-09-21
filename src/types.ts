export interface ScaffoldingService {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Construction' | 'Renovation';
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  alt: string;
  summary: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  message: string;
}

export interface QuoteFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  projectType?: string;
  message?: string;
}
