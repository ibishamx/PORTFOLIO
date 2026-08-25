/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreServices } from './components/CoreServices';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { WhyMe } from './components/WhyMe';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CMSStudioModal } from './components/cms/CMSStudioModal';
import { ToastContainer } from './components/Toast';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <CoreServices />
          <Services />
          <Portfolio />
          <Skills />
          <Process />
          <WhyMe />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating / Pop-up Modals & Tools */}
        <CMSStudioModal />
        <ToastContainer />
      </div>
    </PortfolioProvider>
  );
}
