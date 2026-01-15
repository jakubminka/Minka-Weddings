
import React from 'react';
import { X } from 'lucide-react';
import { LEGAL_CONTENT } from '../constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'vop' | 'gdpr' | 'cookies' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const active = LEGAL_CONTENT[type];

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300">
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

        <div className="space-y-8">
          {active.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-bold text-stone-900 mb-3">{s.h}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-ochre transition-all"
          >
            Zavřít
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
