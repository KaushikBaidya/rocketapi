import express from "express";
import { createPool } from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const port = process.env.PORT;

const db = createPool({
  connectionLimit: 100,
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  port: DB_PORT,
});
const app = express();
app.listen(port, () => console.log(`Server Started on port ${port}...`));

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});
