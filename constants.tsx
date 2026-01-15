
import { VideoProject, Testimonial, PricingPackage } from './types';

/**
 * Zde můžete upravit veškeré texty na hlavní stránce.
 * Stačí změnit text v uvozovkách.
 */
export const SITE_TEXTS = {
  hero: {
    label: "Svatební filmy • Jakub Minka",
    title: "Příběhy,",
    titleItalic: "které ožívají",
    description: "Zachyťte kouzlo okamžiku. Tvořím svatební videa, která v sobě nesou emoce, přirozenost a filmovou atmosféru.",
    ctaPrimary: "Zhlédnout filmy",
    ctaSecondary: "Rezervovat termín"
  },
  about: {
    label: "Kdo stojí za kamerou",
    title: "Ahoj, jsem Jakub Minka",
    p1: "Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce jako svatebního kameramana je o detailech, které jiným uniknou, a o příběhu, který dýchá i po letech.",
    p2: "Specializuji se na filmové záběry ze svateb a působím především v těchto lokalitách: Praha, Středočeský kraj, Vysočina a Jihočeský kraj. Tato místa znám dokonale a vím, jak v nich zachytit to nejlepší světlo a atmosféru."
  },
  contact: {
    label: "Rezervujte si termín",
    title: "Pojďme tvořit spolu",
    description: "Máte dotaz nebo chcete zjistit dostupnost ve váš den? Rád s vámi proberu detaily vaší svatby v Praze, Středních Čechách, na Vysočině či v Jižních Čechách.",
    email: "info@jakubminka.cz",
    phone: "+420 777 000 000",
    locations: "Praha, Střední Čechy, Vysočina, Jižní Čechy"
  }
};

/**
 * PORTFOLIO - Zde přidejte nebo odeberte videa.
 * Pro přidání nového videa zkopírujte celý blok {} a vložte jej na začátek seznamu.
 */
export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: '1',
    title: 'Anna & Petr',
    location: 'Zámek Blatná',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  },
  {
    id: '2',
    title: 'Lucie & Marek',
    location: 'Vinařství Sonberk',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  },
  {
    id: '3',
    title: 'Kateřina & Jakub',
    location: 'Stodola Suška',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'teaser'
  },
  {
    id: '4',
    title: 'Bára & Filip',
    location: 'Průhonický park',
    thumbnail: 'https://images.unsplash.com/photo-1465495910483-4d57495931f3?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  }
];

/**
 * CENÍK - Zde upravte ceny a výhody balíčků.
 */
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Essential',
    price: '18 000 Kč',
    features: [
      '8 hodin natáčení',
      '3-5 minutový Highlight film',
      'Full HD rozlišení',
      'Online galerie pro sdílení'
    ]
  },
  {
    name: 'Premium',
    price: '25 000 Kč',
    recommended: true,
    features: [
      '12 hodin natáčení (od příprav po party)',
      '5-7 minutový Highlight film',
      'Záběry z dronu (v ceně)',
      '4K rozlišení',
      'Všechny natočené surové záběry'
    ]
  },
  {
    name: 'Exclusive',
    price: '32 000 Kč',
    features: [
      'Neomezená doba natáčení',
      '8-10 minutový Extended film',
      '1 minuta Teaser na Instagram',
      'Druhý kameraman pro více úhlů',
      'Luxusní dřevěný USB box'
    ]
  }
];

/**
 * FAQ - Často kladené dotazy.
 */
export const FAQ_DATA = [
  {
    question: "Jak dlouho dopředu si máme rezervovat termín?",
    answer: "Ideálně 6-12 měsíců předem, zejména pokud plánujete svatbu v hlavní sezóně (květen-září)."
  },
  {
    question: "Kdy obdržíme hotové video?",
    answer: "Zpracování videa trvá obvykle 4 až 8 týdnů v závislosti na vytížení. Teaser odesílám většinou do 7 dnů od svatby."
  },
  {
    question: "Používáte při natáčení dron?",
    answer: "Ano, v balíčcích Premium a Exclusive jsou záběry z dronu zahrnuty v ceně, pokud to dovolují povětrnostní podmínky a legislativa daného místa."
  }
];

export const OTHER_PROJECTS = [
  {
    name: "Minka studio",
    brand: "studio",
    sub: "Fotograf a kameraman",
    url: "https://minkastudio.cz",
    letter: "M"
  },
  {
    name: "Minka aerials",
    brand: "aerials",
    sub: "Foto a video dronem",
    url: "https://minkaaerials.cz",
    letter: "M"
  }
];
