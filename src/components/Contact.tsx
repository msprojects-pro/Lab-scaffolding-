import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Clock, Send, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/scaffoldingData';
import { QuoteFormData, QuoteFormErrors } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Residential',
    message: '',
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: QuoteFormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^[0-9+\s()-]{8,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid UK phone number.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.location.trim()) {
      errs.location = 'Please specify your project town/location in Kent or the South East.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate prompt client response
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      projectType: 'Residential',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B1B33] text-white relative">
      {/* Decorative structural scaffolding lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #5B8DD2 1px, transparent 1px), linear-gradient(to bottom, #5B8DD2 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5B8DD2]/20 border border-[#5B8DD2]/40 text-[#5B8DD2] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-[#F2B233]" />
            <span>CONTACT &amp; FREE QUOTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let’s Talk About Your Project.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Contact LAB Scaffolding Ltd today for a free quotation. Serving customers across Kent and the South East.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="border-l-4 border-[#5B8DD2] pl-4 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5B8DD2]">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Get In Touch
                </h3>
              </div>

              {/* Large Phone CTA */}
              <div className="bg-[#0B1B33] border-2 border-[#5B8DD2] p-6 mb-8 relative">
                <span className="text-xs font-bold text-[#F2B233] uppercase tracking-wider block mb-2">
                  Call For A Free Quote
                </span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  id="contact-large-phone-link"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-[#5B8DD2] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-7 h-7 text-[#5B8DD2] shrink-0" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <p className="text-xs text-slate-300 mt-2">
                  Lines open for fast enquiries &amp; scaffold specifications.
                </p>
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#F2B233]" />
              </div>

              {/* Contact Information Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-slate-800 border border-slate-700 text-[#5B8DD2] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Service Area
                    </span>
                    <span className="text-base font-bold text-white">
                      {BUSINESS_INFO.serviceAreaFull}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Covering residential, commercial and construction sites throughout Kent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-slate-800 border border-slate-700 text-[#F2B233] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Quotation Policy
                    </span>
                    <span className="text-base font-bold text-white">
                      {BUSINESS_INFO.quotation}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Transparent assessments with no obligation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-slate-800 border border-slate-700 text-[#5B8DD2] shrink-0">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Community Followership
                    </span>
                    <span className="text-base font-bold text-white">
                      Approx. {BUSINESS_INFO.facebookFollowers} Facebook Followers
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Established community presence across Kent and the South East.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline Box */}
            <div className="p-5 bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-300 uppercase tracking-widest block mb-1">
                Company Promise
              </span>
              <p className="text-sm font-bold text-[#F2B233]">
                “{BUSINESS_INFO.tagline}”
              </p>
            </div>
          </div>

          {/* Right Column: Professional Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#0B1B33] p-8 sm:p-10 border border-slate-300 shadow-xl relative">
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#F2B233]" />

              <div className="mb-6 pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B8DD2]">
                  Free Quotation Request
                </span>
                <h3 className="text-2xl font-black text-[#0B1B33] mt-1">
                  Tell Us About Your Project
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in the details below and we will get back to you promptly with pricing and availability.
                </p>
              </div>

              {isSubmitted ? (
                <div
                  id="quote-success-panel"
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#5B8DD2]/15 text-[#5B8DD2] rounded-none flex items-center justify-center mx-auto border-2 border-[#5B8DD2]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0B1B33]">
                    Quotation Request Received
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#0B1B33]">{formData.name}</span>. We have received your request for your <span className="font-bold text-[#0B1B33]">{formData.projectType}</span> project in <span className="font-bold text-[#0B1B33]">{formData.location}</span>.
                  </p>
                  <p className="text-xs text-slate-500">
                    Our scaffolding team will review the details and contact you shortly at <span className="font-bold">{formData.phone}</span>.
                  </p>

                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B1B33] text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#5B8DD2]" />
                      <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                      >
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07865 291694"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.co.uk"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                      >
                        Project Location (Kent &amp; South East) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Maidstone, Tunbridge Wells, Bromley"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border ${
                          errors.location ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors`}
                      />
                      {errors.location && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-300 focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors text-[#0B1B33] font-medium"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Construction">Construction</option>
                      <option value="Renovation / Maintenance">Renovation / Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1"
                    >
                      Project Details / Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any access requirements, building heights, or expected start dates..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-300 focus:border-[#5B8DD2] focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-quote-btn"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#5B8DD2] hover:bg-[#4a7ec4] text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-sm focus:ring-2 focus:ring-[#5B8DD2] focus:ring-offset-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request A Free Quotation</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Secondary Direct Call Line */}
                  <div className="pt-3 text-center border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span>Prefer to speak directly?</span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="font-bold text-[#0B1B33] hover:text-[#5B8DD2] inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#5B8DD2]" />
                      <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
