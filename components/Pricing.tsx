
import React from 'react';
import { PRICING_PACKAGES, SITE_TEXTS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="cenik" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Investice do vzpomínek</span>
          <h2 className="text-4xl md:text-5xl font-bold serif-font mb-6">Svatební balíčky</h2>
          <div className="w-16 h-0.5 bg-ochre mx-auto"></div>
        </div>

        {/* Dynamický grid - přizpůsobí se počtu položek v PRICING_PACKAGES */}
        <div className={`grid grid-cols-1 gap-8 ${
          PRICING_PACKAGES.length === 1 ? 'max-w-md mx-auto' : 
          PRICING_PACKAGES.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 lg:p-10 rounded-3xl border transition-all duration-500 hover:shadow-2xl flex flex-col ${
                pkg.recommended 
                ? 'border-ochre shadow-xl lg:scale-105 z-10 bg-stone-50' 
                : 'border-stone-100 bg-white'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ochre text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                  Nejoblíbenější
                </div>
              )}
              
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-2xl font-bold serif-font mb-3">{pkg.name}</h3>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-4xl font-bold text-stone-900">{pkg.price}</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">All-inclusive cena</p>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-stone-600 text-sm">
                    <Check size={18} className="text-ochre shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#kontakt" 
                className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-xs text-center transition-all ${
                  pkg.recommended 
                  ? 'bg-ochre text-white hover:bg-stone-900 shadow-lg' 
                  : 'bg-stone-900 text-white hover:bg-ochre'
                }`}
              >
                Poptat balíček
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-stone-400 text-xs italic">
          {SITE_TEXTS.pricing.note}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
