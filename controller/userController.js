const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const dbConn = require("../db/dbConfig");

// register user
async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!email || !password || !firstname || !lastname || !username) {
    return res
      .status(400)
      .json({ msg: "Please provide all required information" });
  }

  try {
    const [user] = await dbConn.query(
      "SELECT username,userid from users where username=? or email=?",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "User already registered" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password must be atleast 8 characters" });
    }

    // hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await dbConn.query(
      "INSERT INTO users(username, firstname, lastname, email, password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );
    return res.status(201).json({ msg: "user created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
}

// const login = (req, res) => {
//   res.send("register user");
// };

// user login

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide all required information" });
  }
}
const checkUser = (req, res) => {
  res.send("register user");
};

module.exports = { register, login, checkUser };
