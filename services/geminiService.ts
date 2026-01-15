
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SITE_TEXTS, PRICING_PACKAGES, FAQ_DATA } from "../constants";

/**
 * Service to handle communication with the Gemini API for the Wedding Stylist chatbot.
 * It provides context about Jakub Minka's services to help answer user queries.
 */
export async function getWeddingStylistResponse(prompt: string, history: ChatMessage[]): Promise<string> {
  // Always initialize the Gemini client right before use to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Construct the system instruction with relevant business information for grounding.
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

    // Map conversation history to the format required by the Google GenAI SDK.
    const contents = history.map(msg => ({
      role: (msg.role === 'assistant' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: msg.content }]
    }));

    // Add the current user's prompt as the final part of the conversation.
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    // Query the Gemini 3 Flash model for a fast and efficient text response.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the .text property directly to retrieve the generated string.
    return response.text || "Omlouvám se, ale momentálně nejsem schopen odpovědět. Zkuste to prosím později.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Omlouvám se, nastala chyba při komunikaci s mým svatebním rádcem. Prosím, napište Jakubovi přímo na email info@jakubminka.cz.";
  }
}
