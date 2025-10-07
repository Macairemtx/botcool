import { APP_URL, PORT, TELEGRAM_TOKEN } from "./constants";
import express, { Application, Request, Response } from "express";
import { Telegraf, Context } from "telegraf";

const bot = new Telegraf<Context>(TELEGRAM_TOKEN);
const app: Application = express();

app.use(express.static("static"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

bot.command("start", (ctx: Context) => {
  return ctx.reply("Play Cool Frog!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            web_app: { url: `${APP_URL}/` },
          },
        ],
      ],
    },
  });
});

bot.launch();

export default app;
