import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

// 🔐 вставь сюда свой токен
const token = "8134169678:AAEaWYTSHWMShY7D9_Z1DenpE71EQlqa0yI";

// создаём бота
const bot = new TelegramBot(token, { polling: true });

// 🟢 команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Привет, Али! ✌️ Напиши /users, чтобы я показал список пользователей."
  );
});

// 🔵 команда /users — делает GET запрос
bot.onText(/\/users/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    // Запрашиваем данные с API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Перебираем пользователей и создаём текст
    let text = "📋 Список пользователей:\n\n";
    response.data.forEach((user) => {
      text += `👤 ${user.name}\n📧 ${user.email}\n🏙️ ${user.address.city}\n\n`;
    });

    // Отправляем пользователю
    bot.sendMessage(chatId, text);
  } catch (error) {
    console.error("Ошибка:", error);
    bot.sendMessage(chatId, "❌ Произошла ошибка при получении пользователей.");
  }
});
