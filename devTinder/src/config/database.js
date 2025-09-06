const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rishirajspace777:morphinecode@cluster0.ygvks3v.mongodb.net/dev_tinder"
  );
};

module.exports = connectDB;
