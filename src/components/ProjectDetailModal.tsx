import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { usePortfolio } from '../context/PortfolioContext';
import { X, ExternalLink, Github, CheckCircle2, TrendingUp, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { data, setSelectedServiceForContact } = usePortfolio();

  if (!project) return null;

  const handleDiscussProject = () => {
    setSelectedServiceForContact(`Project Inquiry: ${project.title}`);
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden text-left max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/80 text-slate-300 hover:text-white dark:hover:text-white light:hover:text-slate-900 backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-white shadow-md">
              {project.category}
            </span>
            {project.client && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-md">
                Client: {project.client}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Title & Metrics */}
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 mb-2">
              {project.title}
            </h3>
            {project.metrics && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Long / Short Description */}
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Key Deliverables / Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Technical Architecture & Impact:</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Technologies & Frameworks Applied:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleDiscussProject}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md hover:brightness-110 transition-all"
            >
              <span>Build a Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppUrl(data.contact.whatsapp, `Hi ${data.personal.name}, I loved your project "${project.title}" and would like to build something similar!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-50 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-700/50 text-xs font-semibold hover:bg-emerald-900/80 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

          {/* External Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-4 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-center gap-4 text-xs text-slate-400">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo / Preview</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
