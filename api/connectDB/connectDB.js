const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URLDB);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
