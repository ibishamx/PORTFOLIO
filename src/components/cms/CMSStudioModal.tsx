import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ServiceItem, ProjectItem, ServiceCategory } from '../../types/portfolio';
import { 
  X, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  Copy, 
  Sparkles, 
  User, 
  Phone, 
  Briefcase, 
  Layers, 
  Code, 
  DollarSign, 
  MessageSquare, 
  HelpCircle, 
  Search, 
  Plus, 
  Trash2, 
  Edit, 
  Check,
  Globe,
  Sliders,
  CheckCircle2,
  FileCode
} from 'lucide-react';

export const CMSStudioModal: React.FC = () => {
  const { 
    data, 
    updateData, 
    updateSection, 
    isEditMode, 
    setEditMode, 
    resetToDefaults, 
    exportJSON, 
    importJSON, 
    generateTypeScriptCode,
    showToast 
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<
    'personal' | 'about' | 'services' | 'projects' | 'skills' | 'pricing' | 'reviews_faq' | 'seo_sync'
  >('personal');

  const [jsonImportText, setJsonImportText] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // New item modal states
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'Shopify & E-com',
    description: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    metrics: '',
    client: ''
  });

  const [newService, setNewService] = useState<Partial<ServiceItem>>({
    title: '',
    category: 'E-commerce & Shopify',
    description: '',
    deliverables: ['Custom Setup', 'Technical Testing'],
    tags: ['Custom', 'Service'],
    popular: false
  });

  if (!isEditMode) return null;

  const handleCopyTS = () => {
    const code = generateTypeScriptCode();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    showToast('TypeScript config copied to clipboard! You can paste it into src/data/portfolio.ts', 'success');
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleImportSubmit = () => {
    if (!jsonImportText.trim()) {
      showToast('Please paste a valid JSON string to import.', 'warning');
      return;
    }
    const res = importJSON(jsonImportText);
    if (res.success) {
      setJsonImportText('');
    } else {
      showToast(`Import failed: ${res.error}`, 'error');
    }
  };

  // Add project handler
  const handleAddProject = () => {
    if (!newProject.title?.trim() || !newProject.description?.trim()) {
      showToast('Please enter a project title and description.', 'warning');
      return;
    }
    const id = `proj-${Date.now()}`;
    const projectToAdd: ProjectItem = {
      id,
      title: newProject.title,
      category: (newProject.category as any) || 'Shopify & E-com',
      description: newProject.description,
      longDescription: newProject.longDescription || newProject.description,
      image: newProject.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: newProject.technologies || ['React', 'Tailwind'],
      liveUrl: newProject.liveUrl,
      githubUrl: newProject.githubUrl,
      featured: !!newProject.featured,
      metrics: newProject.metrics,
      client: newProject.client,
      keyFeatures: ['Feature 1', 'Feature 2']
    };

    updateSection('projects', [projectToAdd, ...data.projects]);
    showToast(`Added new project "${projectToAdd.title}"`, 'success');
    setNewProject({
      title: '',
      category: 'Shopify & E-com',
      description: '',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS'],
      liveUrl: '',
      githubUrl: '',
      featured: true,
      metrics: '',
      client: ''
    });
  };

  const handleDeleteProject = (id: string) => {
    updateSection('projects', data.projects.filter(p => p.id !== id));
    showToast('Deleted project', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 text-left">
      <div className="relative w-full max-w-6xl h-[94vh] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Top Studio Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Portfolio Content Studio (Headless CMS)</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Edit any content below — changes instantly update the live preview and persist in browser storage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportJSON}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
              title="Download JSON configuration"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={handleCopyTS}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950 hover:bg-indigo-900 text-indigo-300 border border-indigo-700/50 text-xs font-semibold transition-colors"
              title="Copy TypeScript Code for src/data/portfolio.ts"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied!' : 'Copy TS File'}</span>
            </button>

            <button
              onClick={() => setEditMode(false)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close CMS Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-950 border-b border-slate-800 overflow-x-auto scrollbar-none">
          {[
            { id: 'personal', label: 'Personal & Contact', icon: User },
            { id: 'about', label: 'About & Stats', icon: Sparkles },
            { id: 'services', label: 'Services Catalog', icon: Layers },
            { id: 'projects', label: 'Projects & Work', icon: Briefcase },
            { id: 'skills', label: 'Skills Matrix', icon: Code },
            { id: 'pricing', label: 'Pricing Packages', icon: DollarSign },
            { id: 'reviews_faq', label: 'Reviews & FAQ', icon: MessageSquare },
            { id: 'seo_sync', label: 'SEO & Import/Export', icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Studio Content Area (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* TAB 1: PERSONAL & CONTACT */}
          {activeTab === 'personal' && (
            <div className="space-y-8 max-w-4xl">
              
              {/* Branding Info */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  1. Personal & Brand Identity
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      value={data.personal.name}
                      onChange={(e) => updateSection('personal', { ...data.personal, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Professional Title / Subtitle</label>
                    <input
                      type="text"
                      value={data.personal.title}
                      onChange={(e) => updateSection('personal', { ...data.personal, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Main Headline</label>
                  <input
                    type="text"
                    value={data.personal.heroHeadline}
                    onChange={(e) => updateSection('personal', { ...data.personal, heroHeadline: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Subheadline</label>
                  <input
                    type="text"
                    value={data.personal.heroSubheadline}
                    onChange={(e) => updateSection('personal', { ...data.personal, heroSubheadline: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Avatar Image URL</label>
                    <input
                      type="text"
                      value={data.personal.avatarUrl}
                      onChange={(e) => updateSection('personal', { ...data.personal, avatarUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Availability Badge Text</label>
                    <input
                      type="text"
                      value={data.personal.badge}
                      onChange={(e) => updateSection('personal', { ...data.personal, badge: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Short Introduction Bio</label>
                  <textarea
                    rows={3}
                    value={data.personal.intro}
                    onChange={(e) => updateSection('personal', { ...data.personal, intro: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Centralized Contact Information */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                    2. Centralized Contact Information
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Auto-propagates to all buttons, header, and footer.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={data.contact.phone}
                      onChange={(e) => updateSection('contact', { ...data.contact, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Number</label>
                    <input
                      type="text"
                      value={data.contact.whatsapp}
                      onChange={(e) => updateSection('contact', { ...data.contact, whatsapp: e.target.value })}
                      placeholder="+923001234567"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={data.contact.email}
                      onChange={(e) => updateSection('contact', { ...data.contact, email: e.target.value })}
                      placeholder="ibisham@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Location</label>
                    <input
                      type="text"
                      value={data.contact.location}
                      onChange={(e) => updateSection('contact', { ...data.contact, location: e.target.value })}
                      placeholder="Faisalabad, Pakistan"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
                  Social Media Handles & Links:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">GitHub (username or URL)</label>
                    <input
                      type="text"
                      value={data.contact.github}
                      onChange={(e) => updateSection('contact', { ...data.contact, github: e.target.value })}
                      placeholder="githubusername"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">LinkedIn (username or URL)</label>
                    <input
                      type="text"
                      value={data.contact.linkedin}
                      onChange={(e) => updateSection('contact', { ...data.contact, linkedin: e.target.value })}
                      placeholder="in/username"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">Instagram (handle or URL)</label>
                    <input
                      type="text"
                      value={data.contact.instagram}
                      onChange={(e) => updateSection('contact', { ...data.contact, instagram: e.target.value })}
                      placeholder="@username"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">Facebook (page or profile)</label>
                    <input
                      type="text"
                      value={data.contact.facebook}
                      onChange={(e) => updateSection('contact', { ...data.contact, facebook: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">TikTok (handle)</label>
                    <input
                      type="text"
                      value={data.contact.tiktok}
                      onChange={(e) => updateSection('contact', { ...data.contact, tiktok: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">Website URL</label>
                    <input
                      type="text"
                      value={data.contact.website}
                      onChange={(e) => updateSection('contact', { ...data.contact, website: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: ABOUT & STATS */}
          {activeTab === 'about' && (
            <div className="space-y-8 max-w-4xl">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  About Section Narrative & Focus
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">About Title</label>
                  <input
                    type="text"
                    value={data.about.title}
                    onChange={(e) => updateSection('about', { ...data.about, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">About Subtitle</label>
                  <input
                    type="text"
                    value={data.about.subtitle}
                    onChange={(e) => updateSection('about', { ...data.about, subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              {/* Editable Statistics */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Business Outcome Statistics
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.about.stats.map((stat, idx) => (
                    <div key={stat.id || idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...data.about.stats];
                            newStats[idx].value = e.target.value;
                            updateSection('about', { ...data.about, stats: newStats });
                          }}
                          placeholder="140"
                          className="w-24 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-cyan-400 font-bold text-sm"
                        />
                        <input
                          type="text"
                          value={stat.suffix || ''}
                          onChange={(e) => {
                            const newStats = [...data.about.stats];
                            newStats[idx].suffix = e.target.value;
                            updateSection('about', { ...data.about, stats: newStats });
                          }}
                          placeholder="+"
                          className="w-12 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-cyan-400 font-bold text-sm"
                        />
                      </div>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...data.about.stats];
                          newStats[idx].label = e.target.value;
                          updateSection('about', { ...data.about, stats: newStats });
                        }}
                        placeholder="Projects Completed"
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={stat.subtext}
                        onChange={(e) => {
                          const newStats = [...data.about.stats];
                          newStats[idx].subtext = e.target.value;
                          updateSection('about', { ...data.about, stats: newStats });
                        }}
                        placeholder="Subtext description"
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-[11px] text-slate-400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SERVICES CATALOG */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                    Services Catalog Management ({data.services.length} Total)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Modify or add services to your 100-item catalog directory.
                  </p>
                </div>
              </div>

              {/* Service Cards Quick Edit List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                {data.services.slice(0, 40).map((srv, idx) => (
                  <div key={srv.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">#{srv.number}</span>
                      <span className="text-[11px] text-slate-400">{srv.category}</span>
                    </div>
                    <input
                      type="text"
                      value={srv.title}
                      onChange={(e) => {
                        const newServices = [...data.services];
                        newServices[idx].title = e.target.value;
                        updateSection('services', newServices);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={srv.description}
                      onChange={(e) => {
                        const newServices = [...data.services];
                        newServices[idx].description = e.target.value;
                        updateSection('services', newServices);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-[11px] text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS & CASE STUDIES */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              
              {/* Add New Project Card */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/40 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Plus className="w-4 h-4" />
                  <span>Add New Portfolio Project / Case Study</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Project Title</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="e.g. Acme Logistics Portal"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    >
                      <option value="Shopify & E-com">Shopify & E-com</option>
                      <option value="Web Apps & UI">Web Apps & UI</option>
                      <option value="AI & Vibe Tools">AI & Vibe Tools</option>
                      <option value="Automation & ERP">Automation & ERP</option>
                      <option value="Ads & Growth">Ads & Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Client / Brand Name</label>
                    <input
                      type="text"
                      value={newProject.client}
                      onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Key Impact Metric</label>
                    <input
                      type="text"
                      value={newProject.metrics}
                      onChange={(e) => setNewProject({ ...newProject, metrics: e.target.value })}
                      placeholder="e.g. +45% Conversion Lift"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Image URL</label>
                    <input
                      type="text"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      placeholder="Detailed project summary..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAddProject}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow hover:bg-cyan-400 transition-colors"
                >
                  Add Project to Showcase
                </button>
              </div>

              {/* Existing Projects List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Current Projects ({data.projects.length})
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.projects.map((proj, idx) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-cyan-400">{proj.category}</span>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                            title="Delete Project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const newP = [...data.projects];
                            newP[idx].title = e.target.value;
                            updateSection('projects', newP);
                          }}
                          className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-bold text-white mb-1"
                        />
                        <input
                          type="text"
                          value={proj.metrics || ''}
                          onChange={(e) => {
                            const newP = [...data.projects];
                            newP[idx].metrics = e.target.value;
                            updateSection('projects', newP);
                          }}
                          placeholder="Metric (e.g. +30% Sales)"
                          className="w-full px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: SKILLS MATRIX */}
          {activeTab === 'skills' && (
            <div className="space-y-6 max-w-4xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Skills & Proficiency Percentages
              </h3>

              <div className="space-y-6">
                {data.skillCategories.map((cat, catIdx) => (
                  <div key={cat.id} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{cat.categoryName}</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.skills.map((sk, skIdx) => (
                        <div key={skIdx} className="flex items-center gap-3 p-2 rounded-lg bg-slate-900">
                          <input
                            type="text"
                            value={sk.name}
                            onChange={(e) => {
                              const newCats = [...data.skillCategories];
                              newCats[catIdx].skills[skIdx].name = e.target.value;
                              updateSection('skillCategories', newCats);
                            }}
                            className="flex-1 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                          />
                          <div className="flex items-center gap-1.5 w-24">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={sk.level}
                              onChange={(e) => {
                                const newCats = [...data.skillCategories];
                                newCats[catIdx].skills[skIdx].level = parseInt(e.target.value) || 0;
                                updateSection('skillCategories', newCats);
                              }}
                              className="w-14 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs font-mono font-bold text-cyan-400"
                            />
                            <span className="text-xs text-slate-400">%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PRICING PACKAGES */}
          {activeTab === 'pricing' && (
            <div className="space-y-6 max-w-4xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Pricing & Package Tiers
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.pricing.map((pkg, idx) => (
                  <div key={pkg.id} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <input
                      type="text"
                      value={pkg.name}
                      onChange={(e) => {
                        const newP = [...data.pricing];
                        newP[idx].name = e.target.value;
                        updateSection('pricing', newP);
                      }}
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-700 text-sm font-bold text-white"
                    />

                    <input
                      type="text"
                      value={pkg.price}
                      onChange={(e) => {
                        const newP = [...data.pricing];
                        newP[idx].price = e.target.value;
                        updateSection('pricing', newP);
                      }}
                      placeholder="$799"
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xl font-bold text-cyan-400"
                    />

                    <input
                      type="text"
                      value={pkg.deliveryTime}
                      onChange={(e) => {
                        const newP = [...data.pricing];
                        newP[idx].deliveryTime = e.target.value;
                        updateSection('pricing', newP);
                      }}
                      placeholder="7 - 12 Business Days"
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-300"
                    />

                    <textarea
                      rows={2}
                      value={pkg.description}
                      onChange={(e) => {
                        const newP = [...data.pricing];
                        newP[idx].description = e.target.value;
                        updateSection('pricing', newP);
                      }}
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: REVIEWS & FAQ */}
          {activeTab === 'reviews_faq' && (
            <div className="space-y-8 max-w-4xl">
              {/* FAQs */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  FAQ Items ({data.faqs.length})
                </h3>

                <div className="space-y-3">
                  {data.faqs.map((faq, idx) => (
                    <div key={faq.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => {
                          const newF = [...data.faqs];
                          newF[idx].question = e.target.value;
                          updateSection('faqs', newF);
                        }}
                        className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={faq.answer}
                        onChange={(e) => {
                          const newF = [...data.faqs];
                          newF[idx].answer = e.target.value;
                          updateSection('faqs', newF);
                        }}
                        className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: SEO & SYNC */}
          {activeTab === 'seo_sync' && (
            <div className="space-y-8 max-w-4xl">
              
              {/* SEO Meta */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  SEO & Social Share Metadata
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Page Meta Title</label>
                  <input
                    type="text"
                    value={data.seo.title}
                    onChange={(e) => updateSection('seo', { ...data.seo, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Meta Description</label>
                  <textarea
                    rows={2}
                    value={data.seo.description}
                    onChange={(e) => updateSection('seo', { ...data.seo, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">SEO Keywords</label>
                  <input
                    type="text"
                    value={data.seo.keywords}
                    onChange={(e) => updateSection('seo', { ...data.seo, keywords: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              {/* Data Import / Export & Code Generator */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Direct JSON Import & Zero-Dependency Code Generation
                </h3>
                <p className="text-xs text-slate-400">
                  You can export your configured content as a JSON file, or copy the full TypeScript source code to update <code>src/data/portfolio.ts</code> permanently for Git version control.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={exportJSON}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>

                  <button
                    onClick={handleCopyTS}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Full TypeScript Data Code</span>
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to reset all portfolio content back to the default template?')) {
                        resetToDefaults();
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-800/60 text-xs font-semibold"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset All to Defaults</span>
                  </button>
                </div>

                {/* Import Box */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    Import JSON Portfolio Data
                  </label>
                  <textarea
                    rows={4}
                    value={jsonImportText}
                    onChange={(e) => setJsonImportText(e.target.value)}
                    placeholder="Paste exported portfolio JSON here..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-mono text-slate-200 outline-none"
                  />
                  <button
                    onClick={handleImportSubmit}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Import & Apply JSON</span>
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Studio Footer Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Auto-saving changes to local browser storage</span>
          </div>

          <button
            onClick={() => setEditMode(false)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs hover:brightness-110"
          >
            View Live Portfolio
          </button>
        </div>

      </div>
    </div>
  );
};
