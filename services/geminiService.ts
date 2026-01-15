
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SITE_TEXTS, PRICING_PACKAGES } from "../constants";

/**
 * Communicates with the Gemini model to provide wedding-related assistance
 */
export async function getWeddingStylistResponse(prompt: string, history: ChatMessage[]): Promise<string> {
  // Always initialize with the direct process.env.API_KEY reference as per strict guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const systemInstruction = `
      Jsi profesionální a milý asistent svatebního kameramana Jakuba Minky. 
      Tvé informace o Jakubovi: ${SITE_TEXTS.about.p1} ${SITE_TEXTS.about.p2}
      Nabízené balíčky: ${PRICING_PACKAGES.map(p => `${p.name} za ${p.price}`).join(', ')}.
      Lokality: ${SITE_TEXTS.contact.locations}.
      
      Odpovídej v češtině, stručně a pomáhej klientům s dotazy na služby.
    `;

    // Map conversation history to Gemini parts format
    const contents = history.map(msg => ({
      role: (msg.role === 'assistant' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: msg.content }]
    }));

    // Append the latest user query
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

    // Access the text property directly (do not call as a function)
    return response.text || "Zkuste prosím dotaz zformulovat jinak.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Omlouvám se, došlo k technické chybě. Pro rychlou odpověď mě prosím kontaktujte přímo.";
  }
}
