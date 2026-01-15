
import React from 'react';
import { X } from 'lucide-react';
import { LEGAL_CONTENT } from '../constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'vop' | 'gdpr' | 'cookies' | null;
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  if (!isOpen || !type) return null;

  const active = LEGAL_CONTENT[type as keyof typeof LEGAL_CONTENT];

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="Zavřít okno"
        >
          <X size={24} />
        </button>
        
        <div className="mb-10">
          <span className="text-ochre font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Právní informace</span>
          <h2 className="text-3xl md:text-4xl font-bold serif-font text-stone-900">{active.title}</h2>
        </div>

        <div className="space-y-12">
          {active.sections.map((s, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <h3 className="text-lg font-bold text-stone-900 mb-5 pb-2 border-b border-stone-100">{s.h}</h3>
              
              <div className="space-y-5">
                {s.items.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.type === 'p' ? (
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    ) : (
                      <ul className="space-y-4 ml-4">
                        {item.bullets?.map((bullet, bi) => (
                          <li key={bi} className="text-stone-600 text-sm leading-relaxed flex gap-3">
                            <span className="text-ochre font-bold shrink-0 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-ochre transition-all shadow-md"
          >
            Zavřít
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
