const Address = require("../models/Address");
const User = require("../models/User");

class DataControllers {
  async getData(req, res) {
    try {
      const addresses = await Address.find({ parent: req.user.id });
      // console.log(addresses);
      return res.json(addresses);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Няма достъп до данни!" });
    }
  }

  async getAllDataFromAddress(req, res) {
    try {
      const addressesDetails = await Address.find({ chatId: req.query.chatId });
      return res.json(addressesDetails);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Няма достъп до данни!" });
    }
  }

  async postData(req, res) {
    try {
      const { chatId, parentId, address, additionalData } = req.body;

      const refUser = await User.findOne({ _id: parentId });
      console.log(chatId, parentId, address, additionalData);

      const newAddress = new Address({
        chatId,
        parent: refUser._id,
        address,
        data: additionalData,

      });

      const savedAddress = await newAddress.save();
      const currAddress = await Address.findOne({ chatId: chatId });
      console.log(refUser.addresses);
      if (currAddress) {
        refUser.addresses.push(currAddress._id);
        await refUser.save();
      }
      currAddress.data.push(additionalData);
      await currAddress.save();

      return res.json(savedAddress);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Няма достъп до данни!" });
    }
  }
}

module.exports = new DataControllers();
