
import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA, PRICING_PACKAGES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getWeddingStylistResponse = async (userMessage: string, history: {role: string, content: string}[]) => {
  try {
    const formattedHistory = history.map(h => `${h.role === 'user' ? 'Klient' : 'Asistent'}: ${h.content}`).join('\n');
    
    // Příprava znalostní báze pro AI
    const faqContext = FAQ_DATA.map(f => `Otázka: ${f.question}\nOdpověď: ${f.answer}`).join('\n\n');
    const pricingContext = PRICING_PACKAGES.map(p => `Balíček ${p.name}: Cena ${p.price}, obsahuje: ${p.features.join(', ')}`).join('\n');

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Jsi expertní digitální asistent svatebního kameramana Jakuba Minky. 
      Tvým úkolem je radit klientům s jejich svatbou a odpovídat na dotazy ohledně Jakubovy tvorby.
      
      HLAVNÍ REGIONY PŮSOBNOSTI:
      - Praha
      - Středočeský kraj
      - Vysočina
      - Jihočeský kraj
      (Jakub za klienty dojíždí, cestovné je 8 Kč/km).
      
      ZNALOSTI O JAKUBOVI:
      - Styl: Filmová přirozenost, emoce, žádné strojené pózy.
      - Technika: Natáčení v 4K, drony, profesionální záznam zvuku (sliby, proslovy).
      - Dodání: Teaser do 7 dnů, hlavní film do 4-8 týdnů.
      
      CENÍK:
      ${pricingContext}
      
      ČASTÉ DOTAZY (FAQ):
      ${faqContext}
      
      TVÉ ZÁSADY:
      1. Buď profesionální, lidský a elegantní.
      2. Pokud se klient ptá, zda natáčíš v jejich lokalitě (např. Budějovice, Jihlava, Benešov), potvrď, že v těchto krajích (Jižní Čechy, Vysočina, Střední Čechy) Jakub natáčí velmi často a rád.
      3. Pokud se klient ptá na obecné svatební rady, poraď mu z pohledu kameramana.
      4. Na dotazy o dostupnosti termínu odpověz, že je třeba vyplnit formulář níže.
      5. Mluv v češtině. Piš stručně a v odstavcích.
      
      Kontext předchozí konverzace:
      ${formattedHistory}
      
      Dotaz klienta: ${userMessage}`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Omlouvám se, ale momentálně nemohu odpovědět. Prosím, napište Jakubovi přímo přes formulář.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Omlouvám se, došlo k chybě. Zkuste to prosím za chvíli.";
  }
};
