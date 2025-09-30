const mysql = require("mysql2");

const db = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

db.execute("select 'test'", (err, result) => {
  if (err) console.log(err.message);
  else console.log(result);
});

module.exports = db.promise();
