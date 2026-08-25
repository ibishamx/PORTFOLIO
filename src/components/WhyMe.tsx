import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { DynamicIcon } from './DynamicIcon';
import { Sparkles, ArrowRight } from 'lucide-react';

export const WhyMe: React.FC = () => {
  const { data } = usePortfolio();
  const { whyMe } = data;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="why-me"
      className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition & Standard of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Why Business Owners Choose to Work With Me
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A combination of technical depth, commercial awareness, and relentless focus on speed, reliability, and real profit impact.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-indigo-600 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950/70 text-indigo-300 border border-indigo-800/50">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
