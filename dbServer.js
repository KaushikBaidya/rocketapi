import express from "express";
const app = express();

import { createPool } from "mysql";

const db = createPool({
  connectionLimit: 100,
  host: "127.0.0.1", //This is your localhost IP
  user: "newuser", // "newuser" created in Step 1(e)
  password: "password1#", // password for the new user
  database: "userDB", // Database name
  port: "3306", // port name, "3306" by default
});

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});
