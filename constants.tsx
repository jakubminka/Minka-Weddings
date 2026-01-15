
import { VideoProject, Testimonial, PricingPackage } from './types';

/**
 * ZDE UPRAVUJTE TEXTY A PARAMETRY WEBU
 */
export const SITE_TEXTS = {
  hero: {
    label: "Svatební filmy • Jakub Minka",
    title: "Příběhy,",
    titleItalic: "které ožívají",
    description: "Zachyťte kouzlo okamžiku. Tvořím svatební videa, která v sobě nesou emoce, přirozenost a filmovou atmosféru.",
    ctaPrimary: "Zhlédnout filmy",
    ctaSecondary: "Rezervovat termín",
    // ID videa z YouTube (to co je v URL za v=)
    heroVideoId: "hOwasRUDmsc" 
  },
  about: {
    label: "Kdo stojí za kamerou",
    title: "Ahoj, jsem Jakub Minka",
    p1: "Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce jako svatebního kameramana je o detailech, které jiným uniknou, a o příběhu, který dýchá i po letech.",
    p2: "Specializuji se na filmové záběry ze svateb a působím především v těchto lokalitách: Praha, Středočeský kraj, Vysočina a Jihočeský kraj. Tato místa znám dokonale a vím, jak v nich zachytit to nejlepší světlo a atmosféru.",
    // Vaše profilová fotografie
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    // VAŠE STATISTIKY - Změňte 'value' (číslo) nebo 'label' (popisek)
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

/**
 * PRÁVNÍ DOKUMENTY - Zde můžete upravit VOP, GDPR a informace o Cookies.
 */
export const LEGAL_CONTENT = {
  vop: {
    title: 'Všeobecné obchodní podmínky',
    sections: [
      {
        h: '1. Úvodní ustanovení',
        p: 'Tyto obchodní podmínky platí pro poskytování služeb svatebního kameramana Jakub Minka. Smlouva mezi kameramanem a klientem vzniká potvrzením rezervace a úhradou rezervačního poplatku.'
      },
      {
        h: '2. Rezervace a platba',
        p: 'Rezervace termínu je závazná po úhradě nevratného rezervačního poplatku ve výši 30 % z celkové ceny balíčku. Doplatek je splatný nejpozději v den konání svatby nebo dle dohody po dodání hotového díla.'
      },
      {
        h: '3. Práva a povinnosti',
        p: 'Kameraman se zavazuje dodat dílo v dohodnuté kvalitě. Klient zajistí kameramanovi stravu a pitný režim během celého dne natáčení a přístup na všechna místa konání obřadu a oslavy.'
      },
      {
        h: '4. Dodací lhůty',
        p: 'Standardní doba zpracování svatebního videa je 4–8 týdnů od data konání svatby. Krátký teaser je obvykle dodáván do 7 dnů.'
      },
      {
        h: '5. Autorská práva',
        p: 'Autorská práva k videozáznamu náleží kameramanovi. Klient získává licenci pro osobní užití. Komerční užití nebo další prodej bez souhlasu autora není dovolen.'
      }
    ]
  },
  gdpr: {
    title: 'Ochrana osobních údajů',
    sections: [
      {
        h: '1. Správce údajů',
        p: 'Správcem vašich osobních údajů je Jakub Minka. Vaše údaje zpracováváme výhradně pro účely realizace svatebního videa a komunikace s vámi.'
      },
      {
        h: '2. Rozsah zpracování',
        p: 'Zpracováváme jména, e-mailové adresy, telefonní čísla a vizuální podobu zachycenou na videozáznamu.'
      },
      {
        h: '3. Právní základ',
        p: 'Zpracování je nezbytné pro plnění smlouvy, jejíž smluvní stranou je subjekt údajů (klient).'
      },
      {
        h: '4. Doba uložení',
        p: 'Osobní údaje v podobě surových záběrů uchováváme po dobu 12 měsíců pro případné reklamace nebo úpravy. Hotové video uchováváme v archivu trvale jako součást našeho portfolia.'
      }
    ]
  },
  cookies: {
    title: 'Informace o souborech Cookies',
    sections: [
      {
        h: 'Co jsou cookies?',
        p: 'Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek. Pomáhají webu pamatovat si informace o vaší návštěvě.'
      },
      {
        h: 'Jaké cookies používáme?',
        p: 'Používáme pouze nezbytné technické cookies pro správný chod webu a anonymní analytické cookies (např. Google Analytics) pro sledování návštěvnosti, abychom mohli web vylepšovat.'
      },
      {
        h: 'Jak cookies zakázat?',
        p: 'Používání cookies můžete omezit nebo zablokovat v nastavení svého webového prohlížeče.'
      }
    ]
  }
};

/**
 * PORTFOLIO - Seznam vašich videí.
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
  },
  {
    id: '5',
    title: 'Jana & Tomáš',
    location: 'Vrtbovská zahrada',
    thumbnail: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  },
  {
    id: '6',
    title: 'Nikola & Martin',
    location: 'Statek u Prahy',
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  },
  {
    id: '7',
    title: 'Tereza & Ondřej',
    location: 'Zámek Hluboká',
    thumbnail: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'highlight'
  },
  {
    id: '8',
    title: 'Simona & David',
    location: 'Penzion na Vysočině',
    thumbnail: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'teaser'
  }
];

/**
 * CENÍK
 */
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Essential',
    price: '18 000 Kč',
    features: [
      '8 hodin natáčení',
      '3-5 minutový Highlight film',
      'Full HD rozlišení',
      'Online galerie pro sdílení',
      'Audio záznam obřadu'
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
      'Všechny natočené surové záběry',
      'Doručení na USB v dárkovém boxu'
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
      'Luxusní dřevěný USB box',
      'Předsvatební schůzka a konzultace'
    ]
  }
];

/**
 * FAQ
 */
export const FAQ_DATA = [
  {
    question: "Jak dlouho dopředu si máme rezervovat termín?",
    answer: "Ideálně 6-12 měsíců předem, zejména pokud plánujete svatbu v hlavní sezóně (květen-září). Některé termíny se plní velmi rychle."
  },
  {
    question: "Kdy obdržíme hotové video?",
    answer: "Zpracování videa trvá obvykle 4 až 8 týdnů v závislosti na vytížení. Teaser (krátkou ukázku) odesílám většinou do 7 dnů od svatby, abyste se mohli pochlubit přátelům."
  },
  {
    question: "Používáte při natáčení dron?",
    answer: "Ano, v balíčcích Premium a Exclusive jsou záběry z dronu zahrnuty v ceně, pokud to dovolují povětrnostní podmínky (silný vítr, déšť) a legislativa daného místa (např. bezletové zóny)."
  },
  {
    question: "Je možné si objednat i fotografa?",
    answer: "Primárně se soustředím na video, ale spolupracuji s řadou skvělých fotografů, které vám mohu doporučit, aby náš styl byl jednotný."
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
