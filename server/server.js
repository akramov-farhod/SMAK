require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./routes/menuRoutes");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/menu", menuRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("**** Connected to DB **** Listening on PORT 4000 ****");
    });
  })
  .catch((error) => {
    console.log(error);
  });
