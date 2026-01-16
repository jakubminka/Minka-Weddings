
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
      { id: 'couples', value: 'desítky', label: 'svateb' },
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
    description: "Zachycuji svatební příběhy s důrazem na emoce a přirozenost. Působím v Praze, ve Středních Čechách, na Vysočině a v Jižních Čechách.",
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
  { question: "Natáčíte i s dronem?", answer: "Ano, pokud to počasí a lokalita dovolují, záběry z dronu jsou součástí všech balíčků." },
 { question: "Je možné se poznat předem?", answer: "Osobní setkání narozdíl od předsvatebního focení většinou není z mé strany potřeba. Pokud mi pošlete harmonogram svatby a upřesníme si podrobnosti po telefonu nebo v emailu, více již nepotřebuji vědět a vy tak máte o jednu starost s dodavateli méně 🙂 Pokud na tom budete trvat, potkat se můžeme osobně v místě mého bydliště, jinak se s vámi případně rád spojím v online prostředí (Whatsapp, Facetime). Jinak budu rád, pokud si budeme tykat – všechno bude hned jednodušší 🙂" },
  { question: "Kdy obdržíme hotové video?", answer: "Zpracování videa je precizní proces. Svatební klipy odevzdávám standardně do 2-4 týdnů v závislosti na sezóně a delší dokument do cca. 4 týdnů." },
  { question: "Dojedeš za námi kamkoliv?", answer: "Původem jsem z Pelhřimova (Vysočina), ale bydlím u Vlašimi. Doprava se tak počítá buď z Pelhřimova nebo z Vlašimi (podle toho na jakou stranu se svatba koná). Dojedu za vámi kamkoliv po celé České republice, dokonce i do zahraničí. Jsem zvyklý pravidelně cestovat na dlouhé vzdálenosti a ročně najezdím v autě přes 65 tis. km. Pokud jsme od sebe vice vzdáleni a cestovat v den svatby by bylo náročné, ocením zajištění ubytování do druhého dne, abychom byli obě strany více v klidu (tedy včetně uhrazení všech nákladů na nocleh) 🙂" },
{ question: "Kolik stojí doprava?", answer: "Doprava v okruhu do 50 km od místa mého bydliště je již zahrnuta v ceně. Pokud bude celková vzdálenost větší než 100 km za celou cestu tam i zpět, účtuji si 10 Kč za každý ujetý kilometr." }

];

export const OTHER_PROJECTS = [
  { name: "Minka studio", brand: "studio", sub: "Fotograf a kameraman", url: "https://www.minka-studio.cz", letter: "M" },
  { name: "Minka aerials", brand: "aerials", sub: "Fotografie a video dronem", url: "https://fotovideodronem.cz", letter: "M" }
];

