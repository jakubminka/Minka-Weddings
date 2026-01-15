
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-stone-100 p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h4 className="font-bold text-stone-900 mb-1">Tento web používá cookies 🍪</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            Abych mohl web neustále vylepšovat, používám cookies pro analýzu návštěvnosti. Všechna data jsou anonymní. Pokračováním v prohlížení souhlasíte s jejich použitím.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={handleAccept} className="text-stone-400 hover:text-stone-900 text-xs font-bold uppercase tracking-widest transition-colors">
            Nastavení
          </button>
          <button 
            onClick={handleAccept}
            className="bg-ochre text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-stone-900 transition-all shadow-md"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
