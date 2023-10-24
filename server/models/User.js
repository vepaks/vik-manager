const {Schema,model, ObjectId} = require('mongoose')

const User = new Schema( {
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    diskSpace: {type: String, default: 1024**3*10},
    userSpace: {type: String, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId, ref: 'File'}],
})

module.exports = model ('User', User)