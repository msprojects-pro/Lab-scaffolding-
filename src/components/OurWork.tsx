import React, { useState } from 'react';
import { ArrowRight, Maximize2, X, MapPin } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/scaffoldingData';
import { GalleryProject } from '../types';

interface OurWorkProps {
  onQuoteClick: () => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onQuoteClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Renovation'];

  const filteredProjects =
    activeCategory === 'All'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1B33] text-white text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 bg-[#F2B233]" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight leading-tight mb-3">
              Strong Structures. Professional Results.
            </h2>
            <p className="text-base sm:text-lg text-slate-700">
              Representative examples of scaffolding installations across residential, commercial, and construction environments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase()}`}
                className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors border ${
                  activeCategory === cat
                    ? 'bg-[#0B1B33] text-white border-[#0B1B33]'
                    : 'bg-white text-[#0B1B33] border-slate-300 hover:border-[#5B8DD2] hover:text-[#5B8DD2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout span mapping
            // Item 0: 7 cols (large feature)
            // Item 1: 5 cols
            // Item 2: 4 cols
            // Item 3: 4 cols
            // Item 4: 4 cols
            // Item 5: 12 cols or 6 cols
            const spanClass =
              index === 0
                ? 'md:col-span-7 h-[360px] sm:h-[420px]'
                : index === 1
                ? 'md:col-span-5 h-[360px] sm:h-[420px]'
                : index === 2
                ? 'md:col-span-4 h-[320px] sm:h-[380px]'
                : index === 3
                ? 'md:col-span-4 h-[320px] sm:h-[380px]'
                : index === 4
                ? 'md:col-span-4 h-[320px] sm:h-[380px]'
                : 'md:col-span-12 lg:col-span-12 h-[340px]';

            return (
              <div
                key={project.id}
                id={`work-item-${project.id}`}
                className={`group relative overflow-hidden bg-[#0B1B33] border border-slate-300 ${spanClass} cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark navy overlay on hover or baseline readability */}
                <div className="absolute inset-0 bg-[#0B1B33]/40 group-hover:bg-[#0B1B33]/75 transition-colors duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#0B1B33] text-white border border-[#5B8DD2]">
                    {project.category}
                  </span>
                </div>

                {/* Zoom Icon Button on top-right */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-[#5B8DD2] text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#5B8DD2] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 opacity-90 line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Corner gold accent pip */}
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#F2B233]" />
              </div>
            );
          })}
        </div>

        {/* Demo Notice Note for transparency */}
        <p className="mt-4 text-xs text-slate-500 italic text-right">
          * Representative demonstration photography. Replaceable with client site photographs.
        </p>

        {/* Below Gallery Call to Action */}
        <div className="mt-14 pt-10 border-t border-slate-200 text-center max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-extrabold text-[#0B1B33] mb-4">
            Have a project that requires scaffolding?
          </p>
          <p className="text-base text-slate-600 mb-6">
            Get in touch with our team today for a free, no-obligation quotation across Kent &amp; the South East.
          </p>
          <button
            type="button"
            onClick={onQuoteClick}
            id="gallery-request-quote-btn"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5B8DD2] hover:bg-[#4a7ec4] text-white font-bold text-sm tracking-wider uppercase transition-colors"
          >
            <span>Request A Free Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-view Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B33]/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-[#0B1B33] border-2 border-[#5B8DD2] max-w-4xl w-full max-h-[90vh] overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#0B1B33] border border-slate-600 text-white hover:text-[#F2B233] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-black">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 left-4 bg-[#5B8DD2] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {selectedProject.category}
              </div>
            </div>

            {/* Modal Info Bar */}
            <div className="p-6 bg-[#0B1B33] border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedProject.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onQuoteClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#5B8DD2] hover:bg-[#4a7ec4] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
