"use strict";
const mongoose = require("mongoose");
// require("dotenv").config();
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to port "+ process.env.PORT));
module.exports = mongoose;
