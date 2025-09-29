const express = require("express");
const router = express.Router();

// user controllers

const { register, login, checkUser } = require("../controller/userController");

// registration routes
router.post("/register", register);
// login routes

router.post("/login", login);

// check user
router.get("/check", checkUser);

module.exports = router;
