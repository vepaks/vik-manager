const Router = require("express");
const router = new Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");
router.post(
  "/registration",
  [
    check("email", "Неправилен email").isEmail(),
    check(
      "password",
      "Паролата трябва да е по-дълга от 3 символа и не повече от 12",
    ).isLength({
      min: 3,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Некоректна регистрация", errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `Потребител с email ${email} вече съществува.` });
      }
      const hashPass = await bcrypt.hash(password, 6);
      const user = new User({ email, password: hashPass });
      await user.save();
      return res.json({ message: `Потребителят е регистриран` });
    } catch (e) {
      console.log(e);
    }
  },
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Не съществува такъв потребител" });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
        return res
            .status(400)
            .json({ message: "Невалидна парола" });
    }
    const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})

    return res.json({
      token,
     user: {
        id: user.id,
       email: user.email,
       diskSpace: user.diskSpace,
       usedSpace: user.usedSpace,
       avatar: user.avatar
     }
    })



  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
