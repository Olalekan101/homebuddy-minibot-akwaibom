import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });

export async function POST(req) {
  try {
    const update = await req.json();
    bot.processUpdate(update);

    bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;

      if (text === '/start') {
        // Send a welcome message when the user types /start
        bot.sendMessage(chatId, 'Welcome! How can I assist you today?');
      } else {
        // Respond to other messages
        bot.sendMessage(chatId, `You said: ${text}`);
      }
    });

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
