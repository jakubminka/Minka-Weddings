
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { OTHER_PROJECTS, SITE_TEXTS } from '../constants';
import LegalModal from './LegalModal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [legalView, setLegalView] = useState<'vop' | 'gdpr' | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="kontakt" className="py-24 bg-stone-900 text-white overflow-hidden" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
            <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{SITE_TEXTS.contact.label}</span>
            <h2 id="contact-title" className="text-4xl md:text-5xl font-bold serif-font mb-8">{SITE_TEXTS.contact.title}</h2>
            <p className="text-stone-400 mb-12 text-lg">
              {SITE_TEXTS.contact.description}
            </p>

            <div className="space-y-8 mb-16">
              <a href={`mailto:${SITE_TEXTS.contact.email}`} className="flex items-center gap-6 group">
                <div className="bg-white/5 p-4 rounded-full text-ochre group-hover:bg-ochre group-hover:text-white transition-all" aria-hidden="true">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">E-mail</div>
                  <div className="text-lg font-medium">{SITE_TEXTS.contact.email}</div>
                </div>
              </a>
              <a href={`tel:${SITE_TEXTS.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-6 group">
                <div className="bg-white/5 p-4 rounded-full text-ochre group-hover:bg-ochre group-hover:text-white transition-all" aria-hidden="true">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Telefon</div>
                  <div className="text-lg font-medium">{SITE_TEXTS.contact.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="bg-white/5 p-4 rounded-full text-ochre" aria-hidden="true">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Hlavní lokality</div>
                  <div className="text-lg font-medium">{SITE_TEXTS.contact.locations}</div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-8 block">Moje další weby</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {OTHER_PROJECTS.map((site) => (
                  <a key={site.name} href={site.url} target="_blank" rel="noopener" className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5 group">
                    <div className="logo-box logo-box-mono !w-8 !h-8 !text-base" aria-hidden="true">
                      {site.letter}
                      <div className="logo-dot !w-2 !h-2"></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-bold tracking-tighter flex gap-1">
                        <span>MINKA</span>
                        <span className="opacity-70">{site.brand}</span>
                      </div>
                      <span className="text-[8px] uppercase tracking-widest text-stone-500">{site.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 text-stone-900 shadow-2xl relative">
              {formState === 'success' ? (
                <div className="py-12 text-center animate-in zoom-in duration-500" role="alert">
                  <div className="flex justify-center mb-6">
                    <div className="bg-ochre/10 p-6 rounded-full text-ochre">
                      <CheckCircle2 size={64} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold serif-font mb-4">Zpráva odeslána!</h3>
                  <p className="text-stone-500 mb-8">Děkuji za vaši poptávku. Ozvu se vám nejpozději do 24 hodin.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-ochre font-bold underline hover:text-stone-900 transition-colors"
                  >
                    Poslat další zprávu
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Jméno a příjmení</label>
                      <input id="name" name="name" required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all" placeholder="Vaše jméno" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">E-mail</label>
                      <input id="email" name="email" required type="email" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all" placeholder="vas@email.cz" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Telefon</label>
                      <input id="phone" name="phone" required type="tel" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all" placeholder="+420 000 000 000" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Poptávaný balíček</label>
                      <select id="service" name="service" required className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Vyberte balíček...</option>
                        <option value="essential">Essential - 8h natáčení</option>
                        <option value="premium">Premium - 12h natáčení (Doporučeno)</option>
                        <option value="exclusive">Exclusive - Neomezené natáčení</option>
                        <option value="other">Individuální poptávka</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Datum svatby</label>
                      <input 
                        id="date"
                        name="date"
                        required 
                        type="date" 
                        min={today}
                        max="2099-12-31"
                        className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="place" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Místo (Lokalita)</label>
                      <input id="place" name="place" required type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all" placeholder="Např. Stodola Vysočina, Praha" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Podrobnosti o vaší svatbě</label>
                    <textarea id="message" name="message" required rows={4} className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none transition-all resize-none" placeholder="Řekněte mi víc o vašem dni..."></textarea>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input required type="checkbox" className="mt-1 accent-ochre" id="gdpr-check" />
                    <label htmlFor="gdpr-check" className="text-[10px] text-stone-500 leading-tight">
                      Souhlasím se zpracováním osobních údajů dle <button type="button" onClick={() => setLegalView('gdpr')} className="underline hover:text-ochre">GDPR</button> a s <button type="button" onClick={() => setLegalView('vop')} className="underline hover:text-ochre">obchodními podmínkami</button>.
                    </label>
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-ochre transition-all shadow-lg disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'Odesílám poptávku...' : 'Odeslat nezávaznou poptávku'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <LegalModal isOpen={legalView !== null} onClose={() => setLegalView(null)} type={legalView} />
    </section>
  );
};

export default Contact;
