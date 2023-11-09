//  извеждаме настройките за бутоните и подновяване на играта
module.exports = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "Попълни адрес", callback_data: "/address" }, { text: "Изпрати данни", callback_data: "/data" }, { text: "Референтен номер", callback_data: "/ref" }],
            ],
        }),
    },
    againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "Пробвай пак?", callback_data: "/again" }],
            ],
        }),
    },

}