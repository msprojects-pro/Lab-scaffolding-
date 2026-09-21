import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OurWork } from './components/OurWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';

export default function App() {
  const scrollToContact = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const navOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Focus on the first input in the quote form if available
      const nameInput = document.getElementById('name') as HTMLInputElement | null;
      if (nameInput) {
        setTimeout(() => {
          nameInput.focus();
        }, 500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#0B1B33] flex flex-col selection:bg-[#5B8DD2] selection:text-white pb-16 sm:pb-0">
      {/* Primary Sticky Header */}
      <Navbar onQuoteClick={scrollToContact} />

      {/* Main Page Content: ONLY 5 SECTIONS */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onQuoteClick={scrollToContact} />

        {/* Section 2: About / Why LAB */}
        <About onQuoteClick={scrollToContact} />

        {/* Section 3: Services */}
        <Services onQuoteClick={scrollToContact} />

        {/* Section 4: Our Work */}
        <OurWork onQuoteClick={scrollToContact} />

        {/* Section 5: Contact / Free Quote */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onQuoteClick={scrollToContact} />

      {/* Mobile Bottom Bar for Immediate Calling & Quotation */}
      <MobileContactBar onQuoteClick={scrollToContact} />
    </div>
  );
}
