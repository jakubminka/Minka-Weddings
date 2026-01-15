
import React from 'react';
import { Camera, Heart, Users, Star } from 'lucide-react';
import { SITE_TEXTS } from '../constants';

const About: React.FC = () => {
  const stats = [
    { icon: <Heart className="text-ochre" aria-hidden="true" />, value: '150+', label: 'Párů' },
    { icon: <Camera className="text-ochre" aria-hidden="true" />, value: '8 let', label: 'Praxe' },
    { icon: <Users className="text-ochre" aria-hidden="true" />, value: '100%', label: 'Spolehlivost' },
    { icon: <Star className="text-ochre" aria-hidden="true" />, value: '4K', label: 'Výstup' },
  ];

  return (
    <section id="o-mne" className="py-24 bg-white overflow-hidden" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Jakub Minka - Svatební kameraman pro Prahu a Jižní Čechy" 
                className="w-full h-auto"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ochre/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -left-10 text-[12rem] font-serif text-stone-100 select-none z-0">J</div>
          </div>
          
          <div className="lg:w-1/2">
            <header>
              <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{SITE_TEXTS.about.label}</span>
              <h2 id="about-title" className="text-4xl md:text-5xl font-bold serif-font mb-8">{SITE_TEXTS.about.title}</h2>
            </header>
            <article className="prose prose-stone">
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                {SITE_TEXTS.about.p1}
              </p>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                {SITE_TEXTS.about.p2}
              </p>
            </article>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-stone-50 p-8 rounded-2xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
