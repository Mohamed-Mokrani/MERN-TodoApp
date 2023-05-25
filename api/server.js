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

// DELETE REQUEST
app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

// UPDATE REQUEST
app.put("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
});


// SERVER
app.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
