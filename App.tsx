
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [legalView, setLegalView] = useState<'vop' | 'gdpr' | 'cookies' | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-ochre selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      
      <CookieConsent onShowDetails={() => setLegalView('cookies')} />
      
      <LegalModal 
        isOpen={legalView !== null} 
        onClose={() => setLegalView(null)} 
        type={legalView} 
      />

      <footer className="bg-stone-950 text-stone-500 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="logo-box logo-box-inverted">
                M
                <div className="logo-dot"></div>
              </div>
              <div className="flex flex-col text-left">
                <div className="text-xl font-bold tracking-tighter leading-none text-white flex gap-1.5">
                  <span>MINKA</span>
                  <span className="text-ochre">weddings</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium leading-tight text-white/50 mt-0.5">Svatební kameraman</span>
              </div>
            </div>
          </div>
          <p className="mb-10 max-w-sm mx-auto text-sm leading-relaxed">
            Zachycuji nejkrásnější příběhy vašeho života s úctou k emocím a přirozenosti. Působím v Praze, Středních Čechách, na Vysočině a v Jižních Čechách.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest mb-12">
            <button onClick={() => setLegalView('vop')} className="hover:text-white transition-colors">Všeobecné obchodní podmínky</button>
            <button onClick={() => setLegalView('gdpr')} className="hover:text-white transition-colors">Zásady ochrany osobních údajů (GDPR)</button>
            <button onClick={() => setLegalView('cookies')} className="hover:text-white transition-colors">Cookies</button>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-stone-600">
            © {new Date().getFullYear()} Jakub Minka • Všechna práva vyhrazena.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
