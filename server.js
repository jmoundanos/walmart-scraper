const express = require("express");
//const routes = require("./routes");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/walmart-scraper",{useNewUrlParser: true}
    
 )

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  })