const {model, Schema, ObjectId} = require('mongoose')

const Address = new Schema(
    {
        chatId: {type: String, required: true},
        parent: { type: ObjectId, ref: "User" },
        address: {type: String},
        data: [{type: String}]
    }
)

module.exports = model('Address', Address)