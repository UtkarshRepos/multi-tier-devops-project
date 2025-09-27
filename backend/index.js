const express = require("express");
const { Pool } = require("pg");  // PostgreSQL client
const cors = require("cors");

const app = express();  // initialize app FIRST
app.use(cors());         // then use middleware

const PORT = process.env.PORT || 5000;

// Setup PostgreSQL connection
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "secret",
  database: process.env.DB_NAME || "mydb",
  port: 5432,
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Backend API!");
});

// Database test route
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Database connection failed");
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
