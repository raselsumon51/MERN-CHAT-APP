const mongoose = require("mongoose");

require('dotenv').config();
//const dotenv = require("dotenv");

const mongoUri = process.env.mongodbUri;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://raselsumon51:enPAmPa3oRxTsOCW@cluster0.nngte0p.mongodb.net/chatApp456?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${Error.message}`);
    process.exit();
  }
};


module.exports = connectDB;
