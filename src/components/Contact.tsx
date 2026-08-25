import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, getSocialUrl } from '../utils/contact';
import { 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Globe,
  Instagram,
  Linkedin,
  Github,
  Facebook
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { 
    data, 
    selectedServiceForContact, 
    selectedPackageForContact,
    showToast 
  } = usePortfolio();
  const { contact, personal, ctaSection } = data;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync pre-filled selection if user clicked a service or package
  useEffect(() => {
    if (selectedServiceForContact) {
      setService(selectedServiceForContact);
    }
  }, [selectedServiceForContact]);

  useEffect(() => {
    if (selectedPackageForContact) {
      setService(`Package: ${selectedPackageForContact}`);
    }
  }, [selectedPackageForContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Please fill in your name, email, and project details.', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Message sent successfully! I will reply within 1 hour.', 'success');
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const formattedMsg = `*New Project Inquiry via Portfolio Website*\n\n` +
      `*Name:* ${name || 'Client'}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Selected Service/Package:* ${service || 'General Project'}\n` +
      `*Estimated Budget:* ${budget}\n\n` +
      `*Project Details:*\n${message || 'I would like to discuss a project with you.'}`;

    const url = getWhatsAppUrl(contact.whatsapp, formattedMsg);
    window.open(url, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100/70 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Project Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            {ctaSection?.headline || "Have a project in mind? Let's build it."}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            {ctaSection?.subheadline || "From websites and Shopify stores to AI tools, automation and digital marketing — let's build something that actually helps your business grow."}
          </p>
        </div>

        {/* 2-Column Hub (Direct Contact Channels & Interactive Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                All inquiries reach me directly. No agency gatekeepers.
              </p>

              {/* Clickable Channels */}
              <div className="space-y-4">
                
                {/* WhatsApp Button */}
                <a
                  id="contact-whatsapp-direct-link"
                  href={getWhatsAppUrl(contact.whatsapp, `Hi ${personal.name}, I would like to discuss a new project!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 dark:bg-emerald-950/40 light:bg-emerald-50 border border-emerald-800/40 dark:border-emerald-800/40 light:border-emerald-200 hover:bg-emerald-900/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      WhatsApp (Fastest Response)
                    </span>
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 truncate block">
                      {contact.whatsapp}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone Call */}
                <a
                  id="contact-phone-direct-link"
                  href={getPhoneUrl(contact.phone)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Phone Call
                    </span>
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 truncate block">
                      {contact.phone}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email Address */}
                <a
                  id="contact-email-direct-link"
                  href={getEmailUrl(contact.email, 'Project Consultation Request')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 truncate block">
                      {contact.email}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Website Link */}
                {contact.website && (
                  <a
                    id="contact-website-direct-link"
                    href={contact.website.startsWith('http') ? contact.website : `https://${contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Official Website
                      </span>
                      <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 truncate block">
                        {contact.website}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Location & HQ
                    </span>
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {contact.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours & Response Rate */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Working Hours:</span>
                  <span className="font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {contact.workingHours || 'Mon - Sat (9am - 10pm PKT)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Average Response:</span>
                  <span className="font-bold text-emerald-400">
                    {contact.responseRate || 'Under 1 Hour'}
                  </span>
                </div>
              </div>

            </div>

            {/* Availability Badge Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-indigo-950/40 to-slate-950 border border-cyan-800/40 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-cyan-300 block">
                  {contact.availabilityText || 'Accepting New Client Projects'}
                </span>
                <p className="text-[11px] text-slate-400">
                  Book a discovery call today to secure your sprint slot.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl relative">
              
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Send a Project Brief
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8">
                Fill out the form below or dispatch it straight to WhatsApp.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-slate-900 border border-cyan-500/40 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-700/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank you, {name}!</h4>
                  <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto">
                    Your project details have been received. I will review your requirements and reach out via email or phone shortly.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send Copy to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Phone & Selected Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Service of Interest
                      </label>
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        placeholder="e.g. Shopify Store, Custom ERP, Meta Ads..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Estimated Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="Under $500">Under $500 (Small Task / Quick Fix)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Standard Website / Shopify Store)</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Full-Stack App / Custom ERP)</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000 (Advanced Automation & Scaling)</option>
                      <option value="$5,000+">$5,000+ (Enterprise Retainer / Custom Suite)</option>
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your business goals, current bottlenecks, target timeline, or specific features you need..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Brief...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Project Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-50 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-700/50 text-xs font-semibold hover:bg-emerald-900/80 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send Instantly on WhatsApp</span>
                    </button>
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
