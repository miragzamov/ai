import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";

config();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: "Why is the sky blue?"
});

console.log(response.text);