export const LEGAL_CONTENT = {
  vop: {
    title: 'Všeobecné obchodní podmínky',
    sections: [
      { 
        h: '1. Úvodní ustanovení', 
        items: [
          { type: 'ul', bullets: ['Tyto VOP upravují vztah mezi kameramanem Jakubem Minkou se sídlem Menhartova 1529, 39301 Pelhřimov, IČO: 03942074, DIČ: CZ9410041553 a klientem. Smluvní vztah vzniká potvrzením rezervace a zaplacením rezervačního poplatku.' ]}
        ]
      },
      { 
        h: '2. Rezervace a platba', 
        items: [
          { type: 'ul', bullets: [
            'Rezervační poplatek: Pro závaznou rezervaci termínu hradí klient poplatek ve výši 30 % z celkové ceny. Tento poplatek je nevratný.',
            'Doplatek: Zbývajících 70 % z ceny je splatných po odevzdání hotového díla (převodem na účet).',
            'Přesčasy: Pokud se natáčení protáhne nad rámec sjednaného balíčku, klient hradí každou další započatou hodinu dle aktuálního ceníku. Překročení délky natáčení do 60 minut je tolerováno a není účtováno.'
          ]}
        ]
      },
      {
        h: '3. Součinnost a technické podmínky',
        items: [
          { type: 'ul', bullets: [
            'Strava: Klient zajistí kameramanovi stravu a pitný režim po celou dobu konání svatby (vzhledem k výhradně celodenním balíčkům).',
            'Dron: Natáčení z dronu je doplňková služba. Kameraman si vyhrazuje právo nevzlétnout v případě nepříznivého počasí (silný vítr, déšť) nebo z důvodu legislativních omezení (bezletové zóny, bezpečnost osob). Omezení letu dronu není důvodem ke slevě z celkové ceny.',
            'Ochrana techniky: Klient odpovídá za škody na technice kameramana způsobené hosty nebo provozem svatby (např. převržení stativu, polití techniky). V případě poškození je klient povinen uhradit náklady na opravu či pořízení nového vybavení.'
          ]}
        ]
      },
      {
        h: '4. Revize a úpravy:',
        items: [
          { type: 'p', text: 'V ceně balíčku je zahrnuto jedno kolo revizí.' },
          { type: 'ul', bullets: [
            'Klient má právo po obdržení hotového videa (hlavního klipu i dokumentu) zaslat seznam konkrétních připomínek a požadavků na úpravy, a to najednou, nejpozději do 7 dnů od doručení odkazu.',
            'Tyto úpravy budou provedeny bezplatně v nejbližším možném termínu.',
            'Další kola revizí nebo úpravy nad rámec původního zadání jsou zpoplatněny částkou [např. 500–1 000] Kč za každou započatou hodinu práce kameramana.',
            'Revize se vztahují na věcné chyby nebo drobné úpravy (např. „vyměnit tento záběr za jiný“, „tato osoba tam nechce být“). Nevztahují se na kompletní změnu stylu střihu nebo kompletní výměnu hudby, pokud byla již dříve odsouhlasena nebo ponechána na umělecké svobodě kameramana.'
          ]}
        ]
      },
      {
        h: '5. Termíny a odevzdání díla',
        items: [
          { type: 'ul', bullets: [
            'Způsob dodání: Video je předáváno výhradně digitálně přes cloudové úložiště.',
            'Dodací lhůty: Standardně 2–4 týdny (hlavní klip), respektive 4 týdny (pokud balíček obsahuje i dokument). Lhůta se může prodloužit v případě nenadálých situací (nemoc, vyšší moc).',
            'Hudba: Kameraman využívá hudbu z vlastních licencovaných bank. Licence pro užití v rámci videí je již zahrnuta v ceně.'
          ]}
        ]
      },
      {
        h: '6. Archivace a surový materiál',
        items: [
          { type: 'ul', bullets: [
            'Hotové video: Kameraman uchovává finální vyexportované video po neomezenou dobu.',
            'Surový materiál: Neupravené záběry jsou archivovány po dobu 2 let.',
            'Poskytnutí surových záběrů: Standardně se surový materiál neodevzdává. Jeho poskytnutí je možné pouze na základě předchozí dohody a může být zpoplatněno dle aktuálního ceníku.'
          ]}
        ]
      },
      {
        h: '7. Autorská práva',
        items: [
          { type: 'ul', bullets: [
            'Klient souhlasí s autorským stylem kameramana. Kameraman si vyhrazuje právo použít ukázky z díla pro svou prezentaci, pokud není dohodnuto jinak.'
          ]}
        ]
      },
      {
        h: '8. Odstoupení od smlouvy',
        items: [
          { type: 'ul', bullets: [
            'Při zrušení termínu ze strany klienta rezervační poplatek propadá. Při nemožnosti plnění ze strany kameramana se kameraman pokusí zajistit náhradu nebo vrátí poplatek.'
          ]}
        ]
      }
    ]
  },
  gdpr: {
    title: 'Informace o zpracování osobních údajů (GDPR)',
    sections: [
      { 
        h: '1. Správce osobních údajů', 
        items: [
          { type: 'p', text: 'Správcem osobních údajů je Jakub Minka se sídlem Menhartova 1529, 39301 Pelhřimov, IČO: 03942074, DIČ: CZ9410041553 (dále jen „správce").' },
        ]
      },
      {
        h: '2. Jaké údaje zpracovávám?',
        items: [
          { type: 'p', text: 'Zpracovávám pouze údaje nezbytné pro plnění smlouvy a poskytování služeb:' },
          { type: 'ul', bullets: [
            'Identifikační údaje: Jména a příjmení novomanželů.',
            'Kontaktní údaje: E-mail, telefonní číslo.',
            'Obrazový materiál: Videozáznamy zachycující novomanžele a svatební hosty.'
          ]}
        ]
      },
      {
        h: '3. Účel zpracování',
        items: [
          { type: 'p', text: 'Vaše údaje zpracovávám za účelem:' },
          { type: 'ul', bullets: [
            '1. Plnění smlouvy: Komunikace, realizace natáčení a doručení hotového díla.',
            '2. Propagace: Zveřejnění ukázek práce na mém webu nebo sociálních sítích (v souladu s uměleckou licencí).'
          ]}
        ]
      },
      {
        h: '4. Doba uchování údajů',
        items: [
          { type: 'ul', bullets: [
            'Surové videozáznamy: Uchovávám po dobu 2 let od termínu svatby pro potřeby případných úprav nebo ztráty (jak je uvedeno ve VOP).',
            'Hotové dílo: Uchovávám po neomezenou dobu jako součást svého digitálního archivu (pokud nepožádáte o smazání).'
          ]}
        ]
      },
      {
        h: '5. Kdo má k údajům přístup?',
        items: [
          { type: 'p', text: 'Vaše údaje jsou u mě v bezpečí. K jejich zpracování však využívám některé služby třetích stran, které splňují standardy GDPR:'},
          { type: 'ul', bullets: [
            'Cloudová úložiště: (např. Google Drive / OneDrive / WeTransfer) pro doručení videa.',
            'Externí střihači nebo kameramani: Pokud na zakázce spolupracuje další osoba (vázaná mlčenlivostí).'
          ]}
        ]
      },
      {
        h: '6. Práva klienta',
        items: [
          { type: 'p', text: 'Podle nařízení GDPR máte následující práva:'},
          { type: 'ul', bullets: [
            'Právo na přístup k vašim údajům a informaci, jak je zpracovávám.',
            'Právo na opravu nepřesných údajů.',
            'Právo na výmaz (tzv. „právo být zapomenut“), pokud již nejsou údaje potřeba pro plnění smlouvy nebo zákonné účely.',
             'Právo vznést námitku proti zpracování pro účely marketingu.'
          ]}
        ]
      },
       {
        h: '7. Ochrana soukromí svatebních hostů',
        items: [
          { type: 'p', text: 'Jako klient potvrzujete, že jste informovali své hosty o přítomnosti kameramana na svatbě. Záznamy jsou pořizovány pro vaše soukromé účely a pro mé umělecké účely (reference).'},

        ]
      }
    ]
  },
  cookies: {
    title: 'Informace o souborech Cookies',
    sections: [
      { h: 'Co jsou cookies?', items: [{ type: 'p', text: 'Cookies jsou malé textové soubory, které nám pomáhají analyzovat návštěvnost webu a zlepšovat jeho funkčnost.' }] }
    ]
  }
};
