//Connection file to mongo db
const mongoose = require("mongoose");
// const colors = require ('colors');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://projectbirchcs353:BirchProject22@clustercs353.yhkkm.mongodb.net/GameCards?retryWrites=true&w=majority",
      // change user database of Login Page
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    // conn.db("UserDatabase");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;