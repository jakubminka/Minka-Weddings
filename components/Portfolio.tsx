
import React, { useState, useEffect } from 'react';
import { VIDEO_PROJECTS } from '../constants';
import { Play, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedVideo]);

  return (
    <section id="portfolio" className="py-24 bg-stone-50" aria-labelledby="portfolio-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ochre font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Moje tvorba</span>
          <h2 id="portfolio-title" className="text-4xl md:text-5xl font-bold serif-font mb-6">Svatební filmy</h2>
          <div className="w-16 h-0.5 bg-ochre mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VIDEO_PROJECTS.map((project) => (
            <article 
              key={project.id} 
              onClick={() => setSelectedVideo(project.videoUrl)}
              className="group relative overflow-hidden rounded-xl bg-stone-200 aspect-video shadow-md hover:shadow-2xl transition-all cursor-pointer"
            >
              <img 
                src={project.thumbnail} 
                alt={`Svatební video ${project.title} - ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <button 
                  className="bg-white/10 backdrop-blur-md p-6 rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-500 border border-white/20"
                  aria-label={`Přehrát svatební film ${project.title}`}
                >
                  <Play size={32} className="text-white fill-white ml-1" />
                </button>
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-3xl font-bold serif-font mb-1">{project.title}</h3>
                  <p className="text-white/70 font-bold tracking-widest uppercase text-[10px]">{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedVideo(null)}>
          <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-sm"></div>
          <button 
            onClick={() => setSelectedVideo(null)} 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Zavřít video"
          >
            <X size={40} />
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`${selectedVideo}?autoplay=1`} 
              title="Svatební video Jakub Minka" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
