import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { PortfolioData } from '../types/portfolio';
import { initialPortfolioData } from '../data/portfolio';

const STORAGE_KEY = 'portfolio_cms_data_v3';
const THEME_KEY = 'portfolio_theme_pref';

interface ToastState {
  id: number;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (updater: (prev: PortfolioData) => PortfolioData) => void;
  updateSection: <K extends keyof PortfolioData>(section: K, value: PortfolioData[K]) => void;
  resetToDefaults: () => void;
  exportJSON: () => void;
  importJSON: (jsonString: string) => { success: boolean; error?: string };
  generateTypeScriptCode: () => string;
  isEditMode: boolean;
  setEditMode: (v: boolean) => void;
  toggleEditMode: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  selectedServiceForContact: string | null;
  setSelectedServiceForContact: (serviceTitle: string | null) => void;
  selectedPackageForContact: string | null;
  setSelectedPackageForContact: (packageName: string | null) => void;
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  dismissToast: (id: number) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load data from localStorage or fallback to initial data
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure all required fields exist
        return {
          ...initialPortfolioData,
          ...parsed,
          contact: { ...initialPortfolioData.contact, ...(parsed.contact || {}) },
          personal: { ...initialPortfolioData.personal, ...(parsed.personal || {}) },
          about: { ...initialPortfolioData.about, ...(parsed.about || {}) },
          seo: { ...initialPortfolioData.seo, ...(parsed.seo || {}) },
          ctaSection: { ...initialPortfolioData.ctaSection, ...(parsed.ctaSection || {}) },
        };
      }
    } catch (e) {
      console.warn('Could not parse stored portfolio data from localStorage:', e);
    }
    return initialPortfolioData;
  });

  // Dark Theme (Fixed)
  const [theme] = useState<'dark' | 'light'>('dark');

  // Admin CMS Edit Studio Mode with URL query/hash & shortcut detection
  const [isEditMode, setIsEditMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('edit') === 'true' || urlParams.get('admin') === 'true' || urlParams.get('cms') === 'true') {
        return true;
      }
      if (window.location.hash === '#admin' || window.location.hash === '#edit' || window.location.hash === '#cms') {
        return true;
      }
    }
    return false;
  });

  // Prefill state for Contact section
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | null>(null);
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<string | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Global Keyboard Shortcut: Ctrl + Shift + E or Cmd + Shift + E or Alt + E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Ctrl+Shift+E or Cmd+Shift+E or Alt+E
      if (
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) ||
        (e.altKey && (e.key === 'e' || e.key === 'E'))
      ) {
        e.preventDefault();
        setIsEditMode((prev) => {
          const next = !prev;
          if (next) {
            showToast('Admin Content Studio Opened (Shortcut Triggered)', 'info');
          }
          return next;
        });
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#edit' || window.location.hash === '#cms') {
        setIsEditMode(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [showToast]);

  // Save to localStorage on data change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving portfolio data to localStorage:', e);
    }
  }, [data]);

  // Set HTML root to dark mode
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
  }, []);

  // Update dynamic document metadata & schema
  useEffect(() => {
    if (data.seo) {
      document.title = `${data.personal.name} | ${data.seo.title}`;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.seo.description);

      // JSON-LD Schema
      const schemaId = 'portfolio-jsonld-schema';
      let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: data.personal.name,
        description: data.seo.description,
        telephone: data.contact.phone,
        email: data.contact.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: data.contact.location,
        },
        url: data.seo.siteUrl || window.location.origin,
        priceRange: '$$',
        knowsAbout: data.about.technologiesHighlight,
      };

      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [data.seo, data.personal.name, data.contact, data.about.technologiesHighlight]);

  const toggleTheme = useCallback(() => {
    // Theme locked to dark
  }, []);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => {
      const next = !prev;
      if (next) {
        showToast('Opened Content Studio (Admin Edit Mode)', 'info');
      }
      return next;
    });
  }, [showToast]);

  const updateData = useCallback((updater: (prev: PortfolioData) => PortfolioData) => {
    setData((prev) => updater(prev));
  }, []);

  const updateSection = useCallback(<K extends keyof PortfolioData>(section: K, value: PortfolioData[K]) => {
    setData((prev) => ({
      ...prev,
      [section]: value,
    }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    showToast('Reset all data to default template values', 'warning');
  }, [showToast]);

  const exportJSON = useCallback(() => {
    try {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast('Exported portfolio JSON configuration file', 'success');
    } catch (e) {
      console.error(e);
      showToast('Failed to export JSON', 'error');
    }
  }, [data, showToast]);

  const importJSON = useCallback((jsonString: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object' || !parsed.personal || !parsed.contact) {
        return { success: false, error: 'Invalid portfolio data JSON structure. Missing personal or contact objects.' };
      }
      setData(parsed);
      showToast('Successfully imported portfolio content!', 'success');
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid JSON format';
      return { success: false, error: msg };
    }
  }, [showToast]);

  const generateTypeScriptCode = useCallback((): string => {
    return `import { PortfolioData } from '../types/portfolio';\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      data,
      null,
      2
    )};\n`;
  }, [data]);

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData,
        updateSection,
        resetToDefaults,
        exportJSON,
        importJSON,
        generateTypeScriptCode,
        isEditMode,
        setEditMode: setIsEditMode,
        toggleEditMode,
        theme,
        toggleTheme,
        selectedServiceForContact,
        setSelectedServiceForContact,
        selectedPackageForContact,
        setSelectedPackageForContact,
        toasts,
        showToast,
        dismissToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
