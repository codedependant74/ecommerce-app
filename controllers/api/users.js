const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function create(req, res) {
  console.log(req.body);
  try {
    //* Add User to the database
    const user = await User.create(req.body);
    //* Create JWT token
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Check your credentials");
    res.json(createJWT(user));
  } catch (error) {
    console.log(error);
    res.status(400).json("Bad Credentials");
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  createJWT,
  checkToken,
};
