import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { SITE_TEXTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Overlay pro lepší čitelnost textu */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] scale-105"
          src={`https://www.youtube.com/embed/${SITE_TEXTS.hero.heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${SITE_TEXTS.hero.heroVideoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <span className="text-white/80 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 block font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
          {SITE_TEXTS.hero.label}
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-bold serif-font mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 leading-[0.9]">
          {SITE_TEXTS.hero.title}<br/><span className="italic font-light opacity-80">{SITE_TEXTS.hero.titleItalic}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {SITE_TEXTS.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <a href="#portfolio" className="bg-ochre text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-ochre transition-all duration-500 flex items-center gap-3 group shadow-2xl uppercase tracking-widest text-xs">
            <Play size={16} className="fill-current" />
            {SITE_TEXTS.hero.ctaPrimary}
          </a>
          <a href="#kontakt" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 uppercase tracking-widest text-xs">
            {SITE_TEXTS.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30">
        <ChevronDown size={28} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Hero;