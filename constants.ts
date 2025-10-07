// constants.ts
import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3000;
export const TELEGRAM_TOKEN: string = process.env.TELEGRAM_TOKEN || "";
export const APP_URL: string = process.env.APP_URL || "https://tapbot.onrender.com";
