const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

// Use CORS middleware
const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// MySQL connection setup
const pool = mysql.createPool({
  host: 'db', // This should be the service name for MySQL in your docker-compose.yml
  user: 'root',
  password: '1', // This should match the MYSQL_ROOT_PASSWORD
  database: 'node_app'
});

const promisePool = pool.promise();

app.get("/", (req, res) => {
  res.send("Hello from Node.js and MySQL!");
});

app.get('/users',  cors(corsOptions), async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Query error:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
