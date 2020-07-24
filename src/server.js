// const express = require("express");
import express from "express";
import connectDB from "./config/db";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

// Connect Database
connectDB();

/**
 * Init Middleware
 * **/

// parse json request body
app.use(express.json({ extended: false }));
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// set security HTTP headers
app.use(helmet());
// enabling CORS for all requests
app.use(cors());
app.options("*", cors());
// adding morgan to log HTTP requests
app.use(morgan("dev"));

// Define Routes


// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

export const start = () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
