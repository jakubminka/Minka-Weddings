import { VideoProject, Testimonial, PricingPackage } from './types';

/**
 * ZDE UPRAVUJTE TEXTY A PARAMETRY WEBU
 */
export const SITE_TEXTS = {
  hero: {
    label: "Svatební filmy • Jakub Minka",
    title: "Příběhy,",
    titleItalic: "které ožívají",
    description: "Tvořím svatební videa, která v sobě nesou emoce, přirozenost a filmovou atmosféru.",
    ctaPrimary: "Zhlédnout filmy",
    ctaSecondary: "Rezervovat termín",
    // Nové video: https://youtu.be/a9FW0dNSwYE
    heroVideoId: "a9FW0dNSwYE" 
  },
  about: {
    label: "Kdo stojí za kamerou",
    title: "Ahoj, já jsem Jakub Minka",
    p1: "Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce jako svatebního kameramana je o detailech a o příběhu, který dýchá i po letech.",
    p2: "Specializuji se na filmové záběry ze svateb a působím především v těchto lokalitách: Praha, Středočeský kraj, Vysočina a Jihočeský kraj. Jinak za vámi ale dojedu téměř kamkoliv.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    stats: [
      { id: 'couples', value: '150+', label: 'Párů' },
      { id: 'experience', value: '8 let', label: 'Praxe' },
      { id: 'reliability', value: '100%', label: 'Spolehlivost' },
      { id: 'quality', value: '4K', label: 'Výstup' },
    ]
  },
  contact: {
    label: "Rezervujte si termín",
    title: "Pojďme tvořit spolu",
    description: "Máte dotaz nebo chcete zjistit dostupnost ve váš den? Rád s vámi proberu detaily vaší svatby v Praze, Středních Čechách, na Vysočině či v Jižních Čechách.",
    email: "info@jakubminka.cz",
    phone: "+420 777 000 000",
    locations: "Praha, Střední Čechy, Vysočina, Jižní Čechy"
  },
  pricing: {
    note: "* Neobsahuje cestovné (8 Kč/km z Prahy nebo Ostravy). Možnost individuální úpravy balíčků na míru."
  },
  cookies: {
    bannerTitle: "Tento web používá cookies 🍪",
    bannerDescription: "Abych mohl web neustále vylepšovat, používám cookies pro analýzu návštěvnosti. Všechna data jsou anonymní. Pokračováním v prohlížení souhlasíte s jejich použitím."
  }
};

export const LEGAL_CONTENT = {
  vop: {
    title: 'Všeobecné obchodní podmínky',
    sections: [
      { h: '1. Úvodní ustanovení', p: 'Tyto obchodní podmínky platí pro poskytování služeb svatebního kameramana Jakub Minka.' },
      { h: '2. Rezervace a platba', p: 'Rezervace termínu je závazná po úhradě nevratného rezervačního poplatku.' }
    ]
  },
  gdpr: {
    title: 'Ochrana osobních údajů',
    sections: [
      { h: '1. Správce údajů', p: 'Správcem vašich osobních údajů je Jakub Minka.' }
    ]
  },
  cookies: {
    title: 'Informace o souborech Cookies',
    sections: [
      { h: 'Co jsou cookies?', p: 'Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče.' }
    ]
  }
};

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
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Essential',
    price: '18 000 Kč',
    features: ['8 hodin natáčení', '3-5 minutový Highlight film', 'Full HD rozlišení', 'Online galerie']
  },
  {
    name: 'Premium',
    price: '25 000 Kč',
    recommended: true,
    features: ['12 hodin natáčení', '5-7 minutový Highlight film', 'Záběry z dronu', '4K rozlišení']
  },
  {
    name: 'Exclusive',
    price: '32 000 Kč',
    features: ['Neomezená doba natáčení', '8-10 minutový Extended film', '1 minuta Teaser', 'Druhý kameraman']
  }
];

export const FAQ_DATA = [
  { question: "Jak dlouho dopředu si máme rezervovat termín?", answer: "Ideálně 6-12 měsíců předem." },
  { question: "Kdy obdržíme hotové video?", answer: "Zpracování videa trvá obvykle 4 až 8 týdnů." }
];

export const OTHER_PROJECTS = [
  { name: "Minka studio", brand: "studio", sub: "Fotograf a kameraman", url: "https://minkastudio.cz", letter: "M" },
  { name: "Minka aerials", brand: "aerials", sub: "Foto a video dronem", url: "https://minkaaerials.cz", letter: "M" }
];
