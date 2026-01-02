import { GoogleGenAI } from "@google/genai";

// Initialization must use process.env.API_KEY directly as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askFootAssistant = async (prompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Du er en venlig og professionel assistent for Klinik Sund Fod, en fodklinik på Frederiksberg ejet af Lisbeth. 
        Din opgave er at besvare spørgsmål om fodpleje, behandlinger og generelle råd om fødder.
        Klinikken tilbyder: Almindelig fodbehandling, diabetesbehandling, bøjlebehandling (nedgroede negle), sportsindlæg og paraffinbehandling.
        Svar altid på dansk. Vær høflig, kortfattet og mind brugeren om at de kan booke en tid direkte på siden for en professionel vurdering. 
        Giv aldrig endelige medicinske diagnoser, men rådgiv om hvornår man bør søge professionel hjælp.`,
        temperature: 0.7,
        // Removed maxOutputTokens as it is optional and recommended to avoid if not required
      },
    });

    // Access the .text property directly on the response object
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Beklager, jeg kan ikke svare lige nu. Prøv venligst igen senere eller kontakt klinikken direkte.";
  }
};