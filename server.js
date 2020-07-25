const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
//database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/walmart-scraper",{useNewUrlParser: true}
    
 )

//Routes
// A GET route for scraping the website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("http://www.walmart.com/browse/toys/lego/4171_4186_1105635_2927326").then(function(response) {
  // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
  // Now, we grab every h2 within an article tag
    $(".prod-brandName product-brand product-brand-desktop-buy-box-update").each(function(i, element) {
      // Save an empty result object
      var result = {};
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  })