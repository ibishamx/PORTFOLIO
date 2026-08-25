import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, getSocialUrl } from '../utils/contact';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ShoppingBag, 
  Code2, 
  Cpu, 
  TrendingUp,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personal, contact, about } = data;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950 dark:bg-slate-950 light:bg-slate-50 transition-colors"
    >
      {/* Ambient background glow and grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/20 to-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] light:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Area (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability & Role Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                {personal.badge || 'Available for Freelance Projects'}
              </span>
              <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">|</span>
              <span className="text-xs text-cyan-400 dark:text-cyan-400 light:text-indigo-600 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Fast Turnaround
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.12] mb-5">
              {personal.heroHeadline || 'I Build, Automate & Grow Digital Businesses.'}
            </h1>

            {/* Subheadline Pill / Ribbon */}
            <div className="w-full p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/70 light:bg-indigo-50/70 border border-slate-800/80 dark:border-slate-800/80 light:border-indigo-100 backdrop-blur-md mb-6">
              <p className="text-sm sm:text-base font-semibold text-cyan-300 dark:text-cyan-300 light:text-indigo-900 tracking-wide">
                {personal.heroSubheadline || 'Shopify • E-commerce • Web Development • AI Solutions • Business Automation • Meta & TikTok Ads'}
              </p>
            </div>

            {/* Intro Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {personal.intro}
            </p>

            {/* Call to Actions (Hire Me, View Work, WhatsApp) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-hire-me-btn"
                onClick={() => handleScroll('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Hire Me for a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-work-btn"
                onClick={() => handleScroll('#portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-all shadow-sm"
              >
                <span>View My Work</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={getWhatsAppUrl(contact.whatsapp, `Hi ${personal.name}, I am interested in discussing a project with you!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 dark:bg-emerald-950/70 light:bg-emerald-50 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-700/50 dark:border-emerald-700/50 light:border-emerald-300 font-semibold text-sm hover:bg-emerald-900/70 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Quick Centralized Contact Strip */}
            <div className="w-full pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {contact.location}
                </span>
                <a 
                  href={getPhoneUrl(contact.phone)} 
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {contact.phone}
                </a>
                <a 
                  href={getEmailUrl(contact.email)} 
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {contact.email}
                </a>
              </div>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2">
                {contact.github && contact.github !== 'YOUR GITHUB' && (
                  <a
                    href={getSocialUrl('github', contact.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {contact.linkedin && contact.linkedin !== 'YOUR LINKEDIN' && (
                  <a
                    href={getSocialUrl('linkedin', contact.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {contact.instagram && contact.instagram !== 'YOUR INSTAGRAM' && (
                  <a
                    href={getSocialUrl('instagram', contact.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="p-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {contact.facebook && contact.facebook !== 'YOUR FACEBOOK' && (
                  <a
                    href={getSocialUrl('facebook', contact.facebook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="p-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar Card & Interactive Floating Metric Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative halo frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Main Profile Showcase Card */}
              <div className="relative rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header info in avatar card */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={personal.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"}
                      alt={personal.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-900 rounded-full flex items-center justify-center" title="Active Online">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {personal.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium mb-1">
                      Full-Stack & Growth Architect
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{personal.yearsOfExperience} Industry Experience</span>
                    </div>
                  </div>
                </div>

                {/* Core Domains Mini-Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <ShoppingBag className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">E-Com & Shopify</span>
                    </div>
                    <p className="text-[11px] text-slate-400">High-converting stores & custom Liquid</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">AI / Vibe Coding</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Rapid MVPs & intelligent workflows</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Automations</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Courier APIs & Sheets/Excel ERPs</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Paid Growth</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Meta & TikTok Ads scaling (CAPI)</p>
                  </div>
                </div>

                {/* Response Rate Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/40 border border-indigo-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-medium text-slate-300">Response Rate:</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-300">
                    {contact.responseRate || 'Under 1 Hour'}
                  </span>
                </div>

              </div>

              {/* Floating Stat Chip Top-Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 shadow-xl items-center gap-2 backdrop-blur-md">
                <span className="text-lg font-bold text-cyan-400">
                  {about.stats[0]?.value || '140'}{about.stats[0]?.suffix || '+'}
                </span>
                <span className="text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 leading-tight">
                  Projects<br />Completed
                </span>
              </div>

              {/* Floating Stat Chip Bottom-Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 shadow-xl items-center gap-2 backdrop-blur-md">
                <span className="text-lg font-bold text-emerald-400">
                  {about.stats[1]?.value || '85'}{about.stats[1]?.suffix || '+'}
                </span>
                <span className="text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 leading-tight">
                  Businesses<br />Helped
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
