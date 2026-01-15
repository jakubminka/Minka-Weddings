
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Co vás zajímá</span>
          <h2 className="text-4xl md:text-5xl font-bold serif-font">Časté dotazy</h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-stone-100 rounded-2xl overflow-hidden transition-all ${openIndex === idx ? 'shadow-md border-ochre/30' : 'hover:border-stone-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-stone-800 pr-8">{item.question}</span>
                {openIndex === idx ? <Minus className="text-ochre shrink-0" /> : <Plus className="text-stone-300 shrink-0" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
