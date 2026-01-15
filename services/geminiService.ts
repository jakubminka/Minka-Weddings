
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SITE_TEXTS, PRICING_PACKAGES, FAQ_DATA } from "../constants";

export async function getWeddingStylistResponse(prompt: string, history: ChatMessage[]): Promise<string> {
  // Přístup přes process.env.API_KEY, který definujeme ve vite.config.ts
  const apiKey = (process.env as any).API_KEY;
  
  if (!apiKey) {
    console.warn("Gemini API Key missing in environment.");
    return "Omlouvám se, můj svatební rádce je momentálně offline. Kontaktujte prosím Jakuba přímo na emailu.";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const systemInstruction = `
      Jsi profesionální a milý asistent svatebního kameramana Jakuba Minky. 
      Tvé informace o Jakubovi: ${SITE_TEXTS.about.p1} ${SITE_TEXTS.about.p2}
      Nabízené balíčky: ${PRICING_PACKAGES.map(p => `${p.name} za ${p.price}`).join(', ')}.
      Lokality: ${SITE_TEXTS.contact.locations}.
      
      Odpovídej v češtině, stručně a pomáhej klientům s dotazy na služby.
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

    return response.text || "Zkuste prosím dotaz zformulovat jinak.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Omlouvám se, došlo k technické chybě. Napište prosím Jakubovi přímo.";
  }
}
