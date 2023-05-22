const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  time: {
    typre: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
