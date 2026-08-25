import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, getSocialUrl } from '../utils/contact';
import { 
  ArrowUp, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { data, toggleEditMode } = usePortfolio();
  const { personal, contact, ctaSection } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 relative overflow-hidden">
      
      {/* Pre-Footer Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          
          {/* Ambient Glow in CTA */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{ctaSection?.availableBadge || 'Available for New Projects'}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {ctaSection?.headline || "Let's Turn Your Idea Into Reality."}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              {ctaSection?.subheadline || "From websites and Shopify stores to AI tools, automation and digital marketing — let's build something that actually helps your business grow."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>{ctaSection?.primaryBtnText || 'Start a Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(contact.whatsapp, `Hi ${personal.name}, let's build something great together!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 font-semibold text-xs hover:bg-emerald-900/80 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{ctaSection?.whatsappBtnText || 'WhatsApp Me'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                {personal.name ? personal.name.charAt(0) : 'I'}
              </div>
              <span className="font-bold text-xl text-white">
                {personal.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {personal.title} — Helping ambitious business owners engineer high-converting digital storefronts, custom ERP software, AI workflows, and paid acquisition funnels.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {contact.github && contact.github !== 'YOUR GITHUB' && (
                <a
                  href={getSocialUrl('github', contact.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {contact.linkedin && contact.linkedin !== 'YOUR LINKEDIN' && (
                <a
                  href={getSocialUrl('linkedin', contact.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {contact.instagram && contact.instagram !== 'YOUR INSTAGRAM' && (
                <a
                  href={getSocialUrl('instagram', contact.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {contact.facebook && contact.facebook !== 'YOUR FACEBOOK' && (
                <a
                  href={getSocialUrl('facebook', contact.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#core-services" onClick={(e) => handleNavClick(e, '#core-services')} className="hover:text-cyan-400 transition-colors">Core Pillars</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-cyan-400 transition-colors">100 Services</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-cyan-400 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-cyan-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-cyan-400 transition-colors">Work Process</a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-cyan-400 transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-cyan-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Core Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • Shopify Custom Liquid Development
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • React & TypeScript Web Applications
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • AI Vibe Coding & Chatbots (Gemini/Claude)
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • Google Sheets & Excel ERP Automation
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • Courier API Logistics & COD Reconciler
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e as any, '#services')}>
                • Meta & TikTok Server-Side CAPI Tracking
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{contact.location}</span>
              </div>
              {contact.website && (
                <a 
                  href={contact.website.startsWith('http') ? contact.website : `https://${contact.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{contact.website}</span>
                </a>
              )}
              <a href={getPhoneUrl(contact.phone)} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{contact.phone}</span>
              </a>
              <a href={getEmailUrl(contact.email)} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contact.email}</span>
              </a>
              <a href={getWhatsAppUrl(contact.whatsapp)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {contact.whatsapp}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <button
              onClick={toggleEditMode}
              className="text-slate-500 hover:text-slate-400 cursor-default focus:outline-none transition-colors"
              title="Admin CMS (Shortcut: Ctrl+Shift+E)"
              aria-label="Admin Portal"
            >
              ©
            </button>
            <span>{new Date().getFullYear()} {personal.name}. All rights reserved. Built with React, TypeScript & Tailwind.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
