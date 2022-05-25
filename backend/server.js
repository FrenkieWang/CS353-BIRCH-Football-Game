//Import Framework
const express = require("express");
const app = express();
const cors = require("cors");

//Set two paths of .env
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config({ path: "./config.env" })

//Connect to Database
const connectDB = require("./config/db");
connectDB();

//Use Framework
app.use(express.json());
app.use(cors());

//Connect to the routes
app.use(require("./routes/record"));
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//Check whether connection has error 
const { notFound, errorHandler } = require("./middlewares/errorMiddleWares");
app.use(notFound);
app.use(errorHandler);

// get driver connection
const dbo = require("./db/conn"); 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});
