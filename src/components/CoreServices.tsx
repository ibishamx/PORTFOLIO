import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { DynamicIcon } from './DynamicIcon';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const CoreServices: React.FC = () => {
  const { data, setSelectedServiceForContact } = usePortfolio();
  const { coreServices } = data;

  const handleBookService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="core-services"
      className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-white relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 dark:bg-indigo-950/60 light:bg-indigo-50 border border-indigo-800/50 dark:border-indigo-800/50 light:border-indigo-200 text-indigo-400 dark:text-indigo-400 light:text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Pillars & Flagship Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Specialized High-Impact Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            From turnkey Shopify stores to custom internal ERPs and AI-driven growth campaigns.
          </p>
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-950 to-indigo-950 dark:from-cyan-950 dark:to-indigo-950 light:from-cyan-100 light:to-indigo-100 border border-cyan-700/40 dark:border-cyan-700/40 light:border-cyan-200 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-indigo-700 group-hover:scale-110 transition-transform">
                    <DynamicIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 dark:bg-cyan-950/80 light:bg-cyan-100 text-cyan-400 dark:text-cyan-400 light:text-cyan-800 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-5 min-h-[48px]">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Tags & CTA Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-semibold hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 light:hover:bg-indigo-600 light:hover:text-white hover:border-transparent transition-all group-hover:border-slate-700 shadow-sm"
                >
                  <span>Inquire About This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
