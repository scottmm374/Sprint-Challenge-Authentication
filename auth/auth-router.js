const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userMod = require("./model/auth-model");
// const protected = require("./authenticate-middleware");
const secret = require("../database/secret/secrets");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  try {
    const user = await userMod.addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log("reg", err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userMod.findById({ username }).first();
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username
        },
        secret.jwt,
        { expiresIn: "2d" }
      );
      res.status(200).json({ token, message: `Welcome ${user.username}` });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    console.log("login", err);
  }
});

module.exports = router;
