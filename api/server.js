const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./connectDB/connectDB");

app.use(express.json());
app.use(cors());

require("dotenv").config();

connectDB();

const Todo = require("./model/todoSchema");

// GET REQUEST
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST REQUEST
app.post("/todo/new", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  todo.save();
  res.json(todo);
});



app.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
