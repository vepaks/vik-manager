const {model, Schema, ObjectId} = require('mongoose')

const Address = new Schema(
    {
        chatId: {type: String, required: true},
        address: {type: String},
        parent: {type: ObjectId, ref: 'User'},
        data: [{type: String}]
    }
)

module.exports = model('Address', Address)