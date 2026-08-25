import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  ShoppingBag, 
  TrendingUp, 
  Cpu, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const About: React.FC = () => {
  const { data } = usePortfolio();
  const { about, personal } = data;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100/70 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me & Practical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            {about.title || 'Bridging Engineering, Automation & Growth Strategy'}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            {about.subtitle || 'Turning complex manual bottlenecks into seamless digital growth engines.'}
          </p>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {about.stats.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className="p-6 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md hover:border-cyan-500/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <h3 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Practical Focus Areas (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
              Engineering with a Commercial Growth Mindset
            </h3>
            
            {about.narrative && about.narrative.length > 0 ? (
              about.narrative.map((paragraph, i) => (
                <p key={i} className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
                I help e-commerce brands, growing businesses, and modern founders build resilient digital tools and profitable acquisition funnels.
              </p>
            )}

            {/* Tech Stack Pills Highlight */}
            <div className="pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-3">
                Core Technologies & Tooling Mastered:
              </span>
              <div className="flex flex-wrap gap-2">
                {about.technologiesHighlight.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleScroll('#services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 hover:text-cyan-300 transition-colors group"
              >
                <span>Explore all 100+ specialized services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Checklist Box: Practical Business Outcomes (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  What I Deliver for Clients
                </h4>
              </div>

              <div className="space-y-4">
                {about.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 dark:bg-cyan-950 light:bg-cyan-100 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Direct Engagement</span>
                  <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    No middlemen or agency markups
                  </span>
                </div>
                <button
                  onClick={() => handleScroll('#contact')}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 light:hover:bg-indigo-600 text-cyan-400 dark:text-cyan-400 light:text-indigo-700 text-xs font-semibold transition-all border border-slate-800 dark:border-slate-800 light:border-slate-300"
                >
                  Book Consultation
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
