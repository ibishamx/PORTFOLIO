import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ServiceCategory, ServiceItem } from '../types/portfolio';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  Search, 
  Sparkles, 
  ShoppingBag, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Image, 
  FileText, 
  Truck,
  ArrowRight,
  Filter,
  Check,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES: { label: string; value: 'All' | ServiceCategory; icon: React.ElementType }[] = [
  { label: 'All Services (100)', value: 'All', icon: Sparkles },
  { label: 'Shopify & E-Com', value: 'E-commerce & Shopify', icon: ShoppingBag },
  { label: 'Web & Development', value: 'Website & Development', icon: Code2 },
  { label: 'AI & Vibe Coding', value: 'AI / Vibe Coding', icon: Sparkles },
  { label: 'Business Automation', value: 'Business Automation', icon: Cpu },
  { label: 'Meta & TikTok Ads', value: 'Meta & TikTok Advertising', icon: TrendingUp },
  { label: 'Creative & Social', value: 'Creative & Social Media', icon: Image },
  { label: 'SEO & Content', value: 'SEO & Content', icon: FileText },
  { label: 'E-Com Logistics & COD', value: 'E-commerce Operations', icon: Truck },
];

export const Services: React.FC = () => {
  const { data, setSelectedServiceForContact } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<'All' | ServiceCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(24);

  // Filter services by category and search query
  const filteredServices = useMemo(() => {
    return data.services.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.number.toString() === q ||
        (service.tags && service.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [data.services, selectedCategory, searchQuery]);

  const handleQuickBook = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedServiceForContact(service.title);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/50 dark:border-cyan-800/50 light:border-cyan-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 100-Service Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Full-Spectrum Services Catalog
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Search or filter across all 100 specialized deliverables spanning e-commerce, development, automation, and advertising.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col gap-6">
          
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(24);
              }}
              placeholder="Search by service name, keyword (e.g. Liquid, CAPI, Trax, React, SEO)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 shadow-md transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills Ribbon */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setDisplayCount(24);
                  }}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 scale-105'
                      : 'bg-slate-950/80 dark:bg-slate-950/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-cyan-400">{Math.min(filteredServices.length, displayCount)}</strong> of{' '}
            <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">{filteredServices.length}</strong> matching services
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-cyan-400 hover:underline"
            >
              Reset to all categories
            </button>
          )}
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-950/80 border border-slate-800">
            <p className="text-slate-300 font-medium mb-2">No services found matching "{searchQuery}"</p>
            <p className="text-xs text-slate-500 mb-4">Try searching for other terms like 'Shopify', 'Automation', 'Ads', 'React'</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.slice(0, displayCount).map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className="cursor-pointer flex flex-col justify-between p-5 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/5 group"
              >
                <div>
                  {/* Top Bar with Number & Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-[11px] font-mono font-bold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      #{service.number}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 truncate">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-950/70 text-amber-400 border border-amber-800/50">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Deliverables Preview & CTA */}
                <div className="pt-3 border-t border-slate-900 dark:border-slate-900 light:border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] text-slate-500">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => handleQuickBook(service, e)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-indigo-800"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredServices.length > displayCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 font-semibold text-xs hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all shadow-md"
            >
              Load More Services ({filteredServices.length - displayCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
};
