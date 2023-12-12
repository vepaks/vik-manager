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

      const newAddressData = req.body;

      if (!newAddressData.parentId || !newAddressData.address) {
        return res.status(400).json({ message: "Липсват данни" });
      }

      const parentUser = await User.findOne({ _id: newAddressData.parentId });

      if (!parentUser) {
        return res.status(400).json({ message: "Няма такъв потребител" });
      }
const existingAddress = await Address.findOne({ chatId: newAddressData.chatId });

  if (existingAddress) {
    existingAddress.data.push(newAddressData.additionalData);
  const updatedAddress = await existingAddress.save();
  return res.json(updatedAddress);
}

const newAddress = new Address({
  chatId: newAddressData.chatId,
  parent: parentUser._id,
  address: newAddressData.address,
  data: newAddressData.additionalData,
});

const savedAddress = await newAddress.save();

parentUser.addresses.push(savedAddress._id);
await parentUser.save();

return res.json(savedAddress);


    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Няма достъп до данни!" });
    }

  }


  async deleteAddress(req, res) {
    try {
      const { id } = req.params;

      const address = await Address.findOne({ _id: id });

      if (!address) {
        return res.status(404).json({ message: "No address found!" });
      }

      const parentUser = await User.findOne({ _id: address.parent });

      if (!parentUser) {
        return res.status(404).json({ message: "Parent User not found!" });
      }

      await Address.deleteOne({ _id: id });

      parentUser.addresses = parentUser.addresses.filter(addr => addr.toString() !== id);
      await parentUser.save();

      return res.json({ message: "Address deleted!" });

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Failed to delete address!" });
    }
  }

  async updateAddress(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const existingAddress = await Address.findOne({ _id: id });

      if (!existingAddress) {
        return res.status(404).json({ message: "Address not found!" });
      }

      existingAddress.address = updatedData.address || existingAddress.address;
      existingAddress.data = updatedData.additionalData || existingAddress.data;

      const updatedAddress = await existingAddress.save();

      return res.json(updatedAddress);

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Failed to update address!" });
    }
  }

}

module.exports = new DataControllers();
