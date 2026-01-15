
import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'vop' | 'gdpr' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const content = {
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
          p: 'Osobní údaje v podobě surových záběrů uchováváme po dobu 12 měsíců pro případné reklamace nebo úpravy. Hotové video uchováváme v archivu trvale jako součást našeho portfolia (pokud není dohodnuto jinak).'
        }
      ]
    }
  };

  const active = content[type];

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mb-10">
          <span className="text-ochre font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Právní informace</span>
          <h2 className="text-3xl md:text-4xl font-bold serif-font text-stone-900">{active.title}</h2>
        </div>

        <div className="space-y-8">
          {active.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-bold text-stone-900 mb-3">{s.h}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-ochre transition-all"
          >
            Zavřít
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
