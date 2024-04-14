const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DB_URL;
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api", ()=>{
  return "hello"
});

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("DB Connected");
});
app.listen(port, () => {
  console.log(`Listening to Port : ${port}`);
});
