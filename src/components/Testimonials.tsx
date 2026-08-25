import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

export const Testimonials: React.FC = () => {
  const { data } = usePortfolio();
  const { testimonials } = data;

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Trusted by Modern Founders & Brands
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Real feedback from business owners, marketing directors, and operational leaders.
          </p>
        </div>

        {/* Testimonials Grid */}
        {testimonials && testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="flex flex-col justify-between p-8 rounded-3xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl hover:border-cyan-500/40 transition-all group"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: test.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-800 dark:text-slate-800 light:text-slate-200 group-hover:text-cyan-500/20 transition-colors" />
                  </div>

                  {/* Project Tag */}
                  {test.projectType && (
                    <div className="mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                        {test.projectType}
                      </span>
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed italic mb-6">
                    "{test.review}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-900 dark:border-slate-900 light:border-slate-100">
                  <img
                    src={test.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                    alt={test.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-cyan-500/40 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        {test.clientName}
                      </h3>
                      {test.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" title="Verified Client" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {test.position}, <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">{test.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-slate-950/80 border border-slate-800 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">Client Reviews In Progress</h3>
            <p className="text-xs text-slate-400 mb-6">
              Testimonials are currently being collected. In the meantime, feel free to review the live case studies above or request direct references.
            </p>
            <a
              href={getWhatsAppUrl(data.contact.whatsapp, 'Hi! Could you provide some references for recent client projects?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask for References</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
