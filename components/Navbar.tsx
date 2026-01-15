
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['o-mne', 'portfolio', 'faq', 'cenik', 'kontakt'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || (window.scrollY < 200 ? 'home' : activeSection);
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'Domů', id: 'home', href: '#' },
    { name: 'O mně', id: 'o-mne', href: '#o-mne' },
    { name: 'Portfolio', id: 'portfolio', href: '#portfolio' },
    { name: 'FAQ', id: 'faq', href: '#faq' },
    { name: 'Ceník', id: 'cenik', href: '#cenik' },
    { name: 'Kontakt', id: 'kontakt', href: '#kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-3 group">
              {/* Dynamická třída pro logo-box: na tmavém pozadí (!isScrolled) je bílý (inverted), na světlém (isScrolled) je černý */}
              <div className={`logo-box ${!isScrolled ? 'logo-box-inverted' : ''}`}>
                M
                <div className="logo-dot"></div>
              </div>
              <div className="flex flex-col">
                <div className={`text-xl font-bold tracking-tighter leading-none flex gap-1.5 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                  <span>MINKA</span>
                  <span className="text-ochre">weddings</span>
                </div>
                <span className={`text-[9px] uppercase tracking-[0.2em] font-medium mt-0.5 leading-tight ${isScrolled ? 'text-stone-500' : 'text-white/70'}`}>Svatební kameraman</span>
              </div>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-semibold transition-all relative ${
                    activeSection === link.id 
                      ? (isScrolled ? 'text-ochre' : 'text-white')
                      : (isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/60 hover:text-white')
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 ${isScrolled ? 'bg-ochre' : 'bg-white'} animate-in fade-in duration-300`}></span>
                  )}
                </a>
              ))}
              <div className="pl-4">
                <a 
                  href="#kontakt" 
                  onClick={(e) => handleNavClick(e, '#kontakt')}
                  className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${isScrolled ? 'bg-ochre text-white hover:bg-ochre-dark' : 'bg-white text-stone-900 hover:bg-ochre hover:text-white'}`}
                >
                  Poptat termín
                </a>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`block px-4 py-4 text-base font-bold border-b border-stone-50 ${activeSection === link.id ? 'text-ochre bg-stone-50' : 'text-stone-900'}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
