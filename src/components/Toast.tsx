import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = usePortfolio();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderClass = 'border-emerald-500/50 bg-slate-900/95 text-emerald-400';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          borderClass = 'border-rose-500/50 bg-slate-900/95 text-rose-400';
        } else if (toast.type === 'warning') {
          Icon = AlertTriangle;
          borderClass = 'border-amber-500/50 bg-slate-900/95 text-amber-400';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderClass = 'border-cyan-500/50 bg-slate-900/95 text-cyan-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200 ${borderClass}`}
          >
            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1 text-xs font-semibold text-slate-100">
              {toast.message}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
