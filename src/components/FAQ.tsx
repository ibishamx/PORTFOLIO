import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

export const FAQ: React.FC = () => {
  const { data } = usePortfolio();
  const { faqs } = data;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-white relative transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Got Questions? I Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Clear details on project turnaround times, technology decisions, maintenance guarantees, and how we will collaborate.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border-cyan-500/50 shadow-md'
                    : 'bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-cyan-400 dark:text-cyan-400 light:text-indigo-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-cyan-500 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200 mt-2 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
              Have a question not covered above?
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Send a message directly on WhatsApp for an instant answer.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(data.contact.whatsapp, 'Hi! I have a question regarding your services that was not on the FAQ list.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-50 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-700/50 text-xs font-semibold hover:bg-emerald-900/80 transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
