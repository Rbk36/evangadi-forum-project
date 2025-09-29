const mysql = require("mysql2");

const db = mysql.createPool({
  user: "evangadi-admin",
  password: "1234",
  host: "localhost",
  database: "evangadi_db",
  connectionLimit: 10,
});

db.execute("select 'test'", (err, result) => {
  if (err) console.log(err.message);
  else console.log(result);
});

module.exports = db.promise();
