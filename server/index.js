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

const obj = {
  ref: "",
  address: "",
  data: []
}

const recordRef = async (chatId) => {
  await bot.sendMessage(chatId, "Въведи референтен номер");
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

            obj.ref = msg.text
            console.log(msg.text);
            console.log(obj);

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

            obj.address = msg.text
            console.log(msg.text);
            console.log(obj);

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

            obj.data.push(msg.text)
            console.log(msg.text);
            console.log(obj);

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
      }  else if (msg.text == "SEND DATA") {

        await bot.sendMessage(msg.chat.id, `Благодаря! За нови данни просто изпратете съобщение.`,
            {

              reply_markup: {

                remove_keyboard: true

              }

            });


          bot.on("message", async (msg) => {

            obj.data.push(msg.text)
            console.log(msg.text);
            console.log(obj);


          });

      }
    } catch (error) {
      console.log(error);
    }
  });

  function isUserAllowed(userId) {
    // Implement your logic to determine if the user is allowed
    // You might check against a list of allowed users or other criteria
    // Return true if allowed, false otherwise
    return false;
  }


  // bot.on("message", async (msg) => {
  //   const text = msg.text;
  //   const chatId = msg.chat.id;
  //
  //   if (!(await checker(chatId))) {
  //     await Address.create({ chatId: chatId });
  //   }
  //
  //   if (text === "/start") {
  //     await bot.sendMessage(msg.chat.id, `Меню бота`, {
  //       reply_markup: {
  //         keyboard: [
  //           ["⭐️ Картинка", { text: "Видео" }],
  //           ["⭐️ Аудио", "⭐️ Голосовое сообщение"],
  //           [{ text: "⭐️ Контакт", request_contact: true }, "⭐️ Геолокация"],
  //           ["❌ Закрыть меню"],
  //         ],
  //         resize_keyboard: true,
  //       },
  //     });
  //   }
  // });

  //
  // bot.on("text", async (msg) => {
  //  const chatId = msg.chat.id;
  //
  //   if (msg.text == "⭐️ Видео") {
  //     bot.sendMessage(chatId, `Въведете номера`, {
  //       reply_to_message_id: msg.message_id,
  //     });
  //   } else if (msg.text == "⭐️ Аудио") {
  //     bot.sendMessage(chatId, `Въведете адрес`, {
  //       reply_to_message_id: msg.message_id,
  //     });
  //   }
  //
  //   bot.on("text", async (msg) => {
  //     console.log(msg.text);
  //     console.log("ref works");
  //     //     тук е фунцията за взимане на референтния номер и закачането му към Address model
  //   });
  //
  //
  //
  //
  // });
  //
  // bot.on("callback_query", async (msg) => {
  //   //  Извличаме необходимата информация от телеграм
  //   const chatId = msg.message.chat.id;
  //   const data = msg.data;
  //   const username = msg.from.first_name;
  //
  //   if (data == "/ref") {
  //     console.log(chatId, data, username);
  //     bot.sendMessage(chatId, `Въведете номера`);
  //     bot.on("text", async (msg) => {
  //       bot.sendMessage(
  //         chatId,
  //         `Благодаря, а сега попълнете адрес`,
  //         gameOptions,
  //       );
  //       console.log(msg.text);
  //       console.log("ref works");
  //       //     тук е фунцията за взимане на референтния номер и закачането му към Address model
  //     });
  //   }
  //
  //   if (data == "/address") {
  //     console.log(chatId, data, username);
  //
  //     bot.on("text", async (msg) => {
  //       console.log(msg.text);
  //       console.log("address works");
  //       //     тук е фунцията за взимане и попълване на адреса в Address model
  //     });
  //   }
  //
  //   if (data == "/data") {
  //     console.log(chatId, data, username);
  //
  //     bot.on("text", async (msg) => {
  //       console.log(msg.text);
  //       console.log("data works");
  //       //     тук е фунцията за взимане и попълване на данните от водомерите и пушването им в Address model
  //     });
  //   }
  // });
};

start();
startBot();
