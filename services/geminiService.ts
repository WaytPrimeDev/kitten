
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKittenAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are an expert feline consultant for "Arlen Cat", a premium Scottish Fold and Scottish Straight cattery. 
        Your goal is to help potential owners find their perfect kitten and provide expert advice on the breed's characteristics, 
        health, and care. Be polite, professional, and warm. 
        Focus on the benefits of Scottish Folds (sweet nature, owl-like look) and Straights (robust health, elegant profile).
        If the user asks for available kittens, mention we have Silver Tabby, Blue Point, and Cream White colors.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a little trouble thinking right now. Please try again or contact us directly!";
  }
};
