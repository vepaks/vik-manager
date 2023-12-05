const Address = require("../models/Address");

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
      const newAddress = new Address(req.body);
      const savedAddress = await newAddress.save();
      return res.json(savedAddress);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Няма достъп до данни!" });
    }
  }
}

module.exports = new DataControllers();
