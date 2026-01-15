import React from 'react';
import { Camera, Heart, Users, Star } from 'lucide-react';
import { SITE_TEXTS } from '../constants';

const About: React.FC = () => {
  const T = SITE_TEXTS.about;
  const getIcon = (id: string) => {
    switch (id) {
      case 'couples': return <Heart className="text-ochre" aria-hidden="true" />;
      case 'experience': return <Camera className="text-ochre" aria-hidden="true" />;
      case 'reliability': return <Users className="text-ochre" aria-hidden="true" />;
      case 'quality': return <Star className="text-ochre" aria-hidden="true" />;
      default: return <Star className="text-ochre" aria-hidden="true" />;
    }
  };

  return (
    <section id="o-mne" className="py-24 bg-white overflow-hidden" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700">
              <img 
                src={T.profileImage} 
                alt="Jakub Minka - Svatební kameraman" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ochre/5 rounded-full blur-3xl z-0"></div>
          </div>
          
          <div className="lg:w-1/2">
            <header>
              <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{T.label}</span>
              <h2 id="about-title" className="text-4xl md:text-5xl font-bold serif-font mb-8">{T.title}</h2>
            </header>
            <article className="prose prose-stone">
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">{T.p1}</p>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">{T.p2}</p>
            </article>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-stone-50 p-8 rounded-2xl">
              {T.stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-2">{getIcon(stat.id)}</div>
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