const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  diskSpace: { type: String, default: 1024 ** 3 * 10 },
  usedSpace: { type: String, default: 0 },
  avatar: { type: String },
  chatId: {type: String, default:""},
  files: [{ type: ObjectId, ref: "File" }],
  childs: [{ type: ObjectId, ref: "File" }],
  addresses: [{ type: ObjectId, ref: "Address" }],
});

module.exports = model("User", User);
