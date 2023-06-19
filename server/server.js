require("dotenv").config();

const express = require("express");
const menuRoutes = require("./routes/menu");

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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("**** Listening on Port 4000 ****");
});
