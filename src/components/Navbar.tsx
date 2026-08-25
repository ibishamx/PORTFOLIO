import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '../utils/contact';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { data, theme, toggleTheme } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              {data.personal.name ? data.personal.name.charAt(0) : 'I'}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                {data.personal.name || 'Portfolio'}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 truncate max-w-[200px] sm:max-w-xs font-medium">
                {data.personal.title ? data.personal.title.split(',')[0] : 'Full-Stack & Growth'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/50 dark:bg-slate-900/60 light:bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-indigo-600 rounded-full hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light Mode"
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:bg-slate-800 transition-all"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Primary 'Hire Me' CTA */}
            <a
              id="navbar-hire-me-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:bg-slate-800 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-900 dark:hover:bg-slate-900 light:hover:bg-slate-100 hover:text-cyan-400 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 py-1">
              <span>Quick Contact:</span>
              <span className="text-emerald-400 font-medium">● Available for Projects</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppUrl(data.contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={getEmailUrl(data.contact.email, 'Project Consultation Inquiry')}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold hover:bg-cyan-600/30 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Me
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-md"
            >
              Start a Project / Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
