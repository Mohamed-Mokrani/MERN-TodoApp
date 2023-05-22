const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./connectDB/connectDB");

app.use(express.json());
app.use(cors());

require("dotenv").config();

connectDB();

const Todo = require("./model/todoSchema");

app.get("todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
