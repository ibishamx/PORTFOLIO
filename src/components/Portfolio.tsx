import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  Eye
} from 'lucide-react';

const PROJECT_CATEGORIES = [
  'All Projects',
  'Shopify & E-com',
  'Web Apps & UI',
  'AI & Vibe Tools',
  'Automation & ERP',
  'Ads & Growth',
] as const;

export const Portfolio: React.FC = () => {
  const { data, setSelectedServiceForContact } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return data.projects;
    }
    return data.projects.filter((p) => p.category === activeCategory);
  }, [data.projects, activeCategory]);

  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-950 dark:bg-slate-950 light:bg-white relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Proven Commercial Results
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A showcase of custom Shopify stores, enterprise operational ERPs, AI workflow assistants, and performance ad funnels.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col justify-between rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Project Image Box with Hover Overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-cyan-400 border border-cyan-800/50 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/90 text-slate-950 shadow-md">
                        Featured Case Study
                      </span>
                    </div>
                  )}

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>Click to View Case Study Details</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* Metric Ribbon */}
                  {project.metrics && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-slate-500 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Direct Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200">
                <span className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 group-hover:underline flex items-center gap-1">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      title="Open Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {project.githubUrl && (
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
