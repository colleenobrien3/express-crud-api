const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
const Beer = new Schema({
  name: String,
  style: String,
  abv: Number
});

const Brewery = new Schema({
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state: String,
  beers: [Beer]
});

module.exports = mongoose.model("Brewery", Brewery);
