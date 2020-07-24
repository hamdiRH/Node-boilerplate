const mongoose = require("mongoose");
const config = require("config");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const db = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("mongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
