import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, Check, ArrowRight, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

export const Pricing: React.FC = () => {
  const { data, setSelectedPackageForContact, setSelectedServiceForContact } = usePortfolio();
  const { pricing } = data;

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackageForContact(pkgName);
    setSelectedServiceForContact(`Package: ${pkgName}`);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-white relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Service Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Predictable, Value-Driven Investment
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Choose a fixed-scope turnkey package or request a custom milestone retainer tailored to your exact business specifications.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricing.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/10 lg:-translate-y-2'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Tier Title & Tag */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
                      {pkg.tag}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-5 pb-5 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                      / {pkg.billingCycle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Ideal For & Turnaround */}
                  <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-white border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span><strong>Turnaround:</strong> {pkg.deliveryTime}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[11px]"><strong>Best For:</strong> {pkg.idealFor}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Everything Included:
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-cyan-950 dark:bg-cyan-950 light:bg-cyan-100 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-cyan-700 flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Plan Button */}
                <div>
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:brightness-110'
                        : 'bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 hover:border-transparent'
                    }`}
                  >
                    <span>{pkg.ctaText || `Choose ${pkg.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Scope Quotation Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
              Have a Unique Custom Scope or Retainer Requirement?
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              I provide tailored milestone contracts for enterprise software, multi-store brands, and ongoing marketing retainers.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(data.contact.whatsapp, 'Hi! I would like to request a custom scope quotation for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white text-cyan-400 dark:text-cyan-400 light:text-indigo-600 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-bold hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white hover:border-transparent transition-all shadow-sm"
          >
            Request Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
};
