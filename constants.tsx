
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
    p1: "Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce jako svatebního kameramana je o detailech a o příběhu, který dýchá i po letech.",
    p2: "Specializuji se na filmové záběry ze svateb a působím především v Praze, ve Středočeském kraji, na Vysočině a v Jižních Čechách, ale dojedu za vámi kamkoliv.",
    profileImage: "https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/A7309815.webp?auto=format&fit=crop&q=80&w=800&h=1000",
    stats: [
      { id: 'couples', value: 'desitky', label: 'svateb' },
      { id: 'experience', value: '8 let', label: 'Praxe' },
      { id: 'reliability', value: '100%', label: 'Spolehlivost' },
      { id: 'quality', value: '4K', label: 'Výstup' },
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
    note: "* Neobsahuje cestovné (8 Kč/km z Prahy nebo Ostravy). Možnost individuální úpravy balíčků na míru.",
    cta: "Poptat balíček"
  },
  contact: {
    label: "Rezervujte si termín",
    title: "Pojďme tvořit spolu",
    description: "Máte dotaz nebo chcete zjistit dostupnost ve váš den? Rád s vámi proberu detaily vaší svatby. Ozvěte se mi a společně vytvoříme něco nezapomenutelného.",
    email: "info@jakubminka.cz",
    phone: "+420 777 000 000",
    locations: "Praha, Střední Čechy, Vysočina, Jihočechy",
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
    description: "Zachycuji nejkrásnější příběhy vašeho života s úctou k emocím a přirozenosti. Působím v Praze, Středních Čechách, na Vysočině a v Jižních Čechách.",
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
    price: '25 000 Kč',
    features: ['12 hodin natáčení', '1 kameraman', '3-5 minutový film', 'dron v ceně']
  },
  {
    name: 'Premium',
    price: '30 000 Kč',
    recommended: true,
    features: ['12 hodin natáčení', '1 kameraman', '3-5 minutový film', '10-20 minutový dokument', 'dron v ceně']
  },
  {
    name: 'Exclusive',
    price: '38 000 Kč',
    features: ['12 hodin natáčení', '2 kameramani', '3-5 minutový film', '10-20 minutový dokument', 'dron v ceně']
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
    title: 'Terka & Pepa',
    location: 'Penzion u Farmáře',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Terka_Pepa_penzion-u-farmare.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/9wx1Beq_uqA',
    category: 'highlight'
  },
  {
    id: '3',
    title: 'Kristýna & Martin',
    location: 'Stodola Holašovice',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Snimek-obrazovky-2025-05-08-v-19.21.30-scaled.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/b6TIWjVYD4k',
    category: 'highlight'
  },
  {
    id: '4',
    title: 'Jana & Žiga',
    location: 'Penzion Na Kmíně',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Jana_Ziga_penzion_na_kmine.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/35DuSZauEjY',
    category: 'highlight'
  },
  {
    id: '5',
    title: 'Nikolka & Pepa',
    location: 'Pesort Klášter Želiv',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Nikolka_Pepa_Resort_Zeliv.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/t_1xysZwdqE',
    category: 'highlight'
  },
   {
    id: '6',
    title: 'Tomáš & Radka',
    location: 'Váňův statek',
    thumbnail: 'https://gfdymyfjycowdedllodd.supabase.co/storage/v1/object/public/media/Tomas_Radka.jpg?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtu.be/lg22S8ROi5o',
    category: 'highlight'
  }
];

