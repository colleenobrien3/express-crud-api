const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
const Beer = new Schema({
  name: String,
  style: String,
  abv: Number,
  ibu: Number,
  ounces: Number
});

const Brewery = new Schema({
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state: String,
  postal_code: String,
  longitude: String,
  latitude: String,
  phone: String,
  website_url: String,
  beers: [Beer]
});

module.exports = mongoose.model("Brewery", Brewery);
