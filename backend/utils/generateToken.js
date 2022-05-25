//Done by Merna
// Tokenization 
const jwt = require("jsonwebtoken");
// This will send the user id from the database to the UI in form of encrypted token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;