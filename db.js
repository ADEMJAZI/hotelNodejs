const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://ademjazi472:unqe923MkNaSj1Wt@cluster0.jvymk.mongodb.net/hotel-rooms';

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection failed:", err));

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('MongoDB connection failed');
});

connection.on('connected', () => {
  console.log('MongoDB connection successful');
});

module.exports = mongoose;
