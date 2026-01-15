
import React, { useState, useEffect } from 'react';
import { SITE_TEXTS } from '../constants';

interface CookieConsentProps {
  onShowDetails: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onShowDetails }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pro testování můžete zkusit smazat localStorage: localStorage.removeItem('cookie-consent')
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[300] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-stone-100 p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h4 className="font-bold text-stone-900 mb-1">{SITE_TEXTS.cookies.bannerTitle}</h4>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            {SITE_TEXTS.cookies.bannerDescription}
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={onShowDetails} className="text-stone-400 hover:text-stone-900 text-[10px] font-bold uppercase tracking-widest transition-colors">
            Podrobnosti
          </button>
          <button 
            onClick={handleAccept}
            className="bg-ochre text-white px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-stone-900 transition-all shadow-md"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
