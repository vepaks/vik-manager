const {model, Schema, ObjectId} = require('mongoose')
const { format } = require('date-fns');

const Address = new Schema(
    {
        chatId: {type: String, required: true},
        parent: { type: ObjectId, ref: "User" },
        address: {type: String},
        data: [{type: String}],
        date: {
            type: String,
            default: format(new Date(), 'dd.MM.yyyy')
        }
    }
)

module.exports = model('Address', Address)