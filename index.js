import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your question: ", async (userInput) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userInput,
    });
    console.log(response.text);
  } catch (error) {
    console.error("Error generating content:", error);
  } finally {
    rl.close();
  }
});
