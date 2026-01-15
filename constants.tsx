
import { VideoProject, PricingPackage } from './types';

/**
 * ZDE UPRAVUJTE VEŠKERÉ TEXTY NA STRÁNCE
 */
export const SITE_TEXTS = {
  hero: {
    label: "Svatební filmy • Jakub Minka",
    title: "Příběhy,",
    titleItalic: "které ožívají",
    description: "Tvořím svatební videa, která v sobě nesou emoce, přirozenost a filmovou atmosféru.",
    ctaPrimary: "Zhlédnout filmy",
    ctaSecondary: "Rezervovat termín",
    // ID videa z YouTube pro případ, že nepoužijete vlastní mp4
    youtubeVideoId: "a9FW0dNSwYE" 
  },
  about: {
    label: "Kdo stojí za kamerou",
    title: "Ahoj, jsem Jakub Minka",
    p1: "Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce svatebního kameramana je o detailech, které jiným uniknou, a o příběhu, který dýchá i po letech.",
    p2: "Specializuji se na filmové záběry ze svateb a působím především v Praze, ve Středočeskén kraji, na Vysočině a v Jižních Čechách. Každá svatba je pro mě unikátní výzvou zachytit to nejdůležitější z vašeho dne.",
    profileImage: "https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/A7309815.webp?auto=format&fit=crop&q=80&w=800&h=1000",
    stats: [
      { id: 'couples', value: 'desitky', label: 'svateb' },
      { id: 'experience', value: '8 let', label: 'praxe' },
      { id: 'reliability', value: '100%', label: 'spolehlivost' },
      { id: 'quality', value: '4K', label: 'výstup' },
    ]
  },
  portfolio: {
    label: "Moje tvorba",
    title: "Svatební filmy",
    ctaMore: "Zobrazit další filmy"
  },
  faq: {
    label: "Co vás zajímá",
    title: "Časté dotazy"
  },
  pricing: {
    label: "Investice do vzpomínek",
    title: "Svatební balíčky",
    note: "* Cestovné do 50 km od místa mého bydliště je již zahrnuto v ceně. Za každý kilometr nad 100 km celkem si účtuji 10 Kč / km.",
    cta: "Poptat balíček"
  },
  contact: {
    label: "Rezervujte si termín",
    title: "Zachytím váš svatební příběh",
    description: "Máte dotaz nebo chcete zjistit dostupnost ve váš den? Rád s vámi proberu detaily vaší svatby.",
    email: "mail@jakubminka.cz",
    phone: "+420 731 055 983",
    locations: "Praha, Střední Čechy, Vysočina, Jižní Čechy",
    form: {
      name: "Jméno a příjmení",
      email: "E-mail",
      phone: "Telefon",
      package: "Poptávaný balíček",
      date: "Datum svatby",
      place: "Místo (Lokalita)",
      message: "Podrobnosti o vaší svatbě",
      submit: "Odeslat nezávaznou poptávku",
      success: "Zpráva odeslána! Ozvu se vám nejpozději do 24 hodin."
    }
  },
  footer: {
    description: "Zachycuji nejkrásnější příběhy vašeho života s důrazem na emoce a přirozenost. Působím v Praze, ve Středních Čechách, na Vysočině a v Jižních Čechách.",
    copyright: "Všechna práva vyhrazena."
  },
  // Added cookies configuration for the CookieConsent component
  cookies: {
    bannerTitle: "Soukromí a cookies",
    bannerDescription: "Tento web používá cookies ke zlepšení uživatelského zážitku a analýze návštěvnosti. Pokračováním v prohlížení souhlasíte s jejich používáním."
  }
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Essential',
    price: '20 000 Kč',
    features: ['8 hodin natáčení', '1 kameraman', '3-5 minutový film', 'Dron v ceně', 'Zpracování do 2-4 týdnů']
  },
  {
    name: 'Premium',
    price: '25 000 Kč',
    recommended: true,
    features: ['12 hodin natáčení', '1 kameraman', '3-5 minutový film', 'Dron v ceně', 'Zpracování do 2-4 týdnů']
  },
  {
    name: 'Exclusive',
    price: '30 000 Kč',
    features: ['12 hodin natáčení', '1 kameraman', '3-5 minutový film', 'až 20 minutový dokument','Dron v ceně', 'Zpracování do 4 týdnů']
  }
];

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
    title: 'Kateřina & Jan',
    location: 'Villa Richter',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  }
];

export const FAQ_DATA = [
  { question: "Jak dlouho dopředu si máme rezervovat termín?", answer: "Svatební sezóna se plní rychle, proto doporučuji rezervaci 6-12 měsíců předem, zejména pro sobotní termíny v létě." },
  { question: "Jaká je délka natáčení?", answer: "Všechny mé standardní balíčky obsahují 12 hodin natáčení, což obvykle pokrývá vše od příprav až po večerní zábavu." },
  { question: "Kdy obdržíme hotové video?", answer: "Zpracování videa je precizní proces. Highlight filmy odevzdávám standardně do 4-8 týdnů v závislosti na sezóně." },
  { question: "Natáčíte i s dronem?", answer: "Ano, pokud to počasí a lokalita dovolují, záběry z dronu jsou součástí balíčků Premium a Exclusive." }
];

export const OTHER_PROJECTS = [
  { name: "Minka studio", brand: "studio", sub: "Fotograf a kameraman", url: "https://minkastudio.cz", letter: "M" },
  { name: "Minka aerials", brand: "aerials", sub: "Foto a video dronem", url: "https://minkaaerials.cz", letter: "M" }
];

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
      { h: '1. Správce údajů', p: 'Správcem vašich osobních údajů je Jakub Minka. Vaše údaje používám pouze pro účely plnění smlouvy.' }
    ]
  },
  cookies: {
    title: 'Informace o souborech Cookies',
    sections: [
      { h: 'Co jsou cookies?', p: 'Cookies jsou malé textové soubory, které nám pomáhají analyzovat návštěvnost webu a zlepšovat jeho funkčnost.' }
    ]
  }
};
