const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 5001;
require('dotenv').config()

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error: ", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js and MySQL!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
