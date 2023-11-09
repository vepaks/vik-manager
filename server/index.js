const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const { gameOptions, againOptions } = require("./config/botConfig");
const Address = require("../server/models/Address");
const User = require("../server/models/User");

// app server
const app = express();
const PORT = config.get("serverPort");
const dbUrl = config.get("DB_URL");
const corsMiddleWare = require("./middleware/cors.middleware");

const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");

//Telegram server
// създаваме променлива за работа с API
const TelegramApi = require("node-telegram-bot-api");
const File = require("./models/File");
//  от BotFather взимаме токен за работа с бота
const token = "6715586490:AAFMAEPoyNhPuq5hV1kqJqpVzsG5vZY-Ee4";
// създаваме нов клас и заваме настройки
const bot = new TelegramApi(token, { polling: true });

app.use(corsMiddleWare);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = () => {
  try {
    mongoose.connect(`${dbUrl}`);
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:${PORT}..`);
    });
  } catch (e) {
    console.log(e);
  }
};

const checker = async (chatId) => {
  const bd = await Address.findOne({ chatId: chatId }).exec();
  return bd;
};


const recordRef = async (chatId) => {

  await bot.sendMessage(
      chatId,
      "Въведи референтен номер",
  );
};



const startBot = async () => {
  bot.setMyCommands([
    { command: "/ref", description: "Добави референция" },
    { command: "/address", description: "Редактирай адрес" },
    { command: "/data", description: "Попъни данни" },
  ]);

  bot.on("message", async (msg) => {

    const text = msg.text;
    const chatId = msg.chat.id;


    if (!(await checker(chatId))) {
      await Address.create({ chatId: chatId, });
    }

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/385/a4b/385a4bf5-3feb-3008-be6e-1074767a1f3d/7.webp",
      );
      return bot.sendMessage(chatId, `Моля първо въведете референтен номер!`, gameOptions);
    }

    // if (text === "/ref") {
    //   recordRef(chatId);
    // }

    if (text === "/data") {
      await bot.sendSticker(
          chatId,
          "https://tlgrm.eu/_/stickers/385/a4b/385a4bf5-3feb-3008-be6e-1074767a1f3d/7.webp",
      );
      return bot.sendMessage(chatId, `Моля първо въведете референтен номер!`);
    }

  });


  bot.on("callback_query", async (msg) => {
    //  Извличаме необходимата информация от телеграм
    const chatId = msg.message.chat.id;
    const data = msg.data;
    const username = msg.from.first_name;
    if (data == "/ref") {
      console.log(chatId, data, username)
      bot.sendMessage(chatId, `Въведете номера`);
      bot.on('text', async msg => {
        bot.sendMessage(chatId, `Благодаря, а сега попълнете адрес`, gameOptions);
        console.log(msg.text)
        console.log('ref works')
      //     тук е фунцията за взимане на референтния номер и закачането му към Address model
      })
    }

    if (data == "/address") {
      console.log(chatId, data, username)

      bot.on('text', async msg => {
        console.log(msg.text)
        console.log('address works')
        //     тук е фунцията за взимане и попълване на адреса в Address model
      })
    }


    if (data == "/data") {
      console.log(chatId, data, username)

      bot.on('text', async msg => {
        console.log(msg.text)
        console.log("data works")
        //     тук е фунцията за взимане и попълване на данните от водомерите и пушването им в Address model
      })
    }


  });





};

start();
startBot();
