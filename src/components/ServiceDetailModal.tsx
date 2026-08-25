import React from 'react';
import { ServiceItem } from '../types/portfolio';
import { usePortfolio } from '../context/PortfolioContext';
import { X, CheckCircle2, ArrowRight, ShoppingBag, Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const { data, setSelectedServiceForContact } = usePortfolio();

  if (!service) return null;

  const handleInquire = () => {
    setSelectedServiceForContact(service.title);
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-cyan-500/15 blur-2xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
            Service #{service.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-100 light:text-slate-700">
            {service.category}
          </span>
          {service.popular && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-700/50">
              Popular Request
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables Section */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Deliverables & What You Receive:</span>
          </h4>
          <ul className="space-y-2">
            {service.deliverables && service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleInquire}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md hover:brightness-110 transition-all"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppUrl(data.contact.whatsapp, `Hi ${data.personal.name}, I am inquiring specifically about your service: "${service.title}" (#${service.number})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-50 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-700/50 text-xs font-semibold hover:bg-emerald-900/80 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
