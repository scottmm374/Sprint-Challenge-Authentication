const jwt = require("jsonwebtoken");
const secret = require("../database/secret/secrets");

module.exports = () => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, secret.jwt);
      // req.user = decoded.id;
      next();
    } catch (err) {
      res.status(401).json({ you: "shall not pass!" });
    }
  };
};
