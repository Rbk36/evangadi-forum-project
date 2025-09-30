require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5500;

const dbConn = require("./db/dbconfig");
// user routes middleware
const userRoutes = require("./routes/userRoute");

// question route
const questionRoutes = require("./routes/questionRoute");

// json middleware to get json data
app.use(express.json());
app.use("/api/users", userRoutes);

// auth middleware
const authMiddleware = require("./middleware/authMiddleware");
// question routes middleware
app.use("/api/questions", authMiddleware, questionRoutes);
// answer routes middleware

async function start() {
  try {
    const result = await dbConn.execute("select 'test'");
    await app.listen(PORT);
    console.log("database connection established successfully");
    console.log(`Listening to : ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