export const FAQ_DATA = [
  { question: "Jak dlouho dopředu si máme rezervovat termín?", answer: "Svatební sezóna se plní rychle, proto doporučuji rezervaci 6-12 měsíců předem, zejména pro sobotní termíny v létě." },
  { question: "Jak funguje objednání?", answer: "Ideální je ozvat se prostřednictvím formuláře nebo emailu, případně zavolat. Po domluvě všeho potřebného následně uhradíte rezervační poplatek 3000 Kč (zaplacením zálohové faktury, která bude po odevzdání výstupů odečtena z celkové ceny balíčku). V tuto chvíli již s vámi počítám a můžeme probrat podrobnosti.
  { question: "Jaký balíček si máme zvolit?", answer: "V základní variantě na 12 hodin v 1 kameramanovi dostáváte svatební klip o délce až 5 minut. Většinou postačí na většině svateb. V rozšířené variantě nabízím mimo střih klipu i střih svatebního dokumentu, který shrne všechny momenty ze svatby. Jde o reportážní variantu videa, kde se objeví i záběry, které by se do klipu nedostaly a navíc se zde nezaměřuji pouze na novomanžele, ale také na ostatní svatební hosty, nejbližší rodinu a kamarády. V prémiové verzi přijedeme s kolegou ve 2 kameramanech. Natočíme celky i detaily a budeme i u momentů, které bychom v jednom kameramanovi nezvládli natočit. Hodí se například pro svatby, kdy se přejíždí a je potřeba být na 2 místech najednou (např. při přípravách). Nebo pro zachycení kompletních církevních obřadů tak, aby se daly prostříhat." },
  { question: "Je možné se poznat předem?", answer: "Osobní setkání narozdíl od předsvatebního focení většinou není z mé strany potřeba. Pokud mi pošlete harmonogram svatby a upřesníme si podrobnosti po telefon nebo v emailu, více již nepotřebuji vědět a vy tak máte o jednu starost s dodavateli méně 🙂 Pokud na tom budete trvat, potkat se můžeme osobně v místě mého bydliště, jinak se s vámi případně rád spojím v online prostředí (Whatsapp, Facetime). Jinak budu rád, pokud si budeme tykat – všechno bude hned jednodušší 🙂" },
  { question: "Dojedeš za námi kamkoliv?", answer: "Původem jsem z Pelhřimova (Vysočina), ale bydlím u Vlašimi. Doprava se tak počítá buď z Pelhřimova nebo z Vlašimi (podle toho na jakou stranu se svatba koná). Dojedu za vámi kamkoliv po celé České republice, dokonce i do zahraničí. Jsem zvyklý pravidelně cestovat na dlouhé vzdálenosti a ročně najezdím v autě přes 65 tis. km. Pokud jsme od sebe vice vzdáleni a cestovat v den svatby by bylo náročné, ocením zajištění ubytování do druhého dne, abychom byli obě strany více v klidu (tedy včetně uhrazení všech nákladů na nocleh) 🙂" },
  { question: "Kdy obdržíme hotové video?", answer: "Zpracování videa je precizní proces. Highlight filmy odevzdávám standardně do 1-2 týdnů v závislosti na sezóně. Pokud je součástí i dokument, odevzdání bude do 4 týdnů." },
  { question: "Natáčíte i s dronem?", answer: "Ano, pokud to počasí a lokalita dovolují, záběry z dronu jsou součástí bvšech balíčků." },
  { question: "Kolik stojí doprava??", answer: "Doprava v okruhu do 50 km od místa mého bydliště je již zahrnuta v ceně. Pokud bude celková vzdálenost větší než 100 km za celou cestu tam i zpět, účtuji si 10 Kč bez DPH za každý ujetý kilometr." }
];

export const OTHER_PROJECTS = [
  { name: "Minka studio", brand: "studio", sub: "Fotograf a kameraman", url: "https://m-studio.cz", letter: "M" },
  { name: "Minka aerials", brand: "aerials", sub: "Fotografie a video dronem", url: "https://m-aerials.cz", letter: "M" }
];

export const LEGAL_CONTENT = {
  vop: {
    title: 'Všeobecné obchodní podmínky',
    sections: [
      { h: '1. Úvodní ustanovení', p: 'Tyto VOP upravují vztah mezi kameramanem Jakubem Minkou a klientem. Smluvní vztah vzniká potvrzením rezervace a zaplacením rezervačního poplatku.' },
      { h: '2. Rezervace a platba', p: 'Rezervační poplatek: Pro závaznou rezervaci termínu hradí klient poplatek ve výši 30 % z celkové ceny. Tento poplatek je nevratný.', p: 'Doplatek: Zbývajících 70 % z ceny je splatných po odevzdání hotového díla (převodem na účet).', }
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
