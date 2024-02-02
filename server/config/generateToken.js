const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "rasel", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
