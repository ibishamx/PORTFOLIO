import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { DynamicIcon } from './DynamicIcon';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const { data } = usePortfolio();
  const { processSteps } = data;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="process"
      className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-white relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            How I Deliver High-Impact Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A battle-tested 5-phase delivery process that eliminates scope creep, minimizes revision cycles, and delivers predictable commercial outcomes.
          </p>
        </div>

        {/* 5-Step Process Horizontal Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={step.stepNumber || idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-sm">
                    <DynamicIcon name={step.iconName} className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mb-3">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Phase Outputs:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables && step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
              Need a Rapid Turnaround MVP or Emergency Fix?
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Express 48-hour development sprints are available for urgent client launches.
            </p>
          </div>
          <button
            onClick={() => handleScroll('#contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-semibold shadow-md hover:bg-cyan-400 transition-all"
          >
            <span>Request Fast Sprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
