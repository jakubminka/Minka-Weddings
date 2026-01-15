
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
    title: 'Monika & Štěpán',
    location: 'Střížovický dvůr',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Monika_stepan_strizovicky_dvur.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/LnO9Q5KK_SU',
    category: 'highlight'
  },
  {
    id: '2',
    title: 'Kristýna & Martin',
    location: 'Stodola Holašovice',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Kristyna_Martin_stodola_holasovice.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/b6TIWjVYD4k',
    category: 'highlight'
  },
  {
    id: '3',
    title: 'Terka & Pepa',
    location: 'Penzion U Farmáře',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Terka_Pepa_penzion-u-farmare.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/9wx1Beq_uqA',
    category: 'highlight'
  },
  {
    id: '4',
    title: 'Jana & Žiga',
    location: 'Penzion Na Kmíně',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Jana_Ziga_penzion_na_kmine.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/35DuSZauEjY',
    category: 'highlight'
  }
  ,
  {
    id: '5',
    title: 'Nikolka & Pepa',
    location: 'Resort Klášter Želiv',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Nikolka_Pepa_Resort_Zeliv.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/t_1xysZwdqE',
    category: 'highlight'
  }
  ,
  {
    id: '6',
    title: 'Radka & Tomáš',
    location: 'Váňův statek',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Nikolka_Pepa_Resort_Zeliv.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/lg22S8ROi5o',
    category: 'highlight'
  }
];

export const FAQ_DATA = [
  { question: "Jak dlouho dopředu si máme rezervovat termín?", answer: "Doporučuji rezervaci 6-12 měsíců předem, zejména pro sobotní termíny v létě. Jinak se může stát, že nejžádanější termíny budou již obsazené." },
  { question: "Jak probíhá objednání?", answer: "Ideální je nezávazně poptat termín vyplněním kontaktního formuláře níže, případně emailem či po telefonu. Následně vám termín potvrdím a uhradíte rezervační poplatek ve výši 30% z ceny balíčku. V tuto chvíli již s vámi počítám a můžeme probrat podrobnosti." },
  { question: "Jaký balíček si máme zvolit?", answer: "V základní variantě na 8 hodin v dostáváte svatební klip o délce 3-5 minut. Vhodné na kratší svatby, kde zábava nepokračuje do večerních hodin nebo kde se natáčecí den zahajuje obřadem. V rozšířené variantě na 12 hodin budu na místě po celý den. Tato varianta je ideální na většinu svateb. V Exclusiv variantě nabízím i střih reportážního dokumentu o délce 10-20 minut, kde se kromě nanželského páru objeví i ostatní svatební hosté a také většina aktivit v průběhu celého dne. "},
  { question: "Kdy obdržíme hotové video?", answer: "Zpracování videa je precizní proces. Highlight filmy odevzdávám standardně do 4-8 týdnů v závislosti na sezóně." },
  { question: "Natáčíte i s dronem?", answer: "Ano, pokud to počasí a lokalita dovolují, záběry z dronu jsou součástí všech balíčků." },
  { question: "Natáčíte i s dronem?", answer: "Ano, pokud to počasí a lokalita dovolují, záběry z dronu jsou součástí všech balíčků." }
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
