
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SITE_TEXTS, PRICING_PACKAGES, FAQ_DATA } from "../constants";

export async function getWeddingStylistResponse(prompt: string, history: ChatMessage[]): Promise<string> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("Gemini API Key is missing. Check your environment variables.");
    return "Omlouvám se, můj svatební rádce je momentálně offline (chybí API klíč). Kontaktujte prosím Jakuba přímo.";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const systemInstruction = `
      Jsi asistent svatebního kameramana Jakuba Minky. Tvým úkolem je odpovídat na dotazy klientů přátelsky, profesionálně a s nadšením pro svatby.
      
      Informace o Jakubovi:
      ${SITE_TEXTS.about.p1}
      ${SITE_TEXTS.about.p2}
      
      Ceník:
      ${PRICING_PACKAGES.map(pkg => `- ${pkg.name}: ${pkg.price}. Obsahuje: ${pkg.features.join(', ')}`).join('\n')}
      
      FAQ:
      ${FAQ_DATA.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}
      
      Kontaktní údaje:
      Email: ${SITE_TEXTS.contact.email}
      Telefon: ${SITE_TEXTS.contact.phone}
      Lokality: ${SITE_TEXTS.contact.locations}
      
      Odpovídej stručně, lidsky a jasně v češtině. Pokud něco nevíš, odkaž klienta na kontaktní formulář nebo email.
    `;

    const contents = history.map(msg => ({
      role: (msg.role === 'assistant' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: msg.content }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Omlouvám se, ale momentálně nejsem schopen odpovědět. Zkuste to prosím později.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Omlouvám se, nastala chyba při komunikaci s mým svatebním rádcem. Prosím, napište Jakubovi přímo na email info@jakubminka.cz.";
  }
}
