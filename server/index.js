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



// client server
const startServer = () => {
  try {
    mongoose.connect(`${dbUrl}`);
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:${PORT}..`);
    });
  } catch (e) {
    console.log(e);
  }
};

// telegram-bot server
const checker = async (chatId) => {
  const bd = await Address.findOne({ chatId: chatId }).exec();
  return bd;
};

//
const addressModelObject = {
  ref: "",
  address: "",
  data: [],
};

const startBot = async () => {
  bot.setMyCommands([
    { command: "/ref", description: "Добави референция" },
    { command: "/address", description: "Редактирай адрес" },
    { command: "/data", description: "Попъни данни" },
  ]);

  bot.on("text", async (msg) => {
    try {
      if (msg.text == "/start") {
        await bot.sendMessage(
          msg.chat.id,
          `Здравейте. Моля натиснете върху REF NUMBER, за да попълните реферетният номер, който сте получили.`,
          {
            reply_markup: {
              keyboard: [["REF NUMBER"]],
              resize_keyboard: true,
            },
          },
        );
      } else if (msg.text == "REF NUMBER") {
        if (msg.text == "REF NUMBER") {
          bot.on("message", async (msg) => {
            addressModelObject.ref = msg.text;
            console.log(addressModelObject);
            await bot.sendMessage(
              msg.chat.id,
              `Благодаря, а сега натиснете ADDRESS, за да попълните адреса си.`,
              {
                reply_markup: {
                  keyboard: [["ADDRESS:"]],
                  resize_keyboard: true,
                },
              },
            );
            bot.removeListener("message");
          });
        }
      } else if (msg.text == "ADDRESS:") {
        if (msg.text == "ADDRESS:") {
          bot.on("message", async (msg) => {
            const ref = addressModelObject.ref
            // const parentUser = await User.findOne({ _id: ref });
            addressModelObject.address = msg.text;
            console.log(msg.text);
            console.log(addressModelObject);
            await bot.sendMessage(
              msg.chat.id,
              `Благодаря, а сега натиснете DATA, за да попълните данните от водомера.`,
              {
                reply_markup: {
                  keyboard: [["DATA"]],
                  resize_keyboard: true,
                },
              },
            );
            bot.removeListener("message");
          });
        }
      } else if (msg.text == "DATA") {
        if (msg.text == "DATA") {
          bot.on("message", async (msg) => {
            addressModelObject.data.push(msg.text);
            await bot.sendMessage(
              msg.chat.id,
              `Натиснете SEND DATA, за да изпратите данните на ВиК служителя.`,
              {
                reply_markup: {
                  keyboard: [["SEND DATA"]],
                  resize_keyboard: true,
                },
              },
            );
            bot.removeListener("message");
          });
        }
      } else if (msg.text == "SEND DATA") {

        const { ref, address, data } = addressModelObject
        const currAddress = await Address.findOne({chatId: msg.chat.id})

        if (await (!currAddress)) {
          await Address.create({
            chatId: msg.chat.id,
            ref,
            address,
            data
          });
        }

        await bot.sendMessage(
          msg.chat.id,
          `Благодаря! За нови данни просто изпратете съобщение и натиснете SEND NEW DATA.`,
          {
            reply_markup: {
              remove_keyboard: true
            },
          },
        );

        bot.on("message", async (msg) => {
          const currAddress = await Address.findOne({chatId: msg.chat.id})
          const text = msg.text
          currAddress.data.push(text)
          await currAddress.save()
        })

      }
    } catch (error) {
      console.log(error);
    }
  });
};

startServer();
startBot();
