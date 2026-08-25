import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { DynamicIcon } from './DynamicIcon';
import { Sparkles, Check, Code, ShoppingBag, Cpu, TrendingUp } from 'lucide-react';

export const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const { skillCategories } = data;
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0]?.id || 'skill-dev');

  const currentCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Specialized Skills Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A comprehensive overview of programming languages, e-commerce architectures, AI prompt frameworks, and marketing tools.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {skillCategories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-slate-950/80 dark:bg-slate-950/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                <DynamicIcon name={cat.iconName} className="w-4 h-4" />
                <span>{cat.categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills View (2-Column Grid) */}
        {currentCategory && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl max-w-5xl mx-auto">
            
            {/* Category Subheader */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800/50">
                  <DynamicIcon name={currentCategory.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {currentCategory.categoryName}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {currentCategory.description}
                  </p>
                </div>
              </div>

              <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 self-start sm:self-auto">
                {currentCategory.skills.length} Core Competencies
              </div>
            </div>

            {/* Skills Progress Bars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {currentCategory.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                          Expert
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="h-2 w-full bg-slate-900 dark:bg-slate-900 light:bg-slate-200 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
