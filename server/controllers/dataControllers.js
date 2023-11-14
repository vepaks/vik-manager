const Address = require("../models/Address");

class DataControllers {
    async getData (req, res) {
        try {
            const addresses = await Address.find({parent: req.user.id})
            return res.json(addresses)
            console.log(addresses)
        } catch (e) {
            console.log(e)
            return res
                .status(500)
                .json({ message: "Няма достъп до данни!" });
        }
    }
}

module.exports = new DataControllers()